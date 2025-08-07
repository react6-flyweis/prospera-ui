import { useState } from 'react';
import { DataTable } from '@/components/DataTable';
import { kycColumns } from '@/components/KYCVerification/kycColumns';
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
  const [selectedType, setSelectedType] = useState<UserType>('agents');

  const kycData = getKYCDataByType(selectedType);

  return (
    <PageLayout className="" title="KYC Verification">
      <div className="mb-4 flex items-center justify-between">
        <div className="">
          <p className="text-gray-500 text-sm">
            The {selectedType} listed here are for verification purposes.
          </p>
        </div>
        <Select
          onValueChange={(value) => setSelectedType(value as UserType)}
          value={selectedType}
        >
          <SelectTrigger className="w-40 rounded">
            <SelectValue placeholder="Users" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="agents">Agents</SelectItem>
            <SelectItem value="vendors">Vendors</SelectItem>
            <SelectItem value="corporates">Corporates</SelectItem>
            <SelectItem value="lenders">Lenders</SelectItem>
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
