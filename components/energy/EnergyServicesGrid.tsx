import { energyServices } from '@/lib/energy';
import { Bolt, Flame, Zap, LineChart } from 'lucide-react';

const icons = [Bolt, Flame, Zap, LineChart];

export function EnergyServicesGrid() {
  return (
    <section className="mt-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-2xl font-bold sm:text-3xl">
          Complete Business Energy Management
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          From comparison and switching to contract management — everything your
          business needs in one place.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {energyServices.map((service, index) => {
          const Icon = icons[index] ?? Zap;
          return (
            <div key={service.title} className="card">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
