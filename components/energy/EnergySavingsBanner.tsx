export function EnergySavingsBanner() {
  return (
    <section className="mt-16 overflow-hidden rounded-[2rem] bg-[#7a1f4a] lg:rounded-[2.5rem]">
      <div className="grid items-center gap-10 px-6 py-10 sm:px-10 sm:py-12 lg:grid-cols-2 lg:gap-12 lg:px-14 lg:py-16">
        <div className="flex items-center lg:min-h-[280px]">
          <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.65rem] lg:leading-[1.15]">
            Save on your
            <br />
            Bills in Seconds
          </h2>
        </div>

        <div className="flex items-end justify-center gap-4 sm:gap-6 lg:justify-end">
          <img
            src="/images/energy/balloon-green.png"
            alt="Green hot air balloon with Cheaper Bills banner"
            className="h-48 w-auto object-contain drop-shadow-xl sm:h-56 lg:h-64"
          />
          <img
            src="/images/energy/balloon-pink.png"
            alt="Pink hot air balloon with Cheaper Bills banner"
            className="h-52 w-auto object-contain drop-shadow-xl sm:h-60 lg:h-72"
          />
        </div>
      </div>
    </section>
  );
}
