import { Edit2Icon, Trash2Icon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { PageLayout } from '@/components/Layout/PageLayout';
import { PrivacyPolicyDialog } from '@/components/Settings/PrivacyPolicyDialog';
import { Button } from '@/components/ui/button';

const policies = [
  {
    id: 1,
    headline: 'Privacy Policy Headline',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

export default function PrivacyPolicy() {
  const { t } = useTranslation();
  return (
    <PageLayout title={t('privacyPolicyPage.title')} withBack>
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm">{t('privacyPolicyPage.description')}</span>
        <PrivacyPolicyDialog>
          <Button
            className="w-32 rounded bg-primary-gradient text-white"
            size="lg"
          >
            {t('privacyPolicyPage.addButton')}
          </Button>
        </PrivacyPolicyDialog>
      </div>

      <div className="space-y-4">
        {policies.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-gray-400">
            <div className="mb-2 font-semibold text-lg">
              {t('privacyPolicyPage.noPolicies')}
            </div>
            <div className="text-sm">
              {t('privacyPolicyPage.noPoliciesMessage')}
            </div>
          </div>
        ) : (
          policies.map((policy) => (
            <div
              className="rounded-lg border bg-white p-4 shadow-sm"
              key={policy.id}
            >
              <div className="mb-2 flex items-center justify-between">
                <div className="font-semibold">{policy.headline}</div>
                <div className="flex gap-3">
                  <PrivacyPolicyDialog initialValues={policy}>
                    <Button
                      aria-label={t('privacyPolicyPage.editAriaLabel')}
                      className="rounded-md p-2 text-blue-600 shadow-none"
                      size="icon"
                      variant="ghost"
                    >
                      <Edit2Icon size={28} strokeWidth={2.2} />
                    </Button>
                  </PrivacyPolicyDialog>
                  <Button
                    aria-label={t('privacyPolicyPage.deleteAriaLabel')}
                    className="rounded-md p-2 text-red-600 shadow-none"
                    size="icon"
                    variant="ghost"
                  >
                    <Trash2Icon size={28} strokeWidth={2.2} />
                  </Button>
                </div>
              </div>
              <div className="mb-2 text-gray-600 text-xs">
                {policy.description}
              </div>
            </div>
          ))
        )}
      </div>
    </PageLayout>
  );
}
