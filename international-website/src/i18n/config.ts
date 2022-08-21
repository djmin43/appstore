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
          "only solution1":
            "There is only one way to solve complex business problems with one account",
          "only solution2": ".",
        },
      },
      ko: {
        translation: {
          title: "할머니",
          login: "로그인",
          "pricing plan": "요금제",
          signup: "무료 회원가입",
          "only solution1":
            "단 하나의 계정으로 모든 비즈니스 고민을 해결하는 솔루션은 오직",
          "only solution2": "뿐 입니다.",
        },
      },
    },
  });

i18next.languages = ["en", "ko"];

export default i18next;
