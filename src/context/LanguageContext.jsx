import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const languages = {
  en: {
    name: "English",
    nativeName: "English",
    dir: "ltr",
  },
  fr: {
    name: "French",
    nativeName: "Français",
    dir: "ltr",
  },
  ar: {
    name: "Arabic",
    nativeName: "العربية",
    dir: "rtl",
  },
};

export function LanguageProvider({ children }) {
  const [currentLanguage, setCurrentLanguage] = useState("en");

  return (
    <LanguageContext.Provider value={{ currentLanguage, setCurrentLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
