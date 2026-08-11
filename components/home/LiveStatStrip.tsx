import { TrendingUp, TrendingDown } from 'lucide-react';
import { liveStats } from '@/lib/data';

export function LiveStatStrip() {
  return (
    <section
      className="section-surface-muted border-y border-slate-200/80 dark:border-slate-800"
      aria-label="Live market statistics"
    >
      <div className="container-max">
        <div className="grid grid-cols-2 divide-x divide-slate-200 dark:divide-slate-800 lg:grid-cols-4">
          {liveStats.map((stat) => (
            <div key={stat.label} className="px-4 py-5 text-center sm:px-6">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                {stat.label}
              </p>
              <p className="mt-1 font-mono text-2xl font-bold text-slate-900 dark:text-slate-100">
                {stat.value}
              </p>
              <div className="mt-1 flex items-center justify-center gap-1">
                {stat.positive ? (
                  <TrendingUp className="h-3.5 w-3.5 text-signal" />
                ) : (
                  <TrendingDown className="h-3.5 w-3.5 text-alert" />
                )}
                <span
                  className={`font-mono text-xs font-medium ${
                    stat.positive ? 'text-signal' : 'text-alert'
                  }`}
                >
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
