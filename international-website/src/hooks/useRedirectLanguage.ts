import React, { useEffect, useState } from "react";
import { navigate } from "gatsby";

enum LanguageOptions {
  EN = "en",
  KO = "ko",
}

const useRedirectLanguage = () => {
  const [currentLang, setCurrentLang] = useState(LanguageOptions.EN);

  const getRedirectLanguage = () => {
    if (typeof navigator === `undefined`) {
      return LanguageOptions.EN;
    }

    const lang =
      navigator && navigator.language && navigator.language.split("-")[0];
    if (!lang) return LanguageOptions.EN;

    return lang;
  };

  useEffect(() => {
    const urlLang = getRedirectLanguage();

    navigate(`/${urlLang}/`, { replace: true });
  }, []);

  return {
    language: currentLang,
    changeLanguage: setCurrentLang,
  };
};

export default useRedirectLanguage;
