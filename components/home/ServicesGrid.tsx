import Link from 'next/link';
import {
  Zap,
  Droplets,
  CreditCard,
  Headphones,
} from 'lucide-react';
import { services } from '@/lib/data';
import { PulseLine } from '@/components/ui/PulseLine';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  zap: Zap,
  droplets: Droplets,
  'credit-card': CreditCard,
  headphones: Headphones,
};

export function ServicesGrid() {
  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            Solutions That Empower Businesses
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
            Smart Utility Services{' '}
            <span className="gradient-text">Built for You</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            We provide complete utility solutions — including energy, water, and
            card machines — designed to simplify operations, reduce costs, and
            help your business grow. Whether you&apos;re a startup or a large
            enterprise, our services scale with your needs.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Zap;
            const content = (
              <>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-primary transition-transform group-hover:scale-110">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-display text-lg font-semibold">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  {service.description}
                </p>
              </>
            );

            return service.href ? (
              <Link
                key={service.title}
                href={service.href}
                className="card group block"
              >
                {content}
              </Link>
            ) : (
              <div key={service.title} className="card group">
                {content}
              </div>
            );
          })}
        </div>

        <div className="mt-16">
          <PulseLine variant="divider" animated={false} />
        </div>
      </div>
    </section>
  );
}
