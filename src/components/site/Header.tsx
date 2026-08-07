import { Link } from "@tanstack/react-router";
import { Mail, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/excellent-future-healthcare-logo.jpg.asset.json";
import { CONTACT } from "@/lib/site-data";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-xs">
          <span className="hidden sm:inline">Available {CONTACT.hours} / 24hrs</span>
          <span className="sm:hidden">Compassionate care across the UK</span>
          <div className="flex items-center gap-4">
            <a href={`mailto:${CONTACT.emailGeneral}`} className="hidden items-center gap-1.5 md:flex">
              <Mail className="h-3.5 w-3.5" /> {CONTACT.emailGeneral}
            </a>
            <a href={CONTACT.phoneHref} className="flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5" /> {CONTACT.phone}
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img src={logo.url} alt="Excellent Future Healthcare logo" className="h-12 w-12 shrink-0 object-contain" />
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="truncate font-display text-lg font-semibold tracking-tight text-primary">
              Excellent Future Limited
            </span>
            <span className="hidden text-xs text-muted-foreground sm:inline">
              Trading as Excellent Future Healthcare
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {n.label}
            </Link>
          ))}
          <Button asChild className="bg-gold text-gold-foreground hover:bg-gold/90">
            <a href="/#book">Book Appointment</a>
          </Button>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="text-sm font-medium">
                {n.label}
              </Link>
            ))}
            <Button asChild className="bg-gold text-gold-foreground hover:bg-gold/90">
              <a href="/#book" onClick={() => setOpen(false)}>Book Appointment</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
