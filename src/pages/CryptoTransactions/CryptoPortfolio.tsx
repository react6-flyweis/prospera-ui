import { useTranslation } from 'react-i18next';
import { getCryptoPortfolioColumns } from '@/components/CryptoTransaction/cryptoPortfolioColumns';
import { cryptoPortfolioData } from '@/components/CryptoTransaction/cryptoPortfolioData';
import { CryptoStackedBarChart } from '@/components/charts/CryptoStackedBarChart';
import { DataTable } from '@/components/DataTable';
import { PageLayout } from '@/components/Layout/PageLayout';

export default function CryptoPortfolio() {
  const { t } = useTranslation();
  const cryptoPortfolioColumns = getCryptoPortfolioColumns(t);
  const usersName = 'Kalyan Sarkar';
  return (
    <PageLayout
      title={`${usersName}'s ${t('cryptoPortfolioPage.portfolio')}`}
      withBack
    >
      <div className="space-y-10">
        {/* Crypto Balance Summary */}
        <div className="">
          <div className="mb-2 font-medium text-lg">
            {t('cryptoPortfolioPage.currentCryptoBalance')}
          </div>
          <div className="font-bold text-3xl">$2,77,308.00</div>
          <div className="mt-1 flex items-center gap-2">
            <span className="text-base text-red-600">-$1200.78 (-1.89%)</span>
            <span className="rounded-full bg-primary-gradient px-2 py-1 font-semibold text-white text-xs">
              {t('cryptoPortfolioPage.24h')}
            </span>
          </div>
          <div className="mt-6 flex gap-8">
            <div>
              <div className="text-gray-500 text-xs">
                {t('cryptoPortfolioPage.allTimeProfit')}
              </div>
              <div className="font-semibold text-green-600 text-sm">
                ▲ 2.52% (+$324.82)
              </div>
            </div>
            <div>
              <div className="text-gray-500 text-xs">
                {t('cryptoPortfolioPage.bestPerformer')}
              </div>
              <div className="flex items-center gap-1 font-semibold text-green-600 text-sm">
                {/* Example icon, replace with actual icon if needed */}
                <span className="mr-1 inline-block h-4 w-4 rounded bg-green-200" />
                ▲ 10.52% (+$627.82)
              </div>
            </div>
            <div>
              <div className="text-gray-500 text-xs">
                {t('cryptoPortfolioPage.worstPerformer')}
              </div>
              <div className="flex items-center gap-1 font-semibold text-red-600 text-sm">
                {/* Example icon, replace with actual icon if needed */}
                <span className="mr-1 inline-block h-4 w-4 rounded bg-red-200" />
                ▼ 1.23% (-$87.32)
              </div>
            </div>
          </div>
        </div>
        {/* Chart and Table */}
        <CryptoStackedBarChart />
        <DataTable
          columns={cryptoPortfolioColumns}
          data={cryptoPortfolioData}
          pageSize={10}
          showPagination={true}
        />
      </div>
    </PageLayout>
  );
}
