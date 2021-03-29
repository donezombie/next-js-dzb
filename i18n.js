import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';
import viLang from './locales/vi';
import enLang from './locales/en';

i18n
  // .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    defaultNS: 'label',
    lng: 'en',
    fallbackLng: 'en',
    resources: {
      vi: viLang,
      en: enLang
    },
    interpolation: {
      escapeValue: false,
    },
    debug: false,
    detection: {
      order: ["path", "navigator"]
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;
