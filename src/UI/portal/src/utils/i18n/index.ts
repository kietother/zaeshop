import i18n, { InitOptions } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import enJson from './locales/en/translation.json';
import viJson from './locales/vi/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init<InitOptions>({
    resources: {
      en: {
        translations: enJson
      },
      vi: {
        translations: viJson
      }
    },
    fallbackLng: "en",
    debug: false,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",
    // keySeparator: false, // we use content as keys
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;