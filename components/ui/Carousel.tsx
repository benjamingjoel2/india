"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useT } from "@/components/i18n/LocaleProvider";

/** Scroll-snap carousel with previous/next controls. Works with touch, trackpad and keyboard. */
export function Carousel({
  children,
  label,
  itemClassName = "w-[78%] sm:w-[45%] lg:w-[calc(25%-18px)]",
  className,
}: {
  children: React.ReactNode[];
  label: string;
  itemClassName?: string;
  className?: string;
}) {
  const t = useT();
  const track = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setAtStart(el.scrollLeft < 8);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    update();
    const el = track.current;
    el?.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el?.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <div className={className} role="region" aria-roledescription="carousel" aria-label={label}>
      <ul ref={track} className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-px-4 px-4 md:mx-0 md:scroll-px-0 md:px-0">
        {children.map((child, i) => (
          <li key={i} className={cn("shrink-0 snap-start", itemClassName)} aria-roledescription="slide" aria-label={t("{i} of {n}", { i: i + 1, n: children.length })}>
            {child}
          </li>
        ))}
      </ul>
      <div className="mt-8 flex justify-end gap-2">
        {([-1, 1] as const).map((dir) => (
          <button
            key={dir}
            type="button"
            onClick={() => scroll(dir)}
            disabled={dir === -1 ? atStart : atEnd}
            aria-label={dir === -1 ? t("Previous") : t("Next")}
            className="flex size-12 items-center justify-center rounded-full border border-current/30 transition-colors duration-500 hover:border-current disabled:opacity-30"
          >
            <svg aria-hidden viewBox="0 0 20 10" className={cn("h-2.5 w-5", dir === -1 && "rotate-180")} fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M0 5h18M14 1l4 4-4 4" />
            </svg>
          </button>
        ))}
      </div>
    </div>
  );
}
