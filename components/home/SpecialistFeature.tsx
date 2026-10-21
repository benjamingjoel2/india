import Link from "next/link";
import { getPersonById } from "@/data";
import { Portrait } from "@/components/ui/Portrait";
import { Container, Section } from "@/components/ui/Section";
import { Display } from "@/components/ui/Display";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { JaaliPanel } from "@/components/ui/Jaali";
import { Arrow } from "@/components/ui/Button";

export function SpecialistFeature() {
  const person = getPersonById("meera");
  if (!person) return null;
  const first = person.name.split(" ")[0];
  return (
    <Section tone="deep" labelledBy="specialist-title">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="relative lg:col-span-5">
            <JaaliPanel className="absolute -top-6 -left-6 h-40 w-40 text-sandstone opacity-50" />
            <Portrait person={person} tone="sandstone" sizes="(min-width:1024px) 40vw, 100vw" className="relative aspect-[4/5] w-full" />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <Eyebrow className="mb-5 text-stone">Meet your specialist</Eyebrow>
            <Display id="specialist-title" size="lg">One person, from first idea to *home*.</Display>
            <div className="mt-8 max-w-2xl space-y-5 text-lede text-charcoal/85">
              {person.bio.slice(0, 2).map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
            <blockquote className="mt-8 max-w-xl border-l border-marigold pl-5 font-display text-display-xs italic text-indigo">
              “{person.quote}”
            </blockquote>
            <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="font-display text-4xl italic text-indigo" aria-hidden>
                  {first}
                </p>
                <p className="mt-1 text-sm text-stone">
                  {person.name}, {person.role}
                </p>
              </div>
              <Link href="/about#team" className="inline-flex items-center gap-2 text-sm font-medium">
                Meet the team <Arrow />
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
