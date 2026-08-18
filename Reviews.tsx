import { useEffect, useState } from "react";
import { REVIEWS } from "../data";
import { GoogleG, QuoteIcon, StarIcon } from "./Icons";
import { usePrefersReducedMotion, useReveal } from "../hooks";

const GOOGLE_URL = "https://www.google.com/search?q=Design+%26+Concept+V%C3%A9g%C3%A9tal+Pully+avis";

function Stars({ n = 5, className = "w-4 h-4" }: { n?: number; className?: string }) {
  return (
    <span className="inline-flex gap-0.5 text-ochre-400">
      {[...Array(5)].map((_, i) => (
        <StarIcon key={i} className={className} filled={i < n} />
      ))}
    </span>
  );
}

function FeaturedReview() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = usePrefersReducedMotion();
  const featured = REVIEWS.slice(0, 4);
  const r = featured[idx];

  useEffect(() => {
    if (paused || reduced) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % featured.length), 6000);
    return () => clearInterval(t);
  }, [paused, reduced, featured.length]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative mt-14 bg-pine-800/70 border border-sage-100/10 rounded-[1.5rem] p-8 sm:p-12 overflow-hidden"
    >
      <QuoteIcon className="absolute -top-3 -left-2 w-28 h-28 text-leaf-400/10" />
      <div key={idx} className="fade-in-anim relative">
        <Stars className="w-5 h-5" n={r.stars} />
        <blockquote className="mt-5 font-display text-2xl sm:text-[1.9rem] leading-snug text-sage-50 max-w-3xl">
          « {r.text} »
        </blockquote>
        <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2">
          <p className="font-semibold text-leaf-300">{r.name}</p>
          <p className="text-sm text-sage-100/60">{r.place} · {r.date}</p>
          <span className="text-xs bg-pine-900 text-sage-100/80 px-3 py-1.5 rounded-full">{r.project}</span>
        </div>
      </div>

      {/* navigation */}
      <div className="mt-8 flex items-center gap-4">
        <div className="flex gap-2">
          {featured.map((_, i) => (
            <button
              key={i}
              aria-label={`Avis ${i + 1}`}
              onClick={() => setIdx(i)}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === idx ? "w-8 bg-leaf-400" : "w-2 bg-sage-100/25 hover:bg-sage-100/50"
              }`}
            />
          ))}
        </div>
        <div className="flex-1 h-px bg-sage-100/10 overflow-hidden rounded">
          <div
            key={`bar-${idx}`}
            className="h-full bg-leaf-400/70 origin-left motion-reduce:scale-x-100"
            style={{ animation: paused || reduced ? "none" : "growBar 6s linear forwards" }}
          />
        </div>
      </div>
    </div>
  );
}

function ReviewCard({ r, i }: { r: (typeof REVIEWS)[number]; i: number }) {
  const ref = useReveal<HTMLElement>();
  return (
    <article
      ref={ref}
      className="reveal bg-pine-800/50 border border-sage-100/8 rounded-[1.25rem] p-6 flex flex-col gap-4 transition-all duration-500 hover:-translate-y-1.5 hover:border-leaf-400/40 hover:bg-pine-800"
      style={{ "--rd": `${(i % 3) * 0.1}s` } as React.CSSProperties}
    >
      <div className="flex items-center justify-between">
        <Stars n={r.stars} />
        <span className="bg-sage-50 rounded-full p-1">
          <GoogleG className="w-4 h-4" />
        </span>
      </div>
      <p className="text-sm text-sage-100/80 leading-relaxed flex-1">« {r.text} »</p>
      <div className="pt-4 border-t border-sage-100/8 flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-sage-50">{r.name}</p>
          <p className="text-xs text-sage-100/50 mt-0.5">{r.place} · {r.date}</p>
        </div>
        <span className="text-[11px] bg-pine-900 text-leaf-300 px-2.5 py-1 rounded-full whitespace-nowrap">{r.project}</span>
      </div>
    </article>
  );
}

export default function Reviews() {
  const head = useReveal<HTMLDivElement>();
  return (
    <section id="avis" className="relative bg-pine-950 text-sage-100 noise-overlay scroll-mt-24">
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 py-24">
        <div ref={head} className="reveal grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <p className="flex items-center gap-3 text-[12px] uppercase tracking-[0.28em] text-leaf-300 font-semibold">
              <span className="w-10 h-px bg-leaf-400 inline-block" />
              Avis clients
            </p>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl font-medium leading-[1.05] text-sage-50">
              Nos clients en parlent <em className="text-leaf-300">mieux que nous.</em>
            </h2>
          </div>

          {/* Résumé Google */}
          <div className="lg:col-span-5 flex sm:items-center gap-5 bg-pine-800/70 border border-sage-100/10 rounded-[1.25rem] p-5 sm:p-6">
            <span className="bg-sage-50 rounded-2xl p-3 shrink-0">
              <GoogleG className="w-8 h-8" />
            </span>
            <div className="flex-1">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-4xl font-semibold text-sage-50">4,9</span>
                <span className="text-sage-100/50 text-sm">/ 5</span>
              </div>
              <Stars className="w-3.5 h-3.5" />
              <p className="text-xs text-sage-100/60 mt-1">Basé sur 47 avis Google</p>
            </div>
            <a
              href={GOOGLE_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex text-xs font-semibold text-leaf-300 border border-leaf-400/40 px-4 py-2.5 rounded-full hover:bg-leaf-400 hover:text-pine-950 transition-colors duration-300"
            >
              Voir sur Google
            </a>
          </div>
        </div>

        <FeaturedReview />

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.slice(3).map((r, i) => (
            <ReviewCard key={r.name} r={r} i={i} />
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-sage-100/50">
          Chaque avis correspond à un chantier réel, vérifiable sur demande — références locales à Pully, Lutry, Montreux…
        </p>
      </div>
    </section>
  );
}
