import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DataTable } from '@/components/DataTable';
import { PageLayout } from '@/components/Layout/PageLayout';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  getWalletColumns,
  type UserType,
} from '@/components/WalletManagement/walletColumns';
import { getWalletDataByType } from '@/data/walletData';

export default function WalletManagement() {
  const [selectedType, setSelectedType] = useState<UserType>('users');
  const { t } = useTranslation();

  const walletData = getWalletDataByType(selectedType);

  return (
    <PageLayout title={t('walletManagement.pageTitle')}>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-bold text-xl">
          {selectedType.charAt(0).toUpperCase() + selectedType.slice(1)}{' '}
          {t('walletManagement.walletSuffix')}
        </h2>
        <Select
          onValueChange={(value) => setSelectedType(value as UserType)}
          value={selectedType}
        >
          <SelectTrigger className="w-40 rounded">
            <SelectValue placeholder={t('chatPage.chatTypes.users')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="users">
              {t('chatPage.chatTypes.users')}
            </SelectItem>
            <SelectItem value="employees">
              {t('chatPage.chatTypes.employees')}
            </SelectItem>
            <SelectItem value="corporates">
              {t('chatPage.chatTypes.corporates')}
            </SelectItem>
            <SelectItem value="agents">
              {t('chatPage.chatTypes.agents')}
            </SelectItem>
            <SelectItem value="lenders">
              {t('chatPage.chatTypes.lenders')}
            </SelectItem>
            <SelectItem value="vendors">
              {t('chatPage.chatTypes.vendors')}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <DataTable
        columns={getWalletColumns(t)}
        data={walletData}
        pageSize={8}
        showPagination={true}
      />
    </PageLayout>
  );
}
