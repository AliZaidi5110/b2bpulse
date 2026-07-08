export function EnergyDealBanner() {
  return (
    <section className="mt-16 overflow-hidden rounded-[2rem] bg-[#0a1f44] lg:rounded-[2.5rem]">
      <div className="grid items-center gap-10 px-6 py-10 sm:px-10 sm:py-12 lg:grid-cols-2 lg:gap-12 lg:px-14 lg:py-16">
        <div className="flex items-center lg:min-h-[280px]">
          <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.65rem] lg:leading-[1.15]">
            Find A Better Gas &amp; Electricity Deal In Your Area
          </h2>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src="/images/energy/hero-meter.png"
            alt="Smart energy meter display showing electricity and gas usage costs"
            className="w-full max-w-md object-contain drop-shadow-2xl lg:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
}
