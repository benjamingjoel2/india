import { stays, stayTypeLabels } from "@/data";
import { PageHero } from "@/components/sections/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { CardGrid } from "@/components/sections/CardGrid";
import { StayCard } from "@/components/cards/StayCard";
import { Container, Section } from "@/components/ui/Section";
import { Display } from "@/components/ui/Display";
import { emphLast, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Where to stay in India",
  description: "Palace hotels, heritage havelis, tented safari lodges, Kerala houseboats and Himalayan homestays, hand-picked by specialists who have stayed in every one.",
  path: "/stays",
  image: "udaipur-palace",
});

const order = ["palace", "haveli", "safari-lodge", "houseboat", "homestay", "beach", "boutique"] as const;

export default function StaysPage() {
  const groups = order.map((t) => ({ type: t, items: stays.filter((s) => s.type === t) })).filter((g) => g.items.length);
  return (
    <>
      <PageHero
        title="Rooms with a *story*."
        eyebrow="Where to stay"
        intro="We choose stays for their character and their people as much as their thread count. Property names here are placeholders for the hotels we work with."
        image="udaipur-palace"
        breadcrumbs={[{ label: "Stays", href: "/stays" }]}
      />
      <nav aria-label="Stay types" className="border-b border-charcoal/10">
        <ul className="page-x no-scrollbar mx-auto flex max-w-page gap-6 overflow-x-auto py-5 text-sm">
          {groups.map((g) => (
            <li key={g.type} className="shrink-0">
              <a href={`#${g.type}`} className="link-underline">
                {stayTypeLabels[g.type]}s
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {groups.map((g, i) => (
        <Section key={g.type} id={g.type} tone={i % 2 ? "deep" : "ivory"} labelledBy={`st-${g.type}`} className="scroll-mt-24">
          <Container>
            <Display id={`st-${g.type}`} size="md" className="mb-12">{emphLast(`${stayTypeLabels[g.type]}s.`)}</Display>
            <CardGrid cols={3}>
              {g.items.map((s) => (
                <StayCard key={s.slug} stay={s} />
              ))}
            </CardGrid>
          </Container>
        </Section>
      ))}
      <FinalCTA image="lodge-pool" />
    </>
  );
}
