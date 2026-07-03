import { Link } from "@tanstack/react-router";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/book", label: "Book a Nurse" },
  { to: "/contact", label: "Contact" },
  { to: "/faq", label: "FAQ" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 glass-nav border-b border-outline-variant/40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span
            className="material-symbols-outlined text-primary text-3xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            medical_services
          </span>
          <span className="font-display text-2xl font-bold text-primary tracking-tight">
            CareNest
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-3 py-2 text-sm font-medium text-on-surface-variant rounded-lg hover:bg-primary/5 hover:text-primary transition-colors"
              activeProps={{
                className:
                  "px-3 py-2 text-sm font-semibold text-primary border-b-2 border-primary rounded-none",
              }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="tel:+919999999999"
            className="hidden sm:inline-flex items-center gap-2 bg-primary text-on-primary px-5 py-2.5 rounded-xl text-sm font-medium shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity"
          >
            <span className="material-symbols-outlined text-[18px]">call</span>
            Call Now
          </a>
          <button
            aria-label="Toggle navigation"
            className="md:hidden w-10 h-10 rounded-lg border border-outline-variant flex items-center justify-center"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="material-symbols-outlined">{open ? "close" : "menu"}</span>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-outline-variant bg-surface">
          <nav className="flex flex-col p-4 gap-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-high"
                activeProps={{ className: "px-4 py-3 rounded-lg bg-primary/10 text-primary font-semibold" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+919999999999"
              className="mt-2 inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-5 py-3 rounded-xl text-sm font-medium"
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              Call Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
