import { Area, AreaChart, XAxis, YAxis } from 'recharts';
import { Card } from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

export interface CryptoData {
  name: string;
  symbol: string;
  price: string;
  change: string;
  changePercent: string;
  isPositive: boolean;
  color: string;
  bgGradient: string;
  icon: string;
  data: Array<{ time: string; value: number }>;
}

interface CryptoChartProps {
  crypto: CryptoData;
}

export function CryptoChart({ crypto }: CryptoChartProps) {
  const chartConfig = {
    value: {
      label: 'Price',
      color: crypto.color,
    },
  };

  const gradientId = `${crypto.symbol.toLowerCase()}Gradient`;

  return (
    <Card className={'gap-0 border-2 p-4 '}>
      <div className="mb-4 flex items-center gap-2">
        <div
          className="flex h-8 w-8 items-center justify-center rounded-full"
          style={{ backgroundColor: crypto.color }}
        >
          <span className="font-bold text-sm text-white">{crypto.icon}</span>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">{crypto.name}</h3>
          <p className="text-gray-600 text-sm">{crypto.symbol}</p>
        </div>
      </div>

      <ChartContainer className="h-20 w-full" config={chartConfig}>
        <AreaChart data={crypto.data}>
          <defs>
            <linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1">
              <stop offset="5%" stopColor={crypto.color} stopOpacity={0.3} />
              <stop offset="95%" stopColor={crypto.color} stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            axisLine={false}
            dataKey="time"
            tick={false}
            tickLine={false}
          />
          <YAxis hide />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Area
            dataKey="value"
            fill={`url(#${gradientId})`}
            stroke={crypto.color}
            strokeWidth={2}
            type="monotone"
          />
        </AreaChart>
      </ChartContainer>

      <div className="mb-3 flex justify-between">
        <div className="font-bold text-gray-800 text-xl">{crypto.price}</div>
        <div className="flex items-center gap-1 text-sm">
          <span
            className={crypto.isPositive ? 'text-green-600' : 'text-red-600'}
          >
            {crypto.changePercent}
          </span>
          <span className="text-gray-500">
            {crypto.isPositive ? '📈' : '📉'}
          </span>
        </div>
      </div>
    </Card>
  );
}
