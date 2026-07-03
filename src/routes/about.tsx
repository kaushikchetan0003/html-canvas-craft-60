import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About CareNest | Home Nursing Services in Delhi NCR" },
      {
        name: "description",
        content:
          "CareNest brings a decade of hospital-grade nursing to Delhi NCR homes — our mission, values and the team behind the care.",
      },
      { property: "og:title", content: "About CareNest" },
      {
        property: "og:description",
        content: "Meet the team bringing hospital-grade nursing home to Delhi NCR.",
      },
    ],
  }),
  component: AboutPage,
});

const stats = [
  { value: "10k+", label: "Patients cared for" },
  { value: "500+", label: "Verified nurses" },
  { value: "24/7", label: "Care coordination" },
  { value: "12", label: "Years of experience" },
];

const values = [
  { icon: "biotech", title: "Clinical Rigor", desc: "Evidence-based protocols on every visit." },
  { icon: "favorite", title: "Radical Empathy", desc: "We treat every patient like family." },
  { icon: "shield_person", title: "Absolute Safety", desc: "Verified nurses, sterile technique, zero shortcuts." },
  { icon: "handshake", title: "Transparency", desc: "Clear pricing, honest updates, no surprises." },
  { icon: "eco", title: "Eco-Aware Care", desc: "Responsible disposal and sustainable supplies." },
  { icon: "self_improvement", title: "Holistic Wellness", desc: "Body, mind and family — cared for together." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="relative hero-gradient">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-20 lg:py-28 text-center">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
            Our Legacy of Excellence
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-on-surface mb-6 max-w-4xl mx-auto leading-tight">
            The compassionate face of modern home healthcare
          </h1>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
            CareNest was founded on a simple belief: every family deserves hospital-grade nursing
            at home, delivered with warmth and unwavering professionalism.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white border-y border-outline-variant/40">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                {s.value}
              </div>
              <p className="text-on-surface-variant">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-surface p-10 rounded-3xl border border-outline-variant/40">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">flag</span>
            </div>
            <h2 className="font-display text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-on-surface-variant">
              To make hospital-grade nursing accessible in every Delhi NCR home — combining clinical
              excellence with the emotional support families need during recovery.
            </p>
          </div>
          <div className="bg-surface p-10 rounded-3xl border border-outline-variant/40">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">visibility</span>
            </div>
            <h2 className="font-display text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-on-surface-variant">
              A world where recovery happens at home, surrounded by loved ones, without ever
              compromising on the standard of medical care.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-surface-container-low">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Why Families Trust CareNest
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              The values that shape every hire, every protocol and every visit.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-surface p-8 rounded-2xl border border-outline-variant/40">
                <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-on-secondary-container">
                    {v.icon}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{v.title}</h3>
                <p className="text-on-surface-variant text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              How we select our nurses
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "fact_check", title: "Rigorous Background Checks", desc: "Medical, criminal and reference verification for every hire." },
              { icon: "school", title: "Continuous Training", desc: "Monthly clinical drills and updated protocols keep skills sharp." },
              { icon: "psychology", title: "Personalized Matching", desc: "We pair each patient with a nurse suited to their condition and language." },
            ].map((s) => (
              <div key={s.title} className="p-8 rounded-2xl bg-surface border border-outline-variant/40">
                <span className="material-symbols-outlined text-primary text-3xl mb-4 block">{s.icon}</span>
                <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-on-surface-variant">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 bg-primary text-on-primary px-7 py-4 rounded-xl font-medium shadow-lg shadow-primary/25"
            >
              Book a nurse
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
