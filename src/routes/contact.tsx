import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
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
      { property: "og:url", content: "https://excellentfutureltd.com/contact" },
    ],
    links: [{ rel: "canonical", href: "https://excellentfutureltd.com/contact" }],
  }),
});

function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const body = [
      "Hello, I would like to get in touch.",
      "",
      `Name: ${form.name}`,
      `Telephone: ${form.phone}`,
      `Email: ${form.email}`,
      "",
      `Message: ${form.message}`,
    ].join("\n");
    const url = `mailto:${CONTACT.emailGeneral}?subject=${encodeURIComponent(
      `Website enquiry from ${form.name}`,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
    setSent(true);
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
                  <a href={`mailto:${CONTACT.emailGeneral}`} className="text-sm text-muted-foreground hover:text-primary">
                    {CONTACT.emailGeneral}
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
                    {CONTACT.phone}
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

          <form
            className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] md:col-span-3"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium">Full name</label>
                <Input required className="mt-1" placeholder="Jane Smith" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              </div>
              <div>
                <label className="text-sm font-medium">Telephone</label>
                <Input required className="mt-1" placeholder="07..." value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm font-medium">Email</label>
              <Input required type="email" className="mt-1" placeholder="you@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <div className="mt-4">
              <label className="text-sm font-medium">How can we help?</label>
              <Textarea required rows={5} className="mt-1" placeholder="Tell us a bit about the care you are looking for" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            </div>
            <Button type="submit" size="lg" className="mt-6 w-full bg-gold text-gold-foreground hover:bg-gold/90">
              <Send className="mr-2 h-4 w-4" />
              {sent ? "Thank you, your message is on its way" : "Send Message"}
            </Button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Prefer to talk? Call us on{" "}
              <a href={CONTACT.phoneHref} className="font-medium text-primary hover:underline">{CONTACT.phone}</a>
            </p>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}
