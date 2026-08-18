import { useState } from "react";
import { ADDRESS, EMAIL, FAQ, PHONE, PHONE_HREF } from "../data";
import {
  ArrowRight, BulbIcon, CheckIcon, ClockIcon, LayersIcon, MailIcon, PhoneIcon, PinIcon, PlusIcon, RulerIcon, ShearsIcon, Sprout,
} from "./Icons";
import { useReveal } from "../hooks";

const TYPES = [
  { label: "Terrasse / rooftop", Icon: LayersIcon },
  { label: "Jardin complet", Icon: Sprout },
  { label: "Balcon", Icon: RulerIcon },
  { label: "Éclairage / arrosage", Icon: BulbIcon },
  { label: "Entretien", Icon: ShearsIcon },
  { label: "Autre projet", Icon: PlusIcon },
];

const BUDGETS = ["Moins de 15'000", "15'000 – 40'000", "40'000 – 80'000", "Plus de 80'000", "À définir ensemble"];
const HORIZONS = ["Dès que possible", "Sous 3 mois", "Dans 3 – 6 mois", "Je commence à rêver"];

type FormData = {
  type: string;
  surface: number;
  budget: string;
  horizon: string;
  name: string;
  phone: string;
  email: string;
  ville: string;
  message: string;
  consent: boolean;
};

const inputCls =
  "w-full bg-pine-800 border border-sage-100/15 rounded-xl px-4 py-3.5 text-sage-50 placeholder-sage-100/35 outline-none focus:border-leaf-400 focus:ring-2 focus:ring-leaf-400/20 transition";

function StepDots({ step }: { step: number }) {
  const labels = ["Projet", "Budget", "Contact"];
  return (
    <div>
      <div className="flex items-center justify-between mb-2.5">
        {labels.map((l, i) => (
          <span key={l} className={`text-[11px] uppercase tracking-[0.18em] font-semibold transition-colors ${i <= step ? "text-leaf-300" : "text-sage-100/35"}`}>
            {i + 1}. {l}
          </span>
        ))}
      </div>
      <div className="h-1.5 bg-pine-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-leaf-400 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${((step + 1) / 3) * 100}%` }}
        />
      </div>
    </div>
  );
}

