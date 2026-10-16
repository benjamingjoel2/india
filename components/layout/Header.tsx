"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { navigation } from "@/config/site";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";
import { PlanButton } from "@/components/planner/PlanButton";
import { CurrencySwitcher } from "./CurrencySwitcher";
import { MegaMenuPanel } from "./MegaMenu";
import { MobileMenu, SearchIcon } from "./MobileMenu";
import { SearchOverlay } from "./SearchOverlay";
import { TopBar } from "./TopBar";

/** Routes without a full-bleed hero get a solid header from the start. */
const SOLID_ROUTES = [/^\/plan-my-journey/, /^\/legal/];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const hoverTimer = useRef<number | undefined>(undefined);
  const headerRef = useRef<HTMLElement>(null);

  const solidRoute = SOLID_ROUTES.some((r) => r.test(pathname));
  const solid = solidRoute || scrolled || active !== null;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on navigation (adjust state during render rather than in an effect).
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setActive(null);
    setMobileOpen(false);
    setSearchOpen(false);
  }

  // Cmd/Ctrl+K or "/" opens search
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      const typing = /input|textarea|select/i.test(target.tagName) || target.isContentEditable;
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !typing)) {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const openWithIntent = (label: string) => {
    window.clearTimeout(hoverTimer.current);
    hoverTimer.current = window.setTimeout(() => setActive(label), 120);
  };
  const closeWithIntent = () => {
    window.clearTimeout(hoverTimer.current);
    hoverTimer.current = window.setTimeout(() => setActive(null), 220);
  };
  const closeAll = useCallback(() => setActive(null), []);
  const closeSearch = useCallback(() => setSearchOpen(false), []);

  const activeMenu = navigation.main.find((m) => m.label === active);

  return (
    <>
      <a href="#main" className="sr-only z-[100] rounded bg-marigold px-4 py-2 text-charcoal focus:not-sr-only focus:fixed focus:top-2 focus:left-2">
        Skip to content
      </a>
      <div className="fixed inset-x-0 top-0 z-50">
        <div className={cn("overflow-hidden transition-[max-height] duration-700 ease-musafir", scrolled ? "max-h-0" : "max-h-9")}>
          <TopBar />
        </div>
        <header
          ref={headerRef}
          onMouseLeave={closeWithIntent}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node)) setActive(null);
          }}
          className={cn(
            "relative transition-[background-color,color,box-shadow] duration-700 ease-musafir",
            solid ? "bg-ivory/95 text-charcoal shadow-[0_1px_0_rgba(43,41,38,0.08)] backdrop-blur-md" : "bg-gradient-to-b from-indigo-deep/50 to-transparent text-ivory",
          )}
        >
          <div className={cn("page-x mx-auto flex max-w-page items-center justify-between gap-6 transition-[height] duration-700 ease-musafir", scrolled ? "h-16" : "h-20 lg:h-24")}>
            <Logo compact={scrolled} />

            <nav aria-label="Main" className="hidden h-full lg:block">
              <ul className="flex h-full items-center gap-1">
                {navigation.main.map((menu) => {
                  const isActive = active === menu.label;
                  const panelId = `mega-${menu.label.replace(/\W+/g, "-")}`;
                  return (
                    <li key={menu.label} className="flex h-full items-center" onMouseEnter={() => openWithIntent(menu.label)}>
                      <button
                        type="button"
                        aria-expanded={isActive}
                        aria-controls={panelId}
                        onClick={() => setActive(isActive ? null : menu.label)}
                        className="relative flex items-center gap-1.5 px-4 py-2 text-[0.95rem] tracking-wide"
                      >
                        {menu.label}
                        <span
                          aria-hidden
                          className={cn(
                            "absolute right-4 -bottom-0.5 left-4 h-px origin-left bg-current transition-transform duration-500 ease-musafir",
                            isActive ? "scale-x-100" : "scale-x-0",
                          )}
                        />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex items-center gap-2 md:gap-3">
              <button type="button" onClick={() => setSearchOpen(true)} aria-label="Search (press / or Ctrl+K)" className="flex size-11 items-center justify-center rounded-full hover:bg-current/10">
                <SearchIcon className="size-[1.1rem]" />
              </button>
              <div className="hidden md:block">
                <CurrencySwitcher />
              </div>
              <div className="hidden sm:block">
                <PlanButton variant={solid ? "primary" : "light"} className="min-h-11! px-5! text-sm!" />
              </div>
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                className="flex size-11 items-center justify-center lg:hidden"
              >
                <svg aria-hidden viewBox="0 0 22 12" className="h-3 w-5.5" stroke="currentColor" strokeWidth="1.4">
                  <path d="M0 1h22M0 6h22M8 11h14" />
                </svg>
              </button>
            </div>
          </div>
          <AnimatePresence>
            {activeMenu && (
              <div onMouseEnter={() => window.clearTimeout(hoverTimer.current)} className="hidden lg:block">
                <MegaMenuPanel
                  key={activeMenu.label}
                  menu={activeMenu}
                  id={`mega-${activeMenu.label.replace(/\W+/g, "-")}`}
                  onNavigate={closeAll}
                />
              </div>
            )}
          </AnimatePresence>
        </header>
      </div>
      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        onSearch={() => {
          setMobileOpen(false);
          setSearchOpen(true);
        }}
      />
      <SearchOverlay open={searchOpen} onClose={closeSearch} />
    </>
  );
}
