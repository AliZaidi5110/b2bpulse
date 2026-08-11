import { Quote } from 'lucide-react';
import { testimonials } from '@/lib/data';

export function Testimonials() {
  return (
    <section className="section-padding section-surface-gray">
      <div className="container-max">
        <div className="mx-auto max-w-2xl text-center">
          <p className="label-navy">
            What people ask
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
            What People Say About Working With Us
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote key={t.author} className="card flex flex-col">
              <Quote className="h-8 w-8 text-neon/40" />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-6 border-t border-slate-200 pt-4 dark:border-slate-700">
                <p className="font-display text-sm font-semibold">{t.author}</p>
                <p className="text-xs text-slate-400">{t.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
