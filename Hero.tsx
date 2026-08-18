import { useEffect, useState } from "react";
import { IMG, PHONE, PHONE_HREF, STATS } from "../data";
import { ArrowRight, GoogleG, LeafMark, PhoneIcon, StarIcon } from "./Icons";
import { chFormat, useCountUp, useInView } from "../hooks";

const MARQUEE = [
  "Terrasses & rooftops",
  "Création de jardins",
  "Balcons urbains",
  "Plantation & végétalisation",
  "Éclairage & arrosage",
  "Entretien annuel",
];

function StatItem({ value, suffix, label, decimals = 0, start }: { value: number; suffix: string; label: string; decimals?: number; start: boolean }) {
  const v = useCountUp(value, start, 1700, decimals);
  return (
    <div className="relative pl-5 border-l border-pine-900/15">
      <p className="font-display text-4xl sm:text-5xl font-semibold text-pine-900 tabular-nums">
        {decimals ? v.toFixed(decimals).replace(".", ",") : chFormat(v)}
        <span className="text-leaf-500">{suffix}</span>
      </p>
      <p className="mt-2 text-sm text-pine-700/80 max-w-[190px]">{label}</p>
    </div>
  );
}

export default function Hero() {
  const stats = useInView<HTMLDivElement>(0.3);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 14,
        y: (e.clientY / window.innerHeight - 0.5) * 10,
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="top" className="relative bg-pine-950 text-sage-100 noise-overlay overflow-hidden">
      {/* fond végétal abstrait */}
      <div className="absolute inset-0 botanical-bg pointer-events-none" aria-hidden />
      <svg
        className="absolute -right-24 -top-24 w-[560px] h-[560px] text-leaf-400/10 pointer-events-none"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden
      >
        <path d="M100 190C40 150 25 90 40 30c60 8 105 38 112 90 4 30-15 60-52 70z" stroke="currentColor" strokeWidth="1.2" />
        <path d="M100 190C78 130 70 78 85 40" stroke="currentColor" strokeWidth="1.2" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 pt-32 lg:pt-40 pb-16 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Colonne texte */}
        <div className="lg:col-span-6">
          <p className="fade-in-anim flex items-center gap-3 text-[12px] uppercase tracking-[0.28em] text-leaf-300" style={{ "--d": "0.1s" } as React.CSSProperties}>
            <span className="w-10 h-px bg-leaf-400 inline-block" />
            Paysagiste concepteur · Lausanne — Riviera
          </p>

          <h1 className="mt-6 font-display font-medium text-[13vw] sm:text-6xl lg:text-[4.6rem] leading-[1.02] tracking-tight text-sage-50">
            <span className="line-mask" style={{ "--d": "0.15s" } as React.CSSProperties}>
              <span>Le végétal,</span>
            </span>
            <span className="line-mask" style={{ "--d": "0.3s" } as React.CSSProperties}>
              <span>pensé comme</span>
            </span>
            <span className="line-mask" style={{ "--d": "0.45s" } as React.CSSProperties}>
              <span className="italic text-leaf-300">de l’architecture.</span>
            </span>
          </h1>

          <p className="fade-in-anim mt-6 max-w-xl text-lg text-sage-100/75 leading-relaxed" style={{ "--d": "0.65s" } as React.CSSProperties}>
            Terrasses, balcons, rooftops et jardins d’exception — conçus en 3D puis réalisés sur mesure à{" "}
            <strong className="text-sage-50 font-semibold">Lausanne, Pully et sur toute la Riviera vaudoise</strong>.
          </p>

          <div className="fade-in-anim mt-9 flex flex-wrap items-center gap-4" style={{ "--d": "0.8s" } as React.CSSProperties}>
            <a
              href="#devis"
              className="group inline-flex items-center gap-3 bg-leaf-400 text-pine-950 font-semibold px-7 py-4 rounded-full hover:bg-leaf-300 hover:-translate-y-0.5 transition-all duration-300 shadow-xl shadow-leaf-500/20"
            >
              Devis gratuit sous 48 h
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-3 border border-sage-100/25 text-sage-50 px-7 py-4 rounded-full hover:border-leaf-300 hover:text-leaf-300 transition-colors duration-300"
            >
              <PhoneIcon className="w-5 h-5" />
              {PHONE}
            </a>
          </div>

          {/* preuve sociale */}
          <div className="fade-in-anim mt-10 flex flex-wrap items-center gap-x-8 gap-y-4" style={{ "--d": "0.95s" } as React.CSSProperties}>
            <div className="flex items-center gap-3">
              <span className="bg-sage-50 rounded-full p-1.5">
                <GoogleG className="w-5 h-5" />
              </span>
              <div>
                <span className="flex items-center gap-1 text-ochre-400">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-3.5 h-3.5" />
                  ))}
                  <span className="ml-1.5 text-sage-50 font-semibold text-sm">4,9/5</span>
                </span>
                <p className="text-xs text-sage-100/60 mt-0.5">47 avis Google vérifiés</p>
              </div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-sage-100/15" />
            <div>
              <p className="font-display text-sage-50 font-semibold">Depuis 2016</p>
              <p className="text-xs text-sage-100/60 mt-0.5">250+ jardins &amp; terrasses livrés</p>
            </div>
            <div className="hidden sm:block w-px h-10 bg-sage-100/15" />
            <div>
              <p className="font-display text-sage-50 font-semibold">Garantie 2 ans</p>
              <p className="text-xs text-sage-100/60 mt-0.5">sur toutes nos plantations</p>
            </div>
          </div>
        </div>

        {/* Colonne image */}
        <div className="lg:col-span-6 relative">
          <div
            className="relative mx-auto max-w-[520px] transition-transform duration-300 ease-out will-change-transform"
            style={{ transform: `translate(${mouse.x * -0.4}px, ${mouse.y * -0.4}px)` }}
          >
            <div className="relative rounded-t-full rounded-b-[2rem] overflow-hidden border border-leaf-400/25 shadow-2xl shadow-pine-950">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={IMG.hero}
                  alt="Terrasse paysagère haut de gamme avec vue sur le Léman — réalisation Design & Concept Végétal"
                  className="w-full h-full object-cover animate-kenburns"
                  loading="eager"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-pine-950/50 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-0 right-0 text-center text-xs tracking-[0.2em] uppercase text-sage-100/80">
                Rooftop · Lausanne-Ouchy — 2025
              </p>
            </div>

            {/* badge flottant devis */}
            <div className="absolute -left-4 sm:-left-10 top-1/4 animate-floaty">
              <div className="bg-sage-50 text-pine-900 rounded-2xl px-5 py-4 shadow-xl shadow-pine-950/40 rotate-[-4deg]">
                <p className="font-display font-semibold text-lg leading-none">Devis en 48 h</p>
                <p className="text-xs text-pine-700/70 mt-1.5">gratuit &amp; sans engagement</p>
              </div>
            </div>

            {/* badge note */}
            <div className="absolute -right-3 sm:-right-8 bottom-16">
              <div className="bg-pine-800 border border-leaf-400/30 rounded-2xl px-5 py-4 shadow-xl rotate-[3deg] flex items-center gap-3">
                <span className="text-leaf-400 animate-sway">
                  <LeafMark className="w-8 h-8" />
                </span>
                <div>
                  <p className="font-display text-2xl leading-none text-sage-50">4,9<span className="text-leaf-300 text-base">/5</span></p>
                  <p className="text-[11px] text-sage-100/60 mt-1">note moyenne clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee services */}
      <div className="relative border-y border-leaf-400/15 bg-pine-900/60 py-4 overflow-hidden" aria-hidden>
        <div className="flex w-max animate-marquee gap-0">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center">
              {MARQUEE.map((item) => (
                <span key={`${copy}-${item}`} className="flex items-center gap-6 pr-6 text-sage-100/70">
                  <span className="font-display italic text-lg sm:text-xl whitespace-nowrap">{item}</span>
                  <LeafMark className="w-4 h-4 text-leaf-400 shrink-0" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bandeau chiffres */}
      <div ref={stats.ref} className="relative bg-sage-100 text-pine-900 noise-overlay">
        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 py-14 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {STATS.map((s) => (
            <StatItem key={s.label} {...s} start={stats.inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
