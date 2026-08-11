'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Logo } from '@/components/ui/Logo';
import { cn } from '@/lib/utils';
import { navLinks } from '@/lib/site';

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b border-slate-200/80 backdrop-blur-md dark:border-neon/10"
      style={{ backgroundColor: 'var(--nav-bg)' }}
    >
      <div className="container-max flex h-20 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo height={62} />

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                pathname === link.href
                  ? 'bg-neon/10 text-navy dark:text-neon'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-navy dark:text-slate-300 dark:hover:bg-navy-light dark:hover:text-white'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="/contact" className="btn-primary hidden !py-2 !px-4 text-xs sm:inline-flex">
            Get a Quote
          </Link>
          <button
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 xl:hidden dark:text-slate-300 dark:hover:bg-slate-800"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          className="border-t border-slate-200 px-4 py-4 xl:hidden dark:border-slate-800"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                'block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                pathname === link.href
                  ? 'bg-neon/10 text-navy dark:text-neon'
                  : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-navy-light'
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="btn-primary mt-3 w-full"
          >
            Get a Quote
          </Link>
        </nav>
      )}
    </header>
  );
}
