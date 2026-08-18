import { useRef, useState } from "react";
import { BEFORE_AFTER, PROJECTS, type BeforeAfter, type Project } from "../data";
import { ArrowRight, ClockIcon, PinIcon } from "./Icons";
import { useReveal } from "../hooks";

/* ------------------- Slider Avant / Après ------------------- */

function BeforeAfterSlider({ item }: { item: BeforeAfter }) {
  const [pos, setPos] = useState(52);
  const [dragging, setDragging] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const update = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(3, Math.min(97, p)));
  };

  return (
    <div className="group/slider">
      <div
        ref={ref}
        role="slider"
        aria-label="Comparer avant et après"
        aria-valuenow={Math.round(pos)}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") setPos((p) => Math.max(3, p - 5));
          if (e.key === "ArrowRight") setPos((p) => Math.min(97, p + 5));
        }}
        onPointerDown={(e) => {
          (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
          setDragging(true);
          update(e.clientX);
        }}
        onPointerMove={(e) => dragging && update(e.clientX)}
        onPointerUp={() => setDragging(false)}
        onPointerCancel={() => setDragging(false)}
        className="relative aspect-[3/2] rounded-[1.25rem] overflow-hidden select-none touch-none cursor-ew-resize outline-none focus-visible:ring-4 focus-visible:ring-leaf-400/50 shadow-2xl shadow-pine-950/20"
      >
        {/* Après (base) */}
        <img src={item.after} alt={`${item.title} — après aménagement`} className="absolute inset-0 w-full h-full object-cover" draggable={false} />
        {/* Avant (rognée) */}
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <img src={item.before} alt={`${item.title} — avant aménagement`} className="absolute inset-0 w-full h-full object-cover grayscale-[35%]" draggable={false} />
        </div>

        {/* étiquettes */}
        <span className="absolute top-4 left-4 bg-pine-950/80 text-sage-50 text-[11px] font-semibold uppercase tracking-[0.18em] px-3.5 py-1.5 rounded-full">
          Avant
        </span>
        <span className="absolute top-4 right-4 bg-leaf-400 text-pine-950 text-[11px] font-semibold uppercase tracking-[0.18em] px-3.5 py-1.5 rounded-full">
          Après
        </span>

        {/* poignée */}
        <div className="absolute top-0 bottom-0" style={{ left: `${pos}%` }}>
          <div className="absolute inset-y-0 -translate-x-1/2 w-[3px] bg-sage-50/90" />
          <div
            className={`absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-sage-50 text-pine-900 flex items-center justify-center shadow-xl transition-transform duration-200 ${
              dragging ? "scale-110" : "group-hover/slider:scale-105"
            }`}
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6 3 12l6 6M15 6l6 6-6 6" />
            </svg>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h3 className="font-display text-2xl font-semibold text-pine-900">{item.title}</h3>
          <p className="mt-1 flex items-center gap-2 text-sm text-pine-700/75">
            <PinIcon className="w-4 h-4 text-leaf-500" />
            {item.place}
          </p>
        </div>
        <div className="flex gap-2.5">
          <span className="inline-flex items-center gap-1.5 bg-sage-200 text-pine-800 text-xs font-medium px-3 py-1.5 rounded-full">
            <ClockIcon className="w-3.5 h-3.5" /> {item.duration}
          </span>
          <span className="bg-pine-900 text-leaf-300 text-xs font-semibold px-3 py-1.5 rounded-full">{item.budget}</span>
        </div>
      </div>
    </div>
  );
}

