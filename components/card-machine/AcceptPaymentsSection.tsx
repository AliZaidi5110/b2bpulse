const features = [
  'Accept EMV, NFC, and swiped card payments',
  'Powered by Wi-Fi and 4G connectivity',
  'Secure transactions with advanced tokenization & PCI encryption',
];

export function AcceptPaymentsSection() {
  return (
    <section className="mt-12 sm:mt-16">
      <div className="grid items-center gap-8 md:gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="font-display text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
            Accept Payments Anywhere
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
            Whether customers pull up outside or line up in-store, you can
            quickly accept payments wherever business takes you.
          </p>
          <ul className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="group overflow-hidden rounded-2xl border border-slate-200/80 shadow-sm lg:rounded-l-[4rem] lg:rounded-r-2xl dark:border-slate-700">
          <img
            src="/images/card-machine/accept-payments.png"
            alt="Merchant accepting a contactless mobile payment with a handheld card terminal"
            className="aspect-[4/3] w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105 sm:aspect-[5/3] lg:group-hover:scale-110"
          />
        </div>
      </div>
    </section>
  );
}
