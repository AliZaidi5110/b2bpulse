import { energyCommitments, energySteps } from '@/lib/energy';

export function EnergyWhySection() {
  return (
    <>
      <section className="mt-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            The Honest Approach
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
            Why UK Businesses Choose Us
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Too many brokers use high-pressure tactics and hide commission details.
            We built our service on transparent advice without the games.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {energyCommitments.map((item) => (
            <div key={item.title} className="card">
              <h3 className="font-display text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Get Started in Three Simple Steps
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {energySteps.map((item) => (
            <div key={item.step} className="card text-center">
              <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary text-sm font-bold text-white">
                {item.step}
              </div>
              <h3 className="font-display text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
