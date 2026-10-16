"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Journey, MonthKey, RegionSlug } from "@/data/types";
import { JourneyCard } from "@/components/cards/JourneyCard";
import { useCurrency } from "@/lib/currency";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface Option<T extends string = string> {
  value: T;
  label: string;
}

const dayBands: (Option & { min: number; max: number })[] = [
  { value: "short", label: "Up to 9 days", min: 0, max: 9 },
  { value: "mid", label: "10–13 days", min: 10, max: 13 },
  { value: "long", label: "14+ days", min: 14, max: 99 },
];

const budgetBands = [
  { value: "under-3500", min: 0, max: 3500 },
  { value: "3500-5000", min: 3500, max: 5000 },
  { value: "over-5000", min: 5000, max: Infinity },
];

type Filters = { region: string; days: string; style: string; budget: string; month: string };
const empty: Filters = { region: "", days: "", style: "", budget: "", month: "" };

export function JourneyFilters({
  journeys,
  regions,
  styles,
  months,
}: {
  journeys: Journey[];
  regions: Option<RegionSlug>[];
  styles: Option[];
  months: Option<MonthKey>[];
}) {
  const [f, setF] = useState<Filters>(empty);
  const { format } = useCurrency();

  // Read initial filters from the URL (?region=rajasthan&month=nov) and keep it in sync.
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    setF({ region: p.get("region") ?? "", days: p.get("days") ?? "", style: p.get("style") ?? "", budget: p.get("budget") ?? "", month: p.get("month") ?? "" });
  }, []);
  useEffect(() => {
    const p = new URLSearchParams();
    Object.entries(f).forEach(([k, v]) => v && p.set(k, v));
    const qs = p.toString();
    window.history.replaceState(null, "", qs ? `?${qs}` : window.location.pathname);
  }, [f]);

  const results = useMemo(
    () =>
      journeys.filter((j) => {
        if (f.region && !j.regions.includes(f.region as RegionSlug)) return false;
        if (f.style && !j.styles.includes(f.style as Journey["styles"][number])) return false;
        if (f.month && !j.bestMonths.includes(f.month as MonthKey)) return false;
        if (f.days) {
          const b = dayBands.find((d) => d.value === f.days)!;
          if (j.days < b.min || j.days > b.max) return false;
        }
        if (f.budget) {
          const b = budgetBands.find((d) => d.value === f.budget)!;
          if (j.priceFromUSD < b.min || j.priceFromUSD >= b.max) return false;
        }
        return true;
      }),
    [journeys, f],
  );

  const budgetOptions: Option[] = budgetBands.map((b) => ({
    value: b.value,
    label: b.max === Infinity ? `From ${format(b.min)}` : b.min === 0 ? `Under ${format(b.max)}` : `${format(b.min)}–${format(b.max)}`,
  }));

  const active = Object.values(f).filter(Boolean).length;

  return (
    <div>
      <div className="sticky top-16 z-20 -mx-4 border-y border-charcoal/10 bg-ivory/95 px-4 py-4 backdrop-blur md:mx-0 md:px-0">
        <form className="grid grid-cols-2 gap-3 md:grid-cols-6" aria-label="Filter journeys" onSubmit={(e) => e.preventDefault()}>
          <FilterSelect label="Region" value={f.region} onChange={(v) => setF({ ...f, region: v })} options={regions} />
          <FilterSelect label="Length" value={f.days} onChange={(v) => setF({ ...f, days: v })} options={dayBands} />
          <FilterSelect label="Style" value={f.style} onChange={(v) => setF({ ...f, style: v })} options={styles} />
          <FilterSelect label="Budget per person" value={f.budget} onChange={(v) => setF({ ...f, budget: v })} options={budgetOptions} />
          <FilterSelect label="Month" value={f.month} onChange={(v) => setF({ ...f, month: v })} options={months} />
          <div className="flex items-end">
            <button
              type="button"
              onClick={() => setF(empty)}
              disabled={!active}
              className="min-h-11 w-full rounded-full border border-charcoal/25 px-4 text-sm disabled:opacity-40"
            >
              Clear{active ? ` (${active})` : ""}
            </button>
          </div>
        </form>
      </div>
      <p aria-live="polite" className="mt-8 mb-10 text-sm text-stone">
        {results.length} {results.length === 1 ? "journey" : "journeys"} · every one can be tailored
      </p>
      {results.length === 0 ? (
        <div className="py-20 text-center">
          <p className="font-display text-display-sm">Nothing quite matches.</p>
          <p className="mt-3 text-charcoal/75">That doesn&rsquo;t mean we can&rsquo;t plan it. Every journey here is a starting point.</p>
        </div>
      ) : (
        <motion.ul layout className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {results.map((j) => (
              <motion.li
                layout
                key={j.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease }}
              >
                <JourneyCard journey={j} sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      )}
    </div>
  );
}

function FilterSelect({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: Option[] }) {
  const id = `filter-${label.toLowerCase().replace(/\W+/g, "-")}`;
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="eyebrow mb-1.5 text-[0.62rem] text-stone">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn("min-h-11 w-full appearance-none rounded-none border-b bg-transparent pr-6 text-sm outline-none", value ? "border-indigo font-medium" : "border-charcoal/25")}
      >
        <option value="">Any</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}
