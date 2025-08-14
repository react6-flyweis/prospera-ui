import { useTranslation } from 'react-i18next';
import { CryptoChart } from '@/components/charts/CryptoChart';
import { GaugeProgress } from '@/components/charts/GaugeProgress';
import { TotalMoneyApprovedChart } from '@/components/charts/TotalMoneyApprovedChart';
import type { KycStatusRow } from '@/components/KYCVerification/KYCStatusTable';
import { KYCStatusTable } from '@/components/KYCVerification/KYCStatusTable';
import { PageLayout } from '@/components/Layout/PageLayout';
import { cryptoData } from '@/data/cryptoData';
import { kycStatusData } from '@/data/kycStatusData';

export default function Home() {
  const { t } = useTranslation();
  return (
    <PageLayout className="" title={t('sidebar.dashboard')}>
      <div className="mb-6">
        <h1 className="font-bold text-2xl text-gray-800">
          {t('homePage.greeting')}
        </h1>
        <p className="text-gray-600">
          {t('homePage.subtitle', { name: 'Business' })}
        </p>
      </div>

      <div className="mb-6">
        <h2 className="mb-4 font-semibold text-gray-800 text-lg">
          {t('homePage.recentCryptoTrends')}
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cryptoData.map((crypto) => (
            <CryptoChart crypto={crypto} key={crypto.symbol} />
          ))}
        </div>
      </div>

      {/* KYC Verification Status */}
      <div className="mb-6 grid grid-cols-3 justify-between gap-8">
        <div className="col-span-2">
          <KYCStatusTable
            rows={kycStatusData as KycStatusRow[]}
            title={t('kycVerificationPage.title')}
          />
        </div>
        <GaugeProgress
          filter={t('homePage.gaugeProgress.filterAll')}
          filterOptions={[
            t('homePage.gaugeProgress.filterAll'),
            t('homePage.gaugeProgress.filterQ1'),
            t('homePage.gaugeProgress.filterQ2'),
            t('homePage.gaugeProgress.filterQ3'),
            t('homePage.gaugeProgress.filterQ4'),
          ]}
          label={t('homePage.gaugeProgress.completed')}
          stats={{ total: 95, completed: 26, delayed: 35, ongoing: 35 }}
          value={72}
        />
      </div>

      {/* Total Money Approved Chart */}
      <div className="mb-6">
        <TotalMoneyApprovedChart />
      </div>
    </PageLayout>
  );
}
