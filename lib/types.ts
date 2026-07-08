export type InsightCategory =
  | 'Energy Markets'
  | 'Water & Utilities'
  | 'Payments & Fintech'
  | 'Regulation & Compliance'
  | 'Platform Updates';

export const INSIGHT_CATEGORIES: InsightCategory[] = [
  'Energy Markets',
  'Water & Utilities',
  'Payments & Fintech',
  'Regulation & Compliance',
  'Platform Updates',
];

export interface InsightArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: InsightCategory;
  author: string;
  publishedAt: string;
  readTime: string;
  featured?: boolean;
  tags: string[];
  content: string;
}

export interface KPIData {
  label: string;
  value: string;
  change: number;
  changeLabel: string;
  trend: 'up' | 'down' | 'neutral';
}

export interface TrendDataPoint {
  month: string;
  energy: number;
  water: number;
  payments: number;
}

export interface CategoryBarData {
  category: string;
  value: number;
  fill: string;
}

export interface TableRow {
  id: string;
  account: string;
  sector: string;
  spend: number;
  savings: number;
  status: 'active' | 'review' | 'alert';
  lastUpdated: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  href?: string;
}

export interface LiveStat {
  label: string;
  value: string;
  change: string;
  positive: boolean;
}
