"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { translations, Language } from "@/i18n/translations";

type TranslationType = (typeof translations)["pt"] | (typeof translations)["en"];

type LanguageContextType = {
  lang: Language;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: any;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("pt");

  const toggleLanguage = () => {
    setLang((prev) => (prev === "pt" ? "en" : "pt"));
  };

  const t: TranslationType = translations[lang];

  return (
    <LanguageContext.Provider
      value={{ lang, t, toggleLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
