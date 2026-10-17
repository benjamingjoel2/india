import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { colors } from "@/config/site";
import { experiencesInRegion, festivalsInRegion, getRegion, journeysInRegion, regions, staysInRegion } from "@/data";
import { PageHero } from "@/components/sections/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SeasonGrid, SeasonLegend } from "@/components/sections/SeasonGrid";
import { FaqList } from "@/components/sections/FaqList";
import { CardGrid } from "@/components/sections/CardGrid";
import { JourneyCard } from "@/components/cards/JourneyCard";
import { StayCard } from "@/components/cards/StayCard";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { FestivalCard } from "@/components/cards/FestivalCard";
import { SmartImage } from "@/components/ui/SmartImage";
import { Display } from "@/components/ui/Display";
import { Reveal } from "@/components/ui/Reveal";
import { JaaliDivider } from "@/components/ui/Jaali";
import { VerifyFlag } from "@/components/ui/VerifyFlag";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { PlanButton } from "@/components/planner/PlanButton";
import { emphLast, pageMeta } from "@/lib/seo";
import { Carousel } from "@/components/ui/Carousel";

export const dynamicParams = false;

export function generateStaticParams() {
  return regions.map((r) => ({ region: r.slug }));
}

export async function generateMetadata({ params }: PageProps<"/where-to-go/[region]">): Promise<Metadata> {
  const r = getRegion((await params).region);
  if (!r) return {};
  return pageMeta({ title: r.seo.title, description: r.seo.description, path: `/where-to-go/${r.slug}`, image: r.image });
}

