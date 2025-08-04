import { PageLayout } from '@/components/Layout/PageLayout';
import { UserEditor } from '@/components/UserManagement/UserEditor';

export default function AddNewUser() {
  return (
    <PageLayout title="Add a New User" withBack>
      <UserEditor />
    </PageLayout>
  );
}
