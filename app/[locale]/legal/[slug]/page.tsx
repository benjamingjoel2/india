import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { legalDocs } from "@/data/legal";
import { getContent } from "@/lib/content";
import { getT } from "@/lib/i18n/server";
import { PlainHero } from "@/components/sections/PageHero";
import { Container, Section } from "@/components/ui/Section";
import { pageMeta } from "@/lib/seo";

export const dynamicParams = false;
export const generateStaticParams = () => legalDocs.map((d) => ({ slug: d.slug }));

export async function generateMetadata({ params }: PageProps<"/[locale]/legal/[slug]">): Promise<Metadata> {
  const d = (await getContent()).getLegalDoc((await params).slug);
  return d ? { ...(await pageMeta({ title: d.title, description: d.description, path: `/legal/${d.slug}` })), robots: { index: false } } : {};
}

export default async function LegalPage({ params }: PageProps<"/[locale]/legal/[slug]">) {
  const [{ getLegalDoc, legalUpdated }, t] = await Promise.all([getContent(), getT()]);
  const d = getLegalDoc((await params).slug);
  if (!d) notFound();
  return (
    <>
      <PlainHero title={d.display} intro={d.description} breadcrumbs={[{ label: d.title, href: `/legal/${d.slug}` }]} />
      <Section>
        <Container className="max-w-prose">
          <div className="prose-musafir">
            <p>{t("Last updated {date}.", { date: legalUpdated })}</p>
            {d.sections.map((s) => (
              <section key={s.h}>
                <h2>{s.h}</h2>
                {s.p.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {s.table && (
                  <div className="overflow-x-auto" role="region" aria-label={s.h} tabIndex={0}>
                    <table>
                      <thead>
                        <tr>
                          {s.table.head.map((c) => (
                            <th key={c} scope="col">{c}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {s.table.rows.map((r) => (
                          <tr key={r[0]}>
                            {r.map((c, i) => (i === 0 ? <td key={i}><code>{c}</code></td> : <td key={i}>{c}</td>))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
