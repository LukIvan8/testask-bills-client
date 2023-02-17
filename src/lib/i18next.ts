import i18n from "i18next";
import Bill from "../lang/ua/bill.json"
import {initReactI18next} from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {ua: {translation: {bill:Bill} }}


i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    debug: true,
    fallbackLng: 'ua',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;