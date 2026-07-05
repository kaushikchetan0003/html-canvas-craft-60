import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBdwqTOaWlwKPTzLYUpZcw60I5C9FQO23XUQCVcmdnCtV2CKLCKUp88DPjaAhppDN2aWzCalMyAq8Wzw8qQSmGJarxoblPUcyDLLWkcwqEy4Ln6C4RlqlFTepuLO2BdcPl74DHRgHdErd2vLFCnn8zhRxDrEODDuZyiuxtSWK-sVoyyAU1Ogn0nh1FV3LsK6E-osg4NIsgt01UX3FCaBOu4xQEgpa3RO2LnYVy6ZJnzxQnkHmyC2wTM";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CareNest | Home Nursing Services in Delhi NCR" },
      {
        name: "description",
        content:
          "Professional home nursing in Delhi NCR — trusted by 5000+ families. Book ICU nurses, elderly care, post-surgical support and more.",
      },
      { property: "og:image", content: HERO_IMG },
      { name: "twitter:image", content: HERO_IMG },
    ],
  }),
  component: HomePage,
});

const trustBadges = [
  { icon: "school", label: "Qualified GNM" },
  { icon: "history_edu", label: "B.Sc Nursing" },
  { icon: "emergency", label: "ICU Nurses" },
  { icon: "verified_user", label: "Verified Staff" },
  { icon: "support_agent", label: "24×7 Support" },
];

const services = [
  {
    icon: "home_health",
    title: "Home Nursing",
    desc: "Post-surgical care, wound management and chronic illness support in your home.",
  },
  {
    icon: "monitor_heart",
    title: "ICU Nursing",
    desc: "Critical care with 24/7 hemodynamic monitoring and emergency protocols.",
  },
  {
    icon: "elderly",
    title: "Elderly Care",
    desc: "Compassionate geriatric support including companionship and medication adherence.",
  },
];

const why = [
  {
    icon: "favorite",
    title: "Compassionate Care",
    desc: "Every visit is delivered with warmth, dignity and clinical rigor.",
  },
  {
    icon: "monitoring",
    title: "Advanced Monitoring",
    desc: "Hospital-grade equipment and protocols for critical patients at home.",
  },
  {
    icon: "speed",
    title: "Quick Deployment",
    desc: "Certified nurses dispatched within hours across Delhi NCR.",
  },
];

const testimonials = [
  {
    quote:
      "CareNest sent an ICU-trained nurse within 4 hours of my father's discharge. The care was hospital-grade — we finally slept easy.",
    name: "Priya Malhotra",
    role: "Daughter of patient, Gurgaon",
  },
  {
    quote:
      "Their post-op nurse changed dressings meticulously and coordinated directly with our surgeon. Truly professional service.",
    name: "Rohan Kapoor",
    role: "Post-surgical recovery, Delhi",
  },
  {
    quote:
      "My mother lit up around her attendant. Beyond medicine, they gave her companionship — that means everything.",
    name: "Anita Sharma",
    role: "Elderly care, Noida",
  },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative hero-gradient">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface-container-high rounded-full text-primary text-sm font-medium">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              Trusted by 5,000+ Families in Delhi NCR
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-on-surface leading-[1.05]">
              Professional Home Nursing Services in Delhi NCR
            </h1>
            <p className="text-lg text-on-surface-variant max-w-lg">
              Compassionate, medical-grade care at your doorstep. We bring hospital-standard
              nursing to the comfort of your home.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/book"
                className="bg-primary text-on-primary px-7 py-4 rounded-xl font-medium text-base shadow-xl shadow-primary/25 hover:scale-[1.02] transition-transform"
              >
                Book a Nurse
              </Link>
              <a
                href="tel:+919818744116"
                className="border-2 border-primary text-primary px-7 py-4 rounded-xl font-medium text-base hover:bg-primary/5 transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
          <div className="lg:col-span-6 relative">
            <div className="rounded-[2rem] overflow-hidden shadow-2xl relative z-10 border-4 border-white">
              <img
                src={HERO_IMG}
                alt="CareNest nurse caring for a patient at home"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl flex items-center gap-3 max-w-[240px] z-20">
              <div className="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-on-secondary-container">
                  verified_user
                </span>
              </div>
              <div>
                <p className="font-medium text-on-surface text-sm">Certified Care</p>
                <p className="text-xs text-on-surface-variant">Verified Specialists</p>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-56 h-56 bg-surface-container-highest rounded-full -z-10 blur-3xl opacity-70" />
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="py-10 bg-white border-y border-outline-variant/40">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 flex flex-wrap justify-between items-center gap-6">
          {trustBadges.map((b) => (
            <div key={b.label} className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-on-secondary-container">
                  {b.icon}
                </span>
              </div>
              <span className="font-medium text-on-surface">{b.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services preview */}
      <section className="py-20 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Our Specialized Services
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Tailored healthcare delivered with precision and empathy for every stage of life.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="medical-card bg-surface p-8 rounded-2xl border border-outline-variant/40"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    {s.icon}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-on-surface-variant mb-6">{s.desc}</p>
                <Link
                  to="/services"
                  className="text-primary font-medium inline-flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Learn More{" "}
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-xl font-medium hover:bg-primary/5"
            >
              View All Services
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 lg:py-24 bg-surface-container-low">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Why Delhi NCR Trusts CareNest
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Our promise: clinically excellent, deeply human care — every visit, every family.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {why.map((w) => (
              <div key={w.title} className="bg-surface p-8 rounded-2xl border border-outline-variant/40">
                <div className="w-14 h-14 rounded-full bg-primary text-on-primary flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-2xl">{w.icon}</span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{w.title}</h3>
                <p className="text-on-surface-variant">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Voices of Comfort</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Families across Delhi NCR share how CareNest helped them care for the ones they love.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="bg-surface p-8 rounded-2xl border border-outline-variant/40 flex flex-col"
              >
                <span className="material-symbols-outlined text-primary text-3xl mb-4">format_quote</span>
                <p className="text-on-surface flex-1 mb-6">{t.quote}</p>
                <footer>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-on-surface-variant">{t.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="rounded-3xl bg-primary text-on-primary px-8 py-14 md:px-16 md:py-20 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
                Need a nurse today?
              </h2>
              <p className="opacity-90 max-w-xl">
                Speak to our care coordinator — most bookings are staffed within 4 hours across Delhi NCR.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link
                to="/book"
                className="bg-white text-primary px-6 py-3.5 rounded-xl font-medium"
              >
                Book a Nurse
              </Link>
              <a
                href="tel:+919999999999"
                className="border-2 border-white/60 text-white px-6 py-3.5 rounded-xl font-medium hover:bg-white/10"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
