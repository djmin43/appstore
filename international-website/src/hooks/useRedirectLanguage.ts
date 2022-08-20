import React, { useEffect, useState } from "react";
import { navigate } from "gatsby";

const languageOptions: LanguageOptionTypes = {
  en: "en-US",
  ko: "ko-KR",
};

type LanguageOptionTypes = {
  [key in string]: string;
};

const useRedirectLanguage = () => {
  const [currentLang, setCurrentLang] = useState(languageOptions.en);

  const getRedirectLanguage = () => {
    if (typeof navigator === `undefined`) {
      return languageOptions.en;
    }

    const lang: string = navigator.language.split("-")[0] as string;

    //fallback language
    if (!lang) return languageOptions.en;

    return languageOptions[lang];
  };

  useEffect(() => {
    const urlLang = getRedirectLanguage();
    navigate(`/${urlLang}/`, { replace: true });
  }, []);

  return currentLang;
};

export default useRedirectLanguage;
