import { PlusIcon } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import { DataTable } from '@/components/DataTable';
import { getEmployeeColumns } from '@/components/EmployeeManagement/employeeColumns';
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
  const { t } = useTranslation();
  const [filter, setFilter] = useState('All');

  const employeeColumns = getEmployeeColumns(t);

  return (
    <PageLayout title={t('employeeManagementPage.title')}>
      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="font-bold text-gray-800 text-xl">
              {t('employeeManagementPage.totalEmployees')}{' '}
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
                {t('employeeManagementPage.addNewEmployeeButton')}
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
                {t('employeeManagementPage.filter.all')}
              </SelectItem>
              <SelectItem value="Verified">
                {t('employeeManagementPage.filter.verified')}
              </SelectItem>
              <SelectItem value="Blocked">
                {t('employeeManagementPage.filter.blocked')}
              </SelectItem>
              <SelectItem value="Unblocked">
                {t('employeeManagementPage.filter.unblocked')}
              </SelectItem>
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
              {t('employeeManagementPage.newEmployeesSection.title')}{' '}
              <span className="font-normal text-gray-500">(5)</span>
            </h3>
            <Select defaultValue="30">
              <SelectTrigger className="rounded-full">
                <SelectValue
                  placeholder={t(
                    'employeeManagementPage.newEmployeesSection.last30Days'
                  )}
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7">
                  {t('employeeManagementPage.newEmployeesSection.last7Days')}
                </SelectItem>
                <SelectItem value="15">
                  {t('employeeManagementPage.newEmployeesSection.last15Days')}
                </SelectItem>
                <SelectItem value="30">
                  {t('employeeManagementPage.newEmployeesSection.last30Days')}
                </SelectItem>
                <SelectItem value="all">
                  {t('employeeManagementPage.newEmployeesSection.allTime')}
                </SelectItem>
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
