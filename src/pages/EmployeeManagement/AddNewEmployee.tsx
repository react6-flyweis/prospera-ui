import { EmployeeEditor } from '@/components/EmployeeManagement/EmployeeEditor';
import { PageLayout } from '@/components/Layout/PageLayout';

export default function AddNewEmployee() {
  return (
    <PageLayout title="Add a New Employee" withBack>
      <EmployeeEditor />
    </PageLayout>
  );
}
