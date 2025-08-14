import { useTranslation } from 'react-i18next';
import { PageLayout } from '@/components/Layout/PageLayout';
import { LenderEditor } from '@/components/LenderManagement/LenderEditor';

export default function AddNewLender() {
  const { t } = useTranslation();
  return (
    <PageLayout title={t('addNewLenderPage.title')} withBack>
      <LenderEditor />
    </PageLayout>
  );
}
