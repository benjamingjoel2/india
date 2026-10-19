import { featuredJourneys } from "@/data";
import { JourneyCard } from "@/components/cards/JourneyCard";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";

export function FeaturedJourneys() {
  return (
    <Section tone="deep" labelledBy="journeys-title">
      <Container>
        <SectionHeading
          id="journeys-title"
          eyebrow="Journeys"
          title="Journeys worth the *journey*."
          intro="Starting points, never set menus. Each one is reshaped around your dates, pace and curiosity."
          action={<ButtonLink href="/journeys" variant="secondary">All journeys</ButtonLink>}
        />
        <ul className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {featuredJourneys().map((j, i) => (
            <Reveal as="li" key={j.slug} delay={i * 0.1}>
              <JourneyCard journey={j} />
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
