import { useTranslation } from 'react-i18next';
import { PageLayout } from '@/components/Layout/PageLayout';
import { VendorEditor } from '@/components/VendorManagement/VendorEditor';

export default function AddNewVendor() {
  const { t } = useTranslation();
  return (
    <PageLayout title={t('addNewVendorPage.title')} withBack>
      <VendorEditor />
    </PageLayout>
  );
}
