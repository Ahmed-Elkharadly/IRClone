import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { translation } from "../src/Languages/Languages";
// import Backend from "i18next-http-backend";

const urlParams = new URLSearchParams(window.location.search);
const urlLang = urlParams.get("lang");

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  // .use(Backend)
  .init({
    resources: {
      ar: { translation: translation.ar },
      en: { translation: translation.en },
    },
    lng: urlLang ?? localStorage.getItem("i18nextLng") ?? "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
