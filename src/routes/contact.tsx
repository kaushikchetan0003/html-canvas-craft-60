import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact CareNest | Home Nursing Services" },
      {
        name: "description",
        content:
          "Reach the CareNest care team — phone, WhatsApp, email and our Delhi NCR headquarters. Available 24×7 for urgent requests.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <section className="hero-gradient">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-16 lg:py-24 text-center">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            We're here 24×7
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Get in touch with our medical team
          </h1>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
            Whether you have a clinical question or need a nurse today — a real human will reply within minutes.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-bold mb-2">Contact Information</h2>
            {[
              { icon: "call", title: "Care Hotline", value: "+91 99999 99999", href: "tel:+919999999999" },
              { icon: "chat", title: "WhatsApp", value: "+91 99999 99999", href: "https://wa.me/919999999999" },
              { icon: "mail", title: "Email", value: "care@carenest.in", href: "mailto:care@carenest.in" },
              { icon: "schedule", title: "Availability", value: "24 hours × 7 days" },
            ].map((c) => (
              <a
                key={c.title}
                href={c.href ?? "#"}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-outline-variant/40 hover:border-primary transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">{c.icon}</span>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-on-surface-variant mb-1">{c.title}</p>
                  <p className="font-medium text-on-surface">{c.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="lg:col-span-2 bg-white p-6 md:p-10 rounded-3xl border border-outline-variant/40">
            <h2 className="font-display text-2xl font-bold mb-1">Send us a message</h2>
            <p className="text-on-surface-variant text-sm mb-6">
              We reply to every message within one working hour.
            </p>
            {sent ? (
              <div className="text-center py-14">
                <div className="w-16 h-16 rounded-full bg-secondary-container mx-auto flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-on-secondary-container text-3xl">check</span>
                </div>
                <p className="text-on-surface font-medium">Thank you — we'll be in touch shortly.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
              >
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium">Full name</span>
                  <input required className={inputCls} placeholder="Your name" />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium">Phone</span>
                  <input required type="tel" className={inputCls} placeholder="+91 XXXXX XXXXX" />
                </label>
                <label className="flex flex-col gap-2 md:col-span-2">
                  <span className="text-sm font-medium">Email</span>
                  <input required type="email" className={inputCls} placeholder="you@example.com" />
                </label>
                <label className="flex flex-col gap-2 md:col-span-2">
                  <span className="text-sm font-medium">How can we help?</span>
                  <textarea required rows={5} className={inputCls} placeholder="Tell us about the patient and the care needed..." />
                </label>
                <button
                  type="submit"
                  className="md:col-span-2 bg-primary text-on-primary py-4 rounded-xl font-medium shadow-lg shadow-primary/25"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="rounded-3xl overflow-hidden bg-white border border-outline-variant/40 grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-10">
              <h2 className="font-display text-2xl font-bold mb-4">Our Headquarters</h2>
              <p className="text-on-surface-variant mb-6">
                CareNest Nursing Services<br />
                14 Health Boulevard, Sector 44<br />
                Gurugram, Delhi NCR 122003
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-primary font-medium"
              >
                Open in Google Maps
                <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
              </a>
            </div>
            <div className="min-h-[280px] bg-surface-container-high flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-6xl">location_on</span>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

const inputCls =
  "w-full px-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant text-sm focus:outline-none focus:border-primary focus:bg-white transition-colors";
