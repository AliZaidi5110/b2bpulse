import { siteConfig } from '@/lib/site';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Hero } from '@/components/home/Hero';
import { LiveStatStrip } from '@/components/home/LiveStatStrip';
import { SavingsPromoBanner } from '@/components/home/SavingsPromoBanner';
import { ServicesGrid } from '@/components/home/ServicesGrid';
import { PaymentGallery } from '@/components/home/PaymentGallery';
import { Testimonials } from '@/components/home/Testimonials';
import { NewsletterCTA } from '@/components/home/NewsletterCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <LiveStatStrip />
      <SavingsPromoBanner />
      <PaymentGallery />
      <ServicesGrid />

      <section className="section-padding section-surface-muted">
        <div className="container-max">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="label-navy">
                Built for Modern Businesses
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
                Focused Services That Power Growth
              </h2>
              <p className="mt-4 text-slate-600 dark:text-slate-300">
                At {siteConfig.name}, we help businesses manage energy and
                payments with ease. Our smart solutions are reliable,
                cost-effective, and fully tailored to your operations.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-neon shadow-neon-sm" />
                  Optimised Utility Management for Every Industry
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-neon shadow-neon-sm" />
                  Seamless Integration with Trusted Support Team
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-neon shadow-neon-sm" />
                  Delivering Smarter Energy &amp; Payment Solutions Across the UK
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
                At {siteConfig.name}, we go beyond just supplying services — we simplify
                how your business manages energy and payments. Our
                customised approach ensures savings, stability, and peace of mind.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-lg border border-neon/20 bg-neon/5 p-4 text-center">
                  <p className="font-display font-semibold text-navy">Tailored Plans</p>
                </div>
                <div className="rounded-lg border border-navy/10 bg-navy/5 p-4 text-center">
                  <p className="font-display font-semibold text-navy">Reliable Service</p>
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
