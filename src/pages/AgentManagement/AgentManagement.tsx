import { PlusIcon } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import { getAgentsColumns } from '@/components/AgentManagement/agentsColumns';
import { DataTable } from '@/components/DataTable';
import { PageLayout } from '@/components/Layout/PageLayout';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { agentsData } from '@/data/agentsData';

export default function AgentManagement() {
  const { t } = useTranslation();
  const agentsColumns = getAgentsColumns(t);
  const [filter, setFilter] = useState('All');

  return (
    <PageLayout title={t('agentManagementPage.title')}>
      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="font-bold text-gray-800 text-xl">
              {t('agentManagementPage.totalAgents')}{' '}
              <span className="font-normal text-gray-500">
                ({agentsData.length})
              </span>
            </h2>

            <Link to="/agents/new">
              <Button
                className="rounded-full text-sm"
                type="button"
                variant="outline"
              >
                {t('agentManagementPage.addNewAgentButton')}
                <div className="flex size-4 items-center justify-center rounded-full border">
                  <PlusIcon className="size-3" />
                </div>
              </Button>
            </Link>
          </div>
          <Select onValueChange={setFilter} value={filter}>
            <SelectTrigger className="rounded-full ">
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">
                {t('agentManagementPage.filter.all')}
              </SelectItem>
              <SelectItem value="Verified Agents">
                {t('agentManagementPage.filter.verifiedAgents')}
              </SelectItem>
              <SelectItem value="Blocked Agents">
                {t('agentManagementPage.filter.blockedAgents')}
              </SelectItem>
              <SelectItem value="Unblocked Agents">
                {t('agentManagementPage.filter.unblockedAgents')}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <DataTable columns={agentsColumns} data={agentsData} showPagination />
        {/* New Agents Table (reusing DataTable and agentsColumns/agentsData) */}
        <div className="mt-10">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="font-bold text-gray-800 text-lg">
              {t('agentManagementPage.newAgentsSection.title')}{' '}
              <span className="font-normal text-gray-500">(15)</span>
            </h3>
            <Select defaultValue="30">
              <SelectTrigger className="rounded-full">
                <SelectValue
                  placeholder={t(
                    'agentManagementPage.newAgentsSection.last30Days'
                  )}
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7">
                  {t('agentManagementPage.newAgentsSection.last7Days')}
                </SelectItem>
                <SelectItem value="15">
                  {t('agentManagementPage.newAgentsSection.last15Days')}
                </SelectItem>
                <SelectItem value="30">
                  {t('agentManagementPage.newAgentsSection.last30Days')}
                </SelectItem>
                <SelectItem value="all">
                  {t('agentManagementPage.newAgentsSection.allTime')}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <DataTable
            columns={agentsColumns}
            data={agentsData.slice(0, 5)}
            showPagination={false}
          />
        </div>
      </div>
    </PageLayout>
  );
}
