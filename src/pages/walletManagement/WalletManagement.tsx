import { useState } from 'react';
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
  type UserType,
  walletColumns,
} from '@/components/WalletManagement/walletColumns';
import { getWalletDataByType } from '@/data/walletData';

export default function WalletManagement() {
  const [selectedType, setSelectedType] = useState<UserType>('users');

  const walletData = getWalletDataByType(selectedType);

  return (
    <PageLayout title="Wallet Management">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-bold text-xl">
          {selectedType.charAt(0).toUpperCase() + selectedType.slice(1)} Wallet
        </h2>
        <Select
          onValueChange={(value) => setSelectedType(value as UserType)}
          value={selectedType}
        >
          <SelectTrigger className="w-40 rounded">
            <SelectValue placeholder="Users" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="users">Users</SelectItem>
            <SelectItem value="employees">Employees</SelectItem>
            <SelectItem value="corporates">Corporates</SelectItem>
            <SelectItem value="agents">Agents</SelectItem>
            <SelectItem value="lenders">Lenders</SelectItem>
            <SelectItem value="vendors">Vendors</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <DataTable
        columns={walletColumns}
        data={walletData}
        pageSize={8}
        showPagination={true}
      />
    </PageLayout>
  );
}
