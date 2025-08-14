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
      title: t('cards.privacyPolicy.title'),
      description: t('cards.privacyPolicy.description'),
      icon: privacyIcon,
      alt: t('cards.privacyPolicy.alt'),
    },
    {
      title: t('cards.termsAndCondition.title'),
      description: t('cards.termsAndCondition.description'),
      icon: termsIcon,
      alt: t('cards.termsAndCondition.alt'),
    },
    {
      title: t('cards.helpAndSupport.title'),
      description: t('cards.helpAndSupport.description'),
      icon: supportIcon,
      alt: t('cards.helpAndSupport.alt'),
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
