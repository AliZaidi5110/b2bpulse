'use client';

import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { ArticleCard } from '@/components/insights/ArticleCard';
import { CategoryFilter } from '@/components/insights/CategoryFilter';
import type { InsightArticle, InsightCategory } from '@/lib/types';

interface InsightsClientProps {
  articles: InsightArticle[];
}

export function InsightsClient({ articles }: InsightsClientProps) {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');

  const initialCategory: InsightCategory | 'All' =
    categoryParam &&
    articles.some((a) => a.category === categoryParam)
      ? (categoryParam as InsightCategory)
      : 'All';

  const [activeCategory, setActiveCategory] = useState<InsightCategory | 'All'>(
    initialCategory
  );

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return articles;
    return articles.filter((a) => a.category === activeCategory);
  }, [articles, activeCategory]);

  return (
    <>
      <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="mt-8 text-center text-slate-500">
          No articles found in this category.
        </p>
      )}
    </>
  );
}
