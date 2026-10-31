"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { brand } from "@/config/site";
import { useT } from "@/components/i18n/LocaleProvider";

/**
 * Name-meaning statement. Words brighten one by one as the reader scrolls,
 * like ink taking on a page. Static (fully visible) under reduced motion.
 */
export function Manifesto() {
  const t = useT();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 55%"] });
  const text = `${t(brand.meaning)} ${t("We plan India for musafirs: one specialist from first idea to flight home, guides who grew up where you're going, and stays we know by heart.")}`;
  const words = text.split(" ");
  return (
    <div ref={ref} className="page-x mx-auto max-w-page pt-14 pb-4 md:pt-20">
      <div className="mb-6 flex flex-wrap items-baseline gap-x-6 gap-y-2 text-stone">
        <span className="font-display text-4xl text-charcoal italic md:text-5xl">{brand.shortName}</span>
        <span lang="hi" className="text-2xl">{brand.scripts.devanagari}</span>
        <span lang="ur" dir="rtl" className="text-2xl">{brand.scripts.urdu}</span>
        <span className="eyebrow">/{brand.scripts.pronunciation}/ · {t("noun")}</span>
      </div>
      <p className="max-w-[90rem] font-display text-display-md font-light">
        {words.map((w, i) => (
          <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
            {w}
          </Word>
        ))}
      </p>
    </div>
  );
}

function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.55, 1]);
  return (
    <>
      <motion.span style={{ opacity }} className="motion-reduce:opacity-100!">
        {children}
      </motion.span>{" "}
    </>
  );
}
