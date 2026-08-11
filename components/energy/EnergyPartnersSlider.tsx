import { energyPartners } from '@/lib/energy';
import { cn } from '@/lib/utils';

export function EnergyPartnersSlider() {
  const logos = [...energyPartners, ...energyPartners];

  return (
    <section className="mt-16">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium uppercase tracking-wider text-primary">
          Our Partners
        </p>
        <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
          Compare Business Energy Quotes From 30+ UK Suppliers
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          We have built strong relationships with leading suppliers to give you
          access to competitive business gas and electricity deals.
        </p>
      </div>

      <div className="relative mt-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent dark:from-navy" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent dark:from-navy" />

        <div className="flex w-max motion-safe:animate-logo-marquee motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-6 motion-reduce:w-full hover:[animation-play-state:paused]">
          {logos.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className={cn(
                'mx-4 flex h-24 w-44 shrink-0 items-center justify-center rounded-xl border px-5 py-4 shadow-sm sm:h-28 sm:w-52',
                partner.darkCard
                  ? 'border-slate-700 bg-slate-900'
                  : 'border-slate-200 bg-white'
              )}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-14 w-full object-contain sm:max-h-16"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
