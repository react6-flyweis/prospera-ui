import { DownloadIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ReferenceDot,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Button } from '@/components/ui/button';

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

// Example data for two years
// Removed unused year variables

const currentYearData = [
  { month: 'Jan', value: 5_200_000 },
  { month: 'Feb', value: 5_340_000 },
  { month: 'Mar', value: 5_620_000 },
  { month: 'Apr', value: 5_500_000 },
  { month: 'May', value: 5_920_000 },
  { month: 'Jun', value: 6_080_000, date: 'Jun 14, 2025', highlight: true },
  { month: 'Jul', value: 5_980_000 },
  { month: 'Aug', value: 6_220_000 },
  { month: 'Sep', value: 6_140_000 },
  { month: 'Oct', value: 6_380_000 },
  { month: 'Nov', value: 6_700_000 },
  { month: 'Dec', value: 6_900_000 },
];

const previousYearData = [
  { month: 'Jan', value: 4_800_000 },
  { month: 'Feb', value: 4_860_000 },
  { month: 'Mar', value: 5_000_000 },
  { month: 'Apr', value: 4_920_000 },
  { month: 'May', value: 5_200_000 },
  { month: 'Jun', value: 5_320_000 },
  { month: 'Jul', value: 5_260_000 },
  { month: 'Aug', value: 5_480_000 },
  { month: 'Sep', value: 5_420_000 },
  { month: 'Oct', value: 5_650_000, date: 'Oct 15, 2024', highlight: true },
  { month: 'Nov', value: 5_780_000 },
  { month: 'Dec', value: 5_900_000 },
];

// Merge for chart
const chartData = months.map((month, idx) => ({
  month,
  current: currentYearData[idx]?.value ?? null,
  previous: previousYearData[idx]?.value ?? null,
  currentHighlight: !!currentYearData[idx]?.highlight,
  currentDate: currentYearData[idx]?.date ?? '',
  previousHighlight: !!previousYearData[idx]?.highlight,
  previousDate: previousYearData[idx]?.date ?? '',
}));

export function TotalMoneyApprovedChart() {
  const { t } = useTranslation();

  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-bold text-2xl text-gray-800">
          {t('totalMoneyApprovedChart.title')}
        </h2>
        <div className="flex gap-2">
          <Button variant="outline">
            {t('totalMoneyApprovedChart.periods.12months')}
          </Button>
          <Button variant="ghost">
            {t('totalMoneyApprovedChart.periods.6months')}
          </Button>
          <Button variant="ghost">
            {t('totalMoneyApprovedChart.periods.30days')}
          </Button>
          <Button variant="ghost">
            {t('totalMoneyApprovedChart.periods.7days')}
          </Button>
          <Button className="flex items-center gap-2" variant="outline">
            <DownloadIcon size={16} /> {t('totalMoneyApprovedChart.exportPdf')}
          </Button>
        </div>
      </div>
      <ResponsiveContainer height={250} width="100%">
        <AreaChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorCurrent" x1="0" x2="0" y1="0" y2="1">
              <stop offset="5%" stopColor="#312e81" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#312e81" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPrevious" x1="0" x2="0" y1="0" y2="1">
              <stop offset="5%" stopColor="#312e81" stopOpacity={0.08} />
              <stop offset="95%" stopColor="#312e81" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            axisLine={false}
            dataKey="month"
            tick={{ fill: '#64748b', fontSize: 14 }}
            tickLine={false}
          />
          <YAxis hide />
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <Tooltip content={<CustomTooltip />} />
          <Area
            dataKey="previous"
            fill="url(#colorPrevious)"
            fillOpacity={1}
            stroke="#312e81"
            strokeOpacity={0.3}
            type="monotone"
          />
          <Area
            dataKey="current"
            fill="url(#colorCurrent)"
            fillOpacity={1}
            stroke="#312e81"
            type="monotone"
          />
          {/* Highlight markers for selected months */}
          {chartData
            .filter((d) => d.currentHighlight)
            .map((d) => (
              <ReferenceLine
                key={`${d.month}-current`}
                stroke="#312e81"
                strokeDasharray="3 3"
                x={d.month}
              />
            ))}
          {chartData
            .filter((d) => d.currentHighlight)
            .map((d) => (
              <ReferenceDot
                fill="#312e81"
                key={`${d.month}-current-dot`}
                label={
                  <HighlightLabel
                    amount={d.current ?? 0}
                    title={d.currentDate}
                  />
                }
                r={8}
                stroke="#fff"
                strokeWidth={3}
                x={d.month}
                y={d.current}
              />
            ))}
          {chartData
            .filter((d) => d.previousHighlight)
            .map((d) => (
              <ReferenceLine
                key={`${d.month}-previous`}
                stroke="#312e81"
                strokeDasharray="3 3"
                x={d.month}
              />
            ))}
          {chartData
            .filter((d) => d.previousHighlight)
            .map((d) => (
              <ReferenceDot
                fill="#312e81"
                key={`${d.month}-previous-dot`}
                label={
                  <HighlightLabel
                    amount={d.previous ?? 0}
                    title={d.previousDate}
                  />
                }
                r={8}
                stroke="#fff"
                strokeWidth={3}
                x={d.month}
                y={d.previous}
              />
            ))}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ payload: (typeof chartData)[0] }>;
}

