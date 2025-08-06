import { PlusIcon } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';
import { DataTable } from '@/components/DataTable';
import { employeeColumns } from '@/components/EmployeeManagement/employeeColumns';
import { PageLayout } from '@/components/Layout/PageLayout';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { employeesData } from '@/data/employeeData';

export default function EmployeeManagement() {
  const [filter, setFilter] = useState('All');

  return (
    <PageLayout title="Employee Management">
      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="font-bold text-gray-800 text-xl">
              Total Employees{' '}
              <span className="font-normal text-gray-500">
                ({employeesData.length})
              </span>
            </h2>

            <Link to="/employees/new">
              <Button
                className="rounded-full text-sm"
                type="button"
                variant="outline"
              >
                Add A New Employee
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
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="Verified">Verified</SelectItem>
              <SelectItem value="Blocked">Blocked</SelectItem>
              <SelectItem value="Unblocked">Unblocked</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <DataTable
          columns={employeeColumns}
          data={employeesData}
          showPagination
        />
        <div className="mt-10">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="font-bold text-gray-800 text-lg">
              New Employees{' '}
              <span className="font-normal text-gray-500">(5)</span>
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
            columns={employeeColumns}
            data={employeesData.slice(0, 5)}
            showPagination={false}
          />
        </div>
      </div>
    </PageLayout>
  );
}
