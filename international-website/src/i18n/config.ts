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
          login: "Log in",
          "pricing plan": "Pricing plan",
          signup: "Sign up",
        },
      },
      ko: {
        translation: {
          title: "할머니",
          login: "로그인",
          "pricing plan": "요금제",
          signup: "무료 회원가입",
        },
      },
    },
  });

i18next.languages = ["en", "ko"];

export default i18next;
