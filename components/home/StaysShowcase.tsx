"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Stay } from "@/data/types";
import { SmartImage } from "@/components/ui/SmartImage";
import { Price } from "@/components/ui/Price";
import { GridLines } from "@/components/ui/GridLines";
import { Arrow } from "@/components/ui/Button";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Full-bleed stay photograph with an overlapping card, one stay type at a time.
 * Tabs switch between palace, haveli, safari lodge, houseboat and homestay.
 */
export function StaysShowcase({ stays, labels }: { stays: Stay[]; labels: Record<string, string> }) {
  const [i, setI] = useState(0);
  const s = stays[i];
  return (
    <div className="relative min-h-[92svh] overflow-hidden bg-indigo-deep text-ivory">
      <AnimatePresence initial={false}>
        <motion.div key={s.slug} className="absolute inset-0" initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.4, ease }}>
          <SmartImage image={s.image} sizes="100vw" />
        </motion.div>
      </AnimatePresence>
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-indigo-deep/80 via-indigo-deep/30 to-indigo-deep/10" />
      <GridLines className="text-ivory/[0.07]" />

      <div className="page-x relative mx-auto grid min-h-[92svh] max-w-page items-end gap-10 py-14 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="eyebrow mb-5 text-ivory/80">Where you&rsquo;ll stay</p>
          <h2 id="stays-title" className="font-display text-display-lg">
            Rooms with a <em className="display-em">story</em>.
          </h2>
          <p className="mt-6 max-w-md text-lede text-ivory/85">Palace suites above a lake, family havelis, canvas under sal trees, a houseboat at dusk. We&rsquo;ve slept in every one.</p>
          <div role="tablist" aria-label="Stay types" className="mt-10 flex flex-wrap gap-2">
            {stays.map((x, idx) => (
              <button
                key={x.slug}
                role="tab"
                type="button"
                aria-selected={idx === i}
                aria-controls="stay-card"
                onClick={() => setI(idx)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm transition-colors duration-500",
                  idx === i ? "border-ivory bg-ivory text-charcoal" : "border-ivory/40 text-ivory hover:border-ivory",
                )}
              >
                {labels[x.type]}s
              </button>
            ))}
          </div>
          <Link href="/stays" className="mt-8 inline-flex items-center gap-2 text-sm font-medium">
            All stays <Arrow />
          </Link>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <AnimatePresence mode="wait">
            <motion.div
              id="stay-card"
              role="tabpanel"
              aria-label={labels[s.type]}
              key={s.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.7, ease }}
              className="group relative bg-ivory text-charcoal"
            >
              <article>
              <div className="relative aspect-[16/10] overflow-hidden">
                <SmartImage image={s.image} sizes="(min-width:1024px) 40vw, 100vw" zoom />
              </div>
              <div className="p-7 md:p-9">
                <p className="eyebrow text-[0.65rem] text-stone">
                  {labels[s.type]} · {s.location}
                </p>
                <h3 className="mt-3 font-display text-display-sm">
                  <Link href={`/stays/${s.slug}`} className="after:absolute after:inset-0">
                    {s.name}
                  </Link>
                </h3>
                <p className="mt-3 line-clamp-3 text-[0.95rem] text-charcoal/80">{s.summary}</p>
                <div className="mt-6 flex items-end justify-between border-t border-charcoal/15 pt-5">
                  <p className="text-sm text-charcoal/75">
                    From <Price usd={s.priceFromUSD} className="font-display text-xl text-charcoal" /> per room · night
                  </p>
                  <span className="flex items-center gap-2 text-sm font-medium">
                    View stay <Arrow className="transition-transform duration-700 group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
              </article>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
