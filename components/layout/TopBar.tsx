import Link from "next/link";
import { brand, contact } from "@/config/site";

export function TopBar() {
  return (
    <div className="bg-indigo-deep text-ivory/90">
      <div className="page-x mx-auto flex h-9 max-w-page items-center justify-between gap-4 text-[0.78rem] tracking-wide">
        <p className="truncate">
          Tailor-made India journeys since {brand.established}
        </p>
        <Link href="/contact" className="link-underline hidden shrink-0 sm:inline">
          {contact.replyPromise} <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}
