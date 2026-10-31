"use client";

import { cn } from "@/lib/utils";
import { useT } from "@/components/i18n/LocaleProvider";

/** Small inline flag for content that must be checked each year (dates, rules, seasons). */
export function VerifyFlag({ children, className, tone = "light" }: { children?: React.ReactNode; className?: string; tone?: "light" | "dark" }) {
  const t = useT();
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[0.7rem] font-medium tracking-wide uppercase",
        tone === "dark" ? "border-marigold/50 bg-marigold/10 text-marigold" : "border-spice/40 bg-spice/5 text-spice",
        className,
      )}
    >
      <svg aria-hidden viewBox="0 0 12 12" className="size-3" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="6" cy="6" r="5" />
        <path d="M6 3.2v3.4M6 8.3v.4" />
      </svg>
      {children ?? t("Verify")}
    </span>
  );
}
