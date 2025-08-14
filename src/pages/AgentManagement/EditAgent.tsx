import { useTranslation } from 'react-i18next';
import { AgentEditor } from '@/components/AgentManagement/AgentEditor';
import { PageLayout } from '@/components/Layout/PageLayout';

// Static mock agent data
export default function EditAgent() {
  const { t } = useTranslation();
  // Get agentId from route params
  //   const { agentId } = useParams();
  const mockAgent = {
    name: 'Kalyan Sarkar',
    email: 'example@gmail.com',
    joinDate: '11 November 2024',
    gender: 'Male',
    address: 'San Jose, California, USA',
    postalCode: '700012',
    mobile: '+1 9874 562103',
    agentId: 'AG124563',
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
    <PageLayout title={t('editAgentPage.title')} withBack>
      <AgentEditor initialData={mockAgent} />
    </PageLayout>
  );
}
