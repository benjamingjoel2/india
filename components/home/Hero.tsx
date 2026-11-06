import Link from "@/components/ui/Link";
import { getT } from "@/lib/i18n/server";
import { msg } from "@/lib/i18n/config";
import { Emph } from "@/components/ui/Display";
import { Marquee } from "@/components/ui/Marquee";
import { SmartImage } from "@/components/ui/SmartImage";
import { PlanButton } from "@/components/planner/PlanButton";
import type { ImageKey } from "@/data/images";

/** Three postcards from different corners of the country, slightly turned like a desk spread. */
const postcards: { image: ImageKey; place: string; caption: string; pos: string }[] = [
  { image: "varanasi-ghats", place: msg("Varanasi"), caption: msg("First light on the Ganges"), pos: "left-0 top-[6%] w-[54%] -rotate-[4deg] z-10" },
  { image: "amber-fort", place: msg("Jaipur"), caption: msg("Amber Fort at golden hour"), pos: "right-0 top-0 w-[50%] rotate-[3deg] z-20" },
  { image: "kerala-canoe", place: msg("Kerala"), caption: msg("A canal at sunrise"), pos: "left-[22%] bottom-0 w-[52%] rotate-[-1.5deg] z-30" },
];

export async function Hero({ stats }: { stats: string[] }) {
  const t = await getT();
  return (
    <>
      <section aria-labelledby="hero-title" className="relative overflow-hidden bg-indigo-deep text-ivory">
        <div className="page-x relative mx-auto grid w-full max-w-page items-center gap-14 pt-36 pb-20 md:pb-24 lg:min-h-[92svh] lg:grid-cols-12 lg:gap-10">
          <div className="animate-rise lg:col-span-6">
            <p className="max-w-sm font-display text-lg leading-snug text-ivory/85 italic">
              {t("Tailor-made journeys across India, planned by people who know it personally.")}
            </p>
            <h1 id="hero-title" className="mt-8 font-display text-[clamp(2.9rem,6.2vw,6rem)] leading-[0.95] font-[300] tracking-[-0.03em]">
              {t("India,")}
              <br />
              <Emph>{t("beautifully *planned*.")}</Emph>
            </h1>
            <p className="mt-8 max-w-lg text-lede text-ivory/85">
              {t("From first light on the Ganges to a fort turning gold at dusk: one specialist, guides we trust, and every detail known personally.")}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <PlanButton variant="accent" />
              <Link href="/journeys" className="link-underline text-[0.95rem] text-ivory/90">
                {t("Explore journeys")}
              </Link>
            </div>
          </div>

          <div className="relative mx-auto aspect-[10/9] w-full max-w-[34rem] lg:col-span-6 lg:max-w-none" >
            {postcards.map((p, i) => (
              <figure key={p.image} className={`absolute bg-ivory p-2.5 pb-0 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.6)] sm:p-3 sm:pb-0 ${p.pos}`}>
                <div className="relative aspect-[4/3] overflow-hidden bg-indigo">
                  <SmartImage image={p.image} priority={i === 0} sizes="(min-width: 1024px) 26vw, 50vw" />
                </div>
                <figcaption className="flex items-baseline justify-between gap-3 py-2.5 text-charcoal sm:py-3">
                  <span className="eyebrow text-[0.62rem] sm:text-[0.7rem]">{t(p.place)}</span>
                  <span className="hidden truncate font-display text-sm italic text-charcoal/75 sm:inline">{t(p.caption)}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <Marquee items={stats} className="border-y border-ivory/10 bg-indigo-deep py-4 text-[0.78rem] tracking-[0.2em] text-ivory/80 uppercase" />
    </>
  );
}
