import Link from 'next/link';
import { Star } from 'lucide-react';

export function SavingsPromoBanner() {
  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#8a3434] via-[#742b2b] to-[#5f2222] lg:rounded-[2.5rem]">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'url(/images/home/savings-promo-bg.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            aria-hidden="true"
          />

          <div className="relative grid items-center gap-10 px-6 py-10 sm:px-10 sm:py-12 lg:grid-cols-2 lg:gap-8 lg:px-14 lg:py-16">
            <div className="max-w-xl">
              <div className="flex flex-wrap items-center gap-2">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-[#00B67A] text-[#00B67A] sm:h-5 sm:w-5"
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-white/95 sm:text-base">
                  Rated 4.8 on Trustpilot
                </span>
              </div>

              <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
                Easy savings, easier support, 24hrs a day
              </h2>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-[#F97316] px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-transform hover:scale-[1.02] hover:bg-[#ea580c]"
              >
                Get quote
              </Link>
            </div>

            <div className="flex justify-center lg:justify-end">
              <img
                src="/images/home/savings-app-mockup.png"
                alt="B2B PULSE mobile app showing payment forecast and smart meter usage"
                className="w-full max-w-[280px] object-contain drop-shadow-2xl sm:max-w-xs lg:max-w-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
