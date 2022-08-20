import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

i18next.use(initReactI18next).use(I18nextBrowserLanguageDetector).init({
  fallbackLng: "en",
});

i18next.languages = ["en-US", "ko-KR"];

export default i18next;
