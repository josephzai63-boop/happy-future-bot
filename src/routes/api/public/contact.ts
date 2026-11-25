import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { getOrCreateContactSubmission, shouldSendContactNotification } from "@/lib/contact-submission-idempotency";

const ALLOWED_ORIGINS = new Set([
  "https://excellentfutureltd.com",
  "https://www.excellentfutureltd.com",
  "https://happy-future-bot.lovable.app",
  "https://id-preview--28f451f3-49db-4e2f-ae65-2f299a17ccaa.lovable.app",
  "http://localhost:8080",
  "http://127.0.0.1:8080",
]);

const payloadSchema = z.object({
  requestId: z.string().uuid("Please retry your message"),
  name: z.string().trim().min(2, "Please enter your full name").max(120),
  email: z.string().trim().email("Please enter a valid email address").max(200),
  phone: z.string().trim().max(40).optional().default(""),
  subject: z.string().trim().min(2, "Please choose an enquiry type").max(120),
  message: z.string().trim().min(10, "Please tell us a little more").max(3000),
  // Honeypot: real visitors never fill this in; bots do.
  website: z.string().max(200).optional().default(""),
});

function corsHeaders(request: Request): Headers {
  const headers = new Headers({
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  });
  const origin = request.headers.get("origin");
  if (origin && ALLOWED_ORIGINS.has(origin)) {
    headers.set("Access-Control-Allow-Origin", origin);
  }
  return headers;
}

function jsonResponse(request: Request, body: object, status = 200): Response {
  return Response.json(body, { status, headers: corsHeaders(request) });
}

export const Route = createFileRoute("/api/public/contact")({
  server: {
    handlers: {
      OPTIONS: async ({ request }) => {
        const origin = request.headers.get("origin");
        if (origin && !ALLOWED_ORIGINS.has(origin)) {
          return Response.json({ ok: false, error: "This website is not allowed to send enquiries." }, { status: 403 });
        }
        return new Response(null, { status: 204, headers: corsHeaders(request) });
      },
      POST: async ({ request }) => {
        const origin = request.headers.get("origin");
        if (origin && !ALLOWED_ORIGINS.has(origin)) {
          return jsonResponse(request, { ok: false, error: "This website is not allowed to send enquiries." }, 403);
        }

        let raw: unknown;
        try {
          raw = await request.json();
        } catch {
          return jsonResponse(request, { ok: false, error: "Invalid request. Please try again." }, 400);
        }

        const parsed = payloadSchema.safeParse(raw);
        if (!parsed.success) {
          const fieldErrors: Record<string, string> = {};
          for (const issue of parsed.error.issues) {
            const key = String(issue.path[0] ?? "form");
            if (!fieldErrors[key]) fieldErrors[key] = issue.message;
          }
          return jsonResponse(request, { ok: false, error: "Please check the highlighted details and try again.", fieldErrors }, 400);
        }

        const { requestId, name, email, phone, subject, message, website } = parsed.data;

        // Honeypot filled in: almost certainly a bot. Pretend success, store nothing.
        if (website) {
          return jsonResponse(request, { ok: true });
        }

        try {
          const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
          const loadExisting = async () => {
            const { data, error } = await supabaseAdmin
              .from("contact_submissions")
              .select("id, name, email, phone, subject, message, notification_sent_at")
              .eq("request_id", requestId)
              .maybeSingle();
            if (error) throw error;
            return data;
          };

          const submission = await getOrCreateContactSubmission(loadExisting, async () => {
            const { data, error } = await supabaseAdmin
              .from("contact_submissions")
              .insert({
                request_id: requestId,
                name,
                email,
                phone: phone ? phone : null,
                subject,
                message,
              })
              .select("id, name, email, phone, subject, message, notification_sent_at")
              .single();
            if (error?.code === "23505") return null;
            if (error) throw error;
            return data;
          });

          if (!submission) {
            console.error("Contact submission could not be loaded after a duplicate request.");
            return jsonResponse(request, { ok: false, error: "We could not save your message just now. Please try again shortly." }, 500);
          }

          if (!shouldSendContactNotification(submission.notification_sent_at)) {
            return jsonResponse(request, { ok: true });
          }

          const lovableApiKey = process.env["LOVABLE_API_KEY"];
          const resendConnectionKey = process.env["RESEND_API_KEY"];
          if (!lovableApiKey || !resendConnectionKey) {
            console.error("Resend notification is not configured on the server.");
            return jsonResponse(
              request,
              { ok: false, saved: true, error: "Your enquiry was saved, but the email notification is temporarily unavailable. Please retry shortly." },
              503,
            );
          }

          const idempotencyKey = `contact-notification/${requestId}`;
          let providerResponse: Response;
          try {
            providerResponse = await fetch("https://connector-gateway.lovable.dev/resend/emails", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${lovableApiKey}`,
                "X-Connection-Api-Key": resendConnectionKey,
                "Idempotency-Key": idempotencyKey,
              },
              body: JSON.stringify({
                from: "Excellent Future Healthcare <info@excellentfutureltd.com>",
                to: ["info@excellentfutureltd.com"],
                reply_to: submission.email,
                subject: `New website enquiry: ${submission.subject.replace(/[\r\n]+/g, " ")}`,
                text: [
                  "A new enquiry was submitted through the Excellent Future Healthcare website.",
                  "",
                  `Name: ${submission.name}`,
                  `Email: ${submission.email}`,
                  `Telephone: ${submission.phone || "Not provided"}`,
                  `Enquiry type: ${submission.subject}`,
                  "",
                  "Message:",
                  submission.message,
                ].join("\n"),
              }),
            });
          } catch (err) {
            console.error("Resend request failed:", err instanceof Error ? err.message : String(err));
            return jsonResponse(
              request,
              { ok: false, saved: true, error: "Your enquiry was saved, but we could not send the email notification. Please retry shortly." },
              502,
            );
          }

          const providerBody = await providerResponse.text();
          if (!providerResponse.ok) {
            console.error(`Resend request failed [${providerResponse.status}]: ${providerBody}`);
            return jsonResponse(
              request,
              { ok: false, saved: true, error: "Your enquiry was saved, but we could not send the email notification. Please retry shortly." },
              502,
            );
          }

          let providerResult: { id?: unknown } | null = null;
          try {
            providerResult = JSON.parse(providerBody) as { id?: unknown };
          } catch {
            providerResult = null;
          }
          if (!providerResult || typeof providerResult.id !== "string") {
            console.error("Resend returned an unexpected success response.");
            return jsonResponse(
              request,
              { ok: false, saved: true, error: "Your enquiry was saved, but we could not confirm the email notification. Please retry shortly." },
              502,
            );
          }

          const { error: markSentError } = await supabaseAdmin
            .from("contact_submissions")
            .update({ notification_sent_at: new Date().toISOString() })
            .eq("id", submission.id)
            .is("notification_sent_at", null);
          if (markSentError) {
            console.error("Could not record contact notification status:", markSentError.message);
            return jsonResponse(
              request,
              { ok: false, saved: true, error: "Your enquiry was saved, but we could not confirm the email notification. Please retry shortly." },
              502,
            );
          }
          return jsonResponse(request, { ok: true });
        } catch (err) {
          console.error("Contact submission failed:", err instanceof Error ? err.message : String(err));
          return jsonResponse(request, { ok: false, error: "We could not save your message just now. Please try again shortly." }, 500);
        }
      },
    },
  },
});
