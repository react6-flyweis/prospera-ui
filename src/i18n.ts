import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language later on.
    fallbackLng: 'en', // fallback language if a translation is not found for the current language

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
