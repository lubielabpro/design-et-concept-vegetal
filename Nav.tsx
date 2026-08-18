import { useEffect, useState } from "react";
import { LeafMark, PhoneIcon } from "./Icons";
import { PHONE, PHONE_HREF } from "../data";

const LINKS = [
  { href: "#realisations", label: "Réalisations" },
  { href: "#services", label: "Services" },
  { href: "#methode", label: "Méthode" },
  { href: "#avis", label: "Avis" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-pine-950/95 backdrop-blur-md shadow-lg shadow-pine-950/30 py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-3 group">
            <span className="text-leaf-400 transition-transform duration-500 group-hover:rotate-12">
              <LeafMark className="w-9 h-9" />
            </span>
            <span className="leading-tight">
              <span className="block font-display font-semibold text-sage-50 text-lg tracking-tight">
                Design &amp; Concept Végétal
              </span>
              <span className="block text-[11px] uppercase tracking-[0.22em] text-leaf-300/80">
                Paysagiste · Lausanne — Pully
              </span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="underline-grow text-sm font-medium text-sage-100/85 hover:text-leaf-300 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 text-sm text-sage-100/85 hover:text-leaf-300 transition-colors"
            >
              <PhoneIcon className="w-4 h-4" />
              {PHONE}
            </a>
            <a
              href="#devis"
              className="ml-2 bg-leaf-400 text-pine-950 font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-leaf-300 hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-leaf-500/20"
            >
              Devis gratuit
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className="lg:hidden relative w-11 h-11 flex flex-col items-center justify-center gap-1.5 text-sage-50"
          >
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${open ? "rotate-45 translate-y-1" : ""}`}
            />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${open ? "-rotate-45 -translate-y-3" : ""}`}
            />
          </button>
        </div>
      </header>

      {/* Menu mobile plein écran */}
      <div
        className={`fixed inset-0 z-40 bg-pine-950 noise-overlay transition-all duration-500 lg:hidden flex flex-col ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
          {[...LINKS, { href: "#devis", label: "Devis gratuit" }].map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${0.08 + i * 0.06}s` : "0s" }}
              className={`font-display text-4xl sm:text-5xl text-sage-50 hover:text-leaf-300 hover:translate-x-3 transition-all duration-500 ${
                open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="px-8 pb-10 flex flex-col gap-3">
          <a
            href={PHONE_HREF}
            className="flex items-center justify-center gap-3 bg-leaf-400 text-pine-950 font-semibold py-4 rounded-full"
          >
            <PhoneIcon className="w-5 h-5" />
            {PHONE}
          </a>
          <p className="text-center text-xs text-sage-100/50 tracking-wide">
            Lun – Ven · 7h30 – 18h00 · Chemin du Liseron 7, Pully
          </p>
        </div>
      </div>
    </>
  );
}

/** Bouton d'appel flottant (mobile) */
export function FloatingCall() {
  return (
    <a
      href={PHONE_HREF}
      aria-label="Appeler Design & Concept Végétal"
      className="lg:hidden fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-leaf-400 text-pine-950 flex items-center justify-center shadow-xl shadow-pine-950/40 active:scale-95 transition-transform"
    >
      <span className="absolute inset-0 rounded-full bg-leaf-400 animate-ping opacity-30 motion-reduce:hidden" />
      <PhoneIcon className="w-6 h-6 relative" />
    </a>
  );
}
