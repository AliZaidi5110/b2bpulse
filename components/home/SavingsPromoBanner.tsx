import Link from 'next/link';
import { Star } from 'lucide-react';

export function SavingsPromoBanner() {
  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="relative overflow-hidden rounded-[1.75rem] shadow-xl sm:rounded-[2rem] lg:rounded-[2.5rem]">
          <img
            src="/images/home/savings-app-mockup.png"
            alt="B2B PULSE mobile app with smart meter dashboard on a rustic red background"
            className="block min-h-[320px] w-full object-cover object-center sm:min-h-0"
          />

          <div className="absolute inset-0 flex items-center">
            <div className="w-full max-w-[90%] px-5 py-8 sm:max-w-[55%] sm:px-8 md:px-10 lg:max-w-[48%] lg:px-14 lg:py-12">
              <div className="flex flex-wrap items-center gap-2">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-[#00B67A] text-[#00B67A] sm:h-[18px] sm:w-[18px]"
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-white sm:text-[15px]">
                  Rated 4.8 on Trustpilot
                </span>
              </div>

              <h2 className="mt-4 font-display text-[1.65rem] font-bold leading-[1.2] text-white sm:mt-5 sm:text-3xl md:text-4xl lg:text-[2.65rem] lg:leading-[1.15]">
                Easy savings, easier support, 24hrs a day
              </h2>

              <Link
                href="/contact"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-[#F97316] px-7 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#ea580c] hover:shadow-lg sm:mt-8 sm:px-8 sm:py-3.5 sm:text-base"
              >
                Get quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
