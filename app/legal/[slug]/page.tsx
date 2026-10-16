import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { brand, company, contact } from "@/config/site";
import { PlainHero } from "@/components/sections/PageHero";
import { Container, Section } from "@/components/ui/Section";
import { pageMeta } from "@/lib/seo";

const pages: Record<string, { title: string; display: string }> = {
  privacy: { title: "Privacy policy", display: "Privacy *policy*." },
  terms: { title: "Terms & conditions", display: "Terms & *conditions*." },
  "booking-conditions": { title: "Booking conditions", display: "Booking *conditions*." },
  cookies: { title: "Cookie policy", display: "Cookie *policy*." },
};

export const dynamicParams = false;
export const generateStaticParams = () => Object.keys(pages).map((slug) => ({ slug }));

export async function generateMetadata({ params }: PageProps<"/legal/[slug]">): Promise<Metadata> {
  const p = pages[(await params).slug];
  return p ? { ...pageMeta({ title: p.title, description: `${p.title} for ${brand.name}.`, path: `/legal/${(await params).slug}` }), robots: { index: false } } : {};
}

export default async function LegalPage({ params }: PageProps<"/legal/[slug]">) {
  const { slug } = await params;
  const p = pages[slug];
  if (!p) notFound();
  return (
    <>
      <PlainHero title={p.display} breadcrumbs={[{ label: p.title, href: `/legal/${slug}` }]} />
      <Section>
        <Container className="max-w-prose">
          <div className="prose-musafir">
            <p>
              <strong>[PLACEHOLDER]</strong> This page is a placeholder. Replace it with the {p.title.toLowerCase()} for {company.legalName}, reviewed by a
              qualified professional for the markets you sell to.
            </p>
            <h2>Who we are</h2>
            <p>
              {brand.name} is a trading name of {company.legalName}, registration number {company.registrationNumber}, GST {company.gstNumber}.
              Contact: {contact.email}.
            </p>
            <h2>Content to add</h2>
            <ul>
              <li>Scope and definitions</li>
              <li>Your obligations and ours</li>
              <li>Payments, changes and cancellations</li>
              <li>Liability, insurance and complaints</li>
              <li>Governing law</li>
            </ul>
          </div>
        </Container>
      </Section>
    </>
  );
}
