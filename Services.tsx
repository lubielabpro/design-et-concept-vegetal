import { IMG, SERVICES, STEPS } from "../data";
import { ArrowRight, CheckIcon } from "./Icons";
import { useReveal } from "../hooks";

function ServicesList() {
  const head = useReveal<HTMLDivElement>();
  return (
    <div id="services" className="relative bg-pine-950 text-sage-100 noise-overlay scroll-mt-24">
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 py-24">
        <div ref={head} className="reveal grid lg:grid-cols-12 gap-6 mb-14">
          <div className="lg:col-span-7">
            <p className="flex items-center gap-3 text-[12px] uppercase tracking-[0.28em] text-leaf-300 font-semibold">
              <span className="w-10 h-px bg-leaf-400 inline-block" />
              Nos savoir-faire
            </p>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl font-medium leading-[1.05] text-sage-50">
              Six métiers, <em className="text-leaf-300">un seul extérieur.</em>
            </h2>
          </div>
          <p className="lg:col-span-4 lg:col-start-9 self-end text-sage-100/70 leading-relaxed">
            De la première esquisse au dernier arrosage, tout est réalisé par nos équipes — un interlocuteur unique, zéro sous-traitance hasardeuse.
          </p>
        </div>

        <div className="border-t border-sage-100/10">
          {SERVICES.map((s, i) => (
            <a
              key={s.num}
              href="#devis"
              className="group grid grid-cols-[auto_1fr] sm:grid-cols-[70px_1fr_auto] lg:grid-cols-[90px_1.1fr_1.4fr_auto] items-center gap-x-5 lg:gap-x-8 gap-y-3 py-7 border-b border-sage-100/10 transition-colors duration-300 hover:bg-pine-800/60 px-2 sm:px-4"
            >
              <span className="font-display italic text-2xl lg:text-3xl text-leaf-400/70 group-hover:text-leaf-300 transition-colors">
                {s.num}
              </span>
              <div>
                <h3 className="font-display text-2xl lg:text-3xl font-medium text-sage-50 group-hover:translate-x-2 transition-transform duration-300">
                  {s.title}
                </h3>
                <div className="flex flex-wrap gap-1.5 mt-2.5 sm:hidden">
                  {s.tags.map((t) => (
                    <span key={t} className="text-[11px] bg-pine-800 text-leaf-300 px-2.5 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1 sm:col-start-3 lg:col-start-3">
                <p className="text-sm text-sage-100/65 leading-relaxed max-w-xl">{s.desc}</p>
                <div className="hidden sm:flex flex-wrap gap-1.5 mt-3">
                  {s.tags.map((t) => (
                    <span key={t} className="text-[11px] bg-pine-800 text-leaf-300 px-2.5 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
              <div className="hidden lg:flex items-center gap-4">
                <div className="w-28 h-20 rounded-xl overflow-hidden">
                  <img
                    src={s.img}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                </div>
                <span className="w-10 h-10 rounded-full border border-sage-100/20 flex items-center justify-center text-sage-100/70 group-hover:bg-leaf-400 group-hover:text-pine-950 group-hover:border-leaf-400 transition-all duration-300">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </a>
          ))}
        </div>

        <p className="mt-8 text-sm text-sage-100/50">
          Un projet qui mélange plusieurs de ces métiers ? C’est exactement notre quotidien —{" "}
          <a href="#devis" className="text-leaf-300 underline-grow font-medium">parlons-en</a>.
        </p>
      </div>
    </div>
  );
}

function Method() {
  const head = useReveal<HTMLDivElement>();
  return (
    <div id="methode" className="relative bg-sage-100 noise-overlay scroll-mt-24">
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 py-24 grid lg:grid-cols-12 gap-12">
        {/* Colonne sticky */}
        <div ref={head} className="reveal lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <p className="flex items-center gap-3 text-[12px] uppercase tracking-[0.28em] text-moss-500 font-semibold">
              <span className="w-10 h-px bg-leaf-500 inline-block" />
              Notre méthode
            </p>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl font-medium leading-[1.05] text-pine-900">
              Quatre étapes, <em className="text-leaf-500">zéro improvisation.</em>
            </h2>
            <p className="mt-5 text-pine-700/85 leading-relaxed max-w-md">
              Un extérieur réussi ne doit rien au hasard. Chaque projet suit le même rituel, rodé sur plus de 250 chantiers.
            </p>

            <figure className="mt-10 max-w-sm">
              <div className="rounded-t-full rounded-b-[1.25rem] overflow-hidden shadow-xl shadow-pine-900/15">
                <img src={IMG.portrait} alt="Fondateur de Design & Concept Végétal dans un jardin réalisé par l'équipe" loading="lazy" className="w-full aspect-[4/5] object-cover" />
              </div>
              <blockquote className="mt-6 border-l-2 border-leaf-500 pl-5">
                <p className="font-display italic text-xl text-pine-900 leading-snug">
                  « Un bon projet ne se contente pas d’ajouter des plantes : il révèle ce qui est déjà là. »
                </p>
                <footer className="mt-3 text-sm text-pine-700/70">
                  — Fondateur, paysagiste concepteur CFC
                </footer>
              </blockquote>
            </figure>
          </div>
        </div>

        {/* Étapes */}
        <ol className="lg:col-span-6 lg:col-start-7 relative">
          <div className="absolute left-[27px] top-6 bottom-6 w-px bg-pine-900/12 hidden sm:block" aria-hidden />
          {STEPS.map((step, i) => (
            <MethodStep key={step.num} step={step} i={i} />
          ))}
        </ol>
      </div>
    </div>
  );
}

function MethodStep({ step, i }: { step: (typeof STEPS)[number]; i: number }) {
  const ref = useReveal<HTMLLIElement>();
  return (
    <li ref={ref} className="reveal relative flex gap-6 pb-12 last:pb-0" style={{ "--rd": `${i * 0.08}s` } as React.CSSProperties}>
      <span className="relative z-10 hidden sm:flex w-14 h-14 shrink-0 items-center justify-center rounded-full bg-pine-900 text-leaf-300 font-display italic text-lg shadow-lg shadow-pine-900/20">
        {step.num}
      </span>
      <div className="bg-sage-50 border border-pine-900/8 rounded-[1.25rem] p-6 sm:p-8 flex-1 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-pine-900/10 hover:border-leaf-500/40">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="font-display text-2xl font-semibold text-pine-900">
            <span className="sm:hidden font-display italic text-leaf-500 mr-2">{step.num}</span>
            {step.title}
          </h3>
          <span className="inline-flex items-center gap-2 text-xs font-medium bg-leaf-200/60 text-pine-800 px-3 py-1.5 rounded-full">
            <CheckIcon className="w-3.5 h-3.5 text-leaf-500" />
            {step.meta}
          </span>
        </div>
        <p className="mt-3 text-pine-700/85 leading-relaxed">{step.text}</p>
      </div>
    </li>
  );
}

export default function Services() {
  return (
    <>
      <ServicesList />
      <Method />
    </>
  );
}
