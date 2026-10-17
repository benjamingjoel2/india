"use client";

import { usePathname } from "next/navigation";
import { usePlanner } from "./PlannerProvider";

/** Vertical "Plan my journey" tab pinned to the right edge on large screens. */
export function SideTab() {
  const { open } = usePlanner();
  const pathname = usePathname();
  if (pathname.startsWith("/plan-my-journey")) return null;
  return (
    <button
      type="button"
      onClick={() => open()}
      className="fixed top-1/2 right-0 z-40 hidden -translate-y-1/2 items-center gap-3 bg-marigold px-3 py-5 text-[0.72rem] font-medium tracking-[0.2em] text-charcoal uppercase transition-colors duration-500 [writing-mode:vertical-rl] hover:bg-[#d48b1e] lg:flex"
    >
      <span aria-hidden className="text-base leading-none">+</span>
      Plan my journey
    </button>
  );
}
