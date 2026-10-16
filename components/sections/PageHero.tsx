import type { ImageKey } from "@/data/images";
import type { AccentKey } from "@/data/types";
import { colors } from "@/config/site";
import { SmartImage } from "@/components/ui/SmartImage";
import { Display } from "@/components/ui/Display";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JaaliPanel, BlockPrintBand } from "@/components/ui/Jaali";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  eyebrow?: string;
  intro?: string;
  image: ImageKey;
  breadcrumbs: { label: string; href: string }[];
  /** Region accent: switches to the split accent-colour hero. */
  accent?: AccentKey;
  children?: React.ReactNode;
  size?: "tall" | "medium";
}

export function PageHero({ title, eyebrow, intro, image, breadcrumbs, accent, children, size = "medium" }: Props) {
  if (accent) {
    const a = colors.accents[accent];
    return (
      <section
        style={{ "--accent": a.hex, "--accent-ink": a.ink } as React.CSSProperties}
        className="relative grid bg-accent text-accent-ink lg:min-h-[88svh] lg:grid-cols-2"
      >
        <div className="relative flex flex-col justify-end overflow-hidden px-4 pt-40 pb-14 md:px-8 lg:px-12 lg:pb-20">
          <JaaliPanel className="absolute inset-0 text-current opacity-[0.07]" />
          <div className="animate-rise relative">
            <Breadcrumbs items={breadcrumbs} className="mb-10 [&_ol]:opacity-100" />
            {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
            <Display as="h1" size="xl">{title}</Display>
            {intro && <p className="mt-8 max-w-xl text-lede">{intro}</p>}
            {children && <div className="mt-10">{children}</div>}
          </div>
        </div>
        <div className="relative min-h-[60svh] lg:min-h-0">
          <SmartImage image={image} priority sizes="(min-width:1024px) 50vw, 100vw" />
        </div>
        <BlockPrintBand className="absolute inset-x-0 bottom-0 text-current opacity-25" />
      </section>
    );
  }
  return (
    <section className={cn("relative flex items-end overflow-hidden bg-indigo-deep text-ivory", size === "tall" ? "min-h-[88svh]" : "min-h-[70svh]")}>
      <SmartImage image={image} priority sizes="100vw" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-indigo-deep/85 via-indigo-deep/30 to-indigo-deep/45" />
      <div className="animate-rise page-x relative mx-auto w-full max-w-page pt-40 pb-14 md:pb-20">
        <Breadcrumbs items={breadcrumbs} className="mb-8" />
        {eyebrow && <p className="eyebrow mb-5 text-ivory/80">{eyebrow}</p>}
        <Display as="h1" size="xl" className="max-w-5xl">{title}</Display>
        {intro && <p className="mt-8 max-w-2xl text-lede text-ivory/85">{intro}</p>}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}

/** Text-only page header for pages without hero photography. */
export function PlainHero({ title, intro, breadcrumbs, eyebrow }: { title: string; intro?: string; breadcrumbs: { label: string; href: string }[]; eyebrow?: string }) {
  return (
    <section className="relative overflow-hidden bg-ivory-deep pt-40 pb-16 md:pt-48 md:pb-24">
      <JaaliPanel className="absolute top-0 right-0 h-full w-1/3 text-sandstone opacity-25" />
      <div className="animate-rise page-x relative mx-auto max-w-page">
        <Breadcrumbs items={breadcrumbs} className="mb-8" />
        {eyebrow && <p className="eyebrow mb-5 text-stone">{eyebrow}</p>}
        <Display as="h1" size="lg" className="max-w-4xl">{title}</Display>
        {intro && <p className="mt-6 max-w-2xl text-lede text-charcoal/80">{intro}</p>}
      </div>
    </section>
  );
}
