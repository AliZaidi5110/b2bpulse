const energyPartners = [
  { name: 'ScottishPower', logo: '/images/energy/scottish-power.png' },
  { name: 'E.ON Next', logo: '/images/energy/eon-next.png' },
  { name: 'OVO Energy', logo: '/images/energy/ovo-energy.png' },
  { name: 'British Gas', logo: '/images/energy/british-gas.png' },
  { name: 'Shell Energy', logo: '/images/energy/shell-energy.png' },
  { name: 'Utility Warehouse', logo: '/images/energy/utility-warehouse.png' },
];

export function EnergyPartnersSlider() {
  const logos = [...energyPartners, ...energyPartners];

  return (
    <section className="mt-16">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-wider text-primary">
          Trusted Suppliers
        </p>
        <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
          Compare Leading UK Energy Providers
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          We work with major suppliers to find the right business energy plan
          for you.
        </p>
      </div>

      <div className="relative mt-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-offwhite to-transparent dark:from-navy" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-offwhite to-transparent dark:from-navy" />

        <div className="flex w-max motion-safe:animate-logo-marquee motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-6 motion-reduce:w-full hover:[animation-play-state:paused]">
          {logos.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="mx-4 flex h-24 w-44 shrink-0 items-center justify-center rounded-xl border border-slate-200/80 bg-slate-950 px-5 py-4 shadow-sm dark:border-slate-700 sm:h-28 sm:w-52"
            >
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
