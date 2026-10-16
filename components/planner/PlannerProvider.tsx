"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ease } from "@/lib/motion";
import { useFocusTrap } from "@/lib/useFocusTrap";

const PlannerForm = dynamic(() => import("./PlannerForm").then((m) => m.PlannerForm), {
  ssr: false,
  loading: () => <p className="p-10 text-center opacity-70">Loading planner…</p>,
});

interface PlannerContextValue {
  open: (preset?: PlannerPreset) => void;
  close: () => void;
}

export interface PlannerPreset {
  regions?: string[];
  styles?: string[];
  month?: string;
  note?: string;
}

const PlannerContext = createContext<PlannerContextValue | null>(null);

export function PlannerProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [preset, setPreset] = useState<PlannerPreset | undefined>();
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const dialogRef = useRef<HTMLDivElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);

  const open = useCallback((p?: PlannerPreset) => {
    returnFocus.current = document.activeElement as HTMLElement;
    setPreset(p);
    setIsOpen(true);
  }, []);
  const close = useCallback(() => {
    setIsOpen(false);
    returnFocus.current?.focus?.();
  }, []);

  // Close when navigating away (adjust state during render rather than in an effect).
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setIsOpen(false);
  }

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  useFocusTrap(dialogRef, isOpen);

  return (
    <PlannerContext.Provider value={{ open, close }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-stretch justify-end bg-indigo-deep/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease }}
            onClick={(e) => e.target === e.currentTarget && close()}
          >
            <motion.div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-label="Plan my journey"
              className="relative h-full w-full overflow-y-auto bg-ivory md:max-w-3xl"
              initial={reduce ? false : { x: "8%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={reduce ? { opacity: 0 } : { x: "8%", opacity: 0 }}
              transition={{ duration: 0.7, ease }}
            >
              <button
                type="button"
                onClick={close}
                className="absolute top-4 right-4 z-10 flex size-11 items-center justify-center rounded-full border border-charcoal/20 bg-ivory hover:border-charcoal"
                aria-label="Close planner"
              >
                <svg aria-hidden viewBox="0 0 14 14" className="size-3.5" stroke="currentColor" strokeWidth="1.4">
                  <path d="M1 1l12 12M13 1L1 13" />
                </svg>
              </button>
              <div className="px-5 py-14 md:px-12">
                <PlannerForm preset={preset} variant="modal" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PlannerContext.Provider>
  );
}

export function usePlanner() {
  const ctx = useContext(PlannerContext);
  if (!ctx) throw new Error("usePlanner must be used inside PlannerProvider");
  return ctx;
}
