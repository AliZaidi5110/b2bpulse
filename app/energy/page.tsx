import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Zap } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import { energyHighlights } from '@/lib/energy';
import { EnergyPartnersSlider } from '@/components/energy/EnergyPartnersSlider';
import { EnergyDealBanner } from '@/components/energy/EnergyDealBanner';
import { EnergySavingsBanner } from '@/components/energy/EnergySavingsBanner';
import { EnergyServicesGrid } from '@/components/energy/EnergyServicesGrid';
import { EnergyWhySection } from '@/components/energy/EnergyWhySection';

export const metadata: Metadata = {
  title: 'Energy',
  description:
    'Compare business energy quotes from 30+ UK suppliers. Transparent advice, competitive rates and expert support from Corelynk.',
};

export default function EnergyPage() {
  return (
    <div className="section-padding">
      <div className="container-max">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary">
            <Zap className="h-8 w-8 text-white" />
          </div>
          <h1 className="font-display text-4xl font-bold">
            Business Energy Comparison You Can Trust
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Finally, a business energy consultant that puts your business first —
            no hidden agendas, no pressure, just honest service from {siteConfig.name}.
          </p>
        </div>

        <EnergyDealBanner />

        <ul className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
          {energyHighlights.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-signal" />
              <span className="text-slate-600 dark:text-slate-300">{item}</span>
            </li>
          ))}
        </ul>

        <EnergyPartnersSlider />

        <EnergyServicesGrid />

        <EnergyWhySection />

        <EnergySavingsBanner />

        <div className="mx-auto mt-12 max-w-2xl text-center">
          <p className="text-slate-600 dark:text-slate-300">
            Join hundreds of UK businesses who have discovered a better way to
            manage business energy — free comparison, live quotes and expert
            support without the pressure.
          </p>
          <Link href="/contact" className="btn-primary mt-8">
            Get a Free Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
