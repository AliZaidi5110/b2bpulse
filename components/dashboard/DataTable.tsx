'use client';

import { useState, useMemo } from 'react';
import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';
import type { TableRow } from '@/lib/types';
import { formatCurrency } from '@/lib/utils';
import { cn } from '@/lib/utils';

interface DataTableProps {
  data: TableRow[];
}

type SortKey = keyof Pick<TableRow, 'account' | 'sector' | 'spend' | 'savings' | 'status' | 'lastUpdated'>;
type SortDir = 'asc' | 'desc';

const statusStyles: Record<TableRow['status'], string> = {
  active: 'bg-signal/10 text-signal',
  review: 'bg-alert/10 text-alert',
  alert: 'bg-red-500/10 text-red-500',
};

export function DataTable({ data }: DataTableProps) {
  const [sortKey, setSortKey] = useState<SortKey>('spend');
  const [sortDir, setSortDir] = useState<SortDir>('desc');

  const sorted = useMemo(() => {
    return [...data].sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];
      if (typeof aVal === 'number' && typeof bVal === 'number') {
        return sortDir === 'asc' ? aVal - bVal : bVal - aVal;
      }
      const cmp = String(aVal).localeCompare(String(bVal));
      return sortDir === 'asc' ? cmp : -cmp;
    });
  }, [data, sortKey, sortDir]);

  function handleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDir('desc');
    }
  }

  function SortIcon({ column }: { column: SortKey }) {
    if (sortKey !== column) return <ArrowUpDown className="h-3.5 w-3.5 opacity-40" />;
    return sortDir === 'asc' ? (
      <ArrowUp className="h-3.5 w-3.5" />
    ) : (
      <ArrowDown className="h-3.5 w-3.5" />
    );
  }

  const columns: { key: SortKey; label: string; align?: string }[] = [
    { key: 'account', label: 'Account' },
    { key: 'sector', label: 'Sector' },
    { key: 'spend', label: 'Spend', align: 'text-right' },
    { key: 'savings', label: 'Savings', align: 'text-right' },
    { key: 'status', label: 'Status' },
    { key: 'lastUpdated', label: 'Updated' },
  ];

  return (
    <div className="card overflow-hidden !p-0">
      <div className="border-b border-slate-200 px-6 py-4 dark:border-slate-700">
        <h3 className="font-display text-lg font-semibold">Account Performance</h3>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Click column headers to sort
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/50">
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={cn('px-4 py-3 font-medium text-slate-500', col.align)}
                >
                  <button
                    onClick={() => handleSort(col.key)}
                    className="inline-flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-slate-200"
                    aria-label={`Sort by ${col.label}`}
                  >
                    {col.label}
                    <SortIcon column={col.key} />
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sorted.map((row) => (
              <tr
                key={row.id}
                className="border-b border-slate-100 transition-colors hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/30"
              >
                <td className="px-4 py-3 font-medium">{row.account}</td>
                <td className="px-4 py-3 text-slate-500">{row.sector}</td>
                <td className="px-4 py-3 text-right font-mono">
                  {formatCurrency(row.spend)}
                </td>
                <td className="px-4 py-3 text-right font-mono text-signal">
                  {formatCurrency(row.savings)}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={cn(
                      'inline-block rounded-full px-2.5 py-0.5 text-xs font-medium capitalize',
                      statusStyles[row.status]
                    )}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-slate-400 font-mono text-xs">
                  {row.lastUpdated}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
