"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { getT, type Locale } from "@/lib/translations";

const STORAGE_KEY = "portfolio-lang";

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: ReturnType<typeof getT>;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored === "en" || stored === "ko") setLocaleState(stored);
    setMounted(true);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    if (typeof window !== "undefined") localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const t = getT(locale);

  if (!mounted) {
    return (
      <LanguageContext.Provider
        value={{ locale: "en", setLocale, t: getT("en") }}
      >
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
