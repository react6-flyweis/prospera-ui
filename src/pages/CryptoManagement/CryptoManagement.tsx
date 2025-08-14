import { useTranslation } from 'react-i18next';
import { CryptoRankingLists } from '@/components/CryptoManagement/CryptoRankingLists';
import { getCryptoColumns } from '@/components/CryptoManagement/cryptoColumns';
import { cryptoData } from '@/components/CryptoManagement/cryptoData';
import { CryptoStackedBarChart } from '@/components/charts/CryptoStackedBarChart';
import { DataTable } from '@/components/DataTable';
import { PageLayout } from '@/components/Layout/PageLayout';
import { Button } from '@/components/ui/button';

export default function CryptoManagement() {
  const { t } = useTranslation();
  const cryptoColumns = getCryptoColumns(t);
  return (
    <PageLayout title={t('cryptoManagementPage.title')}>
      <div className="mb-8 flex items-center justify-between">
        <CryptoStackedBarChart />
        <div className="flex gap-4">
          <Button
            className="rounded-full px-6 hover:bg-primary hover:text-white"
            variant="outline"
          >
            {t('cryptoManagementPage.buyButton')}
          </Button>
          <Button
            className="rounded-full px-6 hover:bg-primary hover:text-white"
            variant="outline"
          >
            {t('cryptoManagementPage.sellButton')}
          </Button>
          <Button
            className="rounded-full px-6 hover:bg-primary hover:text-white"
            variant="outline"
          >
            {t('cryptoManagementPage.transferButton')}
          </Button>
        </div>
      </div>
      <DataTable
        columns={cryptoColumns}
        data={cryptoData}
        pageSize={8}
        showPagination={true}
      />
      <h2 className="mt-10 mb-2 font-semibold text-xl">
        {t('cryptoManagementPage.todaysPricesTitle')}
      </h2>
      <CryptoRankingLists
        recentlyAdded={[
          { rank: 1, name: 'Phona', symbol: 'PHO', price: '$0.000314' },
          { rank: 2, name: 'Stacks', symbol: 'STK', price: '$0.0000785' },
          { rank: 3, name: 'Symvol', symbol: 'SYM', price: '$0.000000129' },
        ]}
        trending={[
          {
            rank: 1,
            name: 'Tether',
            symbol: 'USDT',
            change: '+0.42%',
            changeType: 'up',
          },
          {
            rank: 2,
            name: 'Uniswap',
            symbol: 'UNI',
            change: '+2.33%',
            changeType: 'up',
          },
          {
            rank: 3,
            name: 'Wazirx',
            symbol: 'WRX',
            change: '-0.01%',
            changeType: 'down',
          },
        ]}
      />
    </PageLayout>
  );
}
