import i18n from "i18next";
import NextI18Next from 'next-i18next';
import { initReactI18next } from "react-i18next";
import nextI18NextConfig from "../../next-i18next.config";
import { NextI18NextInstance } from 'next-i18next';
import en from "../../public/locales/en/common.json";
import pl from "../../public/locales/pl/common.json";

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'pl',
  otherLanguages: ['pl', 'en'],
});

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources: {
      en: { common: en },
      pl: { common: pl },
    },
    fallbackLng: nextI18NextConfig.i18n.defaultLocale,
    supportedLngs: nextI18NextConfig.i18n.locales,
    lng: nextI18NextConfig.i18n.defaultLocale,
    interpolation: {
      escapeValue: false, 
    },
  });

export default nextI18NextInstance;