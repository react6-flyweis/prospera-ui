import supportIcon from '@/assets/icons/help-support.png';
import privacyIcon from '@/assets/icons/privacy-policy.png';
import termsIcon from '@/assets/icons/terms-condition.png';
import { PageLayout } from '@/components/Layout/PageLayout';
import { SettingsInfoCard } from '@/components/Settings/SettingsInfoCard';

const cards = [
  {
    title: 'Privacy Policy',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    icon: privacyIcon,
    alt: 'Privacy Policy Icon',
  },
  {
    title: 'Terms & Condition',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    icon: termsIcon,
    alt: 'Terms & Condition Icon',
  },
  {
    title: 'Help & Support',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    icon: supportIcon,
    alt: 'Help & Support Icon',
  },
];

export default function Settings() {
  return (
    <PageLayout className="flex flex-wrap justify-start gap-6" title="Settings">
      <div className="grid grid-cols-3 gap-5">
        {cards.map((card) => (
          <SettingsInfoCard key={card.title} {...card} />
        ))}
      </div>
    </PageLayout>
  );
}
