import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/site-data";

export const Route = createFileRoute("/services/")({
  component: ServicesIndex,
  head: () => ({
    meta: [
      { title: "Our Care Services | Excellent Future Healthcare" },
      { name: "description", content: "Domiciliary, dementia, live-in, companionship and domestic support care from Excellent Future Healthcare. Palliative and respite care coming soon." },
      { property: "og:title", content: "Our Care Services | Excellent Future Healthcare" },
      { property: "og:description", content: "Domiciliary, dementia, companionship and domestic support care. Based in Wales, expanding to serve communities across the UK soon." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://excellentfutureltd.com/services" },
    ],
    links: [{ rel: "canonical", href: "https://excellentfutureltd.com/services" }],
  }),
});

function ServicesIndex() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative overflow-hidden py-24 text-primary-foreground" style={{ background: "var(--gradient-brand)" }}>
          <div className="mx-auto max-w-7xl px-4">
            <span className="ef-hero-text inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em]">
              Our care services
            </span>
            <h1 className="ef-hero-text mt-4 font-display text-4xl leading-tight md:text-5xl" style={{ animationDelay: "120ms" }}>
              Care shaped around the person
            </h1>
            <p className="ef-hero-text mt-4 max-w-2xl text-primary-foreground/85" style={{ animationDelay: "240ms" }}>
              Every plan of care starts with a conversation. Choose a service to learn more about how we can help.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-24">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} as="article" delay={(i % 3) * 110} className="h-full">
                <div className="ef-card group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={s.image}
                      alt={`${s.title} at Excellent Future Healthcare`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/45 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    {s.comingSoon && (
                      <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold-foreground shadow-[var(--shadow-card)]">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="font-display text-xl text-primary">{s.title}</h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                    <Button asChild variant="outline" className="mt-6 w-fit border-primary text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                      <Link to="/services/$slug" params={{ slug: s.slug }}>
                        Read More <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 rounded-2xl border border-border bg-muted/40 p-10 text-center">
            <h2 className="font-display text-2xl text-primary">Not sure which service you need?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
              Book a free consultation and one of our care coordinators will help you shape the right plan.
            </p>
            <Button asChild size="lg" className="mt-6 bg-gold text-gold-foreground shadow-[var(--shadow-gold)] transition-transform hover:-translate-y-0.5 hover:bg-gold/90">
              <a href="/#book">Book Appointment</a>
            </Button>
          </Reveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
