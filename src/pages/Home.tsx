import { CryptoChart } from '@/components/charts/CryptoChart';
import { GaugeProgress } from '@/components/charts/GaugeProgress';
import { TotalMoneyApprovedChart } from '@/components/charts/TotalMoneyApprovedChart';
import type { KycStatusRow } from '@/components/KYCVerification/KYCStatusTable';
import { KYCStatusTable } from '@/components/KYCVerification/KYCStatusTable';
import { PageLayout } from '@/components/Layout/PageLayout';
import { cryptoData } from '@/data/cryptoData';
import { kycStatusData } from '@/data/kycStatusData';

export default function Home() {
  return (
    <PageLayout className="" title="Home">
      <div className="mb-6">
        <h1 className="font-bold text-2xl text-gray-800">Good morning</h1>
        <p className="text-gray-600">Here's what's going on with your Name</p>
      </div>

      <div className="mb-6">
        <h2 className="mb-4 font-semibold text-gray-800 text-lg">
          Recent Crypto Trends
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cryptoData.map((crypto) => (
            <CryptoChart crypto={crypto} key={crypto.symbol} />
          ))}
        </div>
      </div>

      {/* KYC Verification Status */}
      <div className="mb-6 flex justify-between gap-8">
        <KYCStatusTable rows={kycStatusData as KycStatusRow[]} />
        <GaugeProgress
          filter="All"
          filterOptions={['All', 'Q1', 'Q2', 'Q3', 'Q4']}
          label="Completed"
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
