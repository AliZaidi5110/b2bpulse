import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Faq',
  description: `Frequently asked questions about ${siteConfig.name} utility and payment solutions.`,
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
