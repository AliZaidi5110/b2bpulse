import type { Metadata } from 'next';
import { Suspense } from 'react';
import { KPICards } from '@/components/dashboard/KPICards';
import { TrendChart } from '@/components/dashboard/TrendChart';
import { CategoryBarChart } from '@/components/dashboard/CategoryBarChart';
import { DataTable } from '@/components/dashboard/DataTable';
import {
  kpiData,
  trendData,
  categoryBarData,
  tableData,
} from '@/lib/data';

export const metadata: Metadata = {
  title: 'Dashboard',
  description:
    'Business intelligence dashboard with KPIs, trend charts, and account performance data.',
};

function ChartSkeleton() {
  return (
    <div className="card animate-pulse">
      <div className="h-4 w-48 rounded bg-slate-200 dark:bg-slate-700" />
      <div className="mt-6 h-64 rounded bg-slate-100 dark:bg-slate-800" />
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="section-padding">
      <div className="container-max">
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold sm:text-4xl">
            Dashboard
          </h1>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Portfolio overview across energy, water, and payments markets.
          </p>
        </div>

        <KPICards data={kpiData} />

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Suspense fallback={<ChartSkeleton />}>
              <TrendChart data={trendData} />
            </Suspense>
          </div>
          <div>
            <Suspense fallback={<ChartSkeleton />}>
              <CategoryBarChart data={categoryBarData} />
            </Suspense>
          </div>
        </div>

        <div className="mt-8">
          <DataTable data={tableData} />
        </div>
      </div>
    </div>
  );
}
