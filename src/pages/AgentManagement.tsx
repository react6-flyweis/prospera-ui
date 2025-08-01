import { PlusIcon } from 'lucide-react';
import { useState } from 'react';
import { agentsColumns } from '@/components/AgentManagement/agentsColumns';
import { DataTable } from '@/components/DataTable';
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
    <div>
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
            <SelectTrigger className="w-[170px] rounded-full border px-3 py-1 font-medium text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
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
      </div>
    </div>
  );
}
