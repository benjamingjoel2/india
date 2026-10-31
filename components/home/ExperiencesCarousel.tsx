import { getContent } from "@/lib/content";
import { getT } from "@/lib/i18n/server";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { Carousel } from "@/components/ui/Carousel";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";

export async function ExperiencesCarousel() {
  const [{ experiences }, t] = await Promise.all([getContent(), getT()]);
  return (
    <Section labelledBy="experiences-title">
      <Container>
        <SectionHeading
          id="experiences-title"
          eyebrow={t("Experiences")}
          title={t("The moments you'll *keep*.")}
          intro={t("A jeep idling at a forest crossroads. Indigo on your fingertips. The hush before the aarti lamps rise.")}
          action={<ButtonLink href="/experiences" variant="secondary">{t("All experiences")}</ButtonLink>}
        />
        <Carousel label={t("Experiences")}>
          {experiences.slice(0, 8).map((e) => (
            <ExperienceCard key={e.slug} experience={e} />
          ))}
        </Carousel>
      </Container>
    </Section>
  );
}
