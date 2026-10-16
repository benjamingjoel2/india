import { cn } from "@/lib/utils";

/** Small inline flag for content that must be checked each year (dates, rules, seasons). */
export function VerifyFlag({ children = "Verify", className }: { children?: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-spice/40 bg-spice/5 px-2.5 py-0.5 text-[0.7rem] font-medium tracking-wide text-spice uppercase",
        className,
      )}
    >
      <svg aria-hidden viewBox="0 0 12 12" className="size-3" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="6" cy="6" r="5" />
        <path d="M6 3.2v3.4M6 8.3v.4" />
      </svg>
      {children}
    </span>
  );
}
