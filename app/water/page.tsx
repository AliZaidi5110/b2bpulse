import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Droplets, CheckCircle } from 'lucide-react';
import { WaterQuoteBanner } from '@/components/water/WaterQuoteBanner';

export const metadata: Metadata = {
  title: 'Water',
  description:
    'Reliable water supply and transparent billing with optimised usage tracking and support.',
};

const benefits = [
  'Reliable supply and transparent billing',
  'Optimised usage tracking and support',
  'We simplify utility management so you can focus on growth',
  'Expert service, competitive rates, and dependable support',
];

export default function WaterPage() {
  return (
    <div className="section-padding">
      <div className="container-max">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary">
            <Droplets className="h-8 w-8 text-white" />
          </div>
          <h1 className="font-display text-4xl font-bold">Water Management</h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Reliable supply and transparent billing with optimised usage
            tracking and support.
          </p>
        </div>

        <WaterQuoteBanner />

        <div className="mx-auto mt-12 max-w-2xl">
          <p className="text-center text-slate-600 dark:text-slate-300">
            Your trusted utility partner — we handle everything from contracts
            to ongoing support so you can stay focused on your core business.
          </p>
          <ul className="mt-8 space-y-4">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-signal" />
                <span className="text-slate-600 dark:text-slate-300">{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <Link href="/contact" className="btn-primary">
              Get a Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
