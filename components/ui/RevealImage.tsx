"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Unveils its children (usually a <SmartImage>) from the centre outwards as
 * they scroll into view. Pure CSS transition toggled by an IntersectionObserver,
 * so server and client markup match and reduced-motion users see it instantly.
 */
export function RevealImage({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={cn("clip-reveal overflow-hidden", inView && "is-in", className)}>
      <div className="clip-reveal-inner absolute inset-0">{children}</div>
    </div>
  );
}
