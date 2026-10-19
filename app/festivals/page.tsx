import { festivals, monthNames } from "@/data";
import { PageHero } from "@/components/sections/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { CardGrid } from "@/components/sections/CardGrid";
import { FestivalCard } from "@/components/cards/FestivalCard";
import { Container, Section } from "@/components/ui/Section";
import { VerifyFlag } from "@/components/ui/VerifyFlag";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "India's festivals",
  description: "Diwali, Holi, the Pushkar Camel Fair, Durga Puja, Hornbill and Hemis: when India's great festivals typically fall and how to plan a journey around them.",
  path: "/festivals",
  image: "golden-temple-dusk",
});

export default function FestivalsPage() {
  return (
    <>
      <PageHero
        title="Arrive in time for the *celebration*."
        eyebrow="Festivals"
        intro="Lamps on every ledge, color in the air, a desert town filled with camels. Most festivals follow lunar calendars, so dates move each year; we confirm them before you book."
        image="golden-temple-dusk"
        breadcrumbs={[{ label: "Festivals", href: "/festivals" }]}
      >
        <VerifyFlag tone="dark">Dates vary yearly · always verify</VerifyFlag>
      </PageHero>
      <Section>
        <Container>
          <CardGrid cols={3}>
            {festivals.map((f) => (
              <FestivalCard key={f.slug} festival={f} />
            ))}
          </CardGrid>
          <p className="mt-16 text-sm text-stone">
            Typical months: {festivals.map((f) => `${f.name} (${f.typicalMonths.map((m) => monthNames[m]).join("/")})`).join(" · ")}.
          </p>
        </Container>
      </Section>
      <FinalCTA image="hawa-mahal" />
    </>
  );
}
