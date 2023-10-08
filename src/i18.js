import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { translation } from "../src/Languages/Languages";

const urlParams = new URLSearchParams(window.location.search);
const urlLang = urlParams.get("lang");

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: "en",
    resources: {
      ar: { translation: translation.ar },
      en: { translation: translation.en },
    },
    lng: urlLang ?? "en",
    interpolation: {
      escapeValue: false,
    },
  });
