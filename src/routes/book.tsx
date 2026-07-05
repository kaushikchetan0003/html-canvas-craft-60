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
            <form
  action="https://api.web3forms.com/submit"
  method="POST"
  className="space-y-8"
>
  {/* Web3Forms Access Key */}
  <input
    type="hidden"
    name="access_key"
    value="2ccd2626-7d4f-4e08-a7e1-60eb11e7ed1d"
  />

  {/* Email Subject */}
  <input
    type="hidden"
    name="subject"
    value="New CareNest Nurse Booking Request"
  />

  {/* Redirect after submit (Optional) */}
  {/* <input
    type="hidden"
    name="redirect"
    value="https://yourwebsite.com/thank-you"
  /> */}

  <div>
    <h2 className="font-display text-2xl font-bold mb-1">
      Patient Details
    </h2>

    <p className="text-on-surface-variant text-sm">
      Everything you share stays private and is used only to arrange care.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

    {/* Patient Name */}
    <Field label="Patient name">
      <input
        required
        name="name"
        className={inputCls}
        placeholder="Full Name"
      />
    </Field>

    {/* Age */}
    <Field label="Age">
      <input
        required
        type="number"
        min="0"
        name="age"
        className={inputCls}
        placeholder="e.g. 72"
      />
    </Field>

    {/* Phone */}
    <Field label="Contact number">
      <input
        required
        type="tel"
        name="phone"
        className={inputCls}
        placeholder="+91 XXXXX XXXXX"
      />
    </Field>

    {/* Email */}
    <Field label="Email (Optional)">
      <input
        type="email"
        name="email"
        className={inputCls}
        placeholder="you@example.com"
      />
    </Field>

    {/* Address */}
    <Field label="Care Address" className="md:col-span-2">
      <input
        required
        name="address"
        className={inputCls}
        placeholder="House, Street, Area, City"
      />
    </Field>

    {/* Care Type */}
    <Field label="Type of Care">
      <select
        required
        name="care_type"
        className={inputCls}
        defaultValue=""
      >
        <option value="" disabled>
          Select Service
        </option>

        {careTypes.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </Field>

    {/* Duration */}
    <Field label="Duration">
      <select
        required
        name="duration"
        className={inputCls}
        defaultValue=""
      >
        <option value="" disabled>
          Select Duration
        </option>

        {durations.map((d) => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </select>
    </Field>

    {/* Start Date */}
    <Field label="Preferred Start Date">
      <input
        required
        type="date"
        name="start_date"
        className={inputCls}
      />
    </Field>

    {/* Start Time */}
    <Field label="Preferred Start Time">
      <input
        required
        type="time"
        name="start_time"
        className={inputCls}
      />
    </Field>

    {/* Medical Notes */}
    <Field
      label="Medical Notes (Optional)"
      className="md:col-span-2"
    >
      <textarea
        rows={5}
        name="medical_notes"
        className={inputCls}
        placeholder="Diagnosis, mobility, medication schedule..."
      />
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
