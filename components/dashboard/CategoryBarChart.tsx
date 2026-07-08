'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import type { CategoryBarData } from '@/lib/types';

interface CategoryBarChartProps {
  data: CategoryBarData[];
}

export function CategoryBarChart({ data }: CategoryBarChartProps) {
  return (
    <div className="card">
      <h3 className="font-display text-lg font-semibold">
        Spend by Category
      </h3>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
        Portfolio allocation (% of total spend)
      </p>
      <div className="mt-6 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" horizontal={false} />
            <XAxis
              type="number"
              tick={{ fontSize: 12, fill: '#94A3B8' }}
              axisLine={{ stroke: '#E2E8F0' }}
              tickFormatter={(v) => `${v}%`}
            />
            <YAxis
              type="category"
              dataKey="category"
              tick={{ fontSize: 12, fill: '#94A3B8' }}
              axisLine={{ stroke: '#E2E8F0' }}
              width={80}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#111827',
                border: 'none',
                borderRadius: '8px',
                color: '#F1F5F9',
                fontSize: '13px',
              }}
              formatter={(value: number) => [`${value}%`, 'Share']}
            />
            <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={24}>
              {data.map((entry) => (
                <Cell key={entry.category} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
