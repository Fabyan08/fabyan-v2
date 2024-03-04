// LanguageSwitcher.js
import React from "react";
import { useLanguage } from "./LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <div>
      <button onClick={() => handleLanguageChange("en")}>English</button>
      <button onClick={() => handleLanguageChange("id")}>Indonesia</button>
    </div>
  );
};

export default LanguageSwitcher;
