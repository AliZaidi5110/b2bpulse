import Link from 'next/link';
import { Check, ClipboardList, Laptop, Leaf, PoundSterling } from 'lucide-react';
import { energyManagementServices } from '@/lib/energy';
import { cn } from '@/lib/utils';

const iconMap = {
  laptop: Laptop,
  clipboard: ClipboardList,
  pound: PoundSterling,
  leaf: Leaf,
} as const;

export function EnergyServicesGrid() {
  return (
    <section className="mt-16">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-display text-3xl font-bold leading-tight text-navy sm:text-4xl">
          <span className="mr-2 inline-block rounded-md bg-neon/20 px-2 py-0.5 text-navy">
            Our
          </span>
          Services: Complete Energy Management
        </h2>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {energyManagementServices.map((service) => {
          const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Laptop;

          return (
            <article
              key={service.title}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="grid md:grid-cols-[1fr_200px] lg:grid-cols-[1fr_220px]">
                <div className="order-2 flex flex-col bg-[#eef6fb] p-6 sm:p-7 md:order-1">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-neon shadow-neon-sm">
                    <Icon className="h-5 w-5 text-navy" strokeWidth={2.25} />
                  </div>

                  <h3 className="font-display text-xl font-bold text-navy sm:text-2xl">
                    {service.title}
                  </h3>

                  <ul className="mt-4 space-y-2.5">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm leading-snug text-slate-700"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-neon"
                          strokeWidth={3}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={service.cta.href}
                    className={cn(
                      'btn-primary mt-6 w-full text-center text-sm sm:w-auto',
                      'shadow-neon-sm hover:shadow-neon'
                    )}
                  >
                    {service.cta.label}
                  </Link>
                </div>

                <div className="relative order-1 min-h-[200px] md:order-2 md:min-h-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="h-full w-full object-cover md:absolute md:inset-0"
                  />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
