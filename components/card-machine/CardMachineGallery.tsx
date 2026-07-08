const galleryImages = [
  {
    src: '/images/hero-bakery.png',
    alt: 'Card payment at a bakery counter',
  },
  {
    src: '/images/hero-payment.png',
    alt: 'Handheld card terminal accepting a contactless payment',
  },
  {
    src: '/images/hero-retail.png',
    alt: 'Retail checkout with a modern card payment terminal',
  },
];

export function CardMachineGallery() {
  return (
    <section className="mt-12 sm:mt-16">
      <div className="sm:hidden">
        <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {galleryImages.map((image) => (
            <div
              key={`mobile-${image.src}`}
              className="group w-[min(82vw,320px)] shrink-0 snap-center overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="aspect-[4/5] w-full object-cover object-center transition-transform duration-500 ease-out group-active:scale-105"
              />
            </div>
          ))}
        </div>
        <p className="mt-3 text-center text-xs text-slate-400">Swipe to view more</p>
      </div>

      <div className="hidden overflow-hidden rounded-[1.75rem] border border-slate-200/80 shadow-sm sm:block sm:rounded-[2rem] lg:rounded-[2.5rem] dark:border-slate-700">
        <div className="grid grid-cols-3">
          {galleryImages.map((image) => (
            <div key={image.src} className="group overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="aspect-[3/4] w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105 md:aspect-[4/5] lg:aspect-[3/4] lg:group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
