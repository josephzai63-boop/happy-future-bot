import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const payloadSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(120),
  email: z.string().trim().email("Please enter a valid email address").max(200),
  phone: z.string().trim().max(40).optional().default(""),
  subject: z.string().trim().min(2, "Please choose an enquiry type").max(120),
  message: z.string().trim().min(10, "Please tell us a little more").max(3000),
  // Honeypot: real visitors never fill this in; bots do.
  website: z.string().max(200).optional().default(""),
});

export const Route = createFileRoute("/api/public/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let raw: unknown;
        try {
          raw = await request.json();
        } catch {
          return Response.json(
            { ok: false, error: "Invalid request. Please try again." },
            { status: 400 },
          );
        }

        const parsed = payloadSchema.safeParse(raw);
        if (!parsed.success) {
          const fieldErrors: Record<string, string> = {};
          for (const issue of parsed.error.issues) {
            const key = String(issue.path[0] ?? "form");
            if (!fieldErrors[key]) fieldErrors[key] = issue.message;
          }
          return Response.json(
            { ok: false, error: "Please check the highlighted details and try again.", fieldErrors },
            { status: 400 },
          );
        }

        const { name, email, phone, subject, message, website } = parsed.data;

        // Honeypot filled in: almost certainly a bot. Pretend success, store nothing.
        if (website) {
          return Response.json({ ok: true });
        }

        try {
          const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
          const { error } = await supabaseAdmin.from("contact_submissions").insert({
            name,
            email,
            phone: phone ? phone : null,
            subject,
            message,
          });
          if (error) {
            console.error("Contact submission insert failed:", error.message);
            return Response.json(
              { ok: false, error: "We could not save your message just now. Please try again shortly." },
              { status: 500 },
            );
          }
          return Response.json({ ok: true });
        } catch (err) {
          console.error("Contact submission failed:", err instanceof Error ? err.message : String(err));
          return Response.json(
            { ok: false, error: "We could not save your message just now. Please try again shortly." },
            { status: 500 },
          );
        }
      },
    },
  },
});
