import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function WaterQuoteBanner() {
  return (
    <section className="relative mt-16 overflow-hidden rounded-[2rem] lg:rounded-[2.5rem]">
      <img
        src="/images/water/water-banner.png"
        alt="Business professionals commuting across a city bridge"
        className="block min-h-[220px] w-full object-cover object-center sm:min-h-[280px]"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/60 to-slate-900/30" />

      <div className="absolute inset-0 flex items-center px-6 py-10 sm:px-10 lg:px-14">
        <div className="max-w-xl">
          <p className="text-sm font-medium uppercase tracking-wider text-signal">
            Business Water Solutions
          </p>
          <blockquote className="mt-3 font-display text-2xl font-bold leading-snug text-white sm:text-3xl lg:text-4xl">
            &ldquo;Every drop counts when you&apos;re running a business.&rdquo;
          </blockquote>
          <p className="mt-4 text-base leading-relaxed text-slate-200 sm:text-lg">
            Reliable supply, transparent billing, and expert support — so you
            can focus on growth while we keep your water costs under control.
          </p>
          <Link href="/contact" className="btn-primary mt-8 inline-flex">
            Get a Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
