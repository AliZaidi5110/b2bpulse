export function ElectricitySolutionsSection() {
  return (
    <section className="mt-16 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div>
        <p className="text-sm font-medium uppercase tracking-wider text-primary">
          What We Do in Electricity Solutions
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
          Reliable Power. Smarter Use. Sustainable Results.
        </h2>
        <p className="mt-5 leading-relaxed text-slate-600 dark:text-slate-300">
          We provide comprehensive electricity solutions designed to optimize
          energy usage, cut unnecessary costs, and support a transition to
          cleaner energy. Whether it&apos;s through energy audits, smart
          metering, tariff optimization, or renewable integrations, B2B PULSE
          empowers both residential and commercial clients to take control of
          their power – efficiently and responsibly.
        </p>
      </div>

      <div className="flex justify-center lg:justify-end">
        <img
          src="/images/about/electricity-solutions.png"
          alt="Illustration of hands supporting a lightning bolt representing electricity solutions"
          className="w-full max-w-md object-contain lg:max-w-lg"
        />
      </div>
    </section>
  );
}
