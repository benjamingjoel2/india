"use client";

import { useState } from "react";
import { buttonClass } from "@/components/ui/Button";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const errs: Record<string, string> = {};
    if (!fd.name?.trim()) errs.name = "Please add your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fd.email ?? "")) errs.email = "Please enter a valid email.";
    if ((fd.message ?? "").trim().length < 10) errs.message = "Tell us a little more (10+ characters).";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(fd) });
      if (!res.ok) throw new Error();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent")
    return (
      <div role="status" className="mt-8 border border-kerala/40 bg-kerala/5 p-8">
        <p className="font-display text-display-xs italic">Thank you. We&rsquo;ll be in touch very soon.</p>
      </div>
    );

  const input = "mt-2 min-h-12 w-full border border-charcoal/25 bg-ivory px-4 py-3 outline-none focus:border-indigo";
  return (
    <form onSubmit={onSubmit} noValidate className="mt-8 grid gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="text-sm font-medium">
          Name
          <input name="name" autoComplete="name" className={input} aria-invalid={!!errors.name} aria-describedby={errors.name ? "c-name-e" : undefined} />
          {errors.name && <span id="c-name-e" role="alert" className="mt-1 block text-spice">{errors.name}</span>}
        </label>
        <label className="text-sm font-medium">
          Email
          <input name="email" type="email" autoComplete="email" className={input} aria-invalid={!!errors.email} aria-describedby={errors.email ? "c-email-e" : undefined} />
          {errors.email && <span id="c-email-e" role="alert" className="mt-1 block text-spice">{errors.email}</span>}
        </label>
      </div>
      <label className="text-sm font-medium">
        Message
        <textarea name="message" rows={6} className={input} aria-invalid={!!errors.message} aria-describedby={errors.message ? "c-msg-e" : undefined} />
        {errors.message && <span id="c-msg-e" role="alert" className="mt-1 block text-spice">{errors.message}</span>}
      </label>
      {status === "error" && <p role="alert" className="text-sm text-spice">Sorry, that didn&rsquo;t send. Please try WhatsApp or email.</p>}
      <div>
        <button type="submit" disabled={status === "sending"} className={buttonClass("primary")}>
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
      </div>
    </form>
  );
}
