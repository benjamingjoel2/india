import Link from "@/components/ui/Link";
import { colors } from "@/config/site";
import type { Metadata } from "next";
import { getContent } from "@/lib/content";
import { getT } from "@/lib/i18n/server";
import { PageHero } from "@/components/sections/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SeasonLegend } from "@/components/sections/SeasonGrid";
import { Container, Section } from "@/components/ui/Section";
import { Display } from "@/components/ui/Display";
import { Reveal } from "@/components/ui/Reveal";
import { VerifyFlag } from "@/components/ui/VerifyFlag";
import { PlanButton } from "@/components/planner/PlanButton";
import { pageMeta } from "@/lib/seo";
import { cn } from "@/lib/utils";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getT();
  return pageMeta({
    title: t("When to go to India: month by month"),
    description: t("The best time to visit India, month by month: which regions are in season, the weather to expect and the festivals that typically fall in each month."),
    path: "/when-to-go",
    image: "himachal-meadow",
  });
}

const seasonCls = { peak: "bg-accent", good: "bg-accent/45", shoulder: "bg-accent/15", avoid: "bg-transparent" } as const;

export default async function WhenToGoPage() {
  const [{ festivals, months, monthShort, monthOrder, regions }, t] = await Promise.all([getContent(), getT()]);
  const seasonLabel = { peak: t("Best"), good: t("Good"), shoulder: t("Mixed"), avoid: t("Avoid") } as const;
  return (
    <>
      <PageHero
        title={t("There's always somewhere in *season*.")}
        eyebrow={t("When to go")}
        intro={t("India's climate runs in great arcs: crisp winters in the north, summer in the high Himalaya, and a monsoon that transforms the south. Here's the year at a glance.")}
        image="himachal-meadow"
        breadcrumbs={[{ label: t("When to go"), href: "/when-to-go" }]}
      >
        <VerifyFlag tone="dark">{t("Seasons shift and festival dates vary · verify each year")}</VerifyFlag>
      </PageHero>

      {/* Year at a glance */}
      <Section labelledBy="glance">
        <Container>
          <Display id="glance" size="md" className="mb-4">{t("The year at a *glance*.")}</Display>
          <SeasonLegend className="mb-8" />
          <div className="overflow-x-auto">
            <table className="w-full min-w-[46rem] border-separate border-spacing-1 text-sm">
              <caption className="sr-only">{t("Best months to visit each region")}</caption>
              <thead>
                <tr>
                  <th scope="col" className="w-44 text-left font-medium text-stone">{t("Region")}</th>
                  {monthOrder.map((m) => (
                    <th key={m} scope="col" className="font-medium text-stone">
                      <a href={`#${m}`} className="link-underline">{monthShort[m]}</a>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {regions.map((r) => (
                  <tr key={r.slug} style={{ "--accent": colors.accents[r.accent].hex } as React.CSSProperties}>
                    <th scope="row" className="py-1 text-left font-display text-base font-normal">
                      <Link href={`/where-to-go/${r.slug}`} className="link-underline">{r.name}</Link>
                    </th>
                    {monthOrder.map((m) => (
                      <td key={m} className={cn("h-9", seasonCls[r.bestTime.calendar[m]], r.bestTime.calendar[m] === "avoid" && "border border-dashed border-charcoal/15")}>
                        <span className="sr-only">{seasonLabel[r.bestTime.calendar[m]]}</span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      {/* Month by month */}
      <Section tone="deep" labelledBy="mbm">
        <Container>
          <Display id="mbm" size="lg" className="mb-10">{t("Month by *month*.")}</Display>
          <ol className="divide-y divide-charcoal/15 border-y border-charcoal/15">
            {months.map((m) => {
              const best = m.bestRegions.map((s) => regions.find((r) => r.slug === s)!).filter(Boolean);
              const fests = m.festivals.map((s) => festivals.find((f) => f.slug === s)!).filter(Boolean);
              return (
                <Reveal as="li" key={m.key}>
                  <article id={m.key} className="grid scroll-mt-28 gap-8 py-10 lg:grid-cols-12">
                    <h3 className="font-display text-display-md lg:col-span-3">
                      <em className="display-em">{m.name}</em>
                    </h3>
                    <div className="lg:col-span-5">
                      <p className="text-lede text-charcoal/85">{m.summary}</p>
                      <p className="mt-3 text-sm text-stone">{m.weather}</p>
                      {m.watchOut && <p className="mt-3 text-sm text-spice">{t("Watch out:")} {m.watchOut}</p>}
                    </div>
                    <div className="space-y-6 lg:col-span-4">
                      <div>
                        <p className="eyebrow text-[0.62rem] text-stone">{t("At their best")}</p>
                        <ul className="mt-2 flex flex-wrap gap-2">
                          {best.map((r) => (
                            <li key={r.slug}>
                              <Link href={`/where-to-go/${r.slug}`} className="inline-flex items-center gap-2 rounded-full border border-charcoal/15 px-3 py-1 text-sm hover:border-charcoal">
                                <span aria-hidden className="size-2 rotate-45" style={{ background: colors.accents[r.accent].hex }} />
                                {r.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <ul className="mt-3 space-y-1 text-sm text-charcoal/75">
                          {m.picks.map((p) => (
                            <li key={p}>— {p}</li>
                          ))}
                        </ul>
                      </div>
                      {(fests.length > 0 || m.otherEvents.length > 0) && (
                        <div>
                          <p className="eyebrow flex items-center gap-2 text-[0.62rem] text-stone">
                            {t("Festivals & events")} <VerifyFlag className="ml-1">{t("verify dates")}</VerifyFlag>
                          </p>
                          <ul className="mt-2 space-y-1 text-sm">
                            {fests.map((f) => (
                              <li key={f.slug}>
                                <Link href={`/festivals/${f.slug}`} className="font-medium underline decoration-marigold underline-offset-4">{f.name}</Link>
                              </li>
                            ))}
                            {m.otherEvents.map((e) => (
                              <li key={e} className="text-charcoal/75">{e}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      <PlanButton variant="ghost" className="min-h-9! text-sm!" preset={{ month: m.key, regions: m.bestRegions }}>
                        {t("Plan a {month} journey", { month: m.name })} →
                      </PlanButton>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </ol>
        </Container>
      </Section>
      <FinalCTA image="ladakh-road" />
    </>
  );
}
