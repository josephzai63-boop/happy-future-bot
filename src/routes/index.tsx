import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Clock,
  HeartHandshake,
  Phone,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { HeroSlider } from "@/components/site/HeroSlider";
import { AppointmentSection } from "@/components/site/AppointmentSection";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { SERVICES, SECTORS, CONTACT, SUB_SERVICES, COVERAGE_STATEMENT } from "@/lib/site-data";

const aboutImg =
  "/__l5e/assets-v1/1a8b5e92-5344-43e0-8654-45afbc1e81ca/hero-4.jpg";
const staffingImg =
  "/__l5e/assets-v1/88c5b66c-daef-420c-a3cc-6c3ade01957d/hero-5.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Excellent Future Healthcare | Care & Staffing Services UK" },
      { name: "description", content: "Excellent Future Limited, trading as Excellent Future Healthcare, supplies temporary and permanent health and social care staff and delivers domiciliary, dementia and live-in care. Call 07412754646." },
      { property: "og:title", content: "Excellent Future Healthcare | Care & Staffing Services UK" },
      { property: "og:description", content: "Compassionate care at home and reliable health and social care staffing. Based in Wales, expanding to serve communities across the UK soon. Available 24 hours." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://excellentfutureltd.com/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Excellent Future Healthcare | Care & Staffing Services UK" },
      { name: "twitter:description", content: "Compassionate care at home and reliable health and social care staffing. Based in Wales, expanding to serve communities across the UK soon." },
      { name: "robots", content: "index, follow, max-image-preview:large" },
    ],
    links: [{ rel: "canonical", href: "https://excellentfutureltd.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
});

const trustStats = [
  { value: "24hrs", label: "Availability, every day of the year" },
  { value: "10+", label: "Years of combined nursing experience" },
  { value: "100%", label: "DBS checked and referenced staff" },
  { value: "Wales", label: "Based in Wales, expanding across the UK soon" },
];

const reasons = [
  { icon: BadgeCheck, title: "Fully Vetted Team", desc: "Every carer is trained, DBS checked and matched to your needs." },
  { icon: Clock, title: "Full Visit Durations", desc: "Never rushed. Every visit is the time your loved one deserves." },
  { icon: ShieldCheck, title: "Consistent Staffing", desc: "The same familiar faces, building real trust over time." },
  { icon: HeartHandshake, title: "Person Centred", desc: "Care plans shaped around routines, preferences and culture." },
];

const steps: { title: string; desc: string }[] = [
  {
    title: "Tell us what you need",
    desc: "Call us or send a short enquiry. We listen to your situation, answer your questions and explain the options clearly.",
  },
  {
    title: "Free home assessment",
    desc: "We visit at a time that suits you, meet the person receiving care and agree a plan built around their routine and preferences.",
  },
  {
    title: "Care begins",
    desc: "Your matched carer starts on the agreed date. We stay in touch, review regularly and adjust the plan whenever needs change.",
  },
];

