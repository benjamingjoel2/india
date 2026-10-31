"use client";

import { createContext, useCallback, useContext } from "react";
import { defaultLocale, interpolate, type Locale, type Translate } from "@/lib/i18n/config";

interface LocaleContextValue {
  locale: Locale;
  messages: Record<string, string>;
}

const LocaleContext = createContext<LocaleContextValue>({ locale: defaultLocale, messages: {} });

/** Gives client components the page's locale and the few translations they need (no runtime library). */
export function LocaleProvider({ locale, messages, children }: LocaleContextValue & { children: React.ReactNode }) {
  return <LocaleContext.Provider value={{ locale, messages }}>{children}</LocaleContext.Provider>;
}

export function useLocale(): Locale {
  return useContext(LocaleContext).locale;
}

/** Client-side `t()`: English in, current language out. */
export function useT(): Translate {
  const { messages } = useContext(LocaleContext);
  return useCallback((s, vars) => interpolate(messages[s] ?? s, vars), [messages]);
}
