import Link from "@/components/ui/Link";
import { PageHero } from "@/components/sections/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Container, Section } from "@/components/ui/Section";
import { Display } from "@/components/ui/Display";
import { Reveal } from "@/components/ui/Reveal";
import { JaaliDivider } from "@/components/ui/Jaali";
import { SmartImage } from "@/components/ui/SmartImage";
import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { getT } from "@/lib/i18n/server";
import { msg } from "@/lib/i18n/config";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getT();
  return pageMeta({
    title: t("Responsible travel"),
    description: t("How we travel in India: respectfully, with fair pay for local guides and drivers, money spent in local communities, and ethical wildlife safaris that put animals first."),
    path: "/responsible-travel",
    image: "elephant-forest",
  });
}

const pillars = [
  {
    id: "respect",
    title: msg("Traveling *respectfully*."),
    image: "golden-temple-day" as const,
    points: [
      [msg("Dress for the place"), msg("Shoulders and knees covered at temples, mosques and gurdwaras; a scarf for covering your head where it's asked. We'll brief you before each visit.")],
      [msg("Ask before you photograph"), msg("People are not scenery. Our guides help you ask, and some moments (cremations at Varanasi's ghats, prayers in progress) aren't photographed at all.")],
      [msg("Learn a few words"), msg("Namaste, shukriya, dhanyavaad. A little effort goes a very long way, and our guides love to teach.")],
      [msg("Small groups, real time"), msg("Private journeys mean no coach parties at the gate, and time to stop when someone invites you in for chai.")],
    ],
  },
  {
    id: "community",
    title: msg("Supporting local *communities*."),
    image: "spice-bowls" as const,
    points: [
      [msg("Fair pay, on time"), msg("Guides, drivers and hosts are paid fairly and promptly, with clear tipping guidance so nobody is left guessing.")],
      [msg("Locally owned first"), msg("We favor family-run havelis, homestays and lodges that employ and buy from their neighbors.")],
      [msg("Craft at its source"), msg("Block printers, weavers and potters are visited in their workshops, at a fair price, with no commission-driven shopping stops.")],
      [msg("Giving back, quietly"), msg("Rather than add a charity surcharge, we spend where it does the most good: with local guides, family-run stays and craft workshops. If you would like to support a community or conservation project on your journey, your specialist will help you find one that is well run and genuinely local.")],
    ],
  },
  {
    id: "wildlife",
    title: msg("Wildlife safari *ethics*."),
    image: "tiger" as const,
    points: [
      [msg("The animal comes first"), msg("No baiting, no chasing, no crowding a tiger at a waterhole. If a sighting turns into a traffic jam, we move on.")],
      [msg("Licensed naturalists only"), msg("Every drive is with park-registered guides and a naturalist who reads tracks, alarm calls and the forest itself.")],
      [msg("Permits booked properly"), msg("Safari permits are booked through official park systems, often months ahead. Zones and closure dates change, and we check each season.")],
      [msg("No elephant rides"), msg("We don't include elephant rides or performances. We do love watching elephants be elephants, from a respectful distance.")],
    ],
  },
];

export default async function ResponsibleTravelPage() {
  const t = await getT();
  return (
    <>
      <PageHero
        title={t("Travel that leaves India *better*.")}
        eyebrow={t("Responsible travel")}
        intro={t("We'd like every journey to be as good for the people and places you visit as it is for you. That starts with how we plan, who we work with and what we choose not to do.")}
        image="elephant-forest"
        breadcrumbs={[{ label: t("Responsible travel"), href: "/responsible-travel" }]}
      />
      {pillars.map((p, i) => (
        <Section key={p.id} id={p.id} tone={i % 2 ? "deep" : "ivory"} labelledBy={`rt-${p.id}`}>
          <Container>
            <div className="grid gap-14 lg:grid-cols-12">
              <Reveal className={i % 2 ? "lg:order-2 lg:col-span-5" : "lg:col-span-5"}>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <SmartImage image={p.image} sizes="(min-width:1024px) 40vw, 100vw" />
                </div>
              </Reveal>
              <Reveal delay={0.1} className="lg:col-span-7">
                <Display id={`rt-${p.id}`} size="lg">{t(p.title)}</Display>
                <dl className="mt-10 grid gap-8 sm:grid-cols-2">
                  {p.points.map(([title, d]) => (
                    <div key={title}>
                      <dt className="font-display text-display-xs">{t(title)}</dt>
                      <dd className="mt-2 leading-relaxed text-charcoal/80">{t(d)}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </Container>
        </Section>
      ))}
      <Section>
        <Container className="text-center">
          <JaaliDivider className="mb-12 text-charcoal" />
          <p className="mx-auto max-w-3xl text-lede text-charcoal/85">
            {t("We’re not perfect, and long-haul travel has a real footprint. We’d rather be honest about that, encourage longer and slower journeys, and keep improving. Questions?")}{" "}
            <Link href="/contact" className="underline decoration-marigold underline-offset-4">{t("Talk to us")}</Link>.
          </p>
        </Container>
      </Section>
      <FinalCTA image="kerala-village-boat" />
    </>
  );
}
