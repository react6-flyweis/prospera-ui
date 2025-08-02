import { CryptoChart } from '@/components/charts/CryptoChart';
import { PageLayout } from '@/components/Layout/PageLayout';
import { cryptoData } from '@/data/cryptoData';

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
    </PageLayout>
  );
}