export default function Devis() {
  const left = useReveal<HTMLDivElement>();
  const form = useReveal<HTMLDivElement>();
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const [d, setD] = useState<FormData>({
    type: "", surface: 80, budget: "", horizon: "", name: "", phone: "", email: "", ville: "", message: "", consent: false,
  });

  const next = () => {
    setError("");
    if (step === 0 && !d.type) return setError("Choisissez un type de projet pour continuer.");
    if (step === 1 && (!d.budget || !d.horizon)) return setError("Sélectionnez un budget et un horizon — même approximatifs.");
    if (step === 2) {
      if (!d.name.trim()) return setError("Indiquez votre nom.");
      if (!d.phone.trim() && !d.email.trim()) return setError("Un téléphone ou un e-mail, pour vous répondre.");
      if (!d.consent) return setError("Cochez la case pour que nous puissions vous recontacter.");
      setDone(true);
      return;
    }
    setStep(step + 1);
  };

  return (
    <section id="devis" className="relative bg-sage-100 noise-overlay scroll-mt-24">
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 py-24 grid lg:grid-cols-12 gap-12 lg:gap-14 items-start">
        {/* Colonne gauche : contact + FAQ */}
        <div ref={left} className="reveal lg:col-span-5">
          <p className="flex items-center gap-3 text-[12px] uppercase tracking-[0.28em] text-moss-500 font-semibold">
            <span className="w-10 h-px bg-leaf-500 inline-block" />
            Devis gratuit
          </p>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl font-medium leading-[1.05] text-pine-900">
            Parlons de <em className="text-leaf-500">votre projet.</em>
          </h2>
          <p className="mt-5 text-pine-700/85 leading-relaxed max-w-md">
            Trois petites étapes, deux minutes chrono. Nous vous rappelons avec une première estimation et une date de visite.
          </p>

          <ul className="mt-7 space-y-3">
            {["Déplacement & devis 100 % gratuits", "Réponse sous 48 h ouvrées", "Sans aucun engagement"].map((t) => (
              <li key={t} className="flex items-center gap-3 text-pine-800 font-medium">
                <span className="w-6 h-6 rounded-full bg-leaf-400/25 text-pine-900 flex items-center justify-center shrink-0">
                  <CheckIcon className="w-3.5 h-3.5" />
                </span>
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-10 bg-sage-50 border border-pine-900/8 rounded-[1.25rem] p-6 space-y-4">
            <a href={PHONE_HREF} className="flex items-center gap-4 group">
              <span className="w-11 h-11 rounded-full bg-pine-900 text-leaf-300 flex items-center justify-center group-hover:bg-leaf-400 group-hover:text-pine-950 transition-colors duration-300">
                <PhoneIcon className="w-5 h-5" />
              </span>
              <div>
                <p className="text-xs text-pine-700/60">Téléphone — le plus rapide</p>
                <p className="font-display font-semibold text-pine-900 text-lg">{PHONE}</p>
              </div>
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 group">
              <span className="w-11 h-11 rounded-full bg-pine-900 text-leaf-300 flex items-center justify-center group-hover:bg-leaf-400 group-hover:text-pine-950 transition-colors duration-300">
                <MailIcon className="w-5 h-5" />
              </span>
              <div>
                <p className="text-xs text-pine-700/60">E-mail</p>
                <p className="font-semibold text-pine-900">{EMAIL}</p>
              </div>
            </a>
            <div className="flex items-center gap-4">
              <span className="w-11 h-11 rounded-full bg-pine-900 text-leaf-300 flex items-center justify-center">
                <PinIcon className="w-5 h-5" />
              </span>
              <div>
                <p className="text-xs text-pine-700/60">Atelier & dépôt</p>
                <p className="font-semibold text-pine-900">{ADDRESS}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-11 h-11 rounded-full bg-pine-900 text-leaf-300 flex items-center justify-center">
                <ClockIcon className="w-5 h-5" />
              </span>
              <div>
                <p className="text-xs text-pine-700/60">Horaires</p>
                <p className="font-semibold text-pine-900">Lun – Ven · 7h30 – 18h00</p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div id="faq" className="mt-14 scroll-mt-28">
            <h3 className="font-display text-2xl font-semibold text-pine-900">Questions fréquentes</h3>
            <div className="mt-4 divide-y divide-pine-900/10 border-y border-pine-900/10">
              {FAQ.map((f) => (
                <FaqItem key={f.q} q={f.q} a={f.a} />
              ))}
            </div>
          </div>
        </div>

        {/* Formulaire */}
        <div ref={form} className="reveal lg:col-span-7 lg:sticky lg:top-28" style={{ "--rd": "0.1s" } as React.CSSProperties}>
          <div className="relative bg-pine-950 text-sage-100 rounded-[1.5rem] p-6 sm:p-10 shadow-2xl shadow-pine-900/30 overflow-hidden noise-overlay">
            <svg className="absolute -right-10 -bottom-10 w-56 h-56 text-leaf-400/10 pointer-events-none" viewBox="0 0 200 200" fill="none" aria-hidden>
              <path d="M100 190C40 150 25 90 40 30c60 8 105 38 112 90 4 30-15 60-52 70z" stroke="currentColor" strokeWidth="1.5" />
            </svg>

            {done ? (
              <div className="relative text-center py-10 fade-in-anim">
                <span className="mx-auto w-20 h-20 rounded-full bg-leaf-400 text-pine-950 flex items-center justify-center">
                  <CheckIcon className="w-10 h-10" />
                </span>
                <h3 className="mt-6 font-display text-3xl sm:text-4xl font-semibold text-sage-50">
                  Merci {d.name.split(" ")[0]} !
                </h3>
                <p className="mt-3 text-sage-100/70 max-w-md mx-auto">
                  Votre demande est bien arrivée dans notre atelier. Nous vous répondons{" "}
                  <strong className="text-leaf-300">sous 48 h ouvrées</strong>
                  {d.phone ? ` au ${d.phone}` : ` à ${d.email}`}.
                </p>
                <div className="mt-7 flex flex-wrap justify-center gap-2">
                  {[d.type, `≈ ${d.surface} m²`, d.budget, d.horizon].filter(Boolean).map((chip) => (
                    <span key={chip} className="text-xs bg-pine-800 text-leaf-300 px-3.5 py-2 rounded-full">{chip}</span>
                  ))}
                </div>
                <div className="mt-9 flex flex-col sm:flex-row justify-center gap-3">
                  <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2.5 bg-leaf-400 text-pine-950 font-semibold px-6 py-3.5 rounded-full hover:bg-leaf-300 transition-colors">
                    <PhoneIcon className="w-5 h-5" /> Pressé ? {PHONE}
                  </a>
                  <button
                    onClick={() => { setDone(false); setStep(0); setD({ ...d, type: "", budget: "", horizon: "", consent: false }); }}
                    className="text-sm text-sage-100/60 hover:text-leaf-300 underline-grow px-2 py-2"
                  >
                    Envoyer une autre demande
                  </button>
                </div>
              </div>
            ) : (
              <div className="relative">
                <StepDots step={step} />
                <h3 className="mt-7 font-display text-2xl sm:text-3xl font-semibold text-sage-50">
                  {step === 0 && "Quel est votre projet ?"}
                  {step === 1 && "Budget & calendrier"}
                  {step === 2 && "Où vous joindre ?"}
                </h3>

                {error && (
                  <p className="mt-4 text-sm bg-ochre-500/15 border border-ochre-400/40 text-ochre-400 px-4 py-3 rounded-xl">
                    {error}
                  </p>
                )}

                {step === 0 && (
                  <div className="mt-6 fade-in-anim">
                    <div className="grid sm:grid-cols-3 gap-3">
                      {TYPES.map(({ label, Icon }) => (
                        <button
                          key={label}
                          onClick={() => setD({ ...d, type: label })}
                          className={`flex flex-col items-center gap-2.5 rounded-xl border px-4 py-5 text-sm font-medium transition-all duration-300 ${
                            d.type === label
                              ? "border-leaf-400 bg-leaf-400/10 text-leaf-300 -translate-y-0.5"
                              : "border-sage-100/15 text-sage-100/75 hover:border-sage-100/40 hover:-translate-y-0.5"
                          }`}
                        >
                          <Icon className="w-6 h-6" />
                          {label}
                        </button>
                      ))}
                    </div>
                    <div className="mt-7">
                      <div className="flex justify-between text-sm mb-2.5">
                        <label htmlFor="surface" className="text-sage-100/70">Surface approximative</label>
                        <span className="font-display font-semibold text-leaf-300">≈ {d.surface} m²</span>
                      </div>
                      <input
                        id="surface"
                        type="range" min={10} max={500} step={5}
                        value={d.surface}
                        onChange={(e) => setD({ ...d, surface: +e.target.value })}
                        className="w-full accent-[var(--color-leaf-400)] cursor-pointer"
                      />
                      <div className="flex justify-between text-[11px] text-sage-100/40 mt-1">
                        <span>10 m² — balcon</span>
                        <span>500 m² — grand jardin</span>
                      </div>
                    </div>
                  </div>
                )}

                {step === 1 && (
                  <div className="mt-6 fade-in-anim space-y-7">
                    <div>
                      <p className="text-sm text-sage-100/70 mb-3">Budget envisagé (CHF)</p>
                      <div className="flex flex-wrap gap-2.5">
                        {BUDGETS.map((b) => (
                          <button
                            key={b}
                            onClick={() => setD({ ...d, budget: b })}
                            className={`px-4 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 ${
                              d.budget === b
                                ? "border-leaf-400 bg-leaf-400 text-pine-950"
                                : "border-sage-100/20 text-sage-100/75 hover:border-leaf-400/60 hover:text-leaf-300"
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-sage-100/70 mb-3">Quand souhaitez-vous en profiter ?</p>
                      <div className="flex flex-wrap gap-2.5">
                        {HORIZONS.map((h) => (
                          <button
                            key={h}
                            onClick={() => setD({ ...d, horizon: h })}
                            className={`px-4 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 ${
                              d.horizon === h
                                ? "border-leaf-400 bg-leaf-400 text-pine-950"
                                : "border-sage-100/20 text-sage-100/75 hover:border-leaf-400/60 hover:text-leaf-300"
                            }`}
                          >
                            {h}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="mt-6 fade-in-anim grid sm:grid-cols-2 gap-4">
                    <input className={inputCls} placeholder="Nom & prénom *" value={d.name} onChange={(e) => setD({ ...d, name: e.target.value })} />
                    <input className={inputCls} type="tel" placeholder="Téléphone *" value={d.phone} onChange={(e) => setD({ ...d, phone: e.target.value })} />
                    <input className={inputCls} placeholder="E-mail" type="email" value={d.email} onChange={(e) => setD({ ...d, email: e.target.value })} />
                    <input className={inputCls} placeholder="Commune (ex. Pully)" value={d.ville} onChange={(e) => setD({ ...d, ville: e.target.value })} />
                    <textarea
                      className={`${inputCls} sm:col-span-2 min-h-[96px] resize-y`}
                      placeholder="Quelques mots sur votre projet, vos envies, vos contraintes… (facultatif)"
                      value={d.message}
                      onChange={(e) => setD({ ...d, message: e.target.value })}
                    />
                    <label className="sm:col-span-2 flex items-start gap-3 text-xs text-sage-100/60 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={d.consent}
                        onChange={(e) => setD({ ...d, consent: e.target.checked })}
                        className="mt-0.5 w-4 h-4 accent-[var(--color-leaf-400)]"
                      />
                      J’accepte que mes coordonnées soient utilisées pour être recontacté(e) au sujet de ma demande. Aucune newsletter, aucune revente de données.
                    </label>
                  </div>
                )}

                <div className="mt-8 flex items-center justify-between gap-4">
                  <button
                    onClick={() => { setError(""); setStep(Math.max(0, step - 1)); }}
                    className={`text-sm text-sage-100/50 hover:text-leaf-300 transition-colors px-2 py-3 ${step === 0 ? "invisible" : ""}`}
                  >
                    ← Retour
                  </button>
                  <button
                    onClick={next}
                    className="group inline-flex items-center gap-3 bg-leaf-400 text-pine-950 font-semibold px-7 py-4 rounded-full hover:bg-leaf-300 hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-leaf-500/20"
                  >
                    {step === 2 ? "Envoyer ma demande" : "Continuer"}
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
                <p className="mt-5 text-[11px] text-sage-100/40 text-center">
                  Devis gratuit · Réponse sous 48 h ouvrées · Vos données restent à l’atelier
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className={`font-display font-medium text-lg transition-colors ${open ? "text-leaf-500" : "text-pine-900 group-hover:text-moss-500"}`}>
          {q}
        </span>
        <span className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
          open ? "rotate-45 bg-pine-900 text-leaf-300 border-pine-900" : "border-pine-900/20 text-pine-900"
        }`}>
          <PlusIcon className="w-4 h-4" />
        </span>
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-500 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden min-h-0">
          <p className="pb-5 pr-12 text-pine-700/85 leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}
