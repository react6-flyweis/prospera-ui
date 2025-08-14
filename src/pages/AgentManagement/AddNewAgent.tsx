import { useTranslation } from 'react-i18next';
import { AgentEditor } from '@/components/AgentManagement/AgentEditor';
import { PageLayout } from '@/components/Layout/PageLayout';

export default function AddNewAgent() {
  const { t } = useTranslation();
  return (
    <PageLayout title={t('addNewAgentPage.title')} withBack>
      <AgentEditor />
    </PageLayout>
  );
}
