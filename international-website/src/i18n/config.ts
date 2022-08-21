import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .init({
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          title: "harmony",
        },
      },
      ko: {
        translation: {
          title: "할머니",
        },
      },
    },
  });

i18next.languages = ["en", "ko"];

export default i18next;
