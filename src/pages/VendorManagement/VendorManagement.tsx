import { PlusIcon } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
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
import { vendorColumns } from '@/components/VendorManagement/vendorColumns';
import { vendorData } from '@/data/vendorsData';

export default function VendorManagement() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('All');

  return (
    <PageLayout title={t('vendorManagementPage.title')}>
      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="font-bold text-gray-800 text-xl">
              {t('vendorManagementPage.totalVendors')}{' '}
              <span className="font-normal text-gray-500">
                ({vendorData.length})
              </span>
            </h2>

            <Link to="/vendors/new">
              <Button
                className="rounded-full text-sm"
                type="button"
                variant="outline"
              >
                {t('vendorManagementPage.addNewVendorButton')}
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
                {t('vendorManagementPage.filter.all')}
              </SelectItem>
              <SelectItem value="Verified Vendors">
                {t('vendorManagementPage.filter.verifiedVendors')}
              </SelectItem>
              <SelectItem value="Blocked Vendors">
                {t('vendorManagementPage.filter.blockedVendors')}
              </SelectItem>
              <SelectItem value="Unblocked Vendors">
                {t('vendorManagementPage.filter.unblockedVendors')}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <DataTable columns={vendorColumns} data={vendorData} showPagination />
        {/* New Vendors Table */}
        <div className="mt-10">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="font-bold text-gray-800 text-lg">
              {t('vendorManagementPage.newVendorsSection.title')}{' '}
              <span className="font-normal text-gray-500">
                ({vendorData.slice(0, 3).length})
              </span>
            </h3>
            <Select defaultValue="30">
              <SelectTrigger className="rounded-full">
                <SelectValue
                  placeholder={t(
                    'vendorManagementPage.newVendorsSection.last30Days'
                  )}
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7">
                  {t('vendorManagementPage.newVendorsSection.last7Days')}
                </SelectItem>
                <SelectItem value="15">
                  {t('vendorManagementPage.newVendorsSection.last15Days')}
                </SelectItem>
                <SelectItem value="30">
                  {t('vendorManagementPage.newVendorsSection.last30Days')}
                </SelectItem>
                <SelectItem value="all">
                  {t('vendorManagementPage.newVendorsSection.allTime')}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <DataTable
            columns={vendorColumns}
            data={vendorData.slice(0, 3)}
            showPagination={false}
          />
        </div>
      </div>
    </PageLayout>
  );
}
