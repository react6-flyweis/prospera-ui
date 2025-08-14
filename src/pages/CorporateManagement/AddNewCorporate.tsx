import { useTranslation } from 'react-i18next';
import { CorporateEditor } from '@/components/CorporateManagement/CorporateEditor';
import { PageLayout } from '@/components/Layout/PageLayout';

export default function AddNewCorporate() {
  const { t } = useTranslation();
  return (
    <PageLayout title={t('addNewCorporatePage.title')} withBack>
      <CorporateEditor />
    </PageLayout>
  );
}
