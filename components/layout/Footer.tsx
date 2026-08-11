import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { siteConfig } from '@/lib/site';

const footerNav = [
  { label: 'About Us', href: '/about' },
  { label: 'Faq', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

const footerServices = [
  { label: 'Energy', href: '/energy' },
  { label: 'Card Machine', href: '/card-machine' },
];

export function Footer() {
  return (
    <footer className="section-surface-navy border-t border-neon/20">
      <div className="container-max section-padding !py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo height={76} />
            <p className="mt-4 text-sm text-slate-300">{siteConfig.tagline}</p>
            <div className="mt-4 space-y-2 text-sm text-slate-400">
              <p>
                {siteConfig.legalName} · Company number {siteConfig.companyNumber}
              </p>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-neon" />
                <span>{siteConfig.contact.address.full}</span>
              </div>
              <a
                href={siteConfig.contact.phoneHref}
                className="flex items-center gap-2 transition-colors hover:text-neon"
              >
                <Phone className="h-4 w-4 text-neon" />
                {siteConfig.contact.phone}
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-white">
              Navigation
            </h3>
            <ul className="mt-3 space-y-2">
              {footerNav.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-neon"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-white">
              Services
            </h3>
            <ul className="mt-3 space-y-2">
              {footerServices.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-neon"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-white">
              Subscribe
            </h3>
            <p className="mt-3 text-sm text-slate-400">
              Stay updated with our latest services, exclusive offers, news, and
              industry insights.
            </p>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="mt-4 inline-flex items-center gap-2 text-sm text-neon hover:underline"
            >
              <Mail className="h-4 w-4" />
              {siteConfig.contact.email}
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-neon/15 pt-8 text-center">
          <p className="text-xs text-slate-500">{siteConfig.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
