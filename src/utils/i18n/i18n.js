import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "./locales/{{lng}}/translation.json",
    },
  });

function syncHtmlLang(lng) {
  document.documentElement.lang = lng;
}

i18n.on("languageChanged", syncHtmlLang);
if (i18n.resolvedLanguage) {
  syncHtmlLang(i18n.resolvedLanguage);
}

export default i18n;
