import { stays } from "@/data";
import { StayCard } from "@/components/cards/StayCard";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";

/** One of each kind: palace, haveli, tented lodge, houseboat, homestay. */
const picks = ["udaipur-lake-palace", "jaipur-heritage-haveli", "kanha-tented-lodge", "vembanad-houseboat", "nubra-valley-homestay"];

export function StaysFeature() {
  const list = picks.map((s) => stays.find((x) => x.slug === s)!).filter(Boolean);
  return (
    <Section labelledBy="stays-title">
      <Container>
        <SectionHeading
          id="stays-title"
          eyebrow="Where you'll stay"
          title="Rooms with a *story*."
          intro="Palace suites above a lake, family havelis, canvas under sal trees, a houseboat at dusk. We've slept in every one."
          action={<ButtonLink href="/stays" variant="secondary">All stays</ButtonLink>}
        />
        <ul className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-6">
          {list.map((s, i) => (
            <Reveal as="li" key={s.slug} delay={(i % 3) * 0.08} className={i < 2 ? "lg:col-span-3" : "lg:col-span-2"}>
              <StayCard stay={s} aspect={i < 2 ? "aspect-[3/2]" : "aspect-[4/5]"} sizes={i < 2 ? "(min-width:1024px) 50vw, 100vw" : "(min-width:1024px) 33vw, 100vw"} />
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
