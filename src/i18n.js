import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslations from './locales/en.json';
import ruTranslations from './locales/ru.json';
import uzTranslations from './locales/uz.json';

const resources = {
  EN: {
    translation: enTranslations
  },
  PУ: {
    translation: ruTranslations
  },
  "O'Z": {
    translation: uzTranslations
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'EN',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;