"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { media } from "@/config/site";
import { images, type ImageKey } from "@/data/images";
import { SmartImage } from "@/components/ui/SmartImage";
import { cn } from "@/lib/utils";
import { useT } from "@/components/i18n/LocaleProvider";

export interface HeroFrame {
  image: ImageKey;
  place: string;
  caption: string;
}

const FRAME_MS = 7000;

/**
 * Full-bleed hero film. Plays media.heroFilm when configured; otherwise a slow
 * cross-faded sequence of stills stands in, with labelled progress indicators.
 * Visitors can pause it (WCAG 2.2.2); reduced-motion visitors start paused.
 */
export function HeroFilm({ frames }: { frames: HeroFrame[] }) {
  const t = useT();
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const hasFilm = Boolean(media.heroFilm.mp4 || media.heroFilm.webm);
  const video = useRef<HTMLVideoElement>(null);
  const paused = userPaused || Boolean(reduce);

  useEffect(() => {
    if (paused || hasFilm || frames.length < 2) return;
    const t = window.setTimeout(() => setIndex((i) => (i + 1) % frames.length), FRAME_MS);
    return () => window.clearTimeout(t);
  }, [paused, hasFilm, frames.length, index]);

  useEffect(() => {
    if (!video.current) return;
    if (paused) video.current.pause();
    else void video.current.play().catch(() => {});
  }, [paused]);

  return (
    <>
      <div className="absolute inset-0" aria-hidden>
        {hasFilm ? (
          <video
            ref={video}
            className="absolute inset-0 size-full object-cover"
            poster={images[media.heroFilm.poster as ImageKey].src + "&w=1920"}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            {media.heroFilm.webm && <source src={media.heroFilm.webm} type="video/webm" />}
            {media.heroFilm.mp4 && <source src={media.heroFilm.mp4} type="video/mp4" />}
          </video>
        ) : (
          <AnimatePresence initial={false}>
            <motion.div
              key={frames[index].image}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2.4, ease: "easeInOut" }}
            >
              <motion.div className="absolute inset-0" initial={{ scale: 1.08 }} animate={{ scale: 1 }} transition={{ duration: 9, ease: "linear" }}>
                <SmartImage image={frames[index].image} priority={index === 0} sizes="100vw" alt="" />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      {/* Indicators + pause control */}
      <div className="page-x absolute inset-x-0 bottom-0 z-10 mx-auto max-w-page pb-6">
        <div className="flex items-end gap-4 md:gap-6 lg:pr-20">
          <button
            type="button"
            onClick={() => setUserPaused((p) => !p)}
            aria-label={paused ? t("Play hero film") : t("Pause hero film")}
            className="flex size-10 shrink-0 items-center justify-center rounded-full border border-ivory/40 text-ivory hover:border-ivory"
          >
            {paused ? (
              <svg aria-hidden viewBox="0 0 12 12" className="ml-0.5 size-3" fill="currentColor">
                <path d="M2 1l9 5-9 5z" />
              </svg>
            ) : (
              <svg aria-hidden viewBox="0 0 12 12" className="size-3" fill="currentColor">
                <path d="M2 1h3v10H2zM7 1h3v10H7z" />
              </svg>
            )}
          </button>
          {!hasFilm && (
            <ol className="grid flex-1 grid-cols-4 gap-3 md:gap-6">
              {frames.map((f, i) => (
                <li key={f.image}>
                  <button
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={t("Show {place}", { place: f.place })}
                    aria-current={i === index}
                    className={cn("group block w-full text-left transition-opacity duration-500", i === index ? "opacity-100" : "opacity-60 hover:opacity-90")}
                  >
                    <span className="relative block h-px w-full bg-ivory/30">
                      {i === index && (
                        <span
                          key={`${index}-${paused}`}
                          className="absolute inset-0 origin-left bg-ivory"
                          style={paused ? undefined : { animation: `progress ${FRAME_MS}ms linear forwards` }}
                        />
                      )}
                      {i < index && <span className="absolute inset-0 bg-ivory/70" />}
                    </span>
                    <span className="mt-3 hidden text-[0.7rem] tracking-[0.18em] uppercase md:block">
                      <span className="text-ivory/60">{String(i + 1).padStart(2, "0")}</span> {f.place}
                    </span>
                    <span className="mt-1 hidden font-display text-sm text-ivory/70 italic lg:block">{f.caption}</span>
                  </button>
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </>
  );
}
