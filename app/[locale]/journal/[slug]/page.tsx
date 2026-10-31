import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteUrl } from "@/config/site";
import { posts } from "@/data";
import { getContent } from "@/lib/content";
import { getLocale, translator } from "@/lib/i18n/server";
import { intlLocales, localizeHref } from "@/lib/i18n/config";
import { images } from "@/data/images";
import { PageHero } from "@/components/sections/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { CardGrid } from "@/components/sections/CardGrid";
import { PostCard } from "@/components/cards/PostCard";
import { Container, Section } from "@/components/ui/Section";
import { Display } from "@/components/ui/Display";
import { JaaliDivider } from "@/components/ui/Jaali";
import { pageMeta } from "@/lib/seo";

export const dynamicParams = false;
export const generateStaticParams = () => posts.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: PageProps<"/[locale]/journal/[slug]">): Promise<Metadata> {
  const p = (await getContent()).getPost((await params).slug);
  if (!p) return {};
  const meta = await pageMeta({ title: p.seo.title, description: p.seo.description, path: `/journal/${p.slug}`, image: p.image });
  return { ...meta, openGraph: { ...meta.openGraph, type: "article", publishedTime: p.date } };
}

export default async function PostPage({ params }: PageProps<"/[locale]/journal/[slug]">) {
  const { brand, getPost, posts } = await getContent();
  const locale = await getLocale();
  const t = translator(locale);
  const post = getPost((await params).slug);
  if (!post) notFound();
  // Each language has its own copy of the article body: content/journal/<slug>.mdx (English), content/journal/<locale>/<slug>.mdx.
  const { default: Body } = locale === "en" ? await import(`@/content/journal/${post.slug}.mdx`) : await import(`@/content/journal/${locale}/${post.slug}.mdx`);
  const date = new Date(post.date).toLocaleDateString(intlLocales[locale], { day: "numeric", month: "long", year: "numeric" });
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    image: images[post.image].src,
    author: { "@type": "Organization", name: brand.name },
    publisher: { "@type": "Organization", name: brand.name },
    inLanguage: locale,
    mainEntityOfPage: `${siteUrl}${localizeHref(`/journal/${post.slug}`, locale)}`,
  };
  return (
    <>
      <PageHero
        title={post.headline}
        eyebrow={`${post.category} · ${t("{n} min read", { n: post.readingMinutes })}`}
        image={post.image}
        breadcrumbs={[
          { label: t("Journal"), href: "/journal" },
          { label: post.title, href: `/journal/${post.slug}` },
        ]}
      />
      <Section>
        <Container className="max-w-prose px-4!">
          <div className="mb-12 flex items-center gap-4 border-b border-charcoal/15 pb-8">
            <div className="text-sm">
              <p className="font-medium">{brand.name}</p>
              <p className="text-stone">
                <time dateTime={post.date}>{date}</time>
              </p>
            </div>
          </div>
          <p className="mb-10 font-display text-display-xs leading-snug text-indigo">{post.excerpt}</p>
          <article className="prose-musafir">
            <Body />
          </article>
          <JaaliDivider className="mt-20 text-charcoal" />
        </Container>
      </Section>
      <Section tone="deep" labelledBy="more-posts">
        <Container>
          <Display id="more-posts" size="md" className="mb-12">{t("Keep *reading*.")}</Display>
          <CardGrid cols={3}>
            {posts.filter((p) => p.slug !== post.slug).map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </CardGrid>
        </Container>
      </Section>
      <FinalCTA image={post.image} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
