import type { Metadata } from "next";
import Link from "next/link";
import { colors } from "@/config/site";
import { regions } from "@/data";
import { PageHero } from "@/components/sections/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SeasonGrid } from "@/components/sections/SeasonGrid";
import { SmartImage } from "@/components/ui/SmartImage";
import { Display } from "@/components/ui/Display";
import { Reveal } from "@/components/ui/Reveal";
import { Container, Section } from "@/components/ui/Section";
import { Arrow } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Where to go in India",
  description: "Explore India region by region: Rajasthan's forts, Kerala's backwaters, the Himalaya, the tiger forests of central India, the Northeast and the Andaman Islands.",
  alternates: { canonical: "/where-to-go" },
};

export default function WhereToGoPage() {
  return (
    <>
      <PageHero
        title="Where to *wander*."
        eyebrow="Where to go"
        intro="India is less a country than a continent of places, each with its own language, food and light. Here's how we think about it."
        image="himachal-meadow"
        breadcrumbs={[{ label: "Where to go", href: "/where-to-go" }]}
        size="tall"
      />
      <Section>
        <Container>
          <ul className="space-y-24 md:space-y-36">
            {regions.map((r, i) => {
              const a = colors.accents[r.accent];
              return (
                <li key={r.slug} style={{ "--accent": a.hex, "--accent-ink": a.ink } as React.CSSProperties}>
                  <Reveal className={cn("grid items-center gap-10 lg:grid-cols-12 lg:gap-16")}>
                    <Link href={`/where-to-go/${r.slug}`} className={cn("group relative block aspect-[4/3] overflow-hidden lg:col-span-7", i % 2 === 1 && "lg:order-2")}>
                      <SmartImage image={r.image} sizes="(min-width:1024px) 58vw, 100vw" zoom />
                      <span aria-hidden className="absolute inset-x-0 bottom-0 h-1.5 bg-accent" />
                    </Link>
                    <div className="lg:col-span-5">
                      <p className="eyebrow flex items-center gap-3 text-stone">
                        <span className="size-2.5 rotate-45 bg-accent" aria-hidden /> {r.name}
                      </p>
                      <Display size="md" className="mt-4">{r.headline}</Display>
                      <p className="mt-5 text-lede text-charcoal/80">{r.summary}</p>
                      <p className="mt-6 text-sm text-charcoal/70">{r.destinations.map((d) => d.name).join(" · ")}</p>
                      <div className="mt-6">
                        <SeasonGrid calendar={r.bestTime.calendar} compact label={`Best months for ${r.name}`} />
                      </div>
                      <Link href={`/where-to-go/${r.slug}`} className="mt-8 inline-flex items-center gap-3 font-medium">
                        Explore {r.name} <Arrow />
                      </Link>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>
      <FinalCTA image="valley-clouds" />
    </>
  );
}
