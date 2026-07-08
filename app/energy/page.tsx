import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Zap, CheckCircle } from 'lucide-react';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Energy',
  description:
    'Flexible and cost-efficient electricity and gas plans tailored for business performance.',
};

const benefits = [
  'Flexible and cost-efficient electricity and gas plans',
  'Tailored for business performance across all industries',
  'Competitive rates with dependable support',
  'Complete contract management from start to finish',
];

export default function EnergyPage() {
  return (
    <div className="section-padding">
      <div className="container-max">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary">
            <Zap className="h-8 w-8 text-white" />
          </div>
          <h1 className="font-display text-4xl font-bold">Energy Solutions</h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Flexible and cost-efficient electricity and gas plans tailored for
            business performance.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl">
          <p className="text-center text-slate-600 dark:text-slate-300">
            {siteConfig.description}
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
