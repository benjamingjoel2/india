import { journeys, monthNames, monthOrder, regions, styleLabels } from "@/data";
import { PageHero } from "@/components/sections/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Container, Section } from "@/components/ui/Section";
import { JourneyFilters } from "@/components/journeys/JourneyFilters";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "India journeys",
  description: "Tailor-made India itineraries to start from: the Golden Triangle, Rajasthan's palaces, Kerala's backwaters, tigers, the Himalaya and more. Filter by region, length and month.",
  path: "/journeys",
  image: "udaipur-palace",
});

export default function JourneysPage() {
  const usedStyles = Array.from(new Set(journeys.flatMap((j) => j.styles)));
  return (
    <>
      <PageHero
        title="Journeys worth the *journey*."
        eyebrow="Journeys"
        intro="Ten starting points, shaped by years of travelling them. Change the order, slow the pace, add a tiger forest: your specialist builds the final version with you."
        image="udaipur-palace"
        breadcrumbs={[{ label: "Journeys", href: "/journeys" }]}
      />
      <Section>
        <Container>
          <JourneyFilters
            journeys={journeys}
            regions={regions.map((r) => ({ value: r.slug, label: r.name }))}
            styles={usedStyles.map((s) => ({ value: s, label: styleLabels[s] ?? s }))}
            months={monthOrder.map((m) => ({ value: m, label: monthNames[m] }))}
          />
        </Container>
      </Section>
      <FinalCTA image="kerala-canoe" title="Don't see *yours*?" text="Most of our travelers end up somewhere between two journeys, or somewhere new entirely. Tell us what you have in mind." />
    </>
  );
}
