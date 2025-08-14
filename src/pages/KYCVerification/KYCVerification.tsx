import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DataTable } from '@/components/DataTable';
import { getKycColumns } from '@/components/KYCVerification/kycColumns';
import { PageLayout } from '@/components/Layout/PageLayout';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type { UserType } from '@/components/WalletManagement/walletColumns';
import { getKYCDataByType } from '@/data/kycData';

export default function KYCVerification() {
  const { t } = useTranslation();
  const [selectedType, setSelectedType] = useState<UserType>('agents');
  const kycColumns = getKycColumns(t);

  const kycData = getKYCDataByType(selectedType);

  return (
    <PageLayout className="" title={t('kycVerificationPage.title')}>
      <div className="mb-4 flex items-center justify-between">
        <div className="">
          <p className="text-gray-500 text-sm">
            {t('kycVerificationPage.verificationPurpose', {
              type: selectedType,
            })}
          </p>
        </div>
        <Select
          onValueChange={(value) => setSelectedType(value as UserType)}
          value={selectedType}
        >
          <SelectTrigger className="w-40 rounded">
            <SelectValue
              placeholder={t('kycVerificationPage.usersPlaceholder')}
            />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="agents">
              {t('kycVerificationPage.agents')}
            </SelectItem>
            <SelectItem value="vendors">
              {t('kycVerificationPage.vendors')}
            </SelectItem>
            <SelectItem value="corporates">
              {t('kycVerificationPage.corporates')}
            </SelectItem>
            <SelectItem value="lenders">
              {t('kycVerificationPage.lenders')}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <DataTable
        columns={kycColumns}
        data={kycData}
        pageSize={8}
        showPagination={true}
      />
    </PageLayout>
  );
}