const faqs: { q: string; a: string }[] = [
  {
    q: "What areas do you cover?",
    a: "Based in Wales, expanding to serve communities across the UK soon. Call us and we will confirm availability in your area straight away.",
  },
  {
    q: "How quickly can care start?",
    a: "Once we have completed the assessment and agreed a care plan, support can usually begin within a few days. Urgent requests are handled as a priority.",
  },
  {
    q: "Are your carers trained and checked?",
    a: "Yes. Every carer is fully trained, reference checked and DBS checked before they work with any client, with ongoing supervision and refresher training.",
  },
  {
    q: "Can you cover shifts at short notice?",
    a: "Our team is contactable 24 hours a day and we maintain a pool of experienced staff so hospitals, care homes and supported living services can be covered quickly.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSlider />

        {/* Trust indicators */}
        <section className="border-b border-border bg-primary text-primary-foreground">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-10 md:grid-cols-4">
            {trustStats.map((s, i) => (
              <Reveal key={s.value + s.label} delay={i * 90} className="text-center md:text-left">
                <div className="font-display text-3xl font-semibold text-gold md:text-4xl">{s.value}</div>
                <div className="mt-1 text-sm text-primary-foreground/80">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Intro */}
        <section className="mx-auto grid max-w-7xl gap-12 px-4 py-24 md:grid-cols-2 md:items-center">
          <Reveal className="relative">
            <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-soft)]">
              <img
                src={aboutImg}
                alt="A diverse team of care professionals supporting a client at home"
                width={1400}
                height={1000}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-card p-5 shadow-[var(--shadow-card)] md:block">
              <div className="font-display text-3xl font-semibold text-primary">24hrs</div>
              <div className="text-sm text-muted-foreground">Support and staffing cover</div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-purple">Welcome</span>
            <h2 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
              Personalised care, driven by professional excellence
            </h2>
            <p className="mt-5 text-muted-foreground">
              At Excellent Future Limited our mission is simple. We enrich the lives of the people we support through kind, expert and person centred care, and we help healthcare organisations deliver that same standard with dependable staffing.
            </p>
            <p className="mt-4 text-muted-foreground">
              From bathing and dressing to medication management, companionship, meal preparation and errands, we tailor every visit to the person, not the task list.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="bg-primary text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary/90">
                <Link to="/about">Learn more about us</Link>
              </Button>
              <Button asChild variant="outline" className="border-primary/40 text-primary transition-transform hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground">
                <a href={CONTACT.phoneHref}>
                  <Phone className="mr-2 h-4 w-4" /> {CONTACT.phone}
                </a>
              </Button>
            </div>
          </Reveal>
        </section>

        {/* Services */}
        <section className="bg-muted/40 py-24">
          <div className="mx-auto max-w-7xl px-4">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-purple">Our Services</span>
              <h2 className="mt-3 font-display text-3xl leading-tight md:text-4xl">Care shaped around the person</h2>
              <p className="mt-4 text-muted-foreground">
                Reliable, regulated care delivered with warmth across every service we offer. {COVERAGE_STATEMENT}
              </p>
            </Reveal>
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                      <h3 className="font-display text-xl text-primary">{s.title}</h3>
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

            {/* Sub-services of Domiciliary Care */}
            <Reveal className="mt-14 rounded-2xl border border-gold/35 bg-gold/8 p-8">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-display text-xl text-primary">Included within Domiciliary Care</h3>
                <span className="rounded-full bg-gold px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold-foreground">
                  Coming Soon
                </span>
              </div>
              <p className="mt-3 max-w-3xl text-sm text-muted-foreground">
                Registration for our Domiciliary Care service is currently in progress. The support below sits within
                Domiciliary Care and will become available when the service launches.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                {SUB_SERVICES.map((sub, i) => (
                  <Reveal key={sub.slug} delay={i * 70}>
                    <Link
                      to="/services/$slug"
                      params={{ slug: sub.slug }}
                      className="ef-card block h-full rounded-xl border border-border bg-card p-4 shadow-[var(--shadow-card)]"
                    >
                      <span className="font-display text-base text-primary">{sub.title}</span>
                      <span className="mt-1 block text-xs text-muted-foreground">Available at launch</span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Staffing / employers */}
        <section className="mx-auto max-w-7xl px-4 py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-purple">For employers</span>
              <h2 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
                Health and social care staffing, whenever you need it
              </h2>
              <p className="mt-5 text-muted-foreground">
                We supply temporary and permanent health and social care staff for hospitals, care homes, schools, prisons and supported living. Every professional is interviewed, referenced and DBS checked before placement, so your service never compromises on quality.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {SECTORS.map((sector, i) => (
                  <Reveal key={sector.title} delay={i * 70} className="rounded-xl border border-border bg-card p-4 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-gold" />
                      <h3 className="font-display text-base text-primary">{sector.title}</h3>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{sector.desc}</p>
                  </Reveal>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-primary text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary/90">
                  <Link to="/contact">Request staff</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary/40 text-primary transition-transform hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground">
                  <Link to="/contact">
                    <Users className="mr-2 h-4 w-4" /> Join our team
                  </Link>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={140} className="order-first lg:order-last">
              <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-soft)]">
                <img
                  src={staffingImg}
                  alt="A diverse team of healthcare professionals collaborating"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-105"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Why us */}
        <section className="bg-muted/40 py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2 md:items-center">
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-purple">Why families choose us</span>
              <h2 className="mt-3 font-display text-3xl leading-tight md:text-4xl">Trusted where it matters most</h2>
              <p className="mt-4 text-muted-foreground">
                Our team is chosen for skill and heart in equal measure. The kind of people you would want caring for your own family.
              </p>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {reasons.map((r, i) => (
                <Reveal key={r.title} delay={i * 90}>
                  <div className="ef-card h-full rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-purple/10 text-purple">
                      <r.icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-display text-lg text-primary">{r.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA band */}
        <section className="relative overflow-hidden py-20 text-primary-foreground" style={{ background: "var(--gradient-brand)" }}>
          <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-[1.4fr_auto] md:items-center">
            <Reveal>
              <h2 className="font-display text-3xl leading-tight md:text-4xl">
                Speak to our team, 24 hours a day
              </h2>
              <p className="mt-3 max-w-2xl text-primary-foreground/85">
                Whether you need care at home or staff for your service, we are ready to help right now.
              </p>
            </Reveal>
            <Reveal delay={120} className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-gold text-gold-foreground shadow-[var(--shadow-gold)] transition-transform hover:-translate-y-0.5 hover:bg-gold/90">
                <a href={CONTACT.phoneHref}>
                  <Phone className="mr-2 h-4 w-4" /> {CONTACT.phone}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/50 bg-transparent text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary-foreground hover:text-primary">
                <a href="#book">Book an Appointment</a>
              </Button>
            </Reveal>
          </div>
        </section>

        {/* How it works */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-purple">Getting started</span>
              <h2 className="mt-3 font-display text-3xl leading-tight md:text-4xl">Three simple steps to care at home</h2>
              <p className="mt-4 text-muted-foreground">
                Arranging support should feel straightforward. Here is exactly what happens when you get in touch with our team.
              </p>
            </Reveal>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {steps.map((s, i) => (
                <Reveal key={s.title} delay={i * 120}>
                  <div className="ef-card h-full rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-primary text-lg font-semibold text-primary-foreground">
                      {i + 1}
                    </span>
                    <h3 className="mt-5 font-display text-xl text-primary">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Booking */}
        <AppointmentSection />

        {/* FAQ */}
        <section className="mx-auto max-w-7xl px-4 py-24">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-purple">Common questions</span>
              <h2 className="mt-3 font-display text-3xl leading-tight md:text-4xl">Answers before you decide</h2>
              <p className="mt-4 text-muted-foreground">
                Still unsure about something? Call us on {CONTACT.phone} or email {CONTACT.emailGeneral} and we will talk it through with you.
              </p>
              <Button asChild className="mt-6 bg-primary text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary/90">
                <Link to="/contact">Contact our team</Link>
              </Button>
            </Reveal>
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <Reveal key={f.q} delay={i * 80}>
                  <div className="ef-card rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                    <h3 className="font-display text-lg text-primary">{f.q}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
