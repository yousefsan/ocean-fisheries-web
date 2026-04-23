"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

type Lang = "ar" | "en";

function readLang(): Lang {
  if (typeof window === "undefined") return "ar";
  return localStorage.getItem("site-lang") === "en" ? "en" : "ar";
}

type LanguageContextValue = {
  lang: Lang;
  setLang: (next: Lang | ((prev: Lang) => Lang)) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => readLang());

  useEffect(() => {
    localStorage.setItem("site-lang", lang);
    document.body.classList.remove("ar", "en");
    document.body.classList.add(lang);
    document.body.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    document.body.setAttribute("lang", lang === "ar" ? "ar" : "en");
  }, [lang]);

  const setLang = useCallback((next: Lang | ((prev: Lang) => Lang)) => {
    setLangState(next);
  }, []);

  const value = useMemo(() => ({ lang, setLang }), [lang, setLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
