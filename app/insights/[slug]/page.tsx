import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Clock, User } from 'lucide-react';
import { getArticleBySlug, getArticleSlugs } from '@/lib/content';
import { formatDate, getCategoryColor } from '@/lib/utils';

interface ArticlePageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);
  if (!article) return { title: 'Article Not Found' };

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.publishedAt,
      authors: [article.author],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = await getArticleBySlug(params.slug);
  if (!article) notFound();

  const color = getCategoryColor(article.category);

  return (
    <article className="section-padding">
      <div className="container-max mx-auto max-w-3xl">
        <Link
          href="/insights"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Insights
        </Link>

        <header className="mt-8">
          <span
            className="inline-block rounded-full px-3 py-1 text-xs font-medium"
            style={{ backgroundColor: `${color}15`, color }}
          >
            {article.category}
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            {article.title}
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            {article.excerpt}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4" />
              {article.author}
            </span>
            <time dateTime={article.publishedAt}>
              {formatDate(article.publishedAt)}
            </time>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {article.readTime} read
            </span>
          </div>
          {article.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-slate-100 px-2 py-0.5 font-mono text-xs text-slate-500 dark:bg-slate-800"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div
          className="prose-pulse mt-10"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>
    </article>
  );
}
