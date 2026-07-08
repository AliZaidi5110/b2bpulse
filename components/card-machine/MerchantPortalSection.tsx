export function MerchantPortalSection() {
  return (
    <section className="mt-24 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className="flex justify-center lg:justify-start">
        <img
          src="/images/card-machine/merchant-portal.png"
          alt="B2B PULSE Merchant Portal mobile app on iPhone showing settlements and payment link details"
          className="w-full max-w-lg object-contain"
        />
      </div>

      <div>
        <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
          Merchant Portal
        </h2>
        <h3 className="mt-3 font-display text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
          Fits seamlessly into your business
        </h3>
        <p className="mt-5 leading-relaxed text-slate-600 dark:text-slate-300">
          Our Merchant Portal fits seamlessly into any business&apos;s payment
          ecosystem via its web portal and mobile app. We understand every
          business is different, so we&apos;ve created our Merchant Portal with
          this in mind, ensuring you&apos;ve everything you need to get the job
          done.
        </p>
      </div>
    </section>
  );
}
