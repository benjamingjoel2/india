"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";
import { useLocale, useT } from "@/components/i18n/LocaleProvider";

type Status = "idle" | "loading" | "success" | "error";

/** Email capture used in the footer and the free guide signup. Posts to /api/subscribe. */
export function NewsletterForm({
  source,
  cta,
  successTitle,
  successText,
  tone = "dark",
  className,
}: {
  source: string;
  cta?: string;
  successTitle?: string;
  successText?: string;
  tone?: "dark" | "light";
  className?: string;
}) {
  const t = useT();
  const locale = useLocale();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const id = useId();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = new FormData(form).get("email")?.toString().trim() ?? "";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(t("Please enter a valid email address."));
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source, locale }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setError(t("Something went wrong. Please try again."));
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className={cn("py-2", className)}>
        <p className="font-display text-display-xs italic">{successTitle ?? t("Thank you.")}</p>
        <p className="mt-1 opacity-80">{successText ?? t("Look out for our next letter from India.")}</p>
      </div>
    );
  }

  const dark = tone === "dark";
  return (
    <form onSubmit={onSubmit} noValidate className={className}>
      <label htmlFor={`${id}-email`} className="sr-only">
        {t("Email address")}
      </label>
      <div className={cn("flex items-center gap-2 border-b pb-2", dark ? "border-ivory/40" : "border-charcoal/40")}>
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder={t("Your email address")}
          aria-invalid={status === "error"}
          aria-describedby={status === "error" ? `${id}-err` : undefined}
          className={cn(
            "min-h-11 w-full bg-transparent text-base outline-none",
            dark ? "placeholder:text-ivory/70" : "placeholder:text-charcoal/50",
          )}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className={cn(
            "shrink-0 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-500",
            dark ? "bg-ivory text-charcoal hover:bg-marigold" : "bg-indigo text-ivory hover:bg-indigo-deep",
          )}
        >
          {status === "loading" ? t("Sending…") : (cta ?? t("Subscribe"))}
        </button>
      </div>
      {status === "error" && (
        <p id={`${id}-err`} role="alert" className={cn("mt-2 text-sm", dark ? "text-marigold" : "text-spice")}>
          {error}
        </p>
      )}
      <p className="mt-3 text-xs opacity-60">{t("We write rarely and never share your address. Unsubscribe any time.")}</p>
    </form>
  );
}
