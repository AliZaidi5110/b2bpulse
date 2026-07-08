'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import type { TrendDataPoint } from '@/lib/types';

interface TrendChartProps {
  data: TrendDataPoint[];
}

export function TrendChart({ data }: TrendChartProps) {
  return (
    <div className="card">
      <h3 className="font-display text-lg font-semibold">
        Portfolio Spend Trends
      </h3>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
        Monthly spend across energy, water, and payments (£ thousands)
      </p>
      <div className="mt-6 h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 12, fill: '#94A3B8' }}
              axisLine={{ stroke: '#E2E8F0' }}
            />
            <YAxis
              tick={{ fontSize: 12, fill: '#94A3B8' }}
              axisLine={{ stroke: '#E2E8F0' }}
              tickFormatter={(v) => `£${v / 1000}k`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#111827',
                border: 'none',
                borderRadius: '8px',
                color: '#F1F5F9',
                fontSize: '13px',
              }}
              formatter={(value: number) => [`£${value.toLocaleString()}`, '']}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="energy"
              stroke="#4C6FFF"
              strokeWidth={2}
              dot={false}
              name="Energy"
            />
            <Line
              type="monotone"
              dataKey="water"
              stroke="#14B8A6"
              strokeWidth={2}
              dot={false}
              name="Water"
            />
            <Line
              type="monotone"
              dataKey="payments"
              stroke="#7C5CFF"
              strokeWidth={2}
              dot={false}
              name="Payments"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
