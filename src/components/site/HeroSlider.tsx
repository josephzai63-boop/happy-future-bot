import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Phone } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/site-data";

type Slide = {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  desc: string;
};

const slides: Slide[] = [
  {
    image:
      "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1800&q=85",
    alt: "A professional carer smiling with an older woman in her living room",
    eyebrow: "Health and social care staffing",
    title: "Staff You Can Rely On, Care You Can Trust",
    desc: "We supply temporary and permanent health and social care staff for hospitals, care homes, schools, prisons and supported living.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1800&q=85",
    alt: "A care professional supporting an elderly client during a home visit",
    eyebrow: "Familiar faces, every visit",
    title: "Care From People Who Know You",
    desc: "Matched carers who build genuine, lasting trust in your own home.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=1800&q=85",
    alt: "A friendly caregiver assisting a client with daily activities at home",
    eyebrow: "Live-in and 24 hour support",
    title: "Support at Home, Day and Night",
    desc: "A dedicated carer in your home, available 24 hours a day.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1800&q=85",
    alt: "A diverse team of care professionals working together",
    eyebrow: "A team you can rely on",
    title: "Skilled, Kind and Fully Vetted",
    desc: "Every professional is trained, DBS checked and chosen with care.",
  },
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((n: number) => {
    setIndex((prev) => (n + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, [paused]);

  const slide = slides[index];

  return (
    <section
      className="relative isolate overflow-hidden bg-muted"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Excellent Future Limited care and staffing highlights"
    >
      {slides.map((s, i) => (
        <div
          key={s.title}
          className={`absolute inset-0 overflow-hidden transition-opacity duration-[1200ms] ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          <img
            src={s.image}
            alt={s.alt}
            className={`h-full w-full object-cover object-center ${i === index ? "ef-kenburns" : ""}`}
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "low"}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/45 to-transparent md:from-background/85 md:via-background/25" />
        </div>
      ))}

      <div className="relative mx-auto grid min-h-[560px] max-w-7xl items-center px-4 py-20 md:min-h-[680px] md:py-28">
        <div
          key={slide.title}
          className="max-w-2xl rounded-2xl bg-background/70 p-6 shadow-[var(--shadow-soft)] backdrop-blur-sm md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-0"
        >
          <span
            className="ef-hero-text inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary"
            style={{ animationDelay: "80ms" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            {slide.eyebrow}
          </span>
          <h1
            className="ef-hero-text mt-5 font-display text-4xl font-semibold leading-[1.08] text-primary md:text-6xl"
            style={{ animationDelay: "180ms" }}
          >
            {slide.title}
          </h1>
          <p
            className="ef-hero-text mt-5 max-w-xl text-lg leading-relaxed text-foreground/80 md:text-xl"
            style={{ animationDelay: "300ms" }}
          >
            {slide.desc}
          </p>
          <div
            className="ef-hero-text mt-8 flex flex-wrap gap-3"
            style={{ animationDelay: "420ms" }}
          >
            <Button
              asChild
              size="lg"
              className="bg-gold text-gold-foreground shadow-[var(--shadow-gold)] transition-transform hover:-translate-y-0.5 hover:bg-gold/90"
            >
              <a href="#book">Book an Appointment</a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary/90"
            >
              <Link to="/services">Explore Our Services</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary/40 bg-background/70 text-primary transition-transform hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
            >
              <a href={CONTACT.phoneHref}>
                <Phone className="mr-2 h-4 w-4" /> {CONTACT.phone}
              </a>
            </Button>
          </div>
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => go(index - 1)}
        className="absolute left-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-primary/20 bg-background/80 text-primary shadow-[var(--shadow-card)] transition hover:scale-105 hover:bg-background md:left-6"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => go(index + 1)}
        className="absolute right-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-primary/20 bg-background/80 text-primary shadow-[var(--shadow-card)] transition hover:scale-105 hover:bg-background md:right-6"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2 rounded-full bg-background/70 px-3 py-2 backdrop-blur">
        {slides.map((s, i) => (
          <button
            key={s.title}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            onClick={() => go(i)}
            className={`h-2.5 rounded-full transition-all duration-500 ${
              i === index ? "w-8 bg-gold" : "w-2.5 bg-primary/30 hover:bg-primary/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
