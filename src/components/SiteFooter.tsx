import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant pt-20 pb-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span
                className="material-symbols-outlined text-primary text-3xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                medical_services
              </span>
              <span className="font-display text-2xl font-bold text-primary">CareNest</span>
            </div>
            <p className="text-on-surface-variant text-sm mb-6 max-w-xs">
              Delhi NCR's leading provider of premium home healthcare and specialized nursing services.
            </p>
            <div className="flex gap-3">
              {["public", "mail", "call", "chat"].map((i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">{i}</span>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="text-on-surface-variant hover:text-primary">About</Link></li>
              <li><Link to="/services" className="text-on-surface-variant hover:text-primary">Services</Link></li>
              <li><Link to="/book" className="text-on-surface-variant hover:text-primary">Book a Nurse</Link></li>
              <li><Link to="/faq" className="text-on-surface-variant hover:text-primary">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-6">Support</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-on-surface-variant hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="text-on-surface-variant hover:text-primary">Terms of Service</a></li>
              <li><Link to="/contact" className="text-on-surface-variant hover:text-primary">Contact</Link></li>
              <li><a href="#" className="text-on-surface-variant hover:text-primary">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-6">Newsletter</h4>
            <p className="text-sm text-on-surface-variant mb-4">
              Get health tips and updates from our care team.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 min-w-0 px-4 py-2.5 rounded-xl bg-surface border border-outline-variant text-sm focus:outline-none focus:border-primary"
              />
              <button className="bg-primary text-on-primary px-4 py-2.5 rounded-xl text-sm font-medium">
                Join
              </button>
            </form>
          </div>
        </div>
        <div className="pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-on-surface-variant">
          <p>© {new Date().getFullYear()} CareNest Nursing Services. All rights reserved.</p>
          <p>Made with care by Chetan Kaushik.</p>
        </div>
      </div>
    </footer>
  );
}
