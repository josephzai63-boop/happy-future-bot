import { Clock, Globe, Mail, Phone, Play } from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import videoAsset from "@/assets/excellent-future-promo.mp4.asset.json";
import posterAsset from "@/assets/excellent-future-promo-poster.jpg.asset.json";
import { CONTACT } from "@/lib/site-data";

const contactItems = [
  {
    icon: Phone,
    label: "Telephone",
    value: CONTACT.phoneDisplay,
    href: CONTACT.phoneHref,
  },
  {
    icon: Mail,
    label: "Email",
    value: CONTACT.emailInfo,
    href: `mailto:${CONTACT.emailInfo}`,
  },
  {
    icon: Globe,
    label: "Website",
    value: CONTACT.websiteDisplay,
    href: CONTACT.websiteUrl,
  },
  {
    icon: Clock,
    label: "Opening hours",
    value: "Available 24 hours, every day",
    href: undefined,
  },
];

export function PromoVideoSection() {
  const [started, setStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  function handlePlay() {
    setStarted(true);
    videoRef.current?.play().catch(() => {
      // Autoplay policies can occasionally refuse; native controls remain.
    });
  }

  return (
    <section id="promo-video" className="bg-muted/40 py-24">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-purple">Our story</span>
          <h2 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
            Discover Excellent Future Healthcare
          </h2>
          <p className="mt-4 text-muted-foreground">
            Watch our short film to see who we are, the care we provide and the teams we support — then get in touch with the details below.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:items-center">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-black shadow-[var(--shadow-card)]">
              <video
                ref={videoRef}
                controls
                preload="none"
                poster={posterAsset.url}
                playsInline
                className="aspect-video w-full"
              >
                <source src={videoAsset.url} type="video/mp4" />
                Your browser does not support embedded videos.
              </video>
              {!started && (
                <button
                  type="button"
                  onClick={handlePlay}
                  aria-label="Play the Excellent Future Healthcare promotional video"
                  className="group absolute inset-0 grid place-items-center bg-gradient-to-t from-primary/30 via-transparent to-transparent transition-colors hover:from-primary/40"
                >
                  <span className="grid h-20 w-20 place-items-center rounded-full bg-gold text-gold-foreground shadow-[var(--shadow-gold)] transition-transform duration-300 group-hover:scale-110 group-focus-visible:scale-110">
                    <Play className="ml-1 h-8 w-8" fill="currentColor" />
                  </span>
                </button>
              )}
            </div>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Video runs just under 70 seconds. Sound starts when you press play and can be adjusted with the volume control.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
              <h3 className="font-display text-xl text-primary">Get in touch today</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Whether you need care at home or staff for your service, our team is here to help — day or night.
              </p>
              <ul className="mt-6 space-y-4">
                {contactItems.map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-purple/10 text-purple">
                      <item.icon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="break-words text-sm font-medium text-foreground underline-offset-4 hover:text-primary hover:underline"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-sm font-medium text-foreground">{item.value}</div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="mt-8 w-full bg-primary text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary/90">
                <Link to="/contact">Send us a message</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