export default async function RegionPage({ params }: PageProps<"/where-to-go/[region]">) {
  const region = getRegion((await params).region);
  if (!region) notFound();
  const a = colors.accents[region.accent];
  const journeys = journeysInRegion(region.slug);
  const stays = staysInRegion(region.slug);
  const experiences = experiencesInRegion(region.slug);
  const festivals = festivalsInRegion(region.slug);
  const gallery = region.gallery.filter((g) => g !== region.image);

  return (
    <div style={{ "--accent": a.hex, "--accent-ink": a.ink } as React.CSSProperties}>
      <PageHero
        accent={region.accent}
        title={region.headline}
        eyebrow={region.coordinates ? `${region.name} · [ ${region.coordinates} ]` : region.name}
        intro={region.summary}
        image={region.image}
        breadcrumbs={[
          { label: "Where to go", href: "/where-to-go" },
          { label: region.name, href: `/where-to-go/${region.slug}` },
        ]}
      >
        <PlanButton variant="primary" preset={{ regions: [region.slug] }}>
          Plan a {region.navLabel} journey
        </PlanButton>
      </PageHero>

      {/* Overview + highlights */}
      <Section labelledBy="overview-title">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <h2 id="overview-title" className="eyebrow mb-6 font-sans text-stone">Overview</h2>
              <div className="space-y-6 text-lede text-charcoal/85 first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-7xl first-letter:leading-[0.85] first-letter:text-accent">
                {region.overview.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-5">
              <div className="jaali-frame p-8 md:p-10">
                <h2 className="font-display text-display-sm">Highlights</h2>
                <ul className="mt-6 space-y-6">
                  {region.highlights.map((h) => (
                    <li key={h.title} className="flex gap-4">
                      <span aria-hidden className="mt-2 size-2 shrink-0 rotate-45 bg-accent" />
                      <div>
                        <h3 className="font-display text-lg">{h.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-charcoal/75">{h.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
          {gallery.length > 1 && (
            <div className="mt-20 grid grid-cols-2 gap-3 md:grid-cols-3">
              {gallery.slice(0, 3).map((g, i) => (
                <Reveal key={g + i} delay={i * 0.08} className={i === 0 ? "relative col-span-2 aspect-[16/10] overflow-hidden md:col-span-2 md:row-span-2 md:aspect-auto" : "relative aspect-[4/3] overflow-hidden"}>
                  <SmartImage image={g} sizes="(min-width:768px) 40vw, 50vw" />
                </Reveal>
              ))}
            </div>
          )}
        </Container>
      </Section>

      {/* Destinations */}
      <Section tone="deep" labelledBy="dest-title">
        <Container>
          <SectionHeading id="dest-title" eyebrow="Destinations" title="The places we *love*." />
          <ul className="grid gap-x-10 gap-y-12 md:grid-cols-2">
            {region.destinations.map((d, i) => (
              <Reveal as="li" key={d.slug} delay={(i % 2) * 0.08}>
                <article id={d.slug} className="grid scroll-mt-32 gap-6 sm:grid-cols-[10rem_1fr]">
                  <div className="relative aspect-square overflow-hidden bg-accent/30">
                    {d.image ? <SmartImage image={d.image} sizes="10rem" /> : <div aria-hidden className="jaali-fill absolute inset-0 text-accent opacity-60" />}
                  </div>
                  <div>
                    <h3 className="font-display text-display-xs">{d.name}</h3>
                    <p className="mt-2 text-charcoal/80">{d.summary}</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {d.knownFor.map((k) => (
                        <li key={k} className="rounded-full border border-charcoal/15 px-3 py-1 text-xs text-charcoal/75">
                          {k}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Best time */}
      <Section labelledBy="time-title">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <Display id="time-title" size="md">When to *go*.</Display>
              <p className="mt-5 text-charcoal/80">{region.bestTime.summary}</p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <VerifyFlag>Verify seasons each year</VerifyFlag>
                <Link href="/when-to-go" className="text-sm underline underline-offset-4">Month-by-month guide</Link>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-8">
              <SeasonGrid calendar={region.bestTime.calendar} label={`Best time to visit ${region.name}`} />
              <SeasonLegend className="mt-5" />
            </Reveal>
          </div>
        </Container>
      </Section>

      {journeys.length > 0 && (
        <Section tone="deep" labelledBy="rj-title">
          <Container>
            <SectionHeading id="rj-title" eyebrow="Journeys" title={emphLast(`Journeys through ${region.name.replace(/^The /, "the ")}.`)} />
            <CardGrid cols={journeys.length % 4 === 0 ? 4 : 3}>
              {journeys.map((j) => (
                <JourneyCard key={j.slug} journey={j} />
              ))}
            </CardGrid>
          </Container>
        </Section>
      )}

      {stays.length > 0 && (
        <Section labelledBy="rs-title">
          <Container>
            <SectionHeading id="rs-title" eyebrow="Where to stay" title="Rooms we *recommend*." />
            <CardGrid cols={3}>
              {stays.map((s) => (
                <StayCard key={s.slug} stay={s} />
              ))}
            </CardGrid>
          </Container>
        </Section>
      )}

      {experiences.length > 0 && (
        <Section tone="deep" labelledBy="re-title">
          <Container>
            <SectionHeading id="re-title" eyebrow="Experiences" title="Things worth *doing* here." />
            <Carousel label={`Experiences in ${region.name}`}>
              {experiences.map((e) => (
                <ExperienceCard key={e.slug} experience={e} />
              ))}
            </Carousel>
          </Container>
        </Section>
      )}

      {festivals.length > 0 && (
        <Section labelledBy="rf-title">
          <Container>
            <SectionHeading id="rf-title" eyebrow="Festivals" title="Worth timing your *trip* for." action={<VerifyFlag>Dates vary yearly</VerifyFlag>} />
            <CardGrid cols={3}>
              {festivals.map((f) => (
                <FestivalCard key={f.slug} festival={f} />
              ))}
            </CardGrid>
          </Container>
        </Section>
      )}

      <Section tone={festivals.length > 0 ? "deep" : "ivory"} labelledBy="rfaq-title">
        <Container className="max-w-5xl">
          <Display id="rfaq-title" size="md" className="mb-10">Good to *know*.</Display>
          <FaqList items={region.faqs} />
          <JaaliDivider className="mt-20 text-charcoal" />
        </Container>
      </Section>

      <FinalCTA image={gallery[0] ?? region.image} title={`Your ${region.navLabel} journey *starts* here.`} />
    </div>
  );
}
