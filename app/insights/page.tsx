import type { Metadata } from 'next';
import { Suspense } from 'react';
import { InsightsClient } from './InsightsClient';
import { getAllArticles } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Insights',
  description:
    'Market intelligence articles covering energy, water, payments, regulation, and platform updates.',
};

function InsightsLoading() {
  return (
    <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="card animate-pulse">
          <div className="h-4 w-24 rounded bg-slate-200 dark:bg-slate-700" />
          <div className="mt-4 h-6 w-full rounded bg-slate-200 dark:bg-slate-700" />
          <div className="mt-2 h-4 w-full rounded bg-slate-100 dark:bg-slate-800" />
        </div>
      ))}
    </div>
  );
}

export default async function InsightsPage() {
  const articles = await getAllArticles();

  return (
    <div className="section-padding">
      <div className="container-max">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-display text-4xl font-bold">Insights</h1>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Curated market intelligence for energy, water, payments, and
            regulatory landscapes.
          </p>
        </div>
        <div className="mt-12">
          <Suspense fallback={<InsightsLoading />}>
            <InsightsClient articles={articles} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
