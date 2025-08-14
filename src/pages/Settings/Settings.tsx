import { useTranslation } from 'react-i18next';
import supportIcon from '@/assets/icons/help-support.png';
import privacyIcon from '@/assets/icons/privacy-policy.png';
import termsIcon from '@/assets/icons/terms-condition.png';
import { PageLayout } from '@/components/Layout/PageLayout';
import { SettingsInfoCard } from '@/components/Settings/SettingsInfoCard';

export default function Settings() {
  const { t } = useTranslation();
  const cards = [
    {
      title: t('settingsPage.cards.privacyPolicy.title'),
      description: t('settingsPage.cards.privacyPolicy.description'),
      icon: privacyIcon,
      alt: t('settingsPage.cards.privacyPolicy.alt'),
    },
    {
      title: t('settingsPage.cards.termsAndCondition.title'),
      description: t('settingsPage.cards.termsAndCondition.description'),
      icon: termsIcon,
      alt: t('settingsPage.cards.termsAndCondition.alt'),
    },
    {
      title: t('settingsPage.cards.helpAndSupport.title'),
      description: t('settingsPage.cards.helpAndSupport.description'),
      icon: supportIcon,
      alt: t('settingsPage.cards.helpAndSupport.alt'),
    },
  ];
  return (
    <PageLayout
      className="flex flex-wrap justify-start gap-6"
      title={t('settingsPage.title')}
    >
      <div className="grid grid-cols-3 gap-5">
        {cards.map((card) => (
          <SettingsInfoCard key={card.title} {...card} />
        ))}
      </div>
    </PageLayout>
  );
}
