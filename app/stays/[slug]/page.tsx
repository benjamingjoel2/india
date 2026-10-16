import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getRegion, getStay, journeys, stays, stayTypeLabels } from "@/data";
import { PageHero } from "@/components/sections/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { CardGrid } from "@/components/sections/CardGrid";
import { StayCard } from "@/components/cards/StayCard";
import { JourneyCard } from "@/components/cards/JourneyCard";
import { Container, Section } from "@/components/ui/Section";
import { Display } from "@/components/ui/Display";
import { Reveal } from "@/components/ui/Reveal";
import { Price } from "@/components/ui/Price";
import { PlanButton } from "@/components/planner/PlanButton";
import { pageMeta } from "@/lib/seo";

export const dynamicParams = false;
export const generateStaticParams = () => stays.map((s) => ({ slug: s.slug }));

export async function generateMetadata({ params }: PageProps<"/stays/[slug]">): Promise<Metadata> {
  const s = getStay((await params).slug);
  return s ? pageMeta({ title: s.seo.title, description: s.seo.description, path: `/stays/${s.slug}`, image: s.image }) : {};
}

export default async function StayPage({ params }: PageProps<"/stays/[slug]">) {
  const s = getStay((await params).slug);
  if (!s) notFound();
  const region = getRegion(s.region)!;
  const inJourneys = journeys.filter((j) => j.stays.some((n) => n.staySlug === s.slug));
  const nearby = stays.filter((x) => x.slug !== s.slug && x.region === s.region).concat(stays.filter((x) => x.region !== s.region)).slice(0, 3);
  return (
    <>
      <PageHero
        title={s.name}
        eyebrow={`${stayTypeLabels[s.type]} · ${s.location}`}
        intro={s.summary}
        image={s.image}
        breadcrumbs={[
          { label: "Stays", href: "/stays" },
          { label: s.name, href: `/stays/${s.slug}` },
        ]}
      >
        <div className="flex flex-wrap items-center gap-6">
          <PlanButton variant="accent" preset={{ regions: [s.region], note: `I'd like to stay at ${s.name}.` }}>
            Include this stay
          </PlanButton>
          <p className="text-ivory/85">
            From <Price usd={s.priceFromUSD} className="font-display text-2xl text-ivory" /> per room · night
          </p>
        </div>
      </PageHero>
      <Section>
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <div className="space-y-6 text-lede text-charcoal/85">
                {s.description.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
              <blockquote className="mt-10 border-l border-marigold pl-5 font-display text-display-xs italic text-indigo">
                “{s.whyWeLoveIt}”
                <span className="mt-2 block font-sans text-sm not-italic text-stone">Why we love it</span>
              </blockquote>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-5">
              <div className="jaali-frame p-8">
                <dl className="grid grid-cols-2 gap-6">
                  <div>
                    <dt className="eyebrow text-[0.62rem] text-stone">Type</dt>
                    <dd className="mt-1.5 font-display text-lg">{stayTypeLabels[s.type]}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow text-[0.62rem] text-stone">Rooms</dt>
                    <dd className="mt-1.5 font-display text-lg">{s.rooms}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow text-[0.62rem] text-stone">Region</dt>
                    <dd className="mt-1.5 font-display text-lg">{region.name}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow text-[0.62rem] text-stone">From</dt>
                    <dd className="mt-1.5 font-display text-lg">
                      <Price usd={s.priceFromUSD} /> <span className="text-sm text-stone">/ night</span>
                    </dd>
                  </div>
                </dl>
                <h2 className="mt-8 eyebrow text-[0.62rem] text-stone">Features</h2>
                <ul className="mt-3 space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex gap-3 text-[0.95rem]">
                      <span aria-hidden className="mt-2 size-1.5 shrink-0 rotate-45 bg-marigold" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-4 text-xs text-stone">Placeholder property. Replace with the real hotel, photography and rates.</p>
            </Reveal>
          </div>
        </Container>
      </Section>
      {inJourneys.length > 0 && (
        <Section tone="deep" labelledBy="sj">
          <Container>
            <Display id="sj" size="md" className="mb-12">Journeys that *stay* here.</Display>
            <CardGrid cols={3}>
              {inJourneys.slice(0, 3).map((j) => (
                <JourneyCard key={j.slug} journey={j} />
              ))}
            </CardGrid>
          </Container>
        </Section>
      )}
      <Section labelledBy="sn">
        <Container>
          <Display id="sn" size="md" className="mb-12">More places to *stay*.</Display>
          <CardGrid cols={3}>
            {nearby.map((x) => (
              <StayCard key={x.slug} stay={x} />
            ))}
          </CardGrid>
        </Container>
      </Section>
      <FinalCTA image={s.image} />
    </>
  );
}
