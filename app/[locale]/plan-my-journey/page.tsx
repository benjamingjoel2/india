import type { Metadata } from "next";
import { getContent } from "@/lib/content";
import { getT } from "@/lib/i18n/server";
import { pageMeta } from "@/lib/seo";
import { Emph } from "@/components/ui/Display";
import { PlannerForm } from "@/components/planner/PlannerForm";
import { JaaliPanel } from "@/components/ui/Jaali";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getT();
  return pageMeta({
    title: t("Plan my journey"),
    description: t("Tell us about the India trip you're imagining in five short steps. Your dedicated specialist will reply personally, often within 15 minutes."),
    path: "/plan-my-journey",
  });
}

export default async function PlanMyJourneyPage() {
  const [{ contact }, t] = await Promise.all([getContent(), getT()]);
  return (
    <div className="relative bg-ivory pt-32 pb-16 md:pt-36">
      <JaaliPanel className="absolute top-0 right-0 h-80 w-1/3 text-sandstone opacity-30" />
      <div className="page-x relative mx-auto grid max-w-page gap-16 lg:grid-cols-12">
        <aside className="lg:col-span-4">
          <h1 className="font-display text-display-lg">
            <Emph>{t("Let’s plan your *India*.")}</Emph>
          </h1>
          <p className="mt-6 text-lede text-charcoal/80">
            {t("Five short steps, about three minutes. There’s no commitment and no payment: just the start of a conversation with the specialist who will plan every detail with you.")}
          </p>
          <ul className="mt-10 space-y-4 text-sm text-charcoal/80">
            <li>— {contact.replyPromise}</li>
            <li>— {t("Your progress saves as you go")}</li>
            <li>— {t("Prefer to write?")} <a href={contact.emailHref} className="underline underline-offset-4">{t("Email us")}</a></li>
          </ul>
        </aside>
        <div className="lg:col-span-8">
          <PlannerForm />
        </div>
      </div>
    </div>
  );
}
