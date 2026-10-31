"use client";

import { currencies, type CurrencyCode } from "@/config/site";
import { useCurrency } from "@/lib/currency";
import { cn } from "@/lib/utils";
import { useT } from "@/components/i18n/LocaleProvider";

export function CurrencySwitcher({ className, id = "currency" }: { className?: string; id?: string }) {
  const t = useT();
  const { currency, setCurrency } = useCurrency();
  return (
    <div className={cn("relative inline-flex items-center", className)}>
      <label htmlFor={id} className="sr-only">
        {t("Display prices in")}
      </label>
      <select
        id={id}
        value={currency}
        onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
        className="cursor-pointer appearance-none rounded-full border border-current/30 bg-transparent py-1.5 pr-7 pl-3 text-[0.8rem] font-medium tracking-wider hover:border-current/70"
      >
        {Object.values(currencies).map((c) => (
          <option key={c.code} value={c.code} className="text-charcoal">
            {c.code} {c.symbol}
          </option>
        ))}
      </select>
      <svg aria-hidden viewBox="0 0 10 6" className="pointer-events-none absolute right-2.5 h-1.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M1 1l4 4 4-4" />
      </svg>
    </div>
  );
}
