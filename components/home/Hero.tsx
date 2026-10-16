import { brand } from "@/config/site";
import { Display } from "@/components/ui/Display";
import { ButtonLink } from "@/components/ui/Button";
import { PlanButton } from "@/components/planner/PlanButton";
import { Reveal } from "@/components/ui/Reveal";
import { HeroFilm } from "./HeroFilm";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative flex min-h-[100svh] items-end overflow-hidden bg-indigo-deep text-ivory">
      <HeroFilm frames={["varanasi-ghats", "amber-fort", "kerala-canoe", "ladakh-road"]} />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-indigo-deep/85 via-indigo-deep/25 to-indigo-deep/40" />
      <div className="page-x relative mx-auto w-full max-w-page pt-40 pb-16 md:pb-24">
        <Reveal y={36}>
          <p className="eyebrow mb-6 text-ivory/80">Tailor-made journeys across India</p>
          <Display as="h1" size="xl" id="hero-title" className="max-w-5xl">
            India, beautifully *planned*.
          </Display>
          <p className="mt-8 max-w-xl text-lede text-ivory/85">
            From first light on the Ganges to a fort turning gold at dusk, we plan journeys the way we'd
            plan them for a friend: one specialist, guides we trust, and every detail known personally.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <PlanButton variant="accent" />
            <ButtonLink href="/journeys" variant="light">
              Explore journeys
            </ButtonLink>
          </div>
        </Reveal>
        <p className="mt-16 hidden max-w-xs text-xs text-ivory/60 md:block">
          <span className="font-display italic text-ivory/80">{brand.shortName}</span>, Hindi and Urdu for traveler:
          someone on a long, curious journey.
        </p>
      </div>
    </section>
  );
}
