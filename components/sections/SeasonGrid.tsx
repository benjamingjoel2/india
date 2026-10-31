import type { SeasonCalendar, Season } from "@/data/types";
import { monthOrder } from "@/data";
import { getContent } from "@/lib/content";
import { getT } from "@/lib/i18n/server";
import type { Translate } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

const seasonStyles = (t: Translate): Record<Season, { label: string; cls: string }> => ({
  peak: { label: t("Best"), cls: "bg-accent text-accent-ink" },
  good: { label: t("Good"), cls: "bg-accent/45 text-charcoal" },
  shoulder: { label: t("Mixed"), cls: "bg-accent/15 text-charcoal" },
  avoid: { label: t("Avoid"), cls: "bg-transparent text-charcoal/40 border border-dashed border-charcoal/20" },
});

export async function SeasonLegend({ className }: { className?: string }) {
  const seasonStyle = seasonStyles(await getT());
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
export async function SeasonGrid({ calendar, compact = false, label }: { calendar: SeasonCalendar; compact?: boolean; label?: string }) {
  const [{ monthShort }, t] = await Promise.all([getContent(), getT()]);
  const seasonStyle = seasonStyles(t);
  return (
    <ol aria-label={label ?? t("Best time to visit, month by month")} className={cn("grid grid-cols-6 gap-1 sm:grid-cols-12", compact && "sm:gap-0.5")}>
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
