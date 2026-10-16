"use client";

import { motion } from "framer-motion";
import { ease, durations } from "@/lib/motion";

/**
 * Slow fade-and-rise on scroll. Under prefers-reduced-motion the root
 * <MotionConfig reducedMotion="user"> drops the movement and keeps a gentle fade.
 */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article";
}) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: durations.reveal, ease, delay }}
    >
      {children}
    </MotionTag>
  );
}
