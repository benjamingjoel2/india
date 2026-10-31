"use client";

import Link from "@/components/ui/Link";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { contact, type MegaMenu } from "@/config/site";
import { useLocale, useT } from "@/components/i18n/LocaleProvider";
import { LanguageSwitcher } from "@/components/i18n/LanguageSwitcher";
import { ease } from "@/lib/motion";
import { useFocusTrap } from "@/lib/useFocusTrap";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";
import { PlanButton } from "@/components/planner/PlanButton";
import { CurrencySwitcher } from "./CurrencySwitcher";

export function MobileMenu({ nav, open, onClose, onSearch }: { nav: MegaMenu[]; open: boolean; onClose: () => void; onSearch: () => void }) {
  const t = useT();
  const locale = useLocale();
  const [expanded, setExpanded] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  useFocusTrap(ref, open);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={ref}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label={t("Menu")}
          data-lenis-prevent
              className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-ivory text-charcoal lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease }}
          onKeyDown={(e) => e.key === "Escape" && onClose()}
        >
          <div className="page-x flex h-16 shrink-0 items-center justify-between border-b border-charcoal/10">
            <Logo compact />
            <button type="button" onClick={onClose} aria-label={t("Close menu")} className="flex size-11 items-center justify-center rounded-full border border-charcoal/20">
              <svg aria-hidden viewBox="0 0 14 14" className="size-3.5" stroke="currentColor" strokeWidth="1.4">
                <path d="M1 1l12 12M13 1L1 13" />
              </svg>
            </button>
          </div>
          <nav aria-label={t("Mobile")} className="page-x flex-1 py-4">
            <ul className="divide-y divide-charcoal/10">
              {nav.map((menu) => {
                const isOpen = expanded === menu.label;
                const panelId = `m-${menu.label.replace(/\W+/g, "-")}`;
                return (
                  <li key={menu.label}>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setExpanded(isOpen ? null : menu.label)}
                      className="flex w-full items-center justify-between py-5 font-display text-[1.75rem]"
                    >
                      {menu.label}
                      <svg aria-hidden viewBox="0 0 12 8" className={cn("h-2 w-3 transition-transform duration-500", isOpen && "rotate-180")} fill="none" stroke="currentColor" strokeWidth="1.3">
                        <path d="M1 1l5 5 5-5" />
                      </svg>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={panelId}
                          initial={reduce ? false : { height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease }}
                          className="overflow-hidden"
                        >
                          <div className="pb-6">
                            <Link href={menu.href} onClick={onClose} className="eyebrow mb-4 inline-block text-stone underline underline-offset-4">
                              {t("All {section}", { section: locale === "en" ? menu.label.toLowerCase() : menu.label })}
                            </Link>
                            {menu.groups ? (
                              <div className="grid grid-cols-2 gap-6">
                                {menu.groups.map((g) => (
                                  <div key={g.label}>
                                    <Link href={g.href} onClick={onClose} className="font-medium">
                                      {g.label}
                                    </Link>
                                    <ul className="mt-2 space-y-2 text-[0.95rem] text-charcoal/75">
                                      {g.links.map((l) => (
                                        <li key={l.href}>
                                          <Link href={l.href} onClick={onClose}>
                                            {l.label}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <ul className="space-y-3 text-[1.05rem]">
                                {menu.links?.map((l) => (
                                  <li key={l.href}>
                                    <Link href={l.href} onClick={onClose}>
                                      {l.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="page-x space-y-4 border-t border-charcoal/10 py-6">
            <div className="flex items-center justify-between">
              <button type="button" onClick={onSearch} className="flex items-center gap-2 text-sm font-medium">
                <SearchIcon className="size-4" /> {t("Search")}
              </button>
              <CurrencySwitcher id="currency-mobile" />
            </div>
            <LanguageSwitcher className="justify-center" />
            <PlanButton className="w-full" variant="primary" />
            <a href={contact.emailHref} className="block text-center text-sm underline underline-offset-4">
              {t("Or email us")}
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function SearchIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 20 20" className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="8.5" cy="8.5" r="6.5" />
      <path d="M13.5 13.5L19 19" />
    </svg>
  );
}
