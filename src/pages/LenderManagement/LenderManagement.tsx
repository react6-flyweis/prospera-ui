import { PlusIcon } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import { DataTable } from '@/components/DataTable';
import { PageLayout } from '@/components/Layout/PageLayout';
import { getLendersColumns } from '@/components/LenderManagement/lendersColumns';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { lendersData } from '@/data/lendersData';

export default function LenderManagement() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('All');

  const lendersColumns = getLendersColumns(t);

  return (
    <PageLayout title={t('lenderManagementPage.title')}>
      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="font-bold text-gray-800 text-xl">
              {t('lenderManagementPage.totalLenders')}{' '}
              <span className="font-normal text-gray-500">
                ({lendersData.length})
              </span>
            </h2>

            <Link to="/lenders/new">
              <Button
                className="rounded-full text-sm"
                type="button"
                variant="outline"
              >
                {t('lenderManagementPage.addNewLenderButton')}
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
                {t('lenderManagementPage.filter.all')}
              </SelectItem>
              <SelectItem value="Verified">
                {t('lenderManagementPage.filter.verifiedLenders')}
              </SelectItem>
              <SelectItem value="Blocked">
                {t('lenderManagementPage.filter.blockedLenders')}
              </SelectItem>
              <SelectItem value="Unblocked">
                {t('lenderManagementPage.filter.unblockedLenders')}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <DataTable columns={lendersColumns} data={lendersData} showPagination />
        <div className="mt-10">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="font-bold text-gray-800 text-lg">
              {t('lenderManagementPage.newLendersSection.title')}{' '}
              <span className="font-normal text-gray-500">(15)</span>
            </h3>
            <Select defaultValue="30">
              <SelectTrigger className="rounded-full">
                <SelectValue
                  placeholder={t(
                    'lenderManagementPage.newLendersSection.last30Days'
                  )}
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7">
                  {t('lenderManagementPage.newLendersSection.last7Days')}
                </SelectItem>
                <SelectItem value="15">
                  {t('lenderManagementPage.newLendersSection.last15Days')}
                </SelectItem>
                <SelectItem value="30">
                  {t('lenderManagementPage.newLendersSection.last30Days')}
                </SelectItem>
                <SelectItem value="all">
                  {t('lenderManagementPage.newLendersSection.allTime')}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <DataTable
            columns={lendersColumns}
            data={lendersData.slice(0, 5)}
            showPagination={false}
          />
        </div>
      </div>
    </PageLayout>
  );
}
