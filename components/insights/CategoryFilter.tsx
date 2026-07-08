'use client';

import { cn } from '@/lib/utils';
import type { InsightCategory } from '@/lib/types';
import { INSIGHT_CATEGORIES } from '@/lib/types';

interface CategoryFilterProps {
  active: InsightCategory | 'All';
  onChange: (category: InsightCategory | 'All') => void;
}

export function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  const categories: (InsightCategory | 'All')[] = ['All', ...INSIGHT_CATEGORIES];

  return (
    <div
      className="flex flex-wrap gap-2"
      role="tablist"
      aria-label="Filter articles by category"
    >
      {categories.map((cat) => (
        <button
          key={cat}
          role="tab"
          aria-selected={active === cat}
          onClick={() => onChange(cat)}
          className={cn(
            'rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
            active === cat
              ? 'bg-gradient-primary text-white'
              : 'border border-slate-200 text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800'
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
