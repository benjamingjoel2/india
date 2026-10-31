"use client";

import Link from "@/components/ui/Link";
import { buttonClass } from "@/components/ui/Button";
import { useT } from "@/components/i18n/LocaleProvider";
import { usePlanner, type PlannerPreset } from "./PlannerProvider";

type Variant = Parameters<typeof buttonClass>[0];

/**
 * "Plan my journey" call to action. A real link to /plan-my-journey that opens
 * the planner as a modal on a normal click (cmd/ctrl-click still opens the page).
 */
export function PlanButton({
  children,
  variant = "primary",
  className,
  preset,
}: {
  children?: React.ReactNode;
  variant?: Variant;
  className?: string;
  preset?: PlannerPreset;
}) {
  const { open } = usePlanner();
  const t = useT();
  return (
    <Link
      href="/plan-my-journey"
      className={buttonClass(variant, className)}
      onClick={(e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
        e.preventDefault();
        open(preset);
      }}
    >
      {children ?? t("Plan my journey")}
    </Link>
  );
}
