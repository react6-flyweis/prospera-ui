import { PlusIcon } from 'lucide-react';
import { useState } from 'react';
import { agentsColumns } from '@/components/AgentManagement/agentsColumns';
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
  const [filter, setFilter] = useState('All');

  return (
    <PageLayout title="Agent Management">
      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="font-bold text-gray-800 text-xl">
              Total Agents{' '}
              <span className="font-normal text-gray-500">
                ({agentsData.length})
              </span>
            </h2>

            <Button
              className="rounded-full text-sm"
              type="button"
              variant="outline"
            >
              Add A New Agent
              <div className="flex size-4 items-center justify-center rounded-full border">
                <PlusIcon className="size-3" />
              </div>
            </Button>
          </div>
          <Select onValueChange={setFilter} value={filter}>
            <SelectTrigger className="rounded-full ">
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="Verified Agents">Verified Agents</SelectItem>
              <SelectItem value="Blocked Agents">Blocked Agents</SelectItem>
              <SelectItem value="Unblocked Agents">Unblocked Agents</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <DataTable columns={agentsColumns} data={agentsData} showPagination />
        {/* New Agents Table (reusing DataTable and agentsColumns/agentsData) */}
        <div className="mt-10">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="font-bold text-gray-800 text-lg">
              New Agents <span className="font-normal text-gray-500">(15)</span>
            </h3>
            <Select defaultValue="30">
              <SelectTrigger className="rounded-full">
                <SelectValue placeholder="Last 30 Days" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7">Last 7 Days</SelectItem>
                <SelectItem value="15">Last 15 Days</SelectItem>
                <SelectItem value="30">Last 30 Days</SelectItem>
                <SelectItem value="all">All Time</SelectItem>
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
