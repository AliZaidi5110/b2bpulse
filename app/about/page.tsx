import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Zap, Headphones } from 'lucide-react';
import { PulseLine } from '@/components/ui/PulseLine';
import { ElectricitySolutionsSection } from '@/components/about/ElectricitySolutionsSection';
import { companyStats } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about B2B PULSE — your trusted partner for energy, water, and payment solutions across the UK.',
};

const features = [
  {
    icon: Zap,
    title: 'Streamlined Operations',
    description: 'Our services optimise processes and reduce business overhead efficiently.',
  },
  {
    icon: Headphones,
    title: 'Expert Utility Insights',
    description: 'We help you make data-driven decisions to improve long-term savings.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="section-padding">
        <div className="container-max">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl font-bold sm:text-5xl">
              Powering Smarter Utility Management{' '}
              <span className="gradient-text">Every Day</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">
              Our mission is to make utility services simple, efficient, and
              tailored to your needs. From energy to payments, we deliver
              solutions that reduce costs and boost operational performance.
            </p>
          </div>

          <div className="mt-12">
            <PulseLine variant="divider" animated />
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {features.map((f) => (
              <div key={f.title} className="card">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-primary">
                  <f.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-display text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  {f.description}
                </p>
              </div>
            ))}
          </div>

          <ul className="mx-auto mt-8 max-w-xl space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
              Trusted by Hundreds of UK Businesses
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
              Solutions Backed by Real-Time Support
            </li>
          </ul>

          <ElectricitySolutionsSection />
        </div>
      </section>

      <section className="section-padding bg-slate-50 dark:bg-slate-900/30">
        <div className="container-max">
          <h2 className="text-center font-display text-3xl font-bold">
            We completed 740+ projects successfully and continuously working
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {companyStats.map((stat) => (
              <div key={stat.label} className="card text-center">
                <p className="font-mono text-4xl font-bold gradient-text">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max text-center">
          <h2 className="font-display text-3xl font-bold">Ready to get started?</h2>
          <p className="mx-auto mt-4 max-w-lg text-slate-600 dark:text-slate-300">
            Contact B2B PULSE for a tailored quote on energy, water, or card machine solutions.
          </p>
          <Link href="/contact" className="btn-primary mt-8">
            Get a Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
