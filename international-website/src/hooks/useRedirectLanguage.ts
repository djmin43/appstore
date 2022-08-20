import React, { useEffect, useState } from "react";
import { navigate } from "gatsby";

const languageOptions: LanguageOptionTypes = {
  en: "en",
  ko: "ko",
};

type LanguageOptionTypes = {
  [key in string]: string;
};

const useRedirectLanguage = () => {
  const getRedirectLanguage = () => {
    if (typeof navigator === `undefined`) {
      return languageOptions.en;
    }

    const lang = navigator.language.split("-")[0];

    //fallback language
    if (!lang) return languageOptions.en;
    console.log(lang);

    return languageOptions[lang];
  };

  useEffect(() => {
    const urlLang = getRedirectLanguage();
    navigate(`/${urlLang}/`, { replace: true });
  }, []);
};

export default useRedirectLanguage;
