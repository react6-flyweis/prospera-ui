import { PageLayout } from '@/components/Layout/PageLayout';
import { VendorEditor } from '@/components/VendorManagement/VendorEditor';

// Static mock vendor data
export default function EditVendor() {
  // Get vendorId from route params
  //   const { vendorId } = useParams();
  const mockVendor = {
    name: 'Kalyan Sarkar',
    email: 'example@gmail.com',
    joinDate: '11 November 2024',
    gender: 'Male',
    address: 'San Jose, California, USA',
    postalCode: '700012',
    mobile: '+1 9874 562103',
    vendorId: 'VE124563',
    dob: '20/08/94',
    language: 'English',
    city: 'San Jose',
    country: 'USA',
    bankName: 'Bank of America',
    branch: 'San Jose',
    accountHolder: 'Kalyan Sarkar',
    accountNumber: '1234567890',
    ifsc: 'BOFAUS3N',
  };

  return (
    <PageLayout title="Edit Vendor" withBack>
      <VendorEditor initialData={mockVendor} />
    </PageLayout>
  );
}
