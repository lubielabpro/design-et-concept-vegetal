import { ADDRESS, EMAIL, PHONE, PHONE_HREF, ZONES } from "../data";
import { InstagramIcon, LeafMark, MailIcon, PhoneIcon, PinIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="relative bg-pine-950 text-sage-100 noise-overlay overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 pt-20 pb-10">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Marque */}
          <div className="lg:col-span-5">
            <a href="#top" className="flex items-center gap-3">
              <span className="text-leaf-400">
                <LeafMark className="w-10 h-10" />
              </span>
              <span className="font-display font-semibold text-sage-50 text-xl">Design &amp; Concept Végétal</span>
            </a>
            <p className="mt-5 font-display text-3xl sm:text-4xl font-medium leading-tight text-sage-50 max-w-md">
              Le végétal, pensé comme <em className="text-leaf-300">de l’architecture.</em>
            </p>
            <p className="mt-4 text-sage-100/60 text-sm leading-relaxed max-w-sm">
              Entreprise paysagère basée à Pully — conception, réalisation et entretien d’extérieurs haut de gamme sur tout l’arc lémanique depuis 2016.
            </p>
            <div className="mt-7 flex gap-3">
              <a
                href="https://www.instagram.com/design_concept_vegetal/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 rounded-full border border-sage-100/20 flex items-center justify-center text-sage-100/80 hover:bg-leaf-400 hover:text-pine-950 hover:border-leaf-400 transition-all duration-300 hover:-translate-y-1"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.google.com/search?q=Design+%26+Concept+V%C3%A9g%C3%A9tal+Pully+avis"
                target="_blank"
                rel="noreferrer"
                aria-label="Avis Google"
                className="w-11 h-11 rounded-full border border-sage-100/20 flex items-center justify-center text-sage-100/80 hover:bg-leaf-400 hover:text-pine-950 hover:border-leaf-400 transition-all duration-300 hover:-translate-y-1"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                  <path d="M11.5 6a6 6 0 1 0 3.5 10.9L20 20" transform="translate(-1 -1)" />
                  <path d="M12.5 9.5v5M10 12h5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-[12px] uppercase tracking-[0.22em] text-leaf-300 font-semibold">Contact</h3>
            <ul className="mt-5 space-y-3.5 text-sm">
              <li>
                <a href={PHONE_HREF} className="flex items-center gap-3 text-sage-100/80 hover:text-leaf-300 transition-colors">
                  <PhoneIcon className="w-4 h-4 text-leaf-400 shrink-0" /> {PHONE}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-sage-100/80 hover:text-leaf-300 transition-colors">
                  <MailIcon className="w-4 h-4 text-leaf-400 shrink-0" /> {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sage-100/80">
                <PinIcon className="w-4 h-4 text-leaf-400 shrink-0 mt-0.5" /> {ADDRESS}
              </li>
            </ul>
            <h3 className="mt-8 text-[12px] uppercase tracking-[0.22em] text-leaf-300 font-semibold">Horaires</h3>
            <p className="mt-3 text-sm text-sage-100/70">Lun – Ven · 7h30 – 18h00<br />Samedi sur rendez-vous</p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-[12px] uppercase tracking-[0.22em] text-leaf-300 font-semibold">Le site</h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {[
                ["#realisations", "Réalisations"],
                ["#services", "Services"],
                ["#methode", "Méthode"],
                ["#avis", "Avis clients"],
                ["#faq", "FAQ"],
                ["#devis", "Devis gratuit"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="text-sage-100/80 hover:text-leaf-300 underline-grow transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Zones */}
          <div className="lg:col-span-2">
            <h3 className="text-[12px] uppercase tracking-[0.22em] text-leaf-300 font-semibold">Zones d’intervention</h3>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {ZONES.map((z) => (
                <span key={z} className="text-[11px] text-sage-100/60 border border-sage-100/12 px-2.5 py-1 rounded-full hover:border-leaf-400/50 hover:text-leaf-300 transition-colors cursor-default">
                  {z}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-7 border-t border-sage-100/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-sage-100/45">
          <p>© 2026 Design &amp; Concept Végétal Sàrl — Paysagiste à Lausanne &amp; Pully</p>
          <p className="flex items-center gap-2">
            Conçu avec <LeafMark className="w-3.5 h-3.5 text-leaf-400" /> au bord du Léman
          </p>
        </div>
      </div>
    </footer>
  );
}
