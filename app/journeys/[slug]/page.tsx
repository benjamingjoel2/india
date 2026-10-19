import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDestination, getJourney, getRegion, getStay, journeys, monthNames, styleLabels, testimonials } from "@/data";
import { PageHero } from "@/components/sections/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { CardGrid } from "@/components/sections/CardGrid";
import { JourneyCard } from "@/components/cards/JourneyCard";
import { RouteMap } from "@/components/journeys/RouteMap";
import { Container, Section } from "@/components/ui/Section";
import { Display, stripEmphasis } from "@/components/ui/Display";
import { Reveal } from "@/components/ui/Reveal";
import { Price } from "@/components/ui/Price";
import { PlanButton } from "@/components/planner/PlanButton";
import { ButtonLink } from "@/components/ui/Button";
import { contact, siteUrl } from "@/config/site";
import { pageMeta } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return journeys.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }: PageProps<"/journeys/[slug]">): Promise<Metadata> {
  const j = getJourney((await params).slug);
  if (!j) return {};
  return pageMeta({ title: j.seo.title, description: j.seo.description, path: `/journeys/${j.slug}`, image: j.image });
}

export default async function JourneyPage({ params }: PageProps<"/journeys/[slug]">) {
  const journey = getJourney((await params).slug);
  if (!journey) notFound();
  const regionNames = journey.regions.map((r) => getRegion(r)!.name);
  const stops = journey.route.map((s) => getDestination(s)?.name ?? s);
  const related = journeys.filter((j) => j.slug !== journey.slug && j.regions.some((r) => journey.regions.includes(r))).slice(0, 3);
  const quote = testimonials.find((t) => t.journey === journey.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: journey.title,
    description: journey.summary,
    url: `${siteUrl}/journeys/${journey.slug}`,
    itinerary: { "@type": "ItemList", itemListElement: stops.map((s, i) => ({ "@type": "ListItem", position: i + 1, name: s })) },
    offers: { "@type": "Offer", price: journey.priceFromUSD, priceCurrency: "USD", description: "From, per person sharing" },
  };

  const facts = [
    { label: "Length", value: `${journey.days} days` },
    { label: "Regions", value: regionNames.join(", ") },
    { label: "Best months", value: journey.bestMonths.map((m) => monthNames[m].slice(0, 3)).join(" · ") },
    { label: "Style", value: journey.styles.map((s) => styleLabels[s]).join(", ") },
  ];

  return (
    <>
      <PageHero
        title={journey.headline}
        eyebrow={`${journey.title} · ${journey.days} days`}
        intro={journey.summary}
        image={journey.image}
        size="tall"
        breadcrumbs={[
          { label: "Journeys", href: "/journeys" },
          { label: journey.title, href: `/journeys/${journey.slug}` },
        ]}
      >
        <div className="flex flex-wrap items-center gap-6">
          <PlanButton variant="accent" preset={{ regions: journey.regions, styles: journey.styles, note: `I'm interested in “${journey.title}”.` }}>
            Enquire about this journey
          </PlanButton>
          <p className="text-ivory/85">
            From <Price usd={journey.priceFromUSD} className="font-display text-2xl text-ivory" /> per person
          </p>
        </div>
      </PageHero>

      {/* Key facts */}
      <div className="border-b border-charcoal/10 bg-ivory">
        <dl className="page-x mx-auto grid max-w-page grid-cols-2 gap-6 py-8 lg:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label}>
              <dt className="eyebrow text-[0.62rem] text-stone">{f.label}</dt>
              <dd className="mt-1.5 font-display text-lg">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Overview + map */}
      <Section labelledBy="j-overview">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-6">
              <h2 id="j-overview" className="eyebrow mb-6 font-sans text-stone">The journey</h2>
              <div className="space-y-6 text-lede text-charcoal/85">
                {journey.overview.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
              <h3 className="mt-12 font-display text-display-xs">Highlights</h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {journey.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-[0.98rem]">
                    <span aria-hidden className="mt-2 size-1.5 shrink-0 rotate-45 bg-marigold" />
                    {h}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-6">
              <RouteMap stops={stops} />
              <p className="mt-4 text-sm text-stone">Route: {stops.join(" → ")}</p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Itinerary */}
      <Section tone="deep" labelledBy="j-itinerary">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-8">
          <Display id="j-itinerary" size="lg" className="mb-10">Day by *day*.</Display>
          <ol className="relative border-l border-charcoal/20">
            {journey.itinerary.map((d) => (
              <Reveal as="li" key={d.day} className="relative pb-10 pl-8 last:pb-0 md:pl-12">
                <span aria-hidden className="absolute top-2 -left-[5px] size-[9px] rotate-45 bg-marigold" />
                <p className="eyebrow text-stone">
                  Day {d.day} · {d.location}
                </p>
                <h3 className="mt-2 font-display text-display-sm">{d.title}</h3>
                <p className="mt-3 max-w-4xl leading-relaxed text-charcoal/85">{d.description}</p>
                {(d.overnight || d.meals) && (
                  <p className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-stone">
                    {d.overnight && <span>Overnight: {d.overnight}</span>}
                    {d.meals && <span>Meals: {d.meals}</span>}
                  </p>
                )}
              </Reveal>
            ))}
          </ol>
          </div>
          <aside aria-label="Journey summary" className="lg:col-span-4">
            <div className="jaali-frame bg-ivory p-8 lg:sticky lg:top-28">
              <p className="eyebrow text-[0.62rem] text-stone">{journey.title}</p>
              <p className="mt-4 text-sm text-stone">From</p>
              <Price usd={journey.priceFromUSD} className="font-display text-4xl" />
              <p className="text-sm text-stone">per person sharing</p>
              <dl className="mt-6 space-y-3 border-t border-charcoal/15 pt-6 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-stone">Length</dt>
                  <dd>{journey.days} days</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-stone">Route</dt>
                  <dd className="text-right">{stops.join(" · ")}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-stone">Best months</dt>
                  <dd className="text-right">{journey.bestMonths.map((m) => monthNames[m].slice(0, 3)).join(" ")}</dd>
                </div>
              </dl>
              <div className="mt-8 flex flex-col gap-3">
                <PlanButton variant="primary" preset={{ regions: journey.regions, styles: journey.styles, note: `I'm interested in “${journey.title}”.` }}>
                  Enquire about this journey
                </PlanButton>
                <ButtonLink href={contact.whatsappHref} variant="secondary">
                  Ask on WhatsApp
                </ButtonLink>
              </div>
              <p className="mt-5 text-xs text-stone">Every day can be changed. Your specialist shapes the final version with you.</p>
            </div>
          </aside>
          </div>
        </Container>
      </Section>

      {/* Stays & guides */}
      <Section labelledBy="j-stays">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <Display id="j-stays" size="md">Where you&rsquo;ll *sleep*.</Display>
              <table className="mt-8 w-full text-left text-[0.95rem]">
                <caption className="sr-only">Stays each night</caption>
                <thead className="eyebrow text-[0.62rem] text-stone">
                  <tr className="border-b border-charcoal/15">
                    <th scope="col" className="py-3 pr-4 font-medium">Nights</th>
                    <th scope="col" className="py-3 pr-4 font-medium">Place</th>
                    <th scope="col" className="py-3 font-medium">Stay</th>
                  </tr>
                </thead>
                <tbody>
                  {journey.stays.map((s) => {
                    const stay = s.staySlug ? getStay(s.staySlug) : undefined;
                    return (
                      <tr key={s.nights} className="border-b border-charcoal/10 align-top">
                        <td className="py-4 pr-4 whitespace-nowrap text-stone">{s.nights}</td>
                        <td className="py-4 pr-4">{s.location}</td>
                        <td className="py-4">
                          {stay ? (
                            <Link href={`/stays/${stay.slug}`} className="underline decoration-marigold underline-offset-4">
                              {s.name}
                            </Link>
                          ) : (
                            s.name
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-5">
              <div className="jaali-frame p-8 md:p-10">
                <h2 className="font-display text-display-xs">Your guides</h2>
                <p className="mt-4 leading-relaxed text-charcoal/80">{journey.guides}</p>
                <Link href="/our-guides" className="mt-5 inline-block text-sm underline underline-offset-4">
                  Meet our guides
                </Link>
              </div>
              {quote && (
                <figure className="mt-10">
                  <blockquote className="font-display text-display-xs italic text-indigo">“{quote.quote}”</blockquote>
                  <figcaption className="mt-3 text-sm text-stone">
                    {quote.name}, {quote.from} · <span className="text-spice">placeholder testimonial</span>
                  </figcaption>
                </figure>
              )}
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Inclusions & pricing */}
      <Section tone="deep" labelledBy="j-incl">
        <Container>
          <div className="grid gap-14 lg:grid-cols-3">
            <Reveal>
              <h2 id="j-incl" className="font-display text-display-sm">What&rsquo;s included</h2>
              <ul className="mt-6 space-y-3 text-[0.95rem]">
                {journey.inclusions.map((i) => (
                  <li key={i} className="flex gap-3">
                    <svg aria-hidden viewBox="0 0 12 12" className="mt-1 size-3 shrink-0 text-kerala" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M2 6.5l2.5 2.5L10 3.5" />
                    </svg>
                    {i}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display text-display-sm">Not included</h2>
              <ul className="mt-6 space-y-3 text-[0.95rem] text-charcoal/80">
                {journey.exclusions.map((i) => (
                  <li key={i} className="flex gap-3">
                    <span aria-hidden className="mt-2.5 h-px w-3 shrink-0 bg-charcoal/40" />
                    {i}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="bg-indigo p-8 text-ivory md:p-10">
                <h2 className="eyebrow text-ivory/60">Pricing</h2>
                <p className="mt-4">
                  <span className="block text-sm text-ivory/70">From</span>
                  <Price usd={journey.priceFromUSD} className="font-display text-5xl" />
                  <span className="mt-1 block text-sm text-ivory/70">per person sharing</span>
                </p>
                <ul className="mt-6 space-y-2 text-sm text-ivory/80">
                  {journey.pricingNotes.map((n) => (
                    <li key={n}>— {n}</li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col gap-3">
                  <PlanButton variant="accent" preset={{ regions: journey.regions, styles: journey.styles, note: `I'm interested in “${journey.title}”.` }}>
                    Enquire about this journey
                  </PlanButton>
                  <ButtonLink href={contact.whatsappHref} variant="light">
                    Ask on WhatsApp
                  </ButtonLink>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {related.length > 0 && (
        <Section labelledBy="j-related">
          <Container>
            <Display id="j-related" size="md" className="mb-12">You might also *love*.</Display>
            <CardGrid cols={3}>
              {related.map((j) => (
                <JourneyCard key={j.slug} journey={j} />
              ))}
            </CardGrid>
          </Container>
        </Section>
      )}

      <FinalCTA image={journey.image} title={`Make ${stripEmphasis(journey.title).replace(/^The /, "the ")} *yours*.`} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
