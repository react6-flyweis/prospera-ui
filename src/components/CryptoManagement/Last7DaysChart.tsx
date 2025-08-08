import { Area, AreaChart, ResponsiveContainer } from 'recharts';

interface Last7DaysChartProps {
  data: number[];
  color: string;
}

export const Last7DaysChart: React.FC<Last7DaysChartProps> = ({
  data,
  color,
}) => {
  // Convert array to [{ value: number }, ...]
  const chartData = data.map((value) => ({ value }));

  // Create a unique gradient ID to avoid conflicts when multiple charts are rendered
  const gradientId = `colorValue-${color.replace('#', '')}`;

  return (
    <div style={{ width: '100%', height: 40 }}>
      <ResponsiveContainer height="100%" width="100%">
        <AreaChart
          data={chartData}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity={0.3} />
              <stop offset="100%" stopColor={color} stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <Area
            dataKey="value"
            fill={`url(#${gradientId})`}
            isAnimationActive={false}
            stroke={color}
            strokeWidth={2}
            type="monotone"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
