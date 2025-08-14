import { useTranslation } from 'react-i18next';
import { Card } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

type Range = { from: number; to: number; color: string };

export type GaugeProgressProps = {
  className?: string;
  title?: string;
  value: number; // 0-100
  unit?: string; // e.g., "%"
  label?: string; // e.g., "Completed"
  ranges?: Range[]; // color bands along the gauge
  tickCount?: number; // number of small ticks along the arc
  showLabelsAt?: number[]; // percentages to label on the arc
  stats?: {
    total: number;
    completed: number;
    delayed: number;
    ongoing: number;
  };
  filter?: string;
  filterOptions?: string[];
  onFilterChange?: (value: string) => void;
};

// Helpers to draw arcs in SVG
function polarToCartesian(cx: number, cy: number, r: number, angle: number) {
  const rad = ((angle - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function describeArc(
  cx: number,
  cy: number,
  r: number,
  startAngle: number,
  endAngle: number
) {
  // Draw always clockwise (sweep=1) using a normalized clockwise delta
  const start = polarToCartesian(cx, cy, r, startAngle);
  const end = polarToCartesian(cx, cy, r, endAngle);
  const deltaCW = (((endAngle - startAngle) % 360) + 360) % 360; // 0..359
  const largeArcFlag = deltaCW > 180 ? 1 : 0;
  const sweepFlag = 1; // force clockwise to stay on the TOP semicircle
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArcFlag} ${sweepFlag} ${end.x} ${end.y}`;
}

function pctToAngle(pct: number) {
  // Map 0..100 to 270..450 degrees (CW across the TOP semicircle)
  const p = Math.max(0, Math.min(100, pct)) / 100;
  return 270 + p * 180;
}

export function GaugeProgress({
  className,
  title = 'Overall Progress',
  value,
  unit = '%',
  label = 'Completed',
  ranges = [
    { from: 0, to: 30, color: '#22c55e' }, // green
    { from: 30, to: 50, color: '#f59e0b' }, // amber
    { from: 50, to: 90, color: '#f97316' }, // orange
    { from: 90, to: 100, color: '#e5e7eb' }, // gray end cap
  ],
  tickCount = 40,
  showLabelsAt = [0, 25, 50, 100],
  stats,
  filter = 'All',
  filterOptions = ['All'],
  onFilterChange,
}: GaugeProgressProps) {
  const { t } = useTranslation();
  const size = 320; // viewBox width
  const height = 220; // a bit taller to avoid clipping
  const cx = size / 2;
  const cy = size / 2 + 40; // push circle down for header
  const r = 120;
  const stroke = 16;

  const clamped = Math.max(0, Math.min(100, value));
  const ticks = Array.from({ length: tickCount + 1 }, (_, i) => i / tickCount);

  return (
    <Card className={cn('border-2 p-4', className)}>
      <div className="mb-2 flex items-center justify-between">
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <Select onValueChange={(v) => onFilterChange?.(v)} value={filter}>
          <SelectTrigger className="h-8 w-24">
            <SelectValue placeholder={filter} />
          </SelectTrigger>
          <SelectContent>
            {filterOptions.map((opt) => (
              <SelectItem key={opt} value={opt}>
                {opt}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="mx-auto w-full max-w-[520px]">
        <svg
          aria-label={`${title} ${clamped}${unit}`}
          className="mx-auto block w-full"
          viewBox={`0 0 ${size} ${height}`}
        >
          <title>{title}</title>
          <desc>
            {`A semicircular gauge showing ${clamped}${unit} ${label?.toLowerCase()}.`}
          </desc>
          {/* subtle tick marks */}
          {ticks.map((tick, i) => {
            const angle = 270 + tick * 180;
            const isMajor = i % (tickCount / 8) === 0;
            const tickGap = 8; // space from the track/progress stroke
            const tickLenMajor = 12;
            const tickLenMinor = 8;
            const tickBase = r + stroke / 2 + tickGap; // start beyond arc stroke
            const inner = polarToCartesian(cx, cy, tickBase, angle);
            const outer = polarToCartesian(
              cx,
              cy,
              tickBase + (isMajor ? tickLenMajor : tickLenMinor),
              angle
            );
            return (
              <line
                key={`tick-${(tick * 100).toFixed(2)}`}
                stroke="#e5e7eb"
                strokeWidth={isMajor ? 2 : 1}
                x1={inner.x}
                x2={outer.x}
                y1={inner.y}
                y2={outer.y}
              />
            );
          })}

          {/* base track */}
          <path
            d={describeArc(cx, cy, r, 270, 450)}
            fill="none"
            stroke="#f3f4f6"
            strokeLinecap="round"
            strokeWidth={stroke}
          />

          {/* colored ranges */}
          {ranges.map((range, idx) => (
            <path
              d={describeArc(
                cx,
                cy,
                r,
                pctToAngle(range.from),
                pctToAngle(range.to)
              )}
              fill="none"
              key={`${range.from}-${range.to}-${idx}`}
              stroke={range.color}
              strokeLinecap="round"
              strokeWidth={stroke}
            />
          ))}

          {/* labels on arc */}
          {showLabelsAt.map((p) => {
            const angle = pctToAngle(p);
            const pos = polarToCartesian(cx, cy, r + 32, angle);
            return (
              <text
                className="fill-gray-500 text-[12px]"
                dominantBaseline="middle"
                key={`label-${p}`}
                textAnchor="middle"
                x={pos.x}
                y={pos.y}
              >
                {p}
              </text>
            );
          })}

          {/* current value text */}
          <text
            className="fill-gray-800 font-bold text-[36px]"
            textAnchor="middle"
            x={cx}
            y={cy - 10}
          >
            {clamped}
            {unit}
          </text>
          <text
            className="fill-gray-500 text-[14px]"
            textAnchor="middle"
            x={cx}
            y={cy + 18}
          >
            {label}
          </text>
        </svg>
      </div>

      {/* bottom stats */}
      {stats && (
        <div className="mt-2 grid grid-cols-4 text-center text-gray-600">
          <div>
            <div className="font-semibold text-gray-800">{stats.total}</div>
            <div className="text-xs">{t('homePage.gaugeProgress.total')}</div>
          </div>
          <div>
            <div className="font-semibold text-green-600">
              {stats.completed}
            </div>
            <div className="text-xs">
              {t('homePage.gaugeProgress.completed')}
            </div>
          </div>
          <div>
            <div className="font-semibold text-amber-500">{stats.delayed}</div>
            <div className="text-xs">{t('homePage.gaugeProgress.delayed')}</div>
          </div>
          <div>
            <div className="font-semibold text-orange-500">{stats.ongoing}</div>
            <div className="text-xs">{t('homePage.gaugeProgress.ongoing')}</div>
          </div>
        </div>
      )}
    </Card>
  );
}

export default GaugeProgress;
