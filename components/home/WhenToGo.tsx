import { getContent } from "@/lib/content";
import { getT } from "@/lib/i18n/server";
import type { MonthKey } from "@/data/types";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { JaaliPanel } from "@/components/ui/Jaali";
import { MonthStrip } from "./MonthStrip";

export async function WhenToGo() {
  const [{ festivals, months, regions, monthShort }, t] = await Promise.all([getContent(), getT()]);
  const monthKeys: MonthKey[] = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
  // Default to next month (static at build time).
  const initial = monthKeys[(new Date().getMonth() + 1) % 12];
  return (
    <Section tone="indigo" labelledBy="when-title" className="relative overflow-hidden">
      <JaaliPanel className="absolute top-0 right-0 h-72 w-1/2 text-ivory opacity-[0.05]" />
      <Container className="relative">
        <SectionHeading
          id="when-title"
          eyebrow={t("When to go")}
          title={t("There's always somewhere in *season*.")}
          intro={t("India's weather moves in great arcs: the north glows in winter, Ladakh opens in summer, and Kerala's monsoon is the classic season for Ayurveda. Choose a month.")}
        />
        <MonthStrip
          months={months}
          shortNames={monthShort}
          regions={regions.map(({ slug, name, accent }) => ({ slug, name, accent }))}
          festivals={festivals.map(({ slug, name }) => ({ slug, name }))}
          initial={initial}
        />
      </Container>
    </Section>
  );
}
