'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs, siteConfig } from '@/lib/site';
import { cn } from '@/lib/utils';

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="section-padding">
      <div className="container-max mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">FAQs</p>
          <h1 className="mt-2 font-display text-4xl font-bold">Frequently Asked Questions</h1>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Find answers to common questions about {siteConfig.name} services.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <div key={faq.question} className="card !p-0 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-4 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="font-display font-semibold pr-4">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    'h-5 w-5 shrink-0 text-slate-400 transition-transform',
                    openIndex === i && 'rotate-180'
                  )}
                />
              </button>
              {openIndex === i && (
                <div className="border-t border-slate-200 px-6 py-4 dark:border-slate-700">
                  <p className="text-sm text-slate-600 dark:text-slate-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
