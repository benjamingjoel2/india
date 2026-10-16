import { experiences } from "@/data";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { Carousel } from "@/components/ui/Carousel";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";

export function ExperiencesCarousel() {
  return (
    <Section labelledBy="experiences-title">
      <Container>
        <SectionHeading
          id="experiences-title"
          eyebrow="Experiences"
          title="The moments you'll *keep*."
          intro="A jeep idling at a forest crossroads. Indigo on your fingertips. The hush before the aarti lamps rise."
          action={<ButtonLink href="/experiences" variant="secondary">All experiences</ButtonLink>}
        />
        <Carousel label="Experiences">
          {experiences.slice(0, 8).map((e) => (
            <ExperienceCard key={e.slug} experience={e} />
          ))}
        </Carousel>
      </Container>
    </Section>
  );
}
