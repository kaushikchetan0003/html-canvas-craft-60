import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | CareNest Home Nursing" },
      {
        name: "description",
        content:
          "Answers to common questions about CareNest home nursing — coverage areas, qualifications, pricing, ambulance support and more.",
      },
    ],
  }),
  component: FaqPage,
});

const CATEGORIES = ["All", "Booking", "Nurses", "Pricing", "Services"] as const;

const FAQS: { q: string; a: string; cat: (typeof CATEGORIES)[number] }[] = [
  {
    cat: "Booking",
    q: "What areas do you serve in Delhi NCR?",
    a: "We currently serve Delhi, Gurugram, Noida, Ghaziabad and Faridabad, with same-day deployment in most postcodes.",
  },
  {
    cat: "Booking",
    q: "Can I book a nurse for just one day?",
    a: "Yes — we offer 4, 8, 12 and 24-hour shifts, as well as long-term bookings. There is no minimum contract.",
  },
  {
    cat: "Nurses",
    q: "What qualifications do your nurses have?",
    a: "Every nurse holds a GNM or B.Sc Nursing degree, has ICU or ward experience, and clears our background and skills verification before joining CareNest.",
  },
  {
    cat: "Pricing",
    q: "How is the billing cycle managed?",
    a: "Short bookings are billed on completion. For long-term care we bill weekly, with fully itemised invoices and no hidden fees.",
  },
  {
    cat: "Services",
    q: "Do you provide ambulance support?",
    a: "We coordinate ambulance transfers with vetted partners and can arrange a nurse to accompany the patient during transport.",
  },
  {
    cat: "Nurses",
    q: "Can I request a female nurse?",
    a: "Absolutely — you can specify gender, language and any preference during booking. We match nurses accordingly.",
  },
  {
    cat: "Pricing",
    q: "Do you accept insurance?",
    a: "We provide GST-compliant invoices accepted by major insurers for reimbursement. Direct cashless is available with select partners.",
  },
  {
    cat: "Services",
    q: "What if the assigned nurse is unavailable one day?",
    a: "Our care coordinator arranges a qualified replacement so your care schedule is never interrupted.",
  },
];

function FaqPage() {
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>("All");
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const filtered = useMemo(
    () => FAQS.filter((f) => cat === "All" || f.cat === cat),
    [cat],
  );

  return (
    <SiteLayout>
      <section className="hero-gradient">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-16 lg:py-24 text-center">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Frequently Asked Questions
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Common questions about home nursing
          </h1>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
            Everything you need to know before booking. Can't find your answer? Message us — we reply within an hour.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-4 gap-10">
          <aside>
            <p className="text-xs uppercase tracking-wide text-on-surface-variant mb-4">Categories</p>
            <div className="flex lg:flex-col gap-2 flex-wrap">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => { setCat(c); setOpenIdx(null); }}
                  className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    cat === c
                      ? "bg-primary text-on-primary"
                      : "bg-white border border-outline-variant/40 text-on-surface-variant hover:border-primary"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </aside>
          <div className="lg:col-span-3 space-y-3">
            {filtered.map((f, i) => {
              const open = openIdx === i;
              return (
                <div
                  key={f.q}
                  className="bg-white rounded-2xl border border-outline-variant/40 overflow-hidden"
                >
                  <button
                    className="w-full flex justify-between items-center gap-4 p-6 text-left"
                    onClick={() => setOpenIdx(open ? null : i)}
                    aria-expanded={open}
                  >
                    <span className="font-medium text-on-surface">{f.q}</span>
                    <span
                      className={`material-symbols-outlined text-primary transition-transform ${
                        open ? "rotate-180" : ""
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                  {open && (
                    <div className="px-6 pb-6 text-on-surface-variant">{f.a}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="rounded-3xl bg-primary text-on-primary p-10 md:p-14 text-center">
            <h2 className="font-display text-3xl font-bold mb-3">Didn't find your answer?</h2>
            <p className="opacity-90 mb-6 max-w-xl mx-auto">
              Our care coordinators are one call or message away, around the clock.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/contact" className="bg-white text-primary px-6 py-3 rounded-xl font-medium">
                Contact us
              </Link>
              <a href="tel:+919999999999" className="border-2 border-white/60 text-white px-6 py-3 rounded-xl font-medium hover:bg-white/10">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
