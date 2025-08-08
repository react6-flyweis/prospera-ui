import { cryptoColumns } from '@/components/CryptoTransaction/cryptoTransactionColumns';
import { DataTable } from '@/components/DataTable';
import { PageLayout } from '@/components/Layout/PageLayout';
import { cryptoTransactionData } from '@/data/cryptoTransactionData';

export default function CryptoTransactions() {
  return (
    <PageLayout title="Crypto Transaction">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-bold text-xl">Users Crypto Transactions</h2>
      </div>
      <DataTable
        columns={cryptoColumns}
        data={cryptoTransactionData}
        pageSize={8}
        showPagination={true}
      />
    </PageLayout>
  );
}
