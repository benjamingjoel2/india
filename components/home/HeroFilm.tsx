"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { media } from "@/config/site";
import { images, type ImageKey } from "@/data/images";
import { SmartImage } from "@/components/ui/SmartImage";

/**
 * Full-bleed hero film. Plays media.heroFilm when configured; otherwise a
 * slow cross-faded sequence of stills stands in as a "film placeholder".
 * Static first frame for prefers-reduced-motion.
 */
export function HeroFilm({ frames }: { frames: ImageKey[] }) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const hasFilm = Boolean(media.heroFilm.mp4 || media.heroFilm.webm);
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (reduce) video.current?.pause();
  }, [reduce]);

  useEffect(() => {
    if (reduce || hasFilm || frames.length < 2) return;
    const t = window.setInterval(() => setIndex((i) => (i + 1) % frames.length), 7000);
    return () => window.clearInterval(t);
  }, [reduce, hasFilm, frames.length]);

  if (hasFilm) {
    return (
      <video
        ref={video}
        poster={images[media.heroFilm.poster as ImageKey].src + "&w=1920"}
        className="absolute inset-0 size-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden
      >
        {media.heroFilm.webm && <source src={media.heroFilm.webm} type="video/webm" />}
        {media.heroFilm.mp4 && <source src={media.heroFilm.mp4} type="video/mp4" />}
      </video>
    );
  }

  return (
    <div className="absolute inset-0" aria-hidden>
      <AnimatePresence initial={false}>
        <motion.div
          key={frames[index]}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.4, ease: "easeInOut" }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 9, ease: "linear" }}
          >
            <SmartImage image={frames[index]} priority={index === 0} sizes="100vw" alt="" />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
