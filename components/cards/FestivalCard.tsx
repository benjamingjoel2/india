import Link from "next/link";
import type { Festival } from "@/data/types";
import { monthNames } from "@/data";
import { SmartImage } from "@/components/ui/SmartImage";
import { VerifyFlag } from "@/components/ui/VerifyFlag";

export function FestivalCard({ festival, sizes = "(min-width: 1024px) 33vw, 100vw" }: { festival: Festival; sizes?: string }) {
  return (
    <article className="group relative">
      <div className="relative aspect-[16/10] overflow-hidden bg-ivory-deep">
        <SmartImage image={festival.image} sizes={sizes} zoom />
      </div>
      <div className="pt-5">
        <div className="flex flex-wrap items-center gap-3">
          <p className="eyebrow text-[0.68rem] text-stone">{festival.typicalMonths.map((m) => monthNames[m]).join(" / ")}</p>
          <VerifyFlag>Dates vary</VerifyFlag>
        </div>
        <h3 className="mt-2 font-display text-display-xs">
          <Link href={`/festivals/${festival.slug}`} className="after:absolute after:inset-0">
            {festival.name}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-charcoal/75">{festival.summary}</p>
      </div>
    </article>
  );
}
