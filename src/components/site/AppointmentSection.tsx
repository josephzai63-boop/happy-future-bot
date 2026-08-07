import { CalendarCheck, CheckCircle2, Mail, Phone } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { CONTACT } from "@/lib/site-data";

// Demo "already booked" dates (managed by the office team)
const bookedDates = ["2026-07-28", "2026-08-04", "2026-08-11", "2026-08-19"];

function formatDate(date: Date) {
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function AppointmentSection() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    location: "",
    email: "",
    phone: "",
  });
  const [date, setDate] = useState<Date | undefined>();
  const [step, setStep] = useState<"details" | "calendar" | "done">("details");

  const disabled = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return [{ before: today }, ...bookedDates.map((d) => new Date(d))];
  }, []);

  const canContinue =
    form.name.trim() &&
    form.age.trim() &&
    form.location.trim() &&
    form.email.trim() &&
    form.phone.trim();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!date) return;
    const body = [
      "Hello, I would like to book an appointment.",
      "",
      `Name: ${form.name}`,
      `Age: ${form.age}`,
      `Location: ${form.location}`,
      `Telephone: ${form.phone}`,
      `Email: ${form.email}`,
      `Preferred Date: ${formatDate(date)}`,
      "",
      "Please confirm my appointment.",
    ].join("\n");
    const url = `mailto:${CONTACT.emailAppointments}?subject=${encodeURIComponent(
      `Appointment request for ${formatDate(date)}`,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
    setStep("done");
  }

  return (
    <section
      id="book"
      className="relative overflow-hidden py-20 text-primary-foreground"
      style={{ background: "var(--gradient-brand)" }}
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2 md:items-start">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-medium backdrop-blur">
            <CalendarCheck className="h-3.5 w-3.5" /> Book an Appointment
          </span>
          <h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl">
            Book a free care consultation
          </h2>
          <p className="mt-4 text-primary-foreground/85">
            Tell us about the support you need and pick a date that works for you. Our team will confirm your appointment within one working day.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              Prefer to speak to someone? Call us on{" "}
              <a href={CONTACT.phoneHref} className="font-semibold underline-offset-4 hover:underline">
                {CONTACT.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <CalendarCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              Unavailable dates are blocked so you never double book
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              Appointments team: {CONTACT.emailAppointments}
            </li>
          </ul>

          <div className="mt-8 rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 p-5 backdrop-blur">
            <p className="text-sm text-primary-foreground/90">
              Your booking details go straight to our appointments team, so we can respond quickly and personally.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-card p-6 text-foreground shadow-[var(--shadow-soft)] md:p-8"
        >
          {step === "details" && (
            <>
              <h3 className="font-display text-xl">Your details</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Step 1 of 2. All fields are required.
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium" htmlFor="bk-name">Full Name</label>
                  <Input
                    id="bk-name"
                    required
                    className="mt-1"
                    placeholder="Jane Smith"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium" htmlFor="bk-age">Age</label>
                  <Input
                    id="bk-age"
                    required
                    inputMode="numeric"
                    className="mt-1"
                    placeholder="72"
                    value={form.age}
                    onChange={(e) => setForm({ ...form, age: e.target.value })}
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="text-sm font-medium" htmlFor="bk-loc">Location</label>
                <Input
                  id="bk-loc"
                  required
                  className="mt-1"
                  placeholder="Town or city"
                  value={form.location}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
                />
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium" htmlFor="bk-email">Email Address</label>
                  <Input
                    id="bk-email"
                    required
                    type="email"
                    className="mt-1"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium" htmlFor="bk-phone">Telephone</label>
                  <Input
                    id="bk-phone"
                    required
                    className="mt-1"
                    placeholder="07..."
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
              </div>
              <Button
                type="button"
                size="lg"
                disabled={!canContinue}
                onClick={() => setStep("calendar")}
                className="mt-6 w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Continue to choose a date
              </Button>
            </>
          )}

          {step === "calendar" && (
            <>
              <h3 className="font-display text-xl">Choose your date</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Step 2 of 2. Greyed out dates are unavailable.
              </p>
              <div className="mt-5 flex justify-center">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={disabled}
                  className="rounded-md border"
                />
              </div>
              {date && (
                <p className="mt-4 rounded-lg bg-muted p-3 text-sm">
                  Selected: <strong>{formatDate(date)}</strong>
                </p>
              )}
              <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep("details")}
                  className="sm:w-1/3"
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  size="lg"
                  disabled={!date}
                  className="flex-1 bg-gold text-gold-foreground hover:bg-gold/90"
                >
                  Confirm Appointment Request
                </Button>
              </div>
            </>
          )}

          {step === "done" && (
            <div className="py-6 text-center">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary/10 text-primary">
                <CheckCircle2 className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-display text-xl">Request sent</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Thank you {form.name}. We have your request for{" "}
                <strong>{date ? formatDate(date) : ""}</strong> and will be in touch within one working day.
              </p>
              <Button asChild size="lg" className="mt-6 w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <a href={CONTACT.phoneHref}>
                  <Phone className="mr-2 h-4 w-4" /> Call {CONTACT.phone}
                </a>
              </Button>
              <button
                type="button"
                onClick={() => setStep("details")}
                className="mt-4 text-sm text-muted-foreground underline-offset-4 hover:underline"
              >
                Make another booking
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
