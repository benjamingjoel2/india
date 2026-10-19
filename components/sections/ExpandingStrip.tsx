"use client";

import Link from "next/link";
import { useState } from "react";
import type { ImageKey } from "@/data/images";
import { SmartImage } from "@/components/ui/SmartImage";
import { cn } from "@/lib/utils";

export interface StripItem {
  href: string;
  title: string;
  kicker?: string;
  text?: string;
  image: ImageKey;
  accent?: string;
}

/**
 * Row of narrow image slices; hovering or focusing one opens it wide to reveal
 * its story. Collapsed slices carry a vertical label. Stacks as cards on mobile.
 */
export function ExpandingStrip({ items, className }: { items: StripItem[]; className?: string }) {
  const [active, setActive] = useState(0);
  return (
    <ul className={cn("flex flex-col gap-2 lg:h-[clamp(30rem,36vw,48rem)] lg:flex-row", className)}>
      {items.map((it, i) => {
        const open = i === active;
        return (
          <li
            key={it.href}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            style={it.accent ? ({ "--accent": it.accent } as React.CSSProperties) : undefined}
            className={cn(
              "group relative h-64 overflow-hidden transition-[flex-grow] duration-1000 ease-musafir lg:h-auto",
              open ? "lg:flex-[6]" : "lg:flex-1",
            )}
          >
            <SmartImage image={it.image} sizes="(min-width:1024px) 50vw, 100vw" className="transition-transform duration-[1400ms] ease-musafir group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-deep/85 via-indigo-deep/20 to-transparent" />
            <span aria-hidden className="absolute inset-x-0 bottom-0 h-1 bg-accent" />
            {/* Vertical label for collapsed slices (desktop) */}
            <span
              aria-hidden
              className={cn(
                "absolute bottom-6 left-1/2 hidden -translate-x-1/2 rotate-180 font-display text-xl whitespace-nowrap text-ivory transition-opacity duration-500 [writing-mode:vertical-rl] lg:block",
                open ? "opacity-0" : "opacity-100",
              )}
            >
              {it.title}
            </span>
            <div className={cn("absolute inset-x-0 bottom-0 p-6 text-ivory transition-opacity duration-700 md:p-8", open ? "lg:opacity-100 lg:delay-300" : "lg:opacity-0")}>
              {it.kicker && <p className="eyebrow text-[0.62rem] whitespace-nowrap opacity-80">{it.kicker}</p>}
              <h2 className="mt-2 font-display text-display-sm whitespace-nowrap">
                <Link href={it.href} className="after:absolute after:inset-0">
                  {it.title}
                </Link>
              </h2>
              {it.text && <p className="mt-2 max-w-md text-sm text-ivory/85">{it.text}</p>}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
