import { Edit2Icon, Trash2Icon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { PageLayout } from '@/components/Layout/PageLayout';
import { TermsConditionDialog } from '@/components/Settings/TermsConditionDialog';
import { Button } from '@/components/ui/button';

const terms = [
  {
    id: 1,
    headline: 'Terms & Condition Headline',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

export default function TermsCondition() {
  const { t } = useTranslation();
  return (
    <PageLayout title={t('termsConditionPage.title')} withBack>
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm">{t('termsConditionPage.description')}</span>
        <TermsConditionDialog>
          <Button
            className="w-32 rounded bg-primary-gradient text-white"
            size="lg"
          >
            {t('termsConditionPage.addButton')}
          </Button>
        </TermsConditionDialog>
      </div>

      <div className="space-y-4">
        {terms.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-gray-400">
            <div className="mb-2 font-semibold text-lg">
              {t('termsConditionPage.noTerms')}
            </div>
            <div className="text-sm">
              {t('termsConditionPage.noTermsMessage')}
            </div>
          </div>
        ) : (
          terms.map((term) => (
            <div
              className="rounded-lg border bg-white p-4 shadow-sm"
              key={term.id}
            >
              <div className="mb-2 flex items-center justify-between">
                <div className="font-semibold">{term.headline}</div>
                <div className="flex gap-3">
                  <TermsConditionDialog initialValues={term}>
                    <Button
                      aria-label={t('termsConditionPage.editAriaLabel')}
                      className="rounded-md p-2 text-blue-600 shadow-none"
                      size="icon"
                      variant="ghost"
                    >
                      <Edit2Icon size={28} strokeWidth={2.2} />
                    </Button>
                  </TermsConditionDialog>
                  <Button
                    aria-label={t('termsConditionPage.deleteAriaLabel')}
                    className="rounded-md p-2 text-red-600 shadow-none"
                    size="icon"
                    variant="ghost"
                  >
                    <Trash2Icon size={28} strokeWidth={2.2} />
                  </Button>
                </div>
              </div>
              <div className="mb-2 text-gray-600 text-xs">
                {term.description}
              </div>
            </div>
          ))
        )}
      </div>
    </PageLayout>
  );
}
