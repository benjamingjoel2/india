import { experiences } from "@/data";
import { PageHero } from "@/components/sections/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { CardGrid } from "@/components/sections/CardGrid";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { Container, Section } from "@/components/ui/Section";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Experiences in India",
  description: "Tiger safaris, palace stays, Kerala houseboats, Ayurveda, cooking classes, block printing, the Ganges aarti and Himalayan treks, woven into tailor-made journeys.",
  path: "/experiences",
  image: "varanasi-ghats",
});

export default function ExperiencesPage() {
  return (
    <>
      <PageHero
        title="The moments you'll *keep*."
        eyebrow="Experiences"
        intro="Not activities to tick off, but the hours that make a journey yours. Each one is arranged with people we know and trust."
        image="varanasi-ghats"
        breadcrumbs={[{ label: "Experiences", href: "/experiences" }]}
      />
      <Section>
        <Container>
          <CardGrid cols={4}>
            {experiences.map((e) => (
              <ExperienceCard key={e.slug} experience={e} sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" />
            ))}
          </CardGrid>
        </Container>
      </Section>
      <FinalCTA image="yoga-dawn" />
    </>
  );
}
