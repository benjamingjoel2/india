import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLegalDoc, legalDocs, legalUpdated } from "@/data/legal";
import { PlainHero } from "@/components/sections/PageHero";
import { Container, Section } from "@/components/ui/Section";
import { pageMeta } from "@/lib/seo";

export const dynamicParams = false;
export const generateStaticParams = () => legalDocs.map((d) => ({ slug: d.slug }));

export async function generateMetadata({ params }: PageProps<"/legal/[slug]">): Promise<Metadata> {
  const d = getLegalDoc((await params).slug);
  return d ? { ...pageMeta({ title: d.title, description: d.description, path: `/legal/${d.slug}` }), robots: { index: false } } : {};
}

export default async function LegalPage({ params }: PageProps<"/legal/[slug]">) {
  const d = getLegalDoc((await params).slug);
  if (!d) notFound();
  return (
    <>
      <PlainHero title={d.display} intro={d.description} breadcrumbs={[{ label: d.title, href: `/legal/${d.slug}` }]} />
      <Section>
        <Container className="max-w-prose">
          <div className="prose-musafir">
            <p>Last updated {legalUpdated}.</p>
            {d.sections.map((s) => (
              <section key={s.h}>
                <h2>{s.h}</h2>
                {s.p.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </section>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
