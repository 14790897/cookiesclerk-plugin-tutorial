import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enTranslation from "./locales/en/translation.json";
import zhTranslation from "./locales/zh/translation.json";

i18n
  .use(LanguageDetector)  // 使用 LanguageDetector
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      zh: {
        translation: zhTranslation
      }
    },
    fallbackLng: "en", // 当当前语言的翻译缺失时回退到该语言
    interpolation: {
      escapeValue: false // react已经安全了
    }
  });

export default i18n;
