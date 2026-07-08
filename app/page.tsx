import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Hero } from '@/components/home/Hero';
import { LiveStatStrip } from '@/components/home/LiveStatStrip';
import { ServicesGrid } from '@/components/home/ServicesGrid';
import { PaymentGallery } from '@/components/home/PaymentGallery';
import { Testimonials } from '@/components/home/Testimonials';
import { NewsletterCTA } from '@/components/home/NewsletterCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <LiveStatStrip />
      <PaymentGallery />
      <ServicesGrid />

      <section className="section-padding bg-slate-50 dark:bg-slate-900/30">
        <div className="container-max">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-primary">
                Built for Modern Businesses
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
                Focused Services That Power Growth
              </h2>
              <p className="mt-4 text-slate-600 dark:text-slate-300">
                At B2B PULSE, we help businesses manage energy, water, and
                payments with ease. Our smart solutions are reliable,
                cost-effective, and fully tailored to your operations.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Optimised Utility Management for Every Industry
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Seamless Integration with Trusted Support Team
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Delivering Smarter Energy, Water &amp; Payment Solutions Across the UK
                </li>
              </ul>
              <Link href="/about" className="btn-primary mt-8">
                Discover More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="card">
              <h3 className="font-display text-lg font-semibold">
                Business-Focused Utility Solutions You Can Trust
              </h3>
              <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
                At B2B PULSE, we go beyond just supplying services — we simplify
                how your business manages energy, water, and payments. Our
                customised approach ensures savings, stability, and peace of mind.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-primary/5 p-4 text-center">
                  <p className="font-display font-semibold text-primary">Tailored Plans</p>
                </div>
                <div className="rounded-lg bg-signal/5 p-4 text-center">
                  <p className="font-display font-semibold text-signal">Reliable Service</p>
                </div>
              </div>
              <p className="mt-4 text-xs text-slate-400">
                Empowering Businesses Through Smarter Utility Choices
              </p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <NewsletterCTA />
    </>
  );
}
