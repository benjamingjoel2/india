"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { MegaMenu as MegaMenuType } from "@/config/site";
import type { ImageKey } from "@/data/images";
import { SmartImage } from "@/components/ui/SmartImage";
import { Arrow } from "@/components/ui/Button";
import { ease } from "@/lib/motion";

export function MegaMenuPanel({ menu, id, onNavigate }: { menu: MegaMenuType; id: string; onNavigate: () => void }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      id={id}
      initial={reduce ? false : { opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.45, ease }}
      className="absolute inset-x-0 top-full border-t border-charcoal/10 bg-ivory text-charcoal shadow-[0_30px_60px_-30px_rgba(20,27,51,0.35)]"
    >
      <div className="page-x mx-auto grid max-w-page grid-cols-12 gap-10 py-12">
        <div className="col-span-3">
          <Link href={menu.href} onClick={onNavigate} className="group inline-flex items-center gap-3 font-display text-display-sm">
            {menu.label} <Arrow className="transition-transform duration-500 group-hover:translate-x-1" />
          </Link>
          <p className="mt-4 max-w-xs leading-relaxed text-charcoal/75">{menu.intro}</p>
        </div>
        <div className={menu.feature ? "col-span-6" : "col-span-9"}>
          {menu.groups ? (
            <div className="grid grid-cols-4 gap-x-8 gap-y-8">
              {menu.groups.map((g) => (
                <div key={g.label}>
                  <Link href={g.href} onClick={onNavigate} className="eyebrow link-underline text-stone hover:text-charcoal">
                    {g.label}
                  </Link>
                  <ul className="mt-3 space-y-1.5">
                    {g.links.map((l) => (
                      <li key={l.href}>
                        <Link href={l.href} onClick={onNavigate} className="link-underline text-[0.95rem]">
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <ul className="grid grid-cols-2 gap-x-10 gap-y-1">
              {menu.links?.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} onClick={onNavigate} className="group flex items-center justify-between border-b border-charcoal/10 py-3 font-display text-[1.2rem]">
                    <span className="group-hover:italic">{l.label}</span>
                    <Arrow className="opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-60" />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        {menu.feature && (
          <Link href={menu.feature.href} onClick={onNavigate} className="group col-span-3 block">
            <div className="relative aspect-[4/3] overflow-hidden">
              <SmartImage image={menu.feature.image as ImageKey} sizes="25vw" zoom />
            </div>
            <p className="mt-4 font-display text-display-xs">{menu.feature.title}</p>
            <p className="mt-1 text-sm text-charcoal/70">{menu.feature.text}</p>
          </Link>
        )}
      </div>
    </motion.div>
  );
}
