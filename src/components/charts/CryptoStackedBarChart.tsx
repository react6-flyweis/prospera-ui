interface CryptoMarketShare {
  name: string;
  symbol: string;
  percent: number;
  color: string;
  bgColor: string;
}

const chartData: CryptoMarketShare[] = [
  {
    name: 'Tether',
    symbol: 'USDT',
    percent: 35.02,
    color: '#10b981',
    bgColor: 'bg-emerald-500',
  },
  {
    name: 'Sushi Swap',
    symbol: 'SUSHI',
    percent: 20,
    color: '#8b5cf6',
    bgColor: 'bg-purple-500',
  },
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    percent: 45.02,
    color: '#f59e0b',
    bgColor: 'bg-amber-400',
  },
];

export function CryptoStackedBarChart() {
  return (
    <div className="w-full px-4">
      {/* Stacked Bar Chart */}
      <div className="relative">
        <div className="flex h-3 w-full gap-1 overflow-hidden rounded ">
          {chartData.map((item, index) => (
            <div
              className={`h-full ${item.bgColor} ${index > 0 ? 'border-white border-l' : ''}`}
              key={item.symbol}
              style={{ width: `${item.percent}%` }}
            />
          ))}
        </div>

        {/* Discrete Lines and Labels at End of Each Segment */}
        <div className="relative mt-2">
          {chartData.map((item, index) => {
            const cumulativePercent = chartData
              .slice(0, index + 1)
              .reduce((sum, curr) => sum + curr.percent, 0);

            return (
              <div
                className="absolute"
                key={item.symbol}
                style={{
                  left: `${cumulativePercent}%`,
                  transform: 'translateX(-50%)',
                }}
              >
                {/* Discrete line at segment end */}
                <div className="mx-auto h-2 w-px bg-gray-400" />

                {/* Label positioned at segment end */}
                <div className="mt-1 flex items-center gap-1 text-center">
                  <span
                    className="inline-block size-2 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <div className="font-medium text-gray-900 text-xs">
                    {item.name}
                  </div>
                  <div className="font-semibold text-gray-500 text-xs">
                    ({item.percent}%)
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
