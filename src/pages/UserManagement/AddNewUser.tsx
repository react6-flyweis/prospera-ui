import { useTranslation } from 'react-i18next';
import { PageLayout } from '@/components/Layout/PageLayout';
import { UserEditor } from '@/components/UserManagement/UserEditor';

export default function AddNewUser() {
  const { t } = useTranslation();
  return (
    <PageLayout title={t('addNewUserPage.title')} withBack>
      <UserEditor />
    </PageLayout>
  );
}
