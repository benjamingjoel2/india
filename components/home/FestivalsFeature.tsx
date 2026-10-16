import Link from "next/link";
import { festivals, monthNames } from "@/data";
import { SmartImage } from "@/components/ui/SmartImage";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { VerifyFlag } from "@/components/ui/VerifyFlag";
import { PlanButton } from "@/components/planner/PlanButton";
import { Arrow } from "@/components/ui/Button";

const featured = ["diwali", "holi", "pushkar-camel-fair", "durga-puja", "hornbill-festival"];

export function FestivalsFeature() {
  const list = featured.map((s) => festivals.find((f) => f.slug === s)!).filter(Boolean);
  const [lead, ...rest] = list;
  return (
    <Section tone="deep" labelledBy="festivals-title">
      <Container>
        <SectionHeading
          id="festivals-title"
          eyebrow="Festivals"
          title="Arrive in time for the *celebration*."
          intro="Festival dates follow lunar and regional calendars and change every year, so we confirm them before you book."
          action={<VerifyFlag>Dates vary yearly · verify</VerifyFlag>}
        />
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="group relative lg:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden">
              <SmartImage image={lead.image} sizes="(min-width:1024px) 50vw, 100vw" zoom />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-deep/80 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-ivory">
                <p className="eyebrow text-ivory/80">Typically {lead.typicalMonths.map((m) => monthNames[m]).join(" or ")}</p>
                <h3 className="mt-3 font-display text-display-md">
                  <Link href={`/festivals/${lead.slug}`}>{lead.name}</Link>
                </h3>
                <p className="mt-3 max-w-md text-ivory/85">{lead.summary}</p>
                <PlanButton variant="light" className="mt-6" preset={{ note: `I'd like to plan around ${lead.name}.` }}>
                  Plan around this festival
                </PlanButton>
              </div>
            </div>
          </Reveal>
          <ul className="divide-y divide-charcoal/15 border-y border-charcoal/15 lg:col-span-6">
            {rest.map((f, i) => (
              <Reveal as="li" key={f.slug} delay={i * 0.08} className="group grid grid-cols-[6rem_1fr] gap-5 py-6 sm:grid-cols-[9rem_1fr]">
                <div className="relative aspect-square overflow-hidden">
                  <SmartImage image={f.image} sizes="9rem" zoom />
                </div>
                <div className="flex flex-col">
                  <p className="eyebrow text-[0.65rem] text-stone">Typically {f.typicalMonths.map((m) => monthNames[m]).join(" / ")}</p>
                  <h3 className="mt-2 font-display text-display-xs">
                    <Link href={`/festivals/${f.slug}`} className="group-hover:italic">{f.name}</Link>
                  </h3>
                  <p className="mt-1 line-clamp-2 text-sm text-charcoal/70">{f.summary}</p>
                  <PlanButton variant="ghost" className="mt-2 min-h-9! justify-start text-sm!" preset={{ note: `I'd like to plan around ${f.name}.` }}>
                    Plan around this festival <Arrow />
                  </PlanButton>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
