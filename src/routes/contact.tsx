import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useRef, useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — Excellent Future Limited" },
      { name: "description", content: "Speak with the Excellent Future Limited team about home care. Call 07412754646, email us or send a message today." },
      { property: "og:title", content: "Contact Excellent Future Limited" },
      { property: "og:description", content: "Request a callback or send us a message. We are here to help." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://excellentfutureltd.com/contact" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact Excellent Future Limited" },
      { name: "twitter:description", content: "Request a callback or send us a message. We are here to help." },
    ],
    links: [{ rel: "canonical", href: "https://excellentfutureltd.com/contact" }],
  }),
});

const ENQUIRY_TYPES = [
  "General enquiry",
  "Care at home (Domiciliary Care)",
  "Staffing solutions for my organisation",
  "Careers and job applications",
  "Other",
];

type Status = "idle" | "submitting" | "success" | "error";

function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", subject: "", message: "", website: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const requestId = useRef<string | null>(null);

  function update(field: keyof typeof form, value: string) {
    if (status === "error") {
      requestId.current = null;
      setStatus("idle");
      setErrorMessage("");
    }
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    setErrorMessage("");
    requestId.current ??= crypto.randomUUID();

    const hostname = window.location.hostname;
    const isLovableOrLocalHost =
      hostname.endsWith(".lovable.app") || hostname === "localhost" || hostname === "127.0.0.1";
    const contactEndpoint = isLovableOrLocalHost
      ? `${window.location.origin}/api/public/contact`
      : "https://happy-future-bot.lovable.app/api/public/contact";

    try {
      const res = await fetch(contactEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          requestId: requestId.current,
          name: form.name,
          email: form.email,
          phone: form.phone,
          subject: form.subject,
          message: form.message,
          website: form.website,
        }),
      });
      const data = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;

      if (res.ok && data?.ok) {
        setStatus("success");
      } else {
        setErrorMessage(
          data?.error ||
            "Something went wrong and your message was not sent. Please check your details and try again.",
        );
        setStatus("error");
      }
    } catch {
      setErrorMessage(
        "We could not reach the server. Please check your connection and try again.",
      );
      setStatus("error");
    }
  }

  function resetForm() {
    setForm({ name: "", phone: "", email: "", subject: "", message: "", website: "" });
    requestId.current = null;
    setStatus("idle");
    setErrorMessage("");
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-purple">Get in touch</span>
          <h1 className="mt-2 font-display text-4xl leading-tight md:text-5xl">We would love to hear from you</h1>
          <p className="mt-4 text-muted-foreground">
            Tell us about the support you are looking for and our team will get back to you as soon as possible.
          </p>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-5">
          <div className="space-y-4 md:col-span-2">
            <div className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm font-semibold">General Enquiries</div>
                  <a href={`mailto:${CONTACT.emailInfo}`} className="text-sm text-muted-foreground hover:text-primary">
                    {CONTACT.emailInfo}
                  </a>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-purple/10 text-purple">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm font-semibold">Appointments</div>
                  <a href={`mailto:${CONTACT.emailAppointments}`} className="text-sm text-muted-foreground hover:text-primary">
                    {CONTACT.emailAppointments}
                  </a>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gold/20 text-gold-foreground">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm font-semibold">Telephone</div>
                  <a href={CONTACT.phoneHref} className="text-sm text-muted-foreground hover:text-primary">
                    {CONTACT.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm font-semibold">Location</div>
                  <div className="text-sm text-muted-foreground">{CONTACT.location}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            {status === "success" ? (
              <div className="rounded-2xl border border-border bg-card p-10 text-center shadow-[var(--shadow-card)]">
                <h2 className="font-display text-2xl text-primary">Message sent</h2>
                <p className="mt-3 text-muted-foreground">
                  Thank you for contacting Excellent Future Healthcare. Your enquiry has been submitted successfully.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Our team will get back to you as soon as possible.
                </p>
                <Button onClick={resetForm} variant="outline" className="mt-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Send another message
                </Button>
              </div>
            ) : (
              <form
                className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
                onSubmit={handleSubmit}
              >
                {status === "error" && errorMessage && (
                  <div role="alert" className="mb-5 rounded-lg border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive">
                    {errorMessage}
                  </div>
                )}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium" htmlFor="ct-name">Full name</label>
                    <Input
                      id="ct-name"
                      name="name"
                      required
                      autoComplete="name"
                      className="mt-1"
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium" htmlFor="ct-phone">
                      Telephone <span className="font-normal text-muted-foreground">(optional)</span>
                    </label>
                    <Input
                      id="ct-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className="mt-1"
                      placeholder="07..."
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="text-sm font-medium" htmlFor="ct-email">Email address</label>
                  <Input
                    id="ct-email"
                    name="email"
                    required
                    type="email"
                    autoComplete="email"
                    className="mt-1"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                  />
                </div>
                <div className="mt-4">
                  <label className="text-sm font-medium" htmlFor="ct-subject">Enquiry type</label>
                  <select
                    id="ct-subject"
                    name="subject"
                    required
                    className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm outline-none transition-colors focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40"
                    value={form.subject}
                    onChange={(e) => update("subject", e.target.value)}
                  >
                    <option value="" disabled>
                      What is your enquiry about?
                    </option>
                    {ENQUIRY_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mt-4">
                  <label className="text-sm font-medium" htmlFor="ct-message">Message</label>
                  <Textarea
                    id="ct-message"
                    name="message"
                    required
                    rows={5}
                    className="mt-1"
                    placeholder="Tell us a bit about the care you are looking for"
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                  />
                </div>
                {/* Honeypot field — hidden from people, catches spam bots. */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="ct-website">Website</label>
                  <input
                    id="ct-website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website}
                    onChange={(e) => update("website", e.target.value)}
                  />
                </div>
                <Button type="submit" size="lg" disabled={status === "submitting"} className="mt-6 w-full bg-gold text-gold-foreground hover:bg-gold/90 disabled:cursor-not-allowed disabled:opacity-70">
                  <Send className="mr-2 h-4 w-4" />
                  {status === "submitting" ? "Sending your message…" : "Send Message"}
                </Button>
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  Prefer to talk? Call us on{" "}
                  <a href={CONTACT.phoneHref} className="font-medium text-primary hover:underline">{CONTACT.phoneDisplay}</a>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
