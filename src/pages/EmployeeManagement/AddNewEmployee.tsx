import { useTranslation } from 'react-i18next';
import { EmployeeEditor } from '@/components/EmployeeManagement/EmployeeEditor';
import { PageLayout } from '@/components/Layout/PageLayout';

export default function AddNewEmployee() {
  const { t } = useTranslation();
  return (
    <PageLayout title={t('addNewEmployeePage.title')} withBack>
      <EmployeeEditor />
    </PageLayout>
  );
}
