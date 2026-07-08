import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import type { InsightArticle, InsightCategory } from './types';

const CONTENT_DIR = path.join(process.cwd(), 'content', 'insights');

/**
 * Content layer abstraction — swap this module for a headless CMS
 * (Contentful, Sanity, etc.) without changing page components.
 */
export interface ContentProvider {
  getAllArticles(): Promise<InsightArticle[]>;
  getArticleBySlug(slug: string): Promise<InsightArticle | null>;
  getArticlesByCategory(category: InsightCategory): Promise<InsightArticle[]>;
}

async function parseMarkdown(filePath: string): Promise<InsightArticle> {
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content: markdown } = matter(raw);
  const processed = await remark().use(html).process(markdown);
  const contentHtml = processed.toString();

  const slug = path.basename(filePath, '.md');

  return {
    slug,
    title: data.title,
    excerpt: data.excerpt,
    category: data.category,
    author: data.author,
    publishedAt: data.publishedAt,
    readTime: data.readTime,
    featured: data.featured ?? false,
    tags: data.tags ?? [],
    content: contentHtml,
  };
}

function getMarkdownFiles(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith('.md'))
    .map((file) => path.join(CONTENT_DIR, file));
}

class MarkdownContentProvider implements ContentProvider {
  private cache: InsightArticle[] | null = null;

  async getAllArticles(): Promise<InsightArticle[]> {
    if (this.cache) return this.cache;

    const files = getMarkdownFiles();
    const articles = await Promise.all(files.map(parseMarkdown));
    this.cache = articles.sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
    return this.cache;
  }

  async getArticleBySlug(slug: string): Promise<InsightArticle | null> {
    const articles = await this.getAllArticles();
    return articles.find((a) => a.slug === slug) ?? null;
  }

  async getArticlesByCategory(
    category: InsightCategory
  ): Promise<InsightArticle[]> {
    const articles = await this.getAllArticles();
    return articles.filter((a) => a.category === category);
  }
}

const provider = new MarkdownContentProvider();

export const getAllArticles = () => provider.getAllArticles();
export const getArticleBySlug = (slug: string) =>
  provider.getArticleBySlug(slug);
export const getArticlesByCategory = (category: InsightCategory) =>
  provider.getArticlesByCategory(category);

export function getArticleSlugs(): string[] {
  return getMarkdownFiles().map((f) => path.basename(f, '.md'));
}
