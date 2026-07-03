import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | CareNest Home Nursing" },
      {
        name: "description",
        content:
          "Comprehensive home nursing in Delhi NCR — ICU, post-surgical, elderly, wound, catheter, tracheostomy, palliative and more.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: "home_health", title: "Home Nursing", desc: "General medical assistance and daily patient health management by certified nurses." },
  { icon: "monitor_heart", title: "ICU Nursing", desc: "Critical care with hemodynamic monitoring and emergency protocols." },
  { icon: "elderly", title: "Elderly Care", desc: "Compassionate geriatric support including companionship and medication adherence." },
  { icon: "healing", title: "Post Surgery Care", desc: "Specialized recovery plans to prevent complications and accelerate healing." },
  { icon: "vaccines", title: "Injection & IV Care", desc: "Professional administration of prescribed injections and IV fluids at home." },
  { icon: "bandage", title: "Wound Dressing", desc: "Sterile management of chronic wounds, surgical sites and diabetic ulcers." },
  { icon: "water_drop", title: "Catheter Care", desc: "Safe insertion, maintenance and hygienic management of catheters." },
  { icon: "air", title: "Tracheostomy Care", desc: "Expert airway management including suctioning and tube site cleaning." },
  { icon: "restaurant", title: "Ryle's Tube Feeding", desc: "Nasogastric nutrition and monitoring for patients unable to swallow." },
  { icon: "respiratory_rate", title: "Ventilator Care", desc: "Monitoring for invasive and non-invasive mechanical ventilation." },
  { icon: "favorite", title: "Palliative Care", desc: "Pain management and emotional support for chronic and terminal illnesses." },
  { icon: "accessibility_new", title: "Stroke & Paralysis Care", desc: "Rehabilitative support focusing on mobility, hygiene and daily living." },
  { icon: "vital_signs", title: "Cancer Patient Care", desc: "Oncology nursing including chemotherapy symptom management." },
  { icon: "personal_injury", title: "Medical Attendant", desc: "Trained caregivers for mobility, bathing and non-clinical needs." },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="relative hero-gradient">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
              Expert Medical Support
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Comprehensive Nursing Care at Home
            </h1>
            <p className="text-lg text-on-surface-variant mb-8 max-w-xl">
              Hospital-grade nursing in the comfort and privacy of your own home. Our certified
              specialists deliver dedicated, compassionate care tailored to your recovery.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/book" className="bg-primary text-on-primary px-7 py-4 rounded-xl font-medium shadow-lg shadow-primary/25">
                Book Consultation
              </Link>
              <a href="#all" className="border-2 border-primary text-primary px-7 py-4 rounded-xl font-medium hover:bg-primary/5">
                View All Services
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                className="w-full h-full object-cover"
                alt="Professional nurse in a modern clinical setting"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdwqTOaWlwKPTzLYUpZcw60I5C9FQO23XUQCVcmdnCtV2CKLCKUp88DPjaAhppDN2aWzCalMyAq8Wzw8qQSmGJarxoblPUcyDLLWkcwqEy4Ln6C4RlqlFTepuLO2BdcPl74DHRgHdErd2vLFCnn8zhRxDrEODDuZyiuxtSWK-sVoyyAU1Ogn0nh1FV3LsK6E-osg4NIsgt01UX3FCaBOu4xQEgpa3RO2LnYVy6ZJnzxQnkHmyC2wTM"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl flex items-center gap-3">
              <div className="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-on-secondary-container">verified_user</span>
              </div>
              <div>
                <p className="font-medium text-sm">Certified Care</p>
                <p className="text-xs text-on-surface-variant">Verified Specialists</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="all" className="py-20 lg:py-24 bg-surface-container-low">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Specialized Nursing Solutions
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              From critical ICU monitoring to routine geriatric support — our team handles every level of clinical need.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="medical-card bg-white rounded-2xl p-6 border border-outline-variant/40 flex flex-col"
              >
                <span className="material-symbols-outlined text-primary text-3xl mb-4">{s.icon}</span>
                <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-on-surface-variant text-sm mb-6 flex-1">{s.desc}</p>
                <Link
                  to="/book"
                  className="w-full py-2.5 rounded-xl border border-primary/30 text-primary font-medium text-sm text-center hover:bg-primary/5 transition-all"
                >
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Excellence in Every Visit
            </h2>
            <div className="space-y-6">
              {[
                { icon: "groups", title: "Background Verified Team", desc: "All staff undergo rigorous medical and criminal background checks." },
                { icon: "speed", title: "Quick Deployment", desc: "Urgent needs addressed with rapid staffing across Delhi NCR." },
                { icon: "assignment_turned_in", title: "Standardized Protocols", desc: "Care delivered against strict international hospital checklists." },
              ].map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">{f.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{f.title}</h4>
                    <p className="text-on-surface-variant text-sm">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden aspect-[3/4] pt-8">
              <img
                className="w-full h-full object-cover rounded-2xl"
                alt="Nurse holding a patient's hand"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC97fwnpEHtGij53Q8kxn8K2qhYbJxhrOqx5qGDYx0aGK_oUSYW81GCb0Ld7h9B3qsx_Y70d0PALQ7JukSGvgUk8HVQxBkyxG8B4izS93a7cdKNuFMF0ltolx_ydrzfGxrVNHc-Iuc8HLocqlU-KBr5kS9yx7DboAsw_VaQEfMoR2lT-voFOtF5Bbh8LoEdrPAID4pdMMZcP9E3ejJRZcP0OEJ2TBPaXOhR0553nTE4Y-YlMzSI_n3K"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[3/4]">
              <img
                className="w-full h-full object-cover rounded-2xl"
                alt="Clean medical kit"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHqIMNn8-wqcqNhk5daOHbnzYHo9lTgq4QQXCKB4sfxWGYTj9dTcQ8E1WvLIg2OwLOWLyE04xYmj7pb_0GbbdHSgztUoANxFBqDF1-3PKwIb86MKR4MvubE2ZAExXoFQ7daHDP0_QSNZ6OMME3D5JwR0SqHHnWF9MCqDPOTFaH8wgZ48aJtIm4_egxzHojdv4Khz5rXFXkm62vwAC7Q69LpYU7Y8-QJIA0ORBwFw5HjAEnRXFj695v"
              />
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
