import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/excellent-future-logo-2026.jpg.asset.json";
import { CONTACT, SERVICES } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-muted/50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="Excellent Future Healthcare" className="h-12 w-12 object-contain" />
            <span className="font-display text-lg font-semibold text-primary">Excellent Future Limited</span>
          </div>
          <p className="mt-1 text-xs font-medium text-purple">Trading as Excellent Future Healthcare</p>
          <p className="mt-4 text-sm text-muted-foreground">
            Personalised home care delivered with warmth, dignity and clinical expertise across the UK.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="#" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold text-primary">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            <li><a href="/#book" className="hover:text-primary">Book Appointment</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold text-primary">Our Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="hover:text-primary">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold text-primary">Get in Touch</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-purple" />
              <a href={`mailto:${CONTACT.emailGeneral}`} className="hover:text-primary">{CONTACT.emailGeneral}</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-purple" />
              <a href={`mailto:${CONTACT.emailAppointments}`} className="hover:text-primary">{CONTACT.emailAppointments}</a>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 text-purple" />
              <a href={CONTACT.phoneHref} className="hover:text-primary">
                {CONTACT.phone}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-purple" /> {CONTACT.location}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-5 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Excellent Future Limited, trading as Excellent Future Healthcare. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
