import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CreditCard, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Card Machine',
  description:
    'Secure, fast, and contactless payment systems with full technical assistance.',
};

const benefits = [
  'Accept all major payment types with ease',
  'Advanced card machines with speed and security',
  'Seamless support designed for every kind of business',
  'Quick, smooth setup perfectly suited to daily operations',
  'Technical support just a call away whenever you need it',
];

export default function CardMachinePage() {
  return (
    <div className="section-padding">
      <div className="container-max">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary">
            <CreditCard className="h-8 w-8 text-white" />
          </div>
          <h1 className="font-display text-4xl font-bold">Smarter Payment Solutions</h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Secure, fast, and contactless payment systems with full technical
            assistance.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl">
          <p className="text-center text-slate-600 dark:text-slate-300">
            Accept all major payment types with ease. Our advanced card machines
            offer speed, security, and seamless support — designed for every
            kind of business.
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
