import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
const aboutImg = "https://images.unsplash.com/photo-1595475207225-428b62bda831?auto=format&fit=crop&w=1200&q=85";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — Excellent Future Care" },
      { name: "description", content: "Meet the team behind Excellent Future Care — experienced professionals delivering compassionate, person-centred care across the UK." },
      { property: "og:title", content: "About Excellent Future Care" },
      { property: "og:description", content: "Experienced professionals delivering compassionate, person-centred care." },
      { property: "og:url", content: "https://excellentfutureltd.com/about" },
    ],
    links: [{ rel: "canonical", href: "https://excellentfutureltd.com/about" }],
  }),
});

function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <img src={aboutImg} alt="A carer sharing a warm moment with an older woman" width={1200} height={900} loading="lazy" className="rounded-2xl object-cover shadow-[var(--shadow-soft)]" />
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-purple">Our Story</span>
            <h1 className="mt-2 font-display text-4xl leading-tight md:text-5xl">Care built on lived experience</h1>
            <p className="mt-5 text-muted-foreground">
              Excellent Future Limited was founded on a simple belief. Everyone deserves to feel safe, respected and truly seen. Our leadership brings over a decade of frontline nursing experience, and every carer we hire is chosen for both skill and character.
            </p>
            <p className="mt-4 text-muted-foreground">
              We work closely with families, local authorities and healthcare providers to build care plans that support independence, dignity and wellbeing at every stage of life.
            </p>
            <Button asChild className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90"><Link to="/contact">Get in touch</Link></Button>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-3">
          {[
            { t: "Our Mission", d: "To enrich the lives of the people we support through kind, expert and person centred care." },
            { t: "Our Values", d: "Compassion, integrity and consistency. Showing up, listening carefully and doing what we say." },
            { t: "Our Promise", d: "Full visit durations, matched carers and clear communication with families at every step." },
          ].map((b) => (
            <div key={b.t} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <h3 className="font-display text-lg text-primary">{b.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
