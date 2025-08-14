// biome-ignore lint/style/noExportedImports: Re-exporting i18n for configuration
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation module names
const translationModules = [
  'agentManagement',
  'auth',
  'chat',
  'commissionManagement',
  'common',
  'complaints',
  'corporateManagement',
  'cryptoManagement',
  'cryptoTransactions',
  'employeeManagement',
  'home',
  'kycVerification',
  'lenderManagement',
  'loanApproval',
  'notFound',
  'payrollManagement',
  'pushNotifications',
  'reports',
  'settings',
  'userManagement',
  'vendorManagement',
  'wallet',
];

// Function to dynamically load translations for a language
export const loadLanguageResources = async (languageCode: string) => {
  const translations: Record<string, unknown> = {};

  try {
    const promises = translationModules.map(async (module) => {
      try {
        const translation = await import(
          `./locales/${languageCode}/${module}.json`
        );
        return { data: translation.default || translation };
      } catch {
        return { data: {} };
      }
    });

    const results = await Promise.all(promises);

    for (const { data } of results) {
      Object.assign(translations, data);
    }

    return translations;
  } catch {
    return {};
  }
};

// Initial empty resources
const resources = {
  en: { translation: {} },
  fr: { translation: {} },
  es: { translation: {} },
};

export const languages = [
  { code: 'en', name: 'English (UK)', flag: '🇬🇧' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
];

// Get saved language from localStorage or default to 'en'
const savedLanguage = localStorage.getItem('language') || 'en';

// Initialize i18n
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: savedLanguage, // use saved language or default
    // you can use the i18n.changeLanguage function to change the language later on.
    fallbackLng: 'en', // fallback language if a translation is not found for the current language

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

// Load initial translations for the saved language
loadLanguageResources(savedLanguage).then((translations) => {
  i18n.addResourceBundle(
    savedLanguage,
    'translation',
    translations,
    true,
    true
  );
});

// Function to change language with dynamic loading
export const changeLanguageWithLoading = async (languageCode: string) => {
  const translations = await loadLanguageResources(languageCode);
  i18n.addResourceBundle(languageCode, 'translation', translations, true, true);
  await i18n.changeLanguage(languageCode);
  localStorage.setItem('language', languageCode);
};

export default i18n;
