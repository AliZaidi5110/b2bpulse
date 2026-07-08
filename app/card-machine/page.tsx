import type { Metadata } from 'next';
import { CreditCard } from 'lucide-react';
import { CardMachineGallery } from '@/components/card-machine/CardMachineGallery';
import { AcceptPaymentsSection } from '@/components/card-machine/AcceptPaymentsSection';
import { MerchantPortalSection } from '@/components/card-machine/MerchantPortalSection';

export const metadata: Metadata = {
  title: 'Card Machine',
  description:
    'Secure, fast, and contactless payment systems with full technical assistance.',
};

export default function CardMachinePage() {
  return (
    <div className="section-padding">
      <div className="container-max">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary">
            <CreditCard className="h-8 w-8 text-white" />
          </div>
          <h1 className="font-display text-3xl font-bold sm:text-4xl">
            Smarter Payment Solutions
          </h1>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300 sm:text-lg">
            Secure, fast, and contactless payment systems with full technical
            assistance.
          </p>
        </div>

        <CardMachineGallery />

        <AcceptPaymentsSection />

        <MerchantPortalSection />
      </div>
    </div>
  );
}
