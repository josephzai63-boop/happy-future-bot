import { Link } from "@tanstack/react-router";
import { Check, ChevronLeft, ChevronRight, Phone } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/site-data";
import hero1 from "@/assets/hero-1.jpg.asset.json";
import hero2 from "@/assets/hero-2.jpg.asset.json";
import hero3 from "@/assets/hero-3.jpg.asset.json";
import hero4 from "@/assets/hero-4.jpg.asset.json";
import hero5 from "@/assets/hero-5.jpg.asset.json";

type Slide = {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  desc: string;
  bullets?: string[];
};

const slides: Slide[] = [
  {
    image: hero1.url,
    alt: "A diverse team of nurses and healthcare assistants on a UK hospital ward",
    eyebrow: "Health and social care staffing",
    title: "We supply temporary and permanent health and social care staff for:",
    desc: "Fully vetted, DBS checked professionals, available 24 hours a day.",
    bullets: [
      "Hospitals",
      "Care Homes",
      "Schools",
      "Prisons",
      "Supported Living",
    ],
  },
  {
    image: hero2.url,
    alt: "An African home carer laughing with an elderly woman over tea in her living room",
    eyebrow: "Familiar faces, every visit",
    title: "Care From People Who Know You",
    desc: "Matched carers who build genuine, lasting trust in your own home.",
  },
  {
    image: hero3.url,
    alt: "A male carer helping an elderly Black man walk safely at home",
    eyebrow: "Personal care with dignity",
    title: "Respectful Support, Every Single Day",
    desc: "Discreet help with washing, dressing and daily routines, at the pace that suits you.",
  },
  {
    image: hero4.url,
    alt: "A South Asian support worker holding hands with an elderly Caribbean woman in supported living",
    eyebrow: "Companionship and community care",
    title: "Nobody Should Face the Day Alone",
    desc: "Conversation, outings and reassurance from carers who genuinely care.",
  },
  {
    image: hero5.url,
    alt: "A care home support worker serving tea to a group of diverse elderly residents",
    eyebrow: "Based in Wales",
    title: "Skilled, Kind and Fully Vetted",
    desc: "Based in Wales, expanding to serve communities across the UK soon.",
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
    }, 6500);
    return () => window.clearInterval(id);
  }, [paused]);

  const slide = slides[index] ?? slides[0]!;

  return (
    <section
      className="relative isolate w-full overflow-hidden bg-primary"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Excellent Future Limited care and staffing highlights"
    >
      {slides.map((s, i) => (
        <div
          key={s.title}
          className={`absolute inset-0 overflow-hidden transition-opacity duration-[1400ms] ease-in-out ${
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
          {/* Subtle readability overlay only — the photograph stays visible */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/75 via-primary/40 to-transparent md:from-primary/70 md:via-primary/25 md:to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary/45 to-transparent" />
        </div>
      ))}

      <div className="relative mx-auto grid min-h-[600px] max-w-7xl items-center px-4 py-20 md:min-h-[700px] md:py-28">
        <div key={slide.title} className="max-w-2xl">
          <span
            className="ef-hero-text inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground backdrop-blur-sm"
            style={{ animationDelay: "80ms" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            {slide.eyebrow}
          </span>
          <h1
            className="ef-hero-text mt-5 max-w-xl font-display text-3xl font-semibold leading-[1.12] text-primary-foreground drop-shadow-[0_2px_18px_rgba(0,0,0,0.35)] md:text-5xl"
            style={{ animationDelay: "180ms" }}
          >
            {slide.title}
          </h1>

          {slide.bullets && (
            <ul
              className="ef-hero-text mt-6 flex flex-wrap gap-2.5"
              style={{ animationDelay: "260ms" }}
            >
              {slide.bullets.map((b) => (
                <li
                  key={b}
                  className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/12 px-3.5 py-1.5 text-sm font-medium text-primary-foreground backdrop-blur-sm"
                >
                  <Check className="h-3.5 w-3.5 text-gold" />
                  {b}
                </li>
              ))}
            </ul>
          )}

          <p
            className="ef-hero-text mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/90 drop-shadow-[0_1px_10px_rgba(0,0,0,0.35)] md:text-lg"
            style={{ animationDelay: "340ms" }}
          >
            {slide.desc}
          </p>
          <div
            className="ef-hero-text mt-8 flex flex-wrap gap-3"
            style={{ animationDelay: "440ms" }}
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
              variant="outline"
              className="border-primary-foreground/40 bg-primary-foreground/10 text-primary-foreground backdrop-blur-sm transition-transform hover:-translate-y-0.5 hover:bg-primary-foreground hover:text-primary"
            >
              <Link to="/services">Explore Our Services</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/40 bg-transparent text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary-foreground hover:text-primary"
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
        className="absolute left-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-primary-foreground/30 bg-primary-foreground/15 text-primary-foreground backdrop-blur transition hover:scale-105 hover:bg-primary-foreground hover:text-primary md:left-6"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => go(index + 1)}
        className="absolute right-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-primary-foreground/30 bg-primary-foreground/15 text-primary-foreground backdrop-blur transition hover:scale-105 hover:bg-primary-foreground hover:text-primary md:right-6"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2 rounded-full bg-primary/40 px-3 py-2 backdrop-blur">
        {slides.map((s, i) => (
          <button
            key={s.title}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            onClick={() => go(i)}
            className={`h-2.5 rounded-full transition-all duration-500 ${
              i === index ? "w-8 bg-gold" : "w-2.5 bg-primary-foreground/45 hover:bg-primary-foreground/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
