import type React from 'react';

interface RankItemProps {
  rank: number;
  name: string;
  symbol: string;
  right: React.ReactNode;
  gradientClass?: string;
}

const RankItem: React.FC<RankItemProps> = ({ rank, name, symbol, right }) => (
  <div
    className={
      'flex items-center justify-between rounded-full bg-primary-gradient px-4 py-2 text-white'
    }
  >
    <span>{rank}</span>
    <span className="ml-2 flex-1">
      {name} <span className="text-gray-200 text-xs">{symbol}</span>
    </span>
    {right}
  </div>
);

interface TrendingItem {
  rank: number;
  name: string;
  symbol: string;
  change: string;
  changeType: 'up' | 'down';
}

interface RecentlyAddedItem {
  rank: number;
  name: string;
  symbol: string;
  price: string;
}

interface CryptoRankingListsProps {
  trending: TrendingItem[];
  recentlyAdded: RecentlyAddedItem[];
}

export const CryptoRankingLists: React.FC<CryptoRankingListsProps> = ({
  trending,
  recentlyAdded,
}) => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
    {/* Trending */}
    <div className="rounded-xl bg-white p-4 shadow">
      <div className="mb-2 flex items-center justify-between">
        <span className="font-semibold text-lg">🔥 Trending</span>
        <a className="text-primary text-xs" href="/">
          See all
        </a>
      </div>
      <div className="space-y-2">
        {trending.map((item) => (
          <RankItem
            key={item.rank}
            name={item.name}
            rank={item.rank}
            right={
              <span
                className={
                  item.changeType === 'up'
                    ? 'font-semibold text-green-300'
                    : 'font-semibold text-red-300'
                }
              >
                {item.change}
              </span>
            }
            symbol={item.symbol}
          />
        ))}
      </div>
    </div>
    {/* Recently Added */}
    <div className="rounded-xl bg-white p-4 shadow">
      <div className="mb-2 flex items-center justify-between">
        <span className="font-semibold text-lg">⏳ Recently added</span>
        <a className="text-primary text-xs" href="/">
          See all
        </a>
      </div>
      <div className="space-y-2">
        {recentlyAdded.map((item) => (
          <RankItem
            key={item.rank}
            name={item.name}
            rank={item.rank}
            right={<span className="font-semibold">{item.price}</span>}
            symbol={item.symbol}
          />
        ))}
      </div>
    </div>
  </div>
);
