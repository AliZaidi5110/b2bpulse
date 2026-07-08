'use client';

import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export function NewsletterCTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) setSubmitted(true);
  }

  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-primary p-8 sm:p-12 lg:p-16">
          <div className="absolute inset-0 opacity-10" aria-hidden="true">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/20" />
            <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-white/10" />
          </div>

          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Have Any Question?
            </h2>
            <p className="mt-4 text-white/80">
              Stay updated with our latest services, exclusive offers, news, and
              industry insights.
            </p>

            {submitted ? (
              <div className="mt-8 flex items-center justify-center gap-2 text-white">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">
                  Thanks! We&apos;ll be in touch shortly.
                </span>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center"
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full rounded-lg border-0 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 backdrop-blur-sm focus:ring-2 focus:ring-white/50 sm:max-w-sm"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-white/90"
                >
                  Send Your Message
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
