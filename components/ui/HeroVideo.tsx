'use client';

import { useEffect, useRef } from 'react';
import { siteConfig } from '@/lib/site';
import { cn } from '@/lib/utils';

interface HeroVideoProps {
  className?: string;
  showControls?: boolean;
}

export function HeroVideo({ className, showControls = true }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    function handleMotionChange() {
      const el = videoRef.current;
      if (!el) return;

      if (motionQuery.matches) {
        el.pause();
      } else {
        el.play().catch(() => {});
      }
    }

    handleMotionChange();
    motionQuery.addEventListener('change', handleMotionChange);
    return () => motionQuery.removeEventListener('change', handleMotionChange);
  }, []);

  return (
    <video
      ref={videoRef}
      className={cn('aspect-[4/3] w-full object-cover', className)}
      autoPlay
      muted
      loop
      playsInline
      controls={showControls}
      preload="metadata"
      aria-label={`${siteConfig.name} promotional video`}
    >
      <source src={siteConfig.heroVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
