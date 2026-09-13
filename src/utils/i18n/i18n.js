import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

const SUPPORTED_LNGS = ["en", "ru"];
const baseUrl = import.meta.env.BASE_URL;
// BASE_URL is "/" for the root-domain build and "/MyPersonalSite/" for the
// GitHub Pages build — the locale segment sits one path index further in
// for the latter, so derive the index from how many segments BASE_URL has.
const baseSegments = baseUrl.split("/").filter(Boolean).length;

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    supportedLngs: SUPPORTED_LNGS,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      // Absolute (base-rooted) path: with locale-prefixed URLs (/en/, /ru/)
      // a relative "./locales/..." would resolve against the current
      // sub-path and 404.
      loadPath: `${baseUrl}locales/{{lng}}/translation.json`,
    },
    detection: {
      order: ["path", "localStorage", "navigator"],
      lookupFromPathIndex: baseSegments,
    },
  });

let isInitialSync = true;

i18n.on("languageChanged", (lng) => {
  document.documentElement.lang = lng;

  if (!SUPPORTED_LNGS.includes(lng)) return;

  const targetPath = `${baseUrl}${lng}/${window.location.hash}`;
  const currentPath = window.location.pathname + window.location.hash;
  if (currentPath !== targetPath) {
    if (isInitialSync) {
      window.history.replaceState(null, "", targetPath);
    } else {
      window.history.pushState(null, "", targetPath);
    }
  }
  isInitialSync = false;
});

export default i18n;
