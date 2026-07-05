import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Nurse | CareNest" },
      {
        name: "description",
        content:
          "Book a certified home nurse across Delhi NCR — most requests staffed within 4 hours. Choose your care type and preferred schedule.",
      },
    ],
  }),
  component: BookPage,
});

const careTypes = [
  "Home Nursing",
  "ICU Nursing",
  "Elderly Care",
  "Post Surgery Care",
  "Injection & IV Care",
  "Wound Dressing",
  "Palliative Care",
  "Medical Attendant",
];

const durations = ["4 hours", "8 hours", "12 hours", "24 hours"];

function BookPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <SiteLayout>
      <section className="hero-gradient">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-16 lg:py-20 text-center">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Book Expert Care
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Book a nurse in minutes</h1>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
            Tell us who needs care. Our coordinator will call within 15 minutes to confirm your booking.
          </p>
        </div>
      </section>

      <section className="pb-24 -mt-6">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-3xl border border-outline-variant/40 p-6 md:p-10 shadow-sm">
            {submitted ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-secondary-container mx-auto flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-on-secondary-container text-3xl">
                    check_circle
                  </span>
                </div>
                <h2 className="font-display text-2xl font-bold mb-2">Request received</h2>
                <p className="text-on-surface-variant max-w-md mx-auto">
                  A care coordinator will call you within 15 minutes to confirm the nurse and schedule.
                </p>
              </div>
            ) : (
              <form action="https://api.web3forms.com/submit" method="POST"
               
                className="space-y-8"
              >
                  <input type="hidden" name="access_key" value="db5c276d-c548-4a9d-813b-903d104ab763"></input>
                <div>
                  <h2 className="font-display text-2xl font-bold mb-1">Patient details</h2>
                  <p className="text-on-surface-variant text-sm">
                    Everything you share stays private and is used only to arrange care.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field label="Patient name">
                    <input required className={inputCls} placeholder="Full name" name="name"  />
                  </Field>
                  <Field label="Age">
                    <input required type="number" min={0} className={inputCls} placeholder="e.g. 72" />
                  </Field>
                  <Field label="Contact number">
                    <input required type="tel" className={inputCls} placeholder="+91 XXXXX XXXXX" name="message" />
                  </Field>
                  <Field label="Email (optional)">
                    <input type="email" className={inputCls} placeholder="you@example.com" />
                  </Field>
                    <Field label="Care address" className="md:col-span-2">
                    <input required className={inputCls} placeholder="House, street, area, city" />
                  </Field>
                  <Field label="Type of care">
                    <select required className={inputCls} defaultValue="">
                      <option value="" disabled>Select service</option>
                      {careTypes.map((c) => <option key={c}>{c}</option>)}
                    </select>
                  </Field>
                  <Field label="Duration">
                    <select required className={inputCls} defaultValue="">
                      <option value="" disabled>Select duration</option>
                      {durations.map((d) => <option key={d}>{d}</option>)}
                    </select>
                  </Field>
                  <Field label="Preferred start date">
                    <input required type="date" className={inputCls} />
                  </Field>
                  <Field label="Preferred start time">
                    <input required type="time" className={inputCls} />
                  </Field>
                  <Field label="Medical notes (optional)" className="md:col-span-2">
                    <textarea rows={4} className={inputCls} placeholder="Diagnosis, mobility, medication schedule..." />
                  </Field>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-on-primary px-6 py-4 rounded-xl font-medium text-base shadow-lg shadow-primary/25 hover:opacity-90"
                >
                  Request a Nurse
                </button>
              </form>
            )}
          </div>

          <aside className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-outline-variant/40">
              <h3 className="font-display text-lg font-semibold mb-4">What to expect next</h3>
              <ol className="space-y-4 text-sm">
                {[
                  "We call to confirm the requirement and share pricing.",
                  "A matched nurse profile is sent to you for approval.",
                  "Nurse reports to your address at the scheduled time.",
                ].map((t, i) => (
                  <li key={t} className="flex gap-3">
                    <div className="shrink-0 w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center text-xs font-semibold">
                      {i + 1}
                    </div>
                    <span className="text-on-surface-variant">{t}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-primary text-on-primary p-6 rounded-2xl">
              <h3 className="font-display text-lg font-semibold mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined">emergency</span>
                Emergency Support
              </h3>
              <p className="opacity-90 text-sm mb-4">
                Need care within the hour? Call our 24×7 line and we'll dispatch the nearest available nurse.
              </p>
              <a href="tel:+919818744116" className="inline-flex items-center gap-2 bg-white text-primary px-4 py-2.5 rounded-xl font-medium text-sm">
                <span className="material-symbols-outlined text-[18px]">call</span>
                +91-9818744116
              </a>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-outline-variant/40">
              <h3 className="font-display text-lg font-semibold mb-4">Why Trust CareNest?</h3>
              <ul className="space-y-3 text-sm">
                {[
                  ["verified_user", "Verified, background-checked nurses"],
                  ["schedule", "Transparent hourly pricing"],
                  ["support_agent", "24×7 care coordination"],
                  ["health_and_safety", "Hospital-grade protocols"],
                ].map(([icon, text]) => (
                  <li key={text} className="flex items-center gap-3 text-on-surface-variant">
                    <span className="material-symbols-outlined text-primary text-[20px]">{icon}</span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}

const inputCls =
  "w-full px-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant text-sm focus:outline-none focus:border-primary focus:bg-white transition-colors";

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`flex flex-col gap-2 ${className}`}>
      <span className="text-sm font-medium text-on-surface">{label}</span>
      {children}
    </label>
  );
}