function CustomTooltip({ active, payload }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    const d = payload[0].payload as {
      month: string;
      current: number | null;
      previous: number | null;
      currentHighlight?: boolean;
      currentDate?: string;
      previousHighlight?: boolean;
      previousDate?: string;
    };
    // Prefer highlighted display if present
    if (d.currentHighlight) {
      return (
        <div className="rounded-xl bg-white px-6 py-3 text-center shadow-lg">
          <div className="mb-1 text-gray-500 text-sm">{d.currentDate}</div>
          <div className="font-bold text-gray-800 text-xl">
            ${d.current?.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </div>
        </div>
      );
    }
    if (d.previousHighlight) {
      return (
        <div className="rounded-xl bg-white px-6 py-3 text-center shadow-lg">
          <div className="mb-1 text-gray-500 text-sm">{d.previousDate}</div>
          <div className="font-bold text-gray-800 text-xl">
            ${d.previous?.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </div>
        </div>
      );
    }
    // Generic display
    return (
      <div className="rounded-xl bg-white px-4 py-3 shadow-lg">
        <div className="mb-2 font-medium text-gray-700">{d.month}</div>
        {d.current != null && (
          <div className="text-gray-600 text-sm">
            Current:
            <span className="ml-1 font-semibold text-gray-900">
              ${d.current.toLocaleString('en-US')}
            </span>
          </div>
        )}
        {d.previous != null && (
          <div className="text-gray-600 text-sm">
            Previous:
            <span className="ml-1 font-semibold text-gray-900">
              ${d.previous.toLocaleString('en-US')}
            </span>
          </div>
        )}
      </div>
    );
  }
  return null;
}

type HighlightLabelProps = {
  // Recharts injects viewBox with { x, y } where the dot sits
  viewBox?: { x?: number; y?: number };
  title: string;
  amount: number;
};

function HighlightLabel({ viewBox, title, amount }: HighlightLabelProps) {
  const x = viewBox?.x ?? 0;
  const y = viewBox?.y ?? 0;
  const width = 170;
  const height = 50;
  const radius = 10;
  const pointer = 8; // small pointer height
  const offset = 14; // distance above the dot
  const left = x - width / 2;
  const top = y - height - pointer - offset;

  const amountText = `$${amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;

  return (
    <g>
      {/* bubble */}
      <rect
        fill="#ffffff"
        height={height}
        rx={radius}
        ry={radius}
        stroke="#e5e7eb"
        width={width}
        x={left}
        y={top} /* gray-200 */
      />
      {/* pointer */}
      <path
        d={`M ${x - 6} ${y - offset - pointer} L ${x} ${y - offset} L ${x + 6} ${y - offset - pointer} Z`}
        fill="#ffffff"
        stroke="#e5e7eb"
      />
      {/* title */}
      <text
        fill="#6b7280"
        fontSize="12"
        textAnchor="middle"
        x={left + width / 2}
        y={top + 18}
      >
        {title}
      </text>
      {/* amount */}
      <text
        fill="#111827"
        fontSize="16"
        fontWeight={700}
        textAnchor="middle"
        x={left + width / 2}
        y={top + 36}
      >
        {amountText}
      </text>
    </g>
  );
}
