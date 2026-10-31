"use client";

import Link from "@/components/ui/Link";
import { contact } from "@/config/site";
import { useT } from "@/components/i18n/LocaleProvider";

export function TopBar() {
  const t = useT();
  return (
    <div className="bg-indigo-deep text-ivory/90">
      <div className="page-x mx-auto flex h-9 max-w-page items-center justify-between gap-4 text-[0.78rem] tracking-wide">
        <p className="truncate">
          {t("Tailor-made India journeys")}
        </p>
        <Link href="/contact" className="link-underline hidden shrink-0 sm:inline">
          {t(contact.replyPromise)} <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}
