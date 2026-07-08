'use client';

import { useState } from 'react';
import { Send, Mail, Phone, MapPin, CheckCircle, Clock } from 'lucide-react';
import { siteConfig } from '@/lib/site';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="section-padding">
      <div className="container-max">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-display text-4xl font-bold">Contact Us</h1>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Get a quote or speak with our team about energy, water, and payment
            solutions for your business.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="card h-full">
              <h2 className="font-display text-lg font-semibold">Contact Info</h2>
              <div className="mt-6 space-y-4">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-3 text-sm text-slate-600 transition-colors hover:text-primary dark:text-slate-300"
                >
                  <Mail className="h-5 w-5 text-primary" />
                  {siteConfig.contact.email}
                </a>
                <a
                  href={siteConfig.contact.phoneHref}
                  className="flex items-center gap-3 text-sm text-slate-600 transition-colors hover:text-primary dark:text-slate-300"
                >
                  <Phone className="h-5 w-5 text-primary" />
                  {siteConfig.contact.phone}
                </a>
                <div className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>
                    {siteConfig.contact.address.line1}
                    <br />
                    {siteConfig.contact.address.line2}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <Clock className="h-5 w-5 text-primary" />
                  {siteConfig.contact.hours}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="card">
              {submitted ? (
                <div className="flex flex-col items-center py-12 text-center">
                  <CheckCircle className="h-12 w-12 text-signal" />
                  <h2 className="mt-4 font-display text-xl font-semibold">
                    Message sent!
                  </h2>
                  <p className="mt-2 text-sm text-slate-500">
                    We&apos;ll get back to you within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                        First name
                      </label>
                      <input id="firstName" name="firstName" type="text" required className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary dark:border-slate-700 dark:bg-slate-800" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                        Last name
                      </label>
                      <input id="lastName" name="lastName" type="text" required className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary dark:border-slate-700 dark:bg-slate-800" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      Email
                    </label>
                    <input id="email" name="email" type="email" required className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary dark:border-slate-700 dark:bg-slate-800" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      Phone
                    </label>
                    <input id="phone" name="phone" type="tel" className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary dark:border-slate-700 dark:bg-slate-800" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      Message
                    </label>
                    <textarea id="message" name="message" rows={5} required className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary dark:border-slate-700 dark:bg-slate-800" />
                  </div>
                  <button type="submit" className="btn-primary w-full sm:w-auto">
                    Send Your Message
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
