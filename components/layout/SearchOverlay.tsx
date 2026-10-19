"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { SearchItem } from "@/lib/search";
import { useFocusTrap } from "@/lib/useFocusTrap";
import { ease } from "@/lib/motion";

let cache: SearchItem[] | null = null;

function score(item: SearchItem, terms: string[]) {
  const title = item.title.toLowerCase();
  const hay = `${title} ${item.text} ${item.keywords}`.toLowerCase();
  let s = 0;
  for (const t of terms) {
    if (!hay.includes(t)) return 0;
    s += title.startsWith(t) ? 6 : title.includes(t) ? 4 : 1;
  }
  return s;
}

const suggestions = ["Rajasthan", "Tigers", "Kerala", "Diwali", "Ladakh", "Houseboat", "Visa"];

export function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [items, setItems] = useState<SearchItem[]>(cache ?? []);
  const [query, setQuery] = useState("");
  const panel = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);
  useFocusTrap(panel, open, input);

  useEffect(() => {
    if (!open || cache) return;
    fetch("/search-index.json")
      .then((r) => r.json())
      .then((data: SearchItem[]) => {
        cache = data;
        setItems(data);
      })
      .catch(() => {});
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const results = useMemo(() => {
    const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
    if (!terms.length) return [];
    return items
      .map((i) => ({ i, s: score(i, terms) }))
      .filter((r) => r.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, 12)
      .map((r) => r.i);
  }, [items, query]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={panel}
          role="dialog"
          aria-modal="true"
          aria-label="Search the site"
          data-lenis-prevent
              className="fixed inset-0 z-[80] overflow-y-auto bg-ivory text-charcoal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease }}
        >
          <div aria-hidden className="jaali-fill absolute inset-x-0 top-0 h-40 text-indigo opacity-[0.05]" />
          <div className="page-x relative mx-auto max-w-4xl py-8 md:py-16">
            <div className="flex items-center justify-between">
              <p className="eyebrow opacity-70">Search</p>
              <button type="button" onClick={onClose} className="flex items-center gap-3 text-sm" aria-label="Close search">
                <kbd className="hidden rounded border border-charcoal/25 px-1.5 py-0.5 text-xs sm:inline">Esc</kbd>
                <span className="flex size-11 items-center justify-center rounded-full border border-charcoal/20 hover:border-charcoal">
                  <svg aria-hidden viewBox="0 0 14 14" className="size-3.5" stroke="currentColor" strokeWidth="1.4">
                    <path d="M1 1l12 12M13 1L1 13" />
                  </svg>
                </span>
              </button>
            </div>
            <label htmlFor="site-search" className="sr-only">
              Search journeys, places, experiences and articles
            </label>
            <input
              ref={input}
              id="site-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Where would you like to go?"
              autoComplete="off"
              className="mt-10 w-full border-b border-charcoal/30 bg-transparent pb-4 font-display text-display-md outline-none placeholder:text-charcoal/35 focus:border-charcoal"
            />
            <div aria-live="polite" className="sr-only">
              {query && `${results.length} results`}
            </div>
            {!query && (
              <div className="mt-8 flex flex-wrap gap-2">
                {suggestions.map((s) => (
                  <button key={s} type="button" onClick={() => setQuery(s)} className="rounded-full border border-charcoal/20 px-4 py-2 text-sm hover:border-charcoal">
                    {s}
                  </button>
                ))}
              </div>
            )}
            {query && results.length === 0 && items.length > 0 && (
              <p className="mt-10 text-lede opacity-75">
                Nothing matches yet. Try a place, a festival or a month, or{" "}
                <Link href="/contact" onClick={onClose} className="underline decoration-marigold underline-offset-4">
                  ask a specialist
                </Link>
                .
              </p>
            )}
            <ul className="mt-8 divide-y divide-charcoal/10">
              {results.map((r) => (
                <li key={r.type + r.href + r.title}>
                  <Link href={r.href} onClick={onClose} className="group flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-6">
                    <span className="eyebrow w-28 shrink-0 text-[0.65rem] text-stone">{r.type}</span>
                    <span>
                      <span className="font-display text-display-xs group-hover:italic">{r.title}</span>
                      <span className="mt-1 line-clamp-1 block text-sm opacity-70">{r.text}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
