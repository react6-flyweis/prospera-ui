// import { useParams } from 'react-router';

import { useTranslation } from 'react-i18next';
import { PageLayout } from '@/components/Layout/PageLayout';
import { UserEditor } from '@/components/UserManagement/UserEditor';

// Static mock user data

export default function EditUser() {
  const { t } = useTranslation();
  // Get userId from route params
  //   const { userId } = useParams();
  const mockUser = {
    name: 'Kalyan Sarkar',
    email: 'example@gmail.com',
    joinDate: '11 November 2024',
    gender: 'Male',
    address: 'San Jose, California, USA',
    presentAddress: 'San Jose, California, USA',
    postalCode: '700012',
    mobile: '+1 9874 562103',
    userId: 'US748520',
    dob: '20/08/94',
    language: 'English',
    city: 'San Jose',
    country: 'USA',
    bankName: 'Bank of America',
    branch: 'San Jose',
    accountHolderName: 'Kalyan Sarkar',
    accountNumber: '1234567890',
    ifscCode: 'BOFAUS3N',
  };

  return (
    <PageLayout title={t('editUserPage.title')} withBack>
      <UserEditor initialData={mockUser} />
    </PageLayout>
  );
}
