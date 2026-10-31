import type { Metadata } from "next";
import { getContent } from "@/lib/content";
import { getT } from "@/lib/i18n/server";

import { PageHero } from "@/components/sections/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Container, Section } from "@/components/ui/Section";
import { JourneyFilters } from "@/components/journeys/JourneyFilters";
import { pageMeta } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getT();
  return pageMeta({
    title: t("India journeys"),
    description: t("Tailor-made India itineraries to start from: the Golden Triangle, Rajasthan's palaces, Kerala's backwaters, tigers, the Himalaya and more. Filter by region, length and month."),
    path: "/journeys",
    image: "udaipur-palace",
  });
}

export default async function JourneysPage() {
  const [{ journeys, monthNames, monthOrder, regions, styleLabels }, t] = await Promise.all([getContent(), getT()]);
  const usedStyles = Array.from(new Set(journeys.flatMap((j) => j.styles)));
  return (
    <>
      <PageHero
        title={t("Journeys worth the *journey*.")}
        eyebrow={t("Journeys")}
        intro={t("Ten starting points, shaped by years of traveling them. Change the order, slow the pace, add a tiger forest: your specialist builds the final version with you.")}
        image="udaipur-palace"
        breadcrumbs={[{ label: t("Journeys"), href: "/journeys" }]}
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
      <FinalCTA image="kerala-canoe" title={t("Don't see *yours*?")} text={t("Most of our travelers end up somewhere between two journeys, or somewhere new entirely. Tell us what you have in mind.")} />
    </>
  );
}
