import type { InsightCategory } from './types';

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatPercent(value: number): string {
  const sign = value >= 0 ? '+' : '';
  return `${sign}${value.toFixed(1)}%`;
}

const categoryColors: Record<InsightCategory, string> = {
  'Energy Markets': '#4C6FFF',
  'Water & Utilities': '#14B8A6',
  'Payments & Fintech': '#7C5CFF',
  'Regulation & Compliance': '#F59E0B',
  'Platform Updates': '#64748B',
};

export function getCategoryColor(category: InsightCategory): string {
  return categoryColors[category];
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');
}
