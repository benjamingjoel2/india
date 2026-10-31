"use client";

import Link from "@/components/ui/Link";
import type { Journey, RegionSlug } from "@/data/types";
import { useT } from "@/components/i18n/LocaleProvider";
import { SmartImage } from "@/components/ui/SmartImage";
import { Price } from "@/components/ui/Price";
import { Arrow } from "@/components/ui/Button";

export function JourneyCard({ journey, sizes = "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" }: { journey: Journey; sizes?: string }) {
  const t = useT();
  const labels: Record<RegionSlug, string> = {
    north: t("North"),
    rajasthan: t("Rajasthan"),
    south: t("South"),
    himalaya: t("Himalaya"),
    "central-india": t("Central India"),
    "east-northeast": t("East & Northeast"),
    islands: t("Islands"),
  };
  const regionNames = journey.regions.map((r) => labels[r]).filter(Boolean).join(" · ");
  return (
    <article className="group relative flex h-full flex-col">
      <div className="relative aspect-[4/5] overflow-hidden bg-ivory-deep">
        <SmartImage image={journey.image} sizes={sizes} zoom />
        <div className="absolute top-4 left-4 rounded-full bg-ivory/90 px-3 py-1 text-xs font-medium tracking-wide text-charcoal backdrop-blur">
          {t("{n} days", { n: journey.days })}
        </div>
      </div>
      <div className="flex flex-1 flex-col pt-6">
        <p className="eyebrow text-[0.68rem] text-stone">{regionNames}</p>
        <h3 className="mt-3 font-display text-display-xs">
          <Link href={`/journeys/${journey.slug}`} className="after:absolute after:inset-0">
            {journey.title}
          </Link>
        </h3>
        <ul className="mt-4 space-y-1.5 text-[0.92rem] text-charcoal/80">
          {journey.highlights.slice(0, 4).map((h) => (
            <li key={h} className="flex gap-2.5">
              <span aria-hidden className="mt-[0.55em] inline-block size-1 shrink-0 rotate-45 bg-marigold" />
              {h}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex items-end justify-between gap-4 border-t border-charcoal/15 pt-5 mt-6">
          <p className="text-sm">
            <span className="block text-xs text-stone">{t("From")}</span>
            <Price usd={journey.priceFromUSD} className="font-display text-xl" /> <span className="text-xs text-stone">{t("per person")}</span>
          </p>
          <span className="flex items-center gap-2 text-sm font-medium">
            {t("View journey")} <Arrow className="transition-transform duration-700 ease-musafir group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </article>
  );
}
