import AgentEditor from '@/components/AgentManagement/AgentEditor';
import { PageLayout } from '@/components/Layout/PageLayout';

export default function AddNewAgent() {
  return (
    <PageLayout title="Add a New Agent" withBack>
      <AgentEditor />
    </PageLayout>
  );
}
