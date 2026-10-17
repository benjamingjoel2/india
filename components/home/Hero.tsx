import { brand } from "@/config/site";
import { ButtonLink } from "@/components/ui/Button";
import { GridLines } from "@/components/ui/GridLines";
import { Marquee } from "@/components/ui/Marquee";
import { PlanButton } from "@/components/planner/PlanButton";
import { HeroFilm } from "./HeroFilm";

const frames = [
  { image: "varanasi-ghats", place: "Varanasi", caption: "First light on the Ganges" },
  { image: "amber-fort", place: "Jaipur", caption: "Amber Fort at golden hour" },
  { image: "kerala-canoe", place: "Kerala", caption: "A canal at sunrise" },
  { image: "ladakh-road", place: "Ladakh", caption: "The road to Nubra" },
] as const;

export function Hero({ stats }: { stats: string[] }) {
  return (
    <>
      <section aria-labelledby="hero-title" className="relative flex min-h-[100svh] flex-col overflow-hidden bg-indigo-deep text-ivory">
        <HeroFilm frames={[...frames]} />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-indigo-deep/90 via-indigo-deep/20 to-indigo-deep/50" />
        <GridLines className="text-ivory/[0.07]" />

        <div className="page-x relative mx-auto flex w-full max-w-page flex-1 flex-col justify-end pt-36 pb-32 md:pb-40">
          <div className="animate-rise">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
              <p className="max-w-xs font-display text-lg leading-snug text-ivory/85 italic">
                Tailor-made journeys across India, planned by people who know it personally.
              </p>
              <p className="eyebrow hidden text-ivory/70 md:block">
                {brand.shortName} · {brand.scripts.devanagari} · traveler
              </p>
            </div>
            <h1 id="hero-title" className="font-display text-[clamp(3.4rem,12.5vw,12.5rem)] leading-[0.86] font-[300] tracking-[-0.035em]">
              India,
              <br />
              beautifully <em className="display-em">planned</em>.
            </h1>
            <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <p className="max-w-lg text-lede text-ivory/85">
                From first light on the Ganges to a fort turning gold at dusk: one specialist, guides we trust, and every detail known
                personally.
              </p>
              <div className="flex shrink-0 flex-wrap gap-3">
                <PlanButton variant="accent" />
                <ButtonLink href="/journeys" variant="light">
                  Explore journeys
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Marquee items={stats} className="border-y border-ivory/10 bg-indigo-deep py-4 text-[0.78rem] tracking-[0.2em] text-ivory/80 uppercase" />
    </>
  );
}
