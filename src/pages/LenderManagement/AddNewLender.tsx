import { PageLayout } from '@/components/Layout/PageLayout';
import { LenderEditor } from '@/components/LenderManagement/LenderEditor';

export default function AddNewLender() {
  return (
    <PageLayout title="Add a New Agent" withBack>
      <LenderEditor />
    </PageLayout>
  );
}
