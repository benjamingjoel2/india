import { cn } from "@/lib/utils";

/** Section divider: a hairline with a small carved-lattice medallion at its centre. */
export function JaaliDivider({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("flex items-center gap-4 text-current", className)}>
      <span className="h-px flex-1 bg-current opacity-25" />
      <svg viewBox="0 0 64 16" className="h-4 w-16 opacity-60" fill="none" stroke="currentColor" strokeWidth="0.9">
        <path d="M8 8 L12 4 L16 8 L12 12 Z" />
        <path d="M32 1 L36 6 L41 8 L36 10 L32 15 L28 10 L23 8 L28 6 Z" />
        <circle cx="32" cy="8" r="1.6" />
        <path d="M48 8 L52 4 L56 8 L52 12 Z" />
        <path d="M0 8h6M58 8h6" />
      </svg>
      <span className="h-px flex-1 bg-current opacity-25" />
    </div>
  );
}

/** Lattice texture panel; tint with a text colour class. */
export function JaaliPanel({ className }: { className?: string }) {
  return <div aria-hidden className={cn("jaali-fill pointer-events-none", className)} />;
}

/** Repeating block-print band. */
export function BlockPrintBand({ className }: { className?: string }) {
  return <div aria-hidden className={cn("blockprint-band w-full", className)} />;
}

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
