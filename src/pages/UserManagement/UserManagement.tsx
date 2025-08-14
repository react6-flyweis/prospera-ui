import { PlusIcon } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import { DataTable } from '@/components/DataTable';
import { PageLayout } from '@/components/Layout/PageLayout';
import { getUsersColumns } from '@/components/UserManagement/usersColumns';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { usersData } from '@/data/usersData';

export default function UserManagement() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('All');

  const usersColumns = getUsersColumns(t);

  return (
    <PageLayout title={t('userManagementPage.title')}>
      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="font-bold text-gray-800 text-xl">
              {t('userManagementPage.totalUsers')}{' '}
              <span className="font-normal text-gray-500">
                ({usersData.length})
              </span>
            </h2>

            <Link to="/users/new">
              <Button
                className="rounded-full text-sm"
                type="button"
                variant="outline"
              >
                {t('userManagementPage.addNewUserButton')}
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
                {t('userManagementPage.filter.all')}
              </SelectItem>
              <SelectItem value="Verified">
                {t('userManagementPage.filter.verified')}
              </SelectItem>
              <SelectItem value="Blocked">
                {t('userManagementPage.filter.blocked')}
              </SelectItem>
              <SelectItem value="Unblocked">
                {t('userManagementPage.filter.unblocked')}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <DataTable columns={usersColumns} data={usersData} showPagination />
        <div className="mt-10">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="font-bold text-gray-800 text-lg">
              {t('userManagementPage.newUsersSection.title')}{' '}
              <span className="font-normal text-gray-500">(15)</span>
            </h3>
            <Select defaultValue="30">
              <SelectTrigger className="rounded-full">
                <SelectValue
                  placeholder={t(
                    'userManagementPage.newUsersSection.last30Days'
                  )}
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7">
                  {t('userManagementPage.newUsersSection.last7Days')}
                </SelectItem>
                <SelectItem value="15">
                  {t('userManagementPage.newUsersSection.last15Days')}
                </SelectItem>
                <SelectItem value="30">
                  {t('userManagementPage.newUsersSection.last30Days')}
                </SelectItem>
                <SelectItem value="all">
                  {t('userManagementPage.newUsersSection.allTime')}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <DataTable
            columns={usersColumns}
            data={usersData.slice(0, 5)}
            showPagination={false}
          />
        </div>
      </div>
    </PageLayout>
  );
}
