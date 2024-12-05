import i18n, { t } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "hi",
    // fallbackLng: "en",
    resources: {
      en: {
        translation: {
          rLoaderText: "From Here to Anywhere, We Deliver.",
        },
      },
      fr: {
        translation: {
          rLoaderText: "D'ici à n'importe où, nous livrons.",
        },
      },
      hi: {
        translation: {
          rLoaderText: "यहां से कहीं भी, हम डिलीवरी करते हैं।",
        },
      },
    },
  });
