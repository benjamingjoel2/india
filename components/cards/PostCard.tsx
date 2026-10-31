import Link from "@/components/ui/Link";
import type { Post } from "@/data/types";
import { SmartImage } from "@/components/ui/SmartImage";
import { getLocale, translator } from "@/lib/i18n/server";
import { intlLocales } from "@/lib/i18n/config";

export async function PostCard({ post, sizes = "(min-width: 1024px) 33vw, 100vw" }: { post: Post; sizes?: string }) {
  const locale = await getLocale();
  const t = translator(locale);
  const date = new Date(post.date).toLocaleDateString(intlLocales[locale], { day: "numeric", month: "long", year: "numeric" });
  return (
    <article className="group relative">
      <div className="relative aspect-[3/2] overflow-hidden bg-ivory-deep">
        <SmartImage image={post.image} sizes={sizes} zoom />
      </div>
      <div className="pt-5">
        <p className="eyebrow text-[0.68rem] text-stone">
          {post.category} · {t("{n} min read", { n: post.readingMinutes })}
        </p>
        <h3 className="mt-2 font-display text-display-xs">
          <Link href={`/journal/${post.slug}`} className="after:absolute after:inset-0">
            {post.title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-charcoal/75">{post.excerpt}</p>
        <p className="mt-3 text-xs text-stone">
          <time dateTime={post.date}>{date}</time>
        </p>
      </div>
    </article>
  );
}
