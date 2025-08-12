import { PageLayout } from '@/components/Layout/PageLayout';
import { VendorEditor } from '@/components/VendorManagement/VendorEditor';

export default function AddNewVendor() {
  return (
    <PageLayout title="Add a New Vendor" withBack>
      <VendorEditor />
    </PageLayout>
  );
}
