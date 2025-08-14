import { useTranslation } from 'react-i18next';
import { getCryptoTransactionColumns } from '@/components/CryptoTransaction/cryptoTransactionColumns';
import { DataTable } from '@/components/DataTable';
import { PageLayout } from '@/components/Layout/PageLayout';
import { cryptoTransactionData } from '@/data/cryptoTransactionData';

export default function CryptoTransactions() {
  const { t } = useTranslation();
  const cryptoTransactionColumns = getCryptoTransactionColumns(t);
  return (
    <PageLayout title={t('cryptoTransactionsPage.title')}>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-bold text-xl">
          {t('cryptoTransactionsPage.usersCryptoTransactions')}
        </h2>
      </div>
      <DataTable
        columns={cryptoTransactionColumns}
        data={cryptoTransactionData}
        pageSize={8}
        showPagination={true}
      />
    </PageLayout>
  );
}
