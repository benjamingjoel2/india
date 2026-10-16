"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { currencies, defaultCurrency, type CurrencyCode } from "@/config/site";

const STORAGE_KEY = "musafir:currency";

interface CurrencyContextValue {
  currency: CurrencyCode;
  setCurrency: (code: CurrencyCode) => void;
  format: (usd: number) => string;
}

const CurrencyContext = createContext<CurrencyContextValue | null>(null);

export function convert(usd: number, code: CurrencyCode) {
  const c = currencies[code];
  const raw = usd * c.rate;
  return Math.round(raw / c.round) * c.round;
}

export function formatPrice(usd: number, code: CurrencyCode) {
  const c = currencies[code];
  return new Intl.NumberFormat(c.locale, {
    style: "currency",
    currency: c.code,
    maximumFractionDigits: 0,
    currencyDisplay: code === "USD" ? "narrowSymbol" : "symbol",
  }).format(convert(usd, code));
}

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyCode>(defaultCurrency);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      // Restoring the visitor's choice after mount; localStorage isn't available on the server.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (saved && saved in currencies) setCurrencyState(saved as CurrencyCode);
    } catch {
      /* storage unavailable */
    }
  }, []);

  const setCurrency = useCallback((code: CurrencyCode) => {
    setCurrencyState(code);
    try {
      window.localStorage.setItem(STORAGE_KEY, code);
    } catch {
      /* storage unavailable */
    }
  }, []);

  const value = useMemo(
    () => ({ currency, setCurrency, format: (usd: number) => formatPrice(usd, currency) }),
    [currency, setCurrency],
  );

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error("useCurrency must be used inside CurrencyProvider");
  return ctx;
}
