import { journeys, testimonials } from "@/data";
import { Container, Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TestimonialsSlider } from "./TestimonialsSlider";

export function Testimonials() {
  const titles = Object.fromEntries(journeys.map((j) => [j.slug, j.title]));
  return (
    <Section tone="indigo" labelledBy="testimonials-title">
      <Container>
        <Eyebrow className="mb-8 text-ivory/60">
          <span id="testimonials-title">In travelers&rsquo; words</span>
        </Eyebrow>
        <TestimonialsSlider items={testimonials} journeyTitles={titles} />
      </Container>
    </Section>
  );
}
