import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2, HeartHandshake, Phone, Sparkles, Users } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { CONTACT, COMING_SOON_MESSAGE, getService, SERVICES } from "@/lib/site-data";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return service;
  },
  component: ServiceDetail,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="font-display text-3xl">Service not found</h1>
        <Button asChild className="mt-6">
          <Link to="/services">Back to services</Link>
        </Button>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center">
        <h1 className="font-display text-3xl">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <Button asChild className="mt-6"><Link to="/services">Back to services</Link></Button>
      </div>
    </div>
  ),
  head: ({ loaderData, params }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Service"} | Excellent Future Healthcare` },
      { name: "description", content: loaderData?.short ?? "Compassionate care from Excellent Future Healthcare." },
      { property: "og:title", content: `${loaderData?.title ?? "Service"} | Excellent Future Healthcare` },
      { property: "og:description", content: loaderData?.short ?? "" },
      { property: "og:image", content: loaderData?.image ?? "" },
      { name: "twitter:image", content: loaderData?.image ?? "" },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `https://excellentfutureltd.com/services/${params.slug}` },
    ],
    links: [{ rel: "canonical", href: `https://excellentfutureltd.com/services/${params.slug}` }],
  }),
});

function ServiceDetail() {
  const service = Route.useLoaderData();
  const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Large banner */}
        <section className="relative isolate overflow-hidden">
          <img
            src={service.image}
            alt={`${service.title} at Excellent Future Healthcare`}
            className="ef-kenburns absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
          <div className="relative mx-auto max-w-7xl px-4 py-28 text-primary-foreground md:py-36">
            <Link to="/services" className="ef-hero-text inline-flex items-center gap-2 text-sm text-primary-foreground/85 transition-colors hover:text-primary-foreground">
              <ArrowLeft className="h-4 w-4" /> All services
            </Link>
            <h1 className="ef-hero-text mt-4 font-display text-4xl leading-tight md:text-5xl" style={{ animationDelay: "120ms" }}>
              {service.title}
            </h1>
            {service.comingSoon && (
              <span className="ef-hero-text mt-4 inline-flex items-center gap-2 rounded-full bg-gold px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold-foreground" style={{ animationDelay: "200ms" }}>
                <Sparkles className="h-3.5 w-3.5" /> Coming Soon
              </span>
            )}
            <p className="ef-hero-text mt-5 max-w-2xl text-lg text-primary-foreground/90" style={{ animationDelay: "280ms" }}>
              {service.short}
            </p>
            <div className="ef-hero-text mt-8 flex flex-wrap gap-3" style={{ animationDelay: "380ms" }}>
              {!service.comingSoon && (
                <Button asChild size="lg" className="bg-gold text-gold-foreground shadow-[var(--shadow-gold)] transition-transform hover:-translate-y-0.5 hover:bg-gold/90">
                  <a href="/#book">Book Appointment</a>
                </Button>
              )}
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 bg-transparent text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary-foreground hover:text-primary">
                <a href={CONTACT.phoneHref}>
                  <Phone className="mr-2 h-4 w-4" /> Call {CONTACT.phone}
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20">
          <div className="grid gap-10 md:grid-cols-3">
            <div className="md:col-span-2">
              {service.comingSoon && (
                <Reveal className="mb-8 rounded-2xl border border-gold/40 bg-gold/10 p-6">
                  <div className="font-display text-lg text-primary">Coming Soon</div>
                  <p className="mt-2 text-sm text-muted-foreground">{COMING_SOON_MESSAGE}</p>
                  <Button asChild className="mt-5 bg-primary text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary/90">
                    <Link to="/contact">Register your interest</Link>
                  </Button>
                </Reveal>
              )}
              <Reveal>
                <h2 className="font-display text-2xl text-primary">About this service</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{service.description}</p>
              </Reveal>

              <Reveal delay={80} className="mt-10">
                <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-purple/10 text-purple">
                      <Users className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-xl text-primary">Who this service is for</h3>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {service.who.map((item: string) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={120} className="mt-6">
                <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-primary">
                      <HeartHandshake className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-xl text-primary">
                      {service.comingSoon ? "What will be covered" : "What we provide"}
                    </h3>
                  </div>
                  <ul className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                    {service.provide.map((item: string) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-purple" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={160} className="mt-6">
                <div className="rounded-2xl border border-border bg-muted/40 p-6">
                  <h3 className="font-display text-xl text-primary">Benefits</h3>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {service.benefits.map((item: string) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            <aside className="md:col-span-1">
              <Reveal delay={100} className="sticky top-28 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <h3 className="font-display text-lg text-primary">Talk to our team</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We are available 24 hours a day to answer questions and arrange support.
                </p>
                <div className="mt-5 flex flex-col gap-3">
                  <Button asChild className="bg-primary text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary/90">
                    <a href={CONTACT.phoneHref}>
                      <Phone className="mr-2 h-4 w-4" /> {CONTACT.phone}
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="border-primary/40 text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                    <Link to="/contact">Send an enquiry</Link>
                  </Button>
                </div>
              </Reveal>
            </aside>
          </div>
        </section>

        <section className="bg-muted/40 py-20">
          <div className="mx-auto max-w-7xl px-4">
            <Reveal>
              <h2 className="font-display text-2xl text-primary">Other services you may need</h2>
            </Reveal>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {others.map((s, i) => (
                <Reveal key={s.slug} delay={i * 110}>
                  <div className="ef-card group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={s.image}
                        alt={`${s.title} at Excellent Future Healthcare`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                      />
                      {s.comingSoon && (
                        <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold-foreground">
                          Coming Soon
                        </span>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-display text-lg text-primary">{s.title}</h3>
                      <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.short}</p>
                      <Link
                        to="/services/$slug"
                        params={{ slug: s.slug }}
                        className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary"
                      >
                        Read More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
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
