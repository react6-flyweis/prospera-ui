// biome-ignore lint/style/noExportedImports: <explanation>
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import agentManagementTranslations from './locales/en/agentManagement.json' with {
  type: 'json',
};
import authTranslations from './locales/en/auth.json' with { type: 'json' };
import chatTranslations from './locales/en/chat.json' with { type: 'json' };
import commissionManagementTranslations from './locales/en/commissionManagement.json' with {
  type: 'json',
};
import complaintsTranslations from './locales/en/complaints.json' with {
  type: 'json',
};
import corporateManagementTranslations from './locales/en/corporateManagement.json' with {
  type: 'json',
};
import cryptoManagementTranslations from './locales/en/cryptoManagement.json' with {
  type: 'json',
};
import cryptoTransactionsTranslations from './locales/en/cryptoTransactions.json' with {
  type: 'json',
};
import employeeManagementTranslations from './locales/en/employeeManagement.json' with {
  type: 'json',
};
import homeTranslations from './locales/en/home.json' with { type: 'json' };
import kycVerificationTranslations from './locales/en/kycVerification.json' with {
  type: 'json',
};
import lenderManagementTranslations from './locales/en/lenderManagement.json' with {
  type: 'json',
};
import loanApprovalTranslations from './locales/en/loanApproval.json' with {
  type: 'json',
};
import notFoundTranslations from './locales/en/notFound.json' with {
  type: 'json',
};
import payrollManagementTranslations from './locales/en/payrollManagement.json' with {
  type: 'json',
};
import pushNotificationsTranslations from './locales/en/pushNotifications.json' with {
  type: 'json',
};
import reportsTranslations from './locales/en/reports.json' with {
  type: 'json',
};
import settingsTranslations from './locales/en/settings.json' with {
  type: 'json',
};
import userManagementTranslations from './locales/en/userManagement.json' with {
  type: 'json',
};
import vendorManagementTranslations from './locales/en/vendorManagement.json' with {
  type: 'json',
};
import walletTranslations from './locales/en/wallet.json' with { type: 'json' };

const resources = {
  en: {
    translation: {
      ...authTranslations,
      ...chatTranslations,
      ...settingsTranslations,
      ...reportsTranslations,
      ...walletTranslations,
      ...agentManagementTranslations,
      ...commissionManagementTranslations,
      ...complaintsTranslations,
      ...corporateManagementTranslations,
      ...cryptoManagementTranslations,
      ...cryptoTransactionsTranslations,
      ...employeeManagementTranslations,
      ...kycVerificationTranslations,
      ...lenderManagementTranslations,
      ...loanApprovalTranslations,
      ...payrollManagementTranslations,
      ...pushNotificationsTranslations,
      ...userManagementTranslations,
      ...vendorManagementTranslations,
      ...homeTranslations,
      ...notFoundTranslations,
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
