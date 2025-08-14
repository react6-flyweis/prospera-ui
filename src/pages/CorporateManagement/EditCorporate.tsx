import { useTranslation } from 'react-i18next';
import { CorporateEditor } from '@/components/CorporateManagement/CorporateEditor';
import { PageLayout } from '@/components/Layout/PageLayout';

// Static mock corporate data
export default function EditCorporate() {
  const { t } = useTranslation();
  // Get corporateId from route params
  //   const { corporateId } = useParams();
  const mockCorporate = {
    name: 'Kalyan Sarkar',
    email: 'example@gmail.com',
    joinDate: '11 November 2024',
    gender: 'Male',
    address: 'San Jose, California, USA',
    postalCode: '700012',
    mobile: '+1 9874 562103',
    corporateId: 'CP124563',
    dob: '20/08/94',
    language: 'English',
    city: 'San Jose',
    country: 'USA',
    bankName: 'Bank of America',
    branch: 'San Jose',
    accountHolder: 'Kalyan Sarkar',
    accountNumber: '1234567890',
    ifsc: 'BOFAUS3N',
    // About Company fields
    employeesCount: '89',
    businessSetting: 'In office or remote',
    payrollDescription: "We're new to running payroll",
    hasCompanyBankAccount: 'Yes',
    africaTeamMembers: '89',
    industry: 'Technology',
    desiredFirstPayday: '01/31/2024',
    needClockInOut: 'Yes',
    currentPayrollMethod: 'Manual',
    companyPaying: 'Monthly',
    registeredWithIRS: 'Yes',
    hiredFirstTeamMember: 'Yes',
    africanRegions: 'Nigeria, Ghana',
    hasAccountant: 'Yes',
    wantHealthBenefits: 'Yes',
    hasWorkersCompInsurance: 'Yes',
  };

  return (
    <PageLayout title={t('editCorporatePage.title')} withBack>
      <CorporateEditor initialData={mockCorporate} />
    </PageLayout>
  );
}
