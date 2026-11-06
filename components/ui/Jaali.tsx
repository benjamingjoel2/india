import { cn } from "@/lib/utils";

/** Section divider: a hairline with a small carved-lattice medallion at its center. */
export function JaaliDivider({ className }: { className?: string }) {
  return <hr aria-hidden className={cn("border-0 border-t border-current opacity-20", className)} />;
}

/** Lattice texture panel; tint with a text color class. */
export function JaaliPanel({ className }: { className?: string }) {
  return <div aria-hidden className={cn("jaali-fill pointer-events-none", className)} />;
}

/** Repeating block-print band. */
/** The small jaali mark used in the logo: an arched window holding a lattice star. */
export function JaaliMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 40" className={className} fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden>
      <path d="M2 39V16C2 8 8.5 2 16 2s14 6 14 14v23z" />
      <path d="M16 12 L19 18 L25 21 L19 24 L16 30 L13 24 L7 21 L13 18 Z" strokeWidth="1.1" />
      <circle cx="16" cy="21" r="2" strokeWidth="1" />
      <path d="M6 33h20" strokeWidth="0.9" />
    </svg>
  );
}
