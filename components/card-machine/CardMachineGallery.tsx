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
    <section className="mt-16">
      <div className="overflow-hidden rounded-[2rem] sm:rounded-[2.5rem]">
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
    </section>
  );
}
