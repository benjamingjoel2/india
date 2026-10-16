"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { MonthGuide, MonthKey, Region, Festival } from "@/data/types";
import { colors } from "@/config/site";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { VerifyFlag } from "@/components/ui/VerifyFlag";
import { Arrow } from "@/components/ui/Button";

type RegionLite = Pick<Region, "slug" | "name" | "accent">;
type FestivalLite = Pick<Festival, "slug" | "name">;

/** Interactive month strip: pick a month, see where's at its best and what's on. */
export function MonthStrip({
  months,
  regions,
  festivals,
  initial,
}: {
  months: MonthGuide[];
  regions: RegionLite[];
  festivals: FestivalLite[];
  initial: MonthKey;
}) {
  const [active, setActive] = useState<MonthKey>(initial);
  const month = months.find((m) => m.key === active)!;
  const best = month.bestRegions.map((s) => regions.find((r) => r.slug === s)).filter(Boolean) as RegionLite[];
  const fests = month.festivals.map((s) => festivals.find((f) => f.slug === s)).filter(Boolean) as FestivalLite[];

  const onKeyDown = (e: React.KeyboardEvent, i: number) => {
    const dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const next = months[(i + dir + months.length) % months.length];
    setActive(next.key);
    document.getElementById(`month-tab-${next.key}`)?.focus();
  };

  return (
    <div>
      <div role="tablist" aria-label="Choose a month" className="no-scrollbar -mx-4 flex overflow-x-auto px-4 md:mx-0 md:grid md:grid-cols-12 md:px-0">
        {months.map((m, i) => {
          const selected = m.key === active;
          return (
            <button
              key={m.key}
              id={`month-tab-${m.key}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls="month-panel"
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(m.key)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={cn(
                "relative min-w-16 shrink-0 border-t py-5 text-center font-display text-lg transition-colors duration-500",
                selected ? "border-ivory text-ivory" : "border-ivory/20 text-ivory/50 hover:text-ivory/85",
              )}
            >
              <span className={cn(selected && "italic")}>{m.name.slice(0, 3)}</span>
              {selected && <motion.span layoutId="month-dot" className="absolute -top-[3px] left-1/2 size-[5px] -translate-x-1/2 rotate-45 bg-marigold" />}
            </button>
          );
        })}
      </div>

      <div id="month-panel" role="tabpanel" aria-labelledby={`month-tab-${active}`} className="min-h-[22rem] pt-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.6, ease }}
            className="grid gap-10 lg:grid-cols-12"
          >
            <div className="lg:col-span-5">
              <h3 className="font-display text-display-md">
                <em className="display-em">{month.name}</em>
              </h3>
              <p className="mt-4 text-lede text-ivory/80">{month.summary}</p>
              <p className="mt-4 text-sm text-ivory/60">{month.weather}</p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <VerifyFlag tone="dark">Seasons and dates vary yearly</VerifyFlag>
              </div>
            </div>
            <div className="lg:col-span-4">
              <p className="eyebrow text-ivory/50">At their best</p>
              <ul className="mt-4 space-y-2">
                {best.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/where-to-go/${r.slug}`} className="group flex items-center gap-3 font-display text-display-xs">
                      <span aria-hidden className="size-2.5 rotate-45" style={{ background: colors.accents[r.accent].hex }} />
                      <span className="group-hover:italic">{r.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              {month.picks.length > 0 && (
                <ul className="mt-6 space-y-1.5 text-sm text-ivory/75">
                  {month.picks.map((p) => (
                    <li key={p}>— {p}</li>
                  ))}
                </ul>
              )}
            </div>
            <div className="lg:col-span-3">
              <p className="eyebrow text-ivory/50">Festivals & events</p>
              <ul className="mt-4 space-y-2">
                {fests.map((f) => (
                  <li key={f.slug}>
                    <Link href={`/festivals/${f.slug}`} className="link-underline font-display text-lg">
                      {f.name}
                    </Link>
                  </li>
                ))}
                {month.otherEvents.slice(0, 4).map((e) => (
                  <li key={e} className="text-sm text-ivory/70">
                    {e}
                  </li>
                ))}
                {fests.length === 0 && month.otherEvents.length === 0 && <li className="text-sm text-ivory/60">A quieter month for festivals.</li>}
              </ul>
              <Link href="/when-to-go" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-marigold">
                Full month-by-month guide <Arrow />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
