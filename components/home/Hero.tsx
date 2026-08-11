'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { PulseLine } from '@/components/ui/PulseLine';
import { HeroVideo } from '@/components/ui/HeroVideo';
import { heroSlides } from '@/lib/site';
import { cn } from '@/lib/utils';

export function Hero() {
  const [active, setActive] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [mounted]);

  return (
    <section className="relative overflow-hidden section-surface">
      <div className="absolute inset-0 bg-gradient-radial" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-navy-radial opacity-60" aria-hidden="true" />
      <div className="container-max section-padding relative">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative min-h-[22rem] sm:min-h-[24rem]">
            {heroSlides.map((slide, index) => (
              <div
                key={slide.title}
                className={cn(
                  'transition-opacity duration-700 ease-in-out',
                  index === active
                    ? 'relative z-10 opacity-100'
                    : 'pointer-events-none absolute inset-0 z-0 opacity-0'
                )}
                aria-hidden={index !== active}
              >
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon/30 bg-neon/10 px-4 py-1.5 text-sm font-medium text-navy">
                  {slide.tag}
                </div>

                <h1 className="font-display text-4xl font-bold tracking-tight text-navy sm:text-5xl lg:text-5xl xl:text-6xl">
                  {slide.title}
                </h1>

                <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">
                  {slide.description}
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link href={slide.cta.href} className="btn-primary">
                    {slide.cta.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/contact" className="btn-secondary">
                    Get a Quote
                  </Link>
                </div>
              </div>
            ))}

            <div className="relative z-20 mt-8 flex gap-2">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  className={cn(
                    'h-2 rounded-full transition-all',
                    i === active ? 'w-8 bg-neon shadow-neon-sm' : 'w-2 bg-slate-300 dark:bg-slate-600'
                  )}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === active ? 'true' : undefined}
                />
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-neon opacity-15 blur-2xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 shadow-2xl shadow-primary/10 dark:border-slate-700">
              <HeroVideo showControls />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-lg dark:border-slate-700 dark:bg-slate-900">
              <p className="font-mono text-xs text-slate-400">Trusted across the UK</p>
              <p className="font-display text-sm font-semibold text-neon">740+ Projects Delivered</p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <PulseLine variant="hero" animated={mounted} />
        </div>
      </div>
    </section>
  );
}
