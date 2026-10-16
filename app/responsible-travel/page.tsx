import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Container, Section } from "@/components/ui/Section";
import { Display } from "@/components/ui/Display";
import { Reveal } from "@/components/ui/Reveal";
import { JaaliDivider } from "@/components/ui/Jaali";
import { SmartImage } from "@/components/ui/SmartImage";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Responsible travel",
  description: "How we travel in India: respectfully, with fair pay for local guides and drivers, money spent in local communities, and ethical wildlife safaris that put animals first.",
  path: "/responsible-travel",
  image: "elephant-forest",
});

const pillars = [
  {
    id: "respect",
    title: "Traveling *respectfully*.",
    image: "golden-temple-day" as const,
    points: [
      ["Dress for the place", "Shoulders and knees covered at temples, mosques and gurdwaras; a scarf for covering your head where it's asked. We'll brief you before each visit."],
      ["Ask before you photograph", "People are not scenery. Our guides help you ask, and some moments (cremations at Varanasi's ghats, prayers in progress) aren't photographed at all."],
      ["Learn a few words", "Namaste, shukriya, dhanyavaad. A little effort goes a very long way, and our guides love to teach."],
      ["Small groups, real time", "Private journeys mean no coach parties at the gate, and time to stop when someone invites you in for chai."],
    ],
  },
  {
    id: "community",
    title: "Supporting local *communities*.",
    image: "spice-bowls" as const,
    points: [
      ["Fair pay, on time", "Guides, drivers and hosts are paid fairly and promptly, with clear tipping guidance so nobody is left guessing."],
      ["Locally owned first", "We favor family-run havelis, homestays and lodges that employ and buy from their neighbors."],
      ["Craft at its source", "Block printers, weavers and potters are visited in their workshops, at a fair price, with no commission-driven shopping stops."],
      ["Giving back, quietly", "[Placeholder] Describe the community projects and partners the company supports here."],
    ],
  },
  {
    id: "wildlife",
    title: "Wildlife safari *ethics*.",
    image: "tiger" as const,
    points: [
      ["The animal comes first", "No baiting, no chasing, no crowding a tiger at a waterhole. If a sighting turns into a traffic jam, we move on."],
      ["Licensed naturalists only", "Every drive is with park-registered guides and a naturalist who reads tracks, alarm calls and the forest itself."],
      ["Permits booked properly", "Safari permits are booked through official park systems, often months ahead. Zones and closure dates change, and we check each season."],
      ["No elephant rides", "We don't include elephant rides or performances. We do love watching elephants be elephants, from a respectful distance."],
    ],
  },
];

export default function ResponsibleTravelPage() {
  return (
    <>
      <PageHero
        title="Travel that leaves India *better*."
        eyebrow="Responsible travel"
        intro="We'd like every journey to be as good for the people and places you visit as it is for you. That starts with how we plan, who we work with and what we choose not to do."
        image="elephant-forest"
        breadcrumbs={[{ label: "Responsible travel", href: "/responsible-travel" }]}
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
                <Display id={`rt-${p.id}`} size="lg">{p.title}</Display>
                <dl className="mt-10 grid gap-8 sm:grid-cols-2">
                  {p.points.map(([t, d]) => (
                    <div key={t}>
                      <dt className="font-display text-display-xs">{t}</dt>
                      <dd className="mt-2 leading-relaxed text-charcoal/80">{d}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </Container>
        </Section>
      ))}
      <Section>
        <Container className="max-w-3xl text-center">
          <JaaliDivider className="mb-12 text-charcoal" />
          <p className="text-lede text-charcoal/85">
            We&rsquo;re not perfect, and long-haul travel has a real footprint. We&rsquo;d rather be honest about that, encourage longer
            and slower journeys, and keep improving. Questions? <Link href="/contact" className="underline decoration-marigold underline-offset-4">Talk to us</Link>.
          </p>
        </Container>
      </Section>
      <FinalCTA image="kerala-village-boat" />
    </>
  );
}
