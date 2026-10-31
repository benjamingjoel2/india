import Link from "@/components/ui/Link";
import type { Metadata } from "next";
import { getContent } from "@/lib/content";
import { getT } from "@/lib/i18n/server";
import { PlainHero } from "@/components/sections/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { FaqList } from "@/components/sections/FaqList";
import { Container, Section } from "@/components/ui/Section";
import { slugify } from "@/lib/utils";
import { pageMeta } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getT();
  return pageMeta({
    title: t("India travel FAQ"),
    description: t("Answers on India e-Visas, the best time to visit, monsoon travel, health, food and water, dress codes, drivers, trains, safari permits, money, tipping and more."),
    path: "/faq",
  });
}

export default async function FaqPage() {
  const [{ faqCategories, faqs }, t] = await Promise.all([getContent(), getT()]);
  return (
    <>
      <PlainHero
        title={t("Questions, *answered*.")}
        eyebrow={t("FAQ")}
        intro={t("The things travelers ask us most. Rules on visas, health and permits change, so anything marked “verify” should be checked against official sources before you go.")}
        breadcrumbs={[{ label: t("FAQ"), href: "/faq" }]}
      />
      <Section>
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <nav aria-label={t("FAQ categories")} className="lg:col-span-3">
              <ul className="space-y-2 text-sm lg:sticky lg:top-28">
                {faqCategories.map((c) => (
                  <li key={c}>
                    <a href={`#${slugify(c)}`} className="link-underline">{c}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="space-y-16 lg:col-span-9">
              {faqCategories.map((c) => (
                <section key={c} id={slugify(c)} aria-labelledby={`h-${slugify(c)}`} className="scroll-mt-28">
                  <h2 id={`h-${slugify(c)}`} className="eyebrow mb-4 font-sans text-stone">{c}</h2>
                  <FaqList items={faqs.filter((f) => f.category === c)} withSchema={false} />
                </section>
              ))}
              <p className="text-charcoal/80">
                {t("Still wondering?")} <Link href="/contact" className="underline decoration-marigold underline-offset-4">{t("Ask a specialist")}</Link>{t(" — we reply in as little as 15 minutes.")}
              </p>
            </div>
          </div>
        </Container>
      </Section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer.join(" ") } })),
          }),
        }}
      />
      <FinalCTA />
    </>
  );
}
