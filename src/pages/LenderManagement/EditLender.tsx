import { useTranslation } from 'react-i18next';
import { PageLayout } from '@/components/Layout/PageLayout';
import { LenderEditor } from '@/components/LenderManagement/LenderEditor';

// Static mock lender data
export default function EditLender() {
  const { t } = useTranslation();
  // Get lenderId from route params
  //   const { lenderId } = useParams();
  const mockLender = {
    name: 'Kalyan Sarkar',
    email: 'example@gmail.com',
    joinDate: '11 November 2024',
    gender: 'Male',
    address: 'San Jose, California, USA',
    presentAddress: 'San Jose, California, USA',
    postalCode: '700012',
    mobile: '+1 9874 562103',
    lenderId: 'LD124563',
    dob: '20/08/94',
    language: 'English',
    city: 'San Jose',
    country: 'USA',
  };

  return (
    <PageLayout title={t('editLenderPage.title')} withBack>
      <LenderEditor initialData={mockLender} />
    </PageLayout>
  );
}
