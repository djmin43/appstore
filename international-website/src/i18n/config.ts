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
          "product header":
            "When you just don't have time to mange all the products",
          "product description":
            "Register your own product. Sellers at Harmony will take care of it",
          "sales header": "When you don't have product you want to sell",
          "sales description":
            "Pick up products from suppliers. You can find all product from the globe",
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
          "product header": "판매에 신경 쓰기 어려울 때",
          "product description":
            "본인이 보유한 상품을 등록하세요. Harmony에서 활동하는 수 많은 셀러들이 알아서 판매해드립니다.",
          "sales header": "내가 보유한 상품이 없을 때",
          "sales description":
            "서플라이어가 공개한 상품을 판매해 보세요. 전 세계 모든 상품을 Harmony에서 찾을 수 있습니다.",
        },
      },
    },
  });

i18next.languages = ["en", "ko"];

export default i18next;
