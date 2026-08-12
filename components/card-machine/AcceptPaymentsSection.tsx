import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

const features = [
  'Accept EMV, NFC, and swiped card payments',
  'Powered by Wi-Fi and 4G connectivity',
  'Secure transactions with advanced tokenization & PCI encryption',
];

export function AcceptPaymentsSection() {
  return (
    <section className="mt-16 overflow-hidden rounded-3xl border border-neon/15 bg-navy shadow-navy sm:mt-20 lg:rounded-[2rem]">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-16">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,200,255,0.16),transparent_52%)]"
            aria-hidden="true"
          />

          <div className="relative">
            <p className="label-neon">Payments without limits</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
            Accept Payments Anywhere
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Whether customers pull up outside or line up in-store, accept
              payments quickly and securely wherever business takes you.
            </p>

            <ul className="mt-7 space-y-3.5">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neon/15">
                    <Check className="h-3.5 w-3.5 text-neon" strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-relaxed text-slate-300 sm:text-base">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-neon px-5 py-3 text-sm font-semibold text-navy transition-all hover:bg-neon-glow hover:shadow-neon"
            >
              Get a Card Machine
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="group relative min-h-[280px] overflow-hidden border-t border-neon/10 sm:min-h-[360px] lg:min-h-[460px] lg:border-l lg:border-t-0">
          <img
            src="/images/card-machine/accept-payments.png"
            alt="Merchant accepting a contactless mobile payment with a handheld card terminal"
            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent lg:bg-gradient-to-r lg:from-navy/20 lg:to-transparent"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
