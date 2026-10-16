import Link from "next/link";
import { getJourney, testimonials } from "@/data";
import { PlainHero } from "@/components/sections/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Container, Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { VerifyFlag } from "@/components/ui/VerifyFlag";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Testimonials",
  description: "What travelers say about their tailor-made India journeys with our specialists and guides. These sample testimonials are placeholders pending verified reviews.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <>
      <PlainHero
        title="In travelers’ *words*."
        eyebrow="Testimonials"
        intro="The best part of our work is hearing how a journey felt. The reviews below are placeholders: replace them with verified reviews before launch."
        breadcrumbs={[{ label: "Testimonials", href: "/testimonials" }]}
      />
      <Section>
        <Container>
          <VerifyFlag className="mb-12">Placeholder testimonials · not real reviews</VerifyFlag>
          <ul className="columns-1 gap-10 md:columns-2 lg:columns-3">
            {testimonials.map((t, i) => {
              const j = getJourney(t.journey);
              return (
                <Reveal as="li" key={t.id} delay={(i % 3) * 0.08} className="mb-10 break-inside-avoid">
                  <figure className="jaali-frame p-8">
                    <blockquote className="font-display text-display-xs leading-snug">“{t.quote}”</blockquote>
                    <figcaption className="mt-6 text-sm text-stone">
                      <span className="font-medium text-charcoal">{t.name}</span>, {t.from}
                      <br />
                      {j ? <Link href={`/journeys/${j.slug}`} className="underline underline-offset-4">{j.title}</Link> : "Tailor-made journey"} · {t.traveled}
                    </figcaption>
                  </figure>
                </Reveal>
              );
            })}
          </ul>
        </Container>
      </Section>
      <FinalCTA />
    </>
  );
}
