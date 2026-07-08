const galleryImages = [
  {
    src: '/images/payment-gallery/card-payment.jpg',
    alt: 'Contactless card payment on a mobile terminal',
  },
  {
    src: '/images/payment-gallery/counter-payment.jpg',
    alt: 'Customer paying at a service counter with a card machine',
  },
  {
    src: '/images/payment-gallery/hospitality-payment.jpg',
    alt: 'Mobile payment at an outdoor hospitality venue',
  },
];

export function PaymentGallery() {
  return (
    <section className="section-padding">
      <div className="container-max">
        <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-slate-700 dark:text-slate-300 sm:text-lg">
          B2B PULSE helps businesses compare card machines, EFTPOS options,
          online payments and merchant service rates, with support built around
          retail, hospitality, trades and mobile businesses.
        </p>

        <div className="mt-8 sm:mt-12">
          <div className="md:hidden">
            <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {galleryImages.map((image) => (
                <div
                  key={`mobile-${image.src}`}
                  className="group w-[min(88vw,360px)] shrink-0 snap-center overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="aspect-[4/3] w-full object-cover object-center transition-transform duration-500 ease-out group-active:scale-105"
                  />
                </div>
              ))}
            </div>
            <p className="mt-3 text-center text-xs text-slate-400">
              Swipe to view more
            </p>
          </div>

          <div className="hidden overflow-hidden rounded-[1.75rem] border border-slate-200/80 shadow-sm md:block md:rounded-[2rem] lg:rounded-[2.5rem] dark:border-slate-700">
            <div className="grid grid-cols-3">
              {galleryImages.map((image) => (
                <div key={image.src} className="group overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="aspect-[4/3] w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110 lg:aspect-[5/3]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
