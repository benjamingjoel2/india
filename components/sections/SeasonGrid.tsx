import type { SeasonCalendar, Season } from "@/data/types";
import { monthOrder, monthShort } from "@/data";
import { cn } from "@/lib/utils";

const seasonStyle: Record<Season, { label: string; cls: string }> = {
  peak: { label: "Best", cls: "bg-accent text-accent-ink" },
  good: { label: "Good", cls: "bg-accent/45 text-charcoal" },
  shoulder: { label: "Mixed", cls: "bg-accent/15 text-charcoal" },
  avoid: { label: "Avoid", cls: "bg-transparent text-charcoal/40 border border-dashed border-charcoal/20" },
};

export function SeasonLegend({ className }: { className?: string }) {
  return (
    <ul className={cn("flex flex-wrap gap-4 text-xs", className)}>
      {(Object.keys(seasonStyle) as Season[]).map((s) => (
        <li key={s} className="flex items-center gap-2">
          <span className={cn("inline-block size-3", seasonStyle[s].cls)} />
          {seasonStyle[s].label}
        </li>
      ))}
    </ul>
  );
}

/** 12-month grid tinted with the current --accent. */
export function SeasonGrid({ calendar, compact = false, label }: { calendar: SeasonCalendar; compact?: boolean; label?: string }) {
  return (
    <ol aria-label={label ?? "Best time to visit, month by month"} className={cn("grid grid-cols-6 gap-1 sm:grid-cols-12", compact && "sm:gap-0.5")}>
      {monthOrder.map((m) => {
        const s = seasonStyle[calendar[m]];
        return (
          <li key={m} className={cn("flex flex-col items-center justify-center", compact ? "h-9 text-[0.7rem]" : "h-20 text-sm", s.cls)}>
            <span className="font-medium">{monthShort[m]}</span>
            {!compact && <span className="mt-1 text-[0.65rem] tracking-wide uppercase opacity-80">{s.label}</span>}
            <span className="sr-only">: {s.label}</span>
          </li>
        );
      })}
    </ol>
  );
}
