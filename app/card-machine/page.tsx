import type { Metadata } from 'next';
import { CreditCard } from 'lucide-react';
import { CardMachineGallery } from '@/components/card-machine/CardMachineGallery';
import { MerchantPortalSection } from '@/components/card-machine/MerchantPortalSection';

export const metadata: Metadata = {
  title: 'Card Machine',
  description:
    'Secure, fast, and contactless payment systems with full technical assistance.',
};

const features = [
  'Accept EMV, NFC, and swiped card payments',
  'Powered by Wi-Fi and 4G connectivity',
  'Secure transactions with advanced tokenization & PCI encryption',
];

export default function CardMachinePage() {
  return (
    <div className="section-padding">
      <div className="container-max">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary">
            <CreditCard className="h-8 w-8 text-white" />
          </div>
          <h1 className="font-display text-4xl font-bold">Smarter Payment Solutions</h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Secure, fast, and contactless payment systems with full technical
            assistance.
          </p>
        </div>

        <CardMachineGallery />

        <section className="mt-16 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Accept Payments Anywhere
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              Whether customers pull up outside or line up in-store, you can
              quickly accept payments wherever business takes you.
            </p>
            <ul className="mt-8 space-y-5">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span className="text-slate-600 dark:text-slate-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="group overflow-hidden rounded-l-[4rem]">
            <img
              src="/images/card-machine/accept-payments.png"
              alt="Merchant accepting a contactless mobile payment with a handheld card terminal"
              className="aspect-[5/3] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
          </div>
        </section>

        <MerchantPortalSection />
      </div>
    </div>
  );
}
