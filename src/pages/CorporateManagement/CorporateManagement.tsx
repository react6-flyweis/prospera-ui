import { PlusIcon } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import { getCorporateColumns } from '@/components/CorporateManagement/corporateColumns';
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
import { corporateData } from '@/data/corporatesData';

export default function CorporateManagement() {
  const { t } = useTranslation();
  const corporateColumns = getCorporateColumns(t);
  const [filter, setFilter] = useState('All');

  return (
    <PageLayout title={t('corporateManagementPage.title')}>
      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="font-bold text-gray-800 text-xl">
              {t('corporateManagementPage.totalCorporates')}{' '}
              <span className="font-normal text-gray-500">
                ({corporateData.length})
              </span>
            </h2>

            <Link to="/corporates/new">
              <Button
                className="rounded-full text-sm"
                type="button"
                variant="outline"
              >
                {t('corporateManagementPage.addNewCorporateButton')}
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
                {t('corporateManagementPage.filter.all')}
              </SelectItem>
              <SelectItem value="Verified Corporates">
                {t('corporateManagementPage.filter.verifiedCorporates')}
              </SelectItem>
              <SelectItem value="Blocked Corporates">
                {t('corporateManagementPage.filter.blockedCorporates')}
              </SelectItem>
              <SelectItem value="Unblocked Corporates">
                {t('corporateManagementPage.filter.unblockedCorporates')}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <DataTable
          columns={corporateColumns}
          data={corporateData}
          showPagination
        />
        {/* New Corporates Table */}
        <div className="mt-10">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="font-bold text-gray-800 text-lg">
              {t('corporateManagementPage.newCorporatesSection.title')}{' '}
              <span className="font-normal text-gray-500">
                ({corporateData.slice(0, 3).length})
              </span>
            </h3>
            <Select defaultValue="30">
              <SelectTrigger className="rounded-full">
                <SelectValue
                  placeholder={t(
                    'corporateManagementPage.newCorporatesSection.last30Days'
                  )}
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7">
                  {t('corporateManagementPage.newCorporatesSection.last7Days')}
                </SelectItem>
                <SelectItem value="15">
                  {t('corporateManagementPage.newCorporatesSection.last15Days')}
                </SelectItem>
                <SelectItem value="30">
                  {t('corporateManagementPage.newCorporatesSection.last30Days')}
                </SelectItem>
                <SelectItem value="all">
                  {t('corporateManagementPage.newCorporatesSection.allTime')}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <DataTable
            columns={corporateColumns}
            data={corporateData.slice(0, 3)}
            showPagination={false}
          />
        </div>
      </div>
    </PageLayout>
  );
}
