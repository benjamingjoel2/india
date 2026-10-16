"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Testimonial } from "@/data/types";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function TestimonialsSlider({ items, journeyTitles }: { items: Testimonial[]; journeyTitles: Record<string, string> }) {
  const [i, setI] = useState(0);
  const t = items[i];
  const go = (d: number) => setI((i + d + items.length) % items.length);
  return (
    <div role="region" aria-roledescription="carousel" aria-label="Traveler testimonials">
      <p className="mb-8 inline-flex rounded-full border border-ivory/30 px-3 py-1 text-xs tracking-wide text-ivory/70">
        Placeholder testimonials · replace with verified reviews
      </p>
      <div className="min-h-[18rem] md:min-h-[15rem]" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.figure
            key={t.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.7, ease }}
          >
            <blockquote className="max-w-4xl font-display text-display-sm font-light">
              <span aria-hidden className="text-marigold">“</span>
              {t.quote}
              <span aria-hidden className="text-marigold">”</span>
            </blockquote>
            <figcaption className="mt-8 text-sm text-ivory/75">
              <span className="font-medium text-ivory">{t.name}</span>, {t.from} · {journeyTitles[t.journey] ?? "Tailor-made journey"}, {t.traveled}
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>
      <div className="mt-10 flex items-center gap-6">
        <div className="flex gap-2">
          {([-1, 1] as const).map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => go(d)}
              aria-label={d === -1 ? "Previous testimonial" : "Next testimonial"}
              className="flex size-12 items-center justify-center rounded-full border border-ivory/30 hover:border-ivory"
            >
              <svg aria-hidden viewBox="0 0 20 10" className={cn("h-2.5 w-5", d === -1 && "rotate-180")} fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M0 5h18M14 1l4 4-4 4" />
              </svg>
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          {items.map((x, idx) => (
            <button
              key={x.id}
              type="button"
              onClick={() => setI(idx)}
              aria-label={`Show testimonial ${idx + 1}`}
              aria-current={idx === i}
              className="flex size-6 items-center justify-center"
            >
              <span className={cn("block size-1.5 rotate-45 transition-all duration-500", idx === i ? "scale-150 bg-marigold" : "bg-ivory/40")} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
