import Link from "@/components/ui/Link";
import type { Stay } from "@/data/types";
import { getContent } from "@/lib/content";
import { getT } from "@/lib/i18n/server";
import { SmartImage } from "@/components/ui/SmartImage";
import { Price } from "@/components/ui/Price";

export async function StayCard({ stay, sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw", aspect = "aspect-[4/3]" }: { stay: Stay; sizes?: string; aspect?: string }) {
  const [{ stayTypeLabels }, t] = await Promise.all([getContent(), getT()]);
  return (
    <article className="group relative">
      <div className={`relative overflow-hidden bg-ivory-deep ${aspect}`}>
        <SmartImage image={stay.image} sizes={sizes} zoom />
      </div>
      <div className="pt-5">
        <p className="eyebrow text-[0.68rem] text-stone">
          {stayTypeLabels[stay.type]} · {stay.location}
        </p>
        <h3 className="mt-2 font-display text-display-xs">
          <Link href={`/stays/${stay.slug}`} className="after:absolute after:inset-0">
            {stay.name}
          </Link>
        </h3>
        <p className="mt-2 text-sm text-charcoal/75">
          {t("From")} <Price usd={stay.priceFromUSD} className="font-medium text-charcoal" /> {t("per room · night")}
        </p>
      </div>
    </article>
  );
}
