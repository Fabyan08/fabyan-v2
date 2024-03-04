// LanguageContext.tsx
import React, { createContext, useContext, useState } from "react";

type LanguageContextType = {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC = ({ children }) => {
  const [language, setLanguage] = useState<string>("en"); // default to English

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
