'use client';

import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import type { KPIData } from '@/lib/types';
import { formatPercent } from '@/lib/utils';

interface KPICardsProps {
  data: KPIData[];
}

export function KPICards({ data }: KPICardsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {data.map((kpi) => (
        <KPICard key={kpi.label} kpi={kpi} />
      ))}
    </div>
  );
}

function KPICard({ kpi }: { kpi: KPIData }) {
  const TrendIcon =
    kpi.trend === 'up'
      ? TrendingUp
      : kpi.trend === 'down'
        ? TrendingDown
        : Minus;

  const trendColor =
    kpi.label === 'Active Alerts'
      ? kpi.change < 0
        ? 'text-signal'
        : 'text-alert'
      : kpi.change >= 0
        ? 'text-signal'
        : 'text-alert';

  return (
    <div className="card">
      <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
        {kpi.label}
      </p>
      <p className="mt-2 font-mono text-3xl font-bold">{kpi.value}</p>
      <div className="mt-2 flex items-center gap-1.5">
        <TrendIcon className={`h-4 w-4 ${trendColor}`} />
        <span className={`font-mono text-sm font-medium ${trendColor}`}>
          {formatPercent(kpi.change)}
        </span>
        <span className="text-xs text-slate-400">{kpi.changeLabel}</span>
      </div>
    </div>
  );
}
