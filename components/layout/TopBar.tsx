import { Mail, Phone, MapPin } from 'lucide-react';
import { siteConfig } from '@/lib/site';

export function TopBar() {
  return (
    <div className="hidden border-b border-slate-200 bg-slate-900 text-slate-300 dark:border-slate-800 lg:block">
      <div className="container-max flex items-center justify-between px-4 py-2 text-xs sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <Mail className="h-3.5 w-3.5" />
            {siteConfig.contact.email}
          </a>
          <a
            href={siteConfig.contact.phoneHref}
            className="flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <Phone className="h-3.5 w-3.5" />
            {siteConfig.contact.phone}
          </a>
        </div>
        <div className="flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5 shrink-0" />
          <span>{siteConfig.contact.address.full}</span>
        </div>
      </div>
    </div>
  );
}
