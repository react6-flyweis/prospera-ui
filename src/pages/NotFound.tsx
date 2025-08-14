import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { PageLayout } from '@/components/Layout/PageLayout';
import { Button } from '@/components/ui/button';

export default function NotFoundPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <PageLayout
      className="flex h-screen flex-col items-center justify-center text-center"
      title={t('notFoundPage.title')}
    >
      <h1 className="mb-4 font-bold text-6xl text-primary">404</h1>
      <h2 className="mb-2 font-semibold text-2xl text-gray-800">
        {t('notFoundPage.pageNotFound')}
      </h2>
      <p className="mb-6 text-muted-foreground">{t('notFoundPage.message')}</p>
      <Button className="" onClick={goBack} size="lg">
        {t('notFoundPage.goBackButton')}
      </Button>
    </PageLayout>
  );
}
