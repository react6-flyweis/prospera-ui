import { CorporateEditor } from '@/components/CorporateManagement/CorporateEditor';
import { PageLayout } from '@/components/Layout/PageLayout';

export default function AddNewCorporate() {
  return (
    <PageLayout title="Add a New Corporate" withBack>
      <CorporateEditor />
    </PageLayout>
  );
}
