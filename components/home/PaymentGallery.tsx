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

        <div className="mt-10 overflow-hidden rounded-[2rem] sm:mt-12 sm:rounded-[2.5rem]">
          <div className="flex">
            {galleryImages.map((image) => (
              <div key={image.src} className="group flex-1 overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-56 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110 sm:h-72 md:h-80 lg:h-96"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
