import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Faq',
  description: 'Frequently asked questions about B2B PULSE utility and payment solutions.',
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
