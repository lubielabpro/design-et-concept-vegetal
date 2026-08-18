type IconProps = { className?: string };

const S = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function LeafMark({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <path d="M16 28C8 22 6 14 8 6c8 1 14 5 15 12 .5 4-2 8-7 10z" fill="currentColor" opacity="0.9" />
      <path d="M16 28C13 20 12 13 14 8" stroke="var(--color-pine-950)" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      <path d="M13.6 17.5c1.6.4 3 .3 4.6-.6M13.2 13.2c1.3.4 2.4.3 3.6-.3" stroke="var(--color-pine-950)" strokeWidth="1.1" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function Sprout({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...S} aria-hidden>
      <path d="M12 21v-8" />
      <path d="M12 13c0-4.5 3-7 8-7 0 4.5-3 7-8 7z" />
      <path d="M12 10.5C12 7.5 10 5.5 5.5 5.5c0 3.5 2 5.5 6.5 5.5" />
      <path d="M7 21h10" />
    </svg>
  );
}

export function PhoneIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...S} aria-hidden>
      <path d="M5 4h4l1.5 4.5-2.2 1.6a13 13 0 0 0 5.6 5.6l1.6-2.2L20 15v4a1.8 1.8 0 0 1-2 1.8C10 20 4 14 3.2 6A1.8 1.8 0 0 1 5 4z" />
    </svg>
  );
}

export function ArrowRight({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...S} aria-hidden>
      <path d="M4 12h16M14 6l6 6-6 6" />
    </svg>
  );
}

export function StarIcon({ className = "w-4 h-4", filled = true }: IconProps & { filled?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M12 2.6l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.5l-5.9 3.1 1.2-6.5-4.8-4.6 6.6-.9z"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GoogleG({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M21.6 12.2c0-.7-.06-1.4-.18-2H12v3.9h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.4z" fill="#4285F4" />
      <path d="M12 21.5c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1a5.9 5.9 0 0 1-5.6-4.1H3.1v2.6A9.9 9.9 0 0 0 12 21.5z" fill="#34A853" />
      <path d="M6.4 13.5a6 6 0 0 1 0-3.8V7.1H3.1a9.9 9.9 0 0 0 0 9z" fill="#FBBC05" />
      <path d="M12 6.4c1.5 0 2.8.5 3.8 1.5l2.9-2.9A9.9 9.9 0 0 0 3.1 7.1l3.3 2.6A5.9 5.9 0 0 1 12 6.4z" fill="#EA4335" />
    </svg>
  );
}

export function RulerIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...S} aria-hidden>
      <path d="M3 16.5 16.5 3 21 7.5 7.5 21z" />
      <path d="m6.8 12.7 1.6 1.6M9.6 9.9l1.6 1.6M12.4 7.1 14 8.7M15.2 4.3l1.6 1.6" />
    </svg>
  );
}

export function DropIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...S} aria-hidden>
      <path d="M12 3.5s6 6.6 6 11a6 6 0 0 1-12 0c0-4.4 6-11 6-11z" />
      <path d="M9.5 14.5a2.5 2.5 0 0 0 2.5 2.5" />
    </svg>
  );
}

export function BulbIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...S} aria-hidden>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 1 3.6 10.8c-.7.6-1.1 1.3-1.1 2.2h-5c0-.9-.4-1.6-1.1-2.2A6 6 0 0 1 12 3z" />
    </svg>
  );
}

export function ShearsIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...S} aria-hidden>
      <circle cx="6" cy="6.5" r="2.5" />
      <circle cx="6" cy="17.5" r="2.5" />
      <path d="M8.2 7.8 20 19M8.2 16.2 20 5" />
    </svg>
  );
}

export function LayersIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...S} aria-hidden>
      <path d="m12 3 9 5-9 5-9-5z" />
      <path d="m3.5 12.5 8.5 4.7 8.5-4.7M3.5 16.5 12 21l8.5-4.5" />
    </svg>
  );
}

export function CheckIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...S} aria-hidden>
      <path d="m4.5 12.5 5 5 10-11" />
    </svg>
  );
}

export function PinIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...S} aria-hidden>
      <path d="M12 21s7-6.1 7-11.5a7 7 0 1 0-14 0C5 14.9 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.4" />
    </svg>
  );
}

export function ClockIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...S} aria-hidden>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function MailIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...S} aria-hidden>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4.5 7.5 7.5 6 7.5-6" />
    </svg>
  );
}

export function InstagramIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...S} aria-hidden>
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="16.8" cy="7.2" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function QuoteIcon({ className = "w-8 h-8" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden>
      <path d="M13 8v6c0 5.5-3 9-8.5 10l-1-2.5C6.5 20.4 8 18.6 8.3 16H4V8h9zm15 0v6c0 5.5-3 9-8.5 10l-1-2.5C21.5 20.4 23 18.6 23.3 16H19V8h9z" />
    </svg>
  );
}

export function PlusIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...S} aria-hidden>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}
