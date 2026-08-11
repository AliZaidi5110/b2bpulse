'use client';

import Link from 'next/link';
import { siteConfig } from '@/lib/site';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  height?: number;
  linkToHome?: boolean;
}

export function Logo({
  className,
  height = 48,
  linkToHome = true,
}: LogoProps) {
  const image = (
    <span className="inline-flex items-center rounded-lg bg-white px-2 py-1">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.png"
        alt={`${siteConfig.name} – ${siteConfig.tagline}`}
        height={height}
        className={cn('h-auto w-auto object-contain', className)}
        style={{ height, width: 'auto', maxHeight: height }}
      />
    </span>
  );

  if (!linkToHome) return image;

  return (
    <Link
      href="/"
      className="inline-flex shrink-0 items-center"
      aria-label={`${siteConfig.name} home`}
    >
      {image}
    </Link>
  );
}
