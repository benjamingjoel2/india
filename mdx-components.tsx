import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { getJourney } from "@/data";
import { JourneyCard } from "@/components/cards/JourneyCard";

function Callout({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <aside className="not-prose my-10 border-l-2 border-marigold bg-ivory-deep px-6 py-5 text-[0.98rem]">
      {title && <p className="eyebrow mb-2 text-[0.65rem] text-stone">{title}</p>}
      <div className="space-y-3 [&_a]:underline [&_a]:decoration-marigold [&_a]:underline-offset-4">{children}</div>
    </aside>
  );
}

function JourneyLink({ slug }: { slug: string }) {
  const j = getJourney(slug);
  if (!j) return null;
  return (
    <div className="my-12 max-w-sm">
      <JourneyCard journey={j} sizes="24rem" />
    </div>
  );
}

const components: MDXComponents = {
  a: ({ href = "", ...props }) =>
    href.startsWith("/") ? <Link href={href} {...props} /> : <a href={href} target="_blank" rel="noopener noreferrer" {...props} />,
  Callout,
  JourneyLink,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