function BeforeAfterSection() {
  const [idx, setIdx] = useState(0);
  const head = useReveal<HTMLDivElement>();
  const item = BEFORE_AFTER[idx];

  return (
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
      <div ref={head} className="reveal lg:col-span-4 lg:sticky lg:top-28">
        <p className="flex items-center gap-3 text-[12px] uppercase tracking-[0.28em] text-moss-500 font-semibold">
          <span className="w-10 h-px bg-leaf-500 inline-block" />
          Réalisations
        </p>
        <h2 className="mt-5 font-display text-4xl sm:text-5xl font-medium leading-[1.05] text-pine-900">
          La preuve par le chantier, <em className="text-leaf-500">pas par les promesses.</em>
        </h2>
        <p className="mt-5 text-pine-700/85 leading-relaxed">
          Faites glisser le curseur pour comparer l’avant et l’après. Mêmes lieux, mêmes contraintes — tout le reste a changé.
        </p>

        <div className="mt-8 flex flex-col gap-2.5">
          {BEFORE_AFTER.map((b, i) => (
            <button
              key={b.title}
              onClick={() => setIdx(i)}
              className={`text-left px-5 py-4 rounded-xl border transition-all duration-300 ${
                i === idx
                  ? "bg-pine-900 text-sage-50 border-pine-900 shadow-lg shadow-pine-900/20"
                  : "bg-transparent border-pine-900/15 text-pine-800 hover:border-leaf-500/60 hover:bg-sage-200/60"
              }`}
            >
              <span className="font-display font-semibold">{b.title}</span>
              <span className={`block text-xs mt-0.5 ${i === idx ? "text-leaf-300" : "text-pine-700/60"}`}>{b.place}</span>
            </button>
          ))}
        </div>

        <a href="#devis" className="group mt-8 inline-flex items-center gap-3 text-pine-900 font-semibold underline-grow">
          Le prochain avant/après, c’est chez vous
          <ArrowRight className="w-5 h-5 text-leaf-500 transition-transform duration-300 group-hover:translate-x-1.5" />
        </a>
      </div>

      <div className="lg:col-span-8">
        <BeforeAfterSlider key={item.title} item={item} />
      </div>
    </div>
  );
}

/* ------------------- Portfolio ------------------- */

const CATS = ["Tous", "Terrasse", "Jardin", "Balcon", "Rooftop"] as const;

function PortfolioCard({ p, i }: { p: Project; i: number }) {
  const ref = useReveal<HTMLElement>();
  const arched = i === 0;
  return (
    <figure
      ref={ref}
      className="reveal group relative mb-5 break-inside-avoid overflow-hidden bg-pine-900"
      style={{ "--rd": `${(i % 3) * 0.08}s`, borderRadius: arched ? "10rem 10rem 1.25rem 1.25rem" : "1.25rem" } as React.CSSProperties}
    >
      <img
        src={p.img}
        alt={`${p.title} — ${p.cat.toLowerCase()} paysager à ${p.place}`}
        loading="lazy"
        className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06] motion-reduce:group-hover:scale-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-pine-950/85 via-pine-950/10 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

      <span className="absolute top-4 left-4 bg-sage-50/90 text-pine-900 text-[11px] font-semibold uppercase tracking-[0.15em] px-3 py-1.5 rounded-full">
        {p.cat}
      </span>
      <span className="absolute top-4 right-4 text-sage-100/80 text-xs font-medium">{p.year}</span>

      <figcaption className="absolute bottom-0 inset-x-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <h3 className="font-display text-xl font-semibold text-sage-50">{p.title}</h3>
        <p className="mt-1 flex items-center justify-between text-sm text-sage-100/75">
          <span className="flex items-center gap-1.5">
            <PinIcon className="w-4 h-4 text-leaf-300" />
            {p.place}
          </span>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-leaf-300 font-medium">
            {p.surface}
          </span>
        </p>
      </figcaption>
    </figure>
  );
}

function Portfolio() {
  const [cat, setCat] = useState<(typeof CATS)[number]>("Tous");
  const head = useReveal<HTMLDivElement>();
  const list = PROJECTS.filter((p) => cat === "Tous" || p.cat === cat);

  return (
    <div className="mt-24">
      <div ref={head} className="reveal flex flex-wrap items-end justify-between gap-6 mb-8">
        <div>
          <h3 className="font-display text-3xl sm:text-4xl font-medium text-pine-900">
            Quelques jardins dont nous sommes <em className="text-leaf-500">fiers</em>.
          </h3>
          <p className="mt-2 text-pine-700/80">
            {list.length} projet{list.length > 1 ? "s" : ""} · Lausanne &amp; Riviera
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                cat === c
                  ? "bg-pine-900 text-leaf-300 shadow-md"
                  : "bg-sage-200/70 text-pine-800 hover:bg-sage-200 hover:-translate-y-0.5"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
        {list.map((p, i) => (
          <PortfolioCard key={p.title} p={p} i={i} />
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="realisations" className="relative bg-sage-100 noise-overlay scroll-mt-24">
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 py-24">
        <BeforeAfterSection />
        <Portfolio />
      </div>
    </section>
  );
}
