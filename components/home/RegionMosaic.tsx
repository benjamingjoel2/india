import Link from "@/components/ui/Link";
import { colors } from "@/config/site";
import { getContent } from "@/lib/content";
import { getT } from "@/lib/i18n/server";
import { SmartImage } from "@/components/ui/SmartImage";
import { RevealImage } from "@/components/ui/RevealImage";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

/** Asymmetric 12-column mosaic; spans chosen so seven tiles interlock on desktop. */
const layout = [
  "lg:col-span-7 lg:row-span-2 aspect-[4/5] lg:aspect-auto", // north
  "lg:col-span-5 aspect-[4/3] lg:aspect-auto", // rajasthan
  "lg:col-span-5 aspect-[4/3] lg:aspect-auto", // south
  "lg:col-span-4 aspect-[4/3] lg:aspect-auto", // himalaya
  "lg:col-span-4 aspect-[4/3] lg:aspect-auto", // central
  "lg:col-span-4 aspect-[4/3] lg:aspect-auto", // east
  "lg:col-span-12 aspect-[16/9] lg:aspect-auto", // islands
];
const rowHeights = "lg:grid-rows-[clamp(18rem,21vw,32rem)_clamp(18rem,21vw,32rem)_clamp(20rem,24vw,36rem)_clamp(18rem,22vw,34rem)]";

export async function RegionMosaic() {
  const [{ regions }, t] = await Promise.all([getContent(), getT()]);
  return (
    <Section labelledBy="regions-title">
      <Container>
        <SectionHeading
          id="regions-title"
          eyebrow={t("Where to go")}
          title={t("Where to *wander*.")}
          intro={t("Seven regions, each with its own light, food and rhythm. Start with a feeling, and we'll find the places that match it.")}
          action={<ButtonLink href="/where-to-go" variant="secondary">{t("All regions")}</ButtonLink>}
        />
        <div className={cn("grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-12 lg:gap-4", rowHeights)}>
          {regions.map((r, i) => {
            const accent = colors.accents[r.accent];
            return (
              <Reveal
                key={r.slug}
                delay={(i % 3) * 0.08}
                className={cn("group relative overflow-hidden", layout[i], (i === 6 || i === 5) && "sm:col-span-2", i === 0 && "sm:row-span-2 sm:aspect-auto")}
              >
                <div style={{ "--accent": accent.hex } as React.CSSProperties} className="absolute inset-0">
                  <RevealImage className="absolute inset-0">
                    <SmartImage image={r.image} sizes={i === 0 ? "(min-width:1024px) 58vw, 100vw" : "(min-width:1024px) 40vw, 100vw"} zoom />
                  </RevealImage>
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-deep/75 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-accent opacity-0 mix-blend-multiply transition-opacity duration-1000 ease-musafir group-hover:opacity-55 group-focus-within:opacity-55" />
                  <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-accent transition-transform duration-1000 ease-musafir group-hover:scale-x-100 group-focus-within:scale-x-100" />
                </div>
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-ivory md:p-8">
                  <div>
                    <p className="eyebrow text-[0.65rem] opacity-80">
                      {t("{n} destinations", { n: r.destinations.length })}{r.coordinates && <span className="hidden sm:inline"> · [ {r.coordinates} ]</span>}
                    </p>
                    <h3 className={cn("mt-2 font-display", i === 0 ? "text-display-md" : "text-display-sm")}>
                      <Link href={`/where-to-go/${r.slug}`} className="after:absolute after:inset-0">
                        {r.name}
                      </Link>
                    </h3>
                    <p className="mt-2 hidden max-w-md text-sm opacity-0 transition-opacity duration-700 group-hover:opacity-90 md:block">
                      {r.summary}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
