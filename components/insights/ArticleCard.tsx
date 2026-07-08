import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';
import type { InsightArticle } from '@/lib/types';
import { formatDate, getCategoryColor } from '@/lib/utils';

interface ArticleCardProps {
  article: InsightArticle;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const color = getCategoryColor(article.category);

  return (
    <article className="card group flex flex-col">
      <div className="mb-3 flex items-center gap-2">
        <span
          className="inline-block rounded-full px-2.5 py-0.5 text-xs font-medium"
          style={{ backgroundColor: `${color}15`, color }}
        >
          {article.category}
        </span>
        {article.featured && (
          <span className="rounded-full bg-alert/10 px-2.5 py-0.5 text-xs font-medium text-alert">
            Featured
          </span>
        )}
      </div>

      <h3 className="font-display text-lg font-semibold group-hover:text-primary transition-colors">
        <Link href={`/insights/${article.slug}`}>{article.title}</Link>
      </h3>

      <p className="mt-2 flex-1 text-sm text-slate-500 dark:text-slate-400 line-clamp-3">
        {article.excerpt}
      </p>

      <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-4 dark:border-slate-700">
        <div className="flex items-center gap-3 text-xs text-slate-400">
          <span>{article.author}</span>
          <span aria-hidden="true">&middot;</span>
          <time dateTime={article.publishedAt}>
            {formatDate(article.publishedAt)}
          </time>
          <span aria-hidden="true">&middot;</span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {article.readTime}
          </span>
        </div>
        <Link
          href={`/insights/${article.slug}`}
          className="text-primary opacity-0 transition-opacity group-hover:opacity-100"
          aria-label={`Read ${article.title}`}
        >
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
