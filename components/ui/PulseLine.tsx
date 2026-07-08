'use client';

interface PulseLineProps {
  className?: string;
  variant?: 'hero' | 'divider';
  animated?: boolean;
}

export function PulseLine({
  className = '',
  variant = 'hero',
  animated = true,
}: PulseLineProps) {
  const height = variant === 'hero' ? 120 : 40;
  const viewBox = variant === 'hero' ? '0 0 1200 120' : '0 0 1200 40';

  const pathD =
    variant === 'hero'
      ? 'M0,60 L100,60 L120,20 L140,100 L160,60 L200,60 L220,40 L240,80 L260,60 L320,60 L340,10 L360,110 L380,60 L440,60 L460,30 L480,90 L500,60 L560,60 L580,15 L600,105 L620,60 L680,60 L700,35 L720,85 L740,60 L800,60 L820,25 L840,95 L860,60 L920,60 L940,45 L960,75 L980,60 L1040,60 L1060,5 L1080,115 L1100,60 L1200,60'
      : 'M0,20 L150,20 L170,5 L190,35 L210,20 L350,20 L370,8 L390,32 L410,20 L550,20 L570,2 L590,38 L610,20 L750,20 L770,10 L790,30 L810,20 L950,20 L970,5 L990,35 L1010,20 L1200,20';

  return (
    <svg
      viewBox={viewBox}
      height={height}
      className={`w-full ${className}`}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4C6FFF" />
          <stop offset="50%" stopColor="#7C5CFF" />
          <stop offset="100%" stopColor="#14B8A6" />
        </linearGradient>
        <linearGradient id="pulseGradientFade" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4C6FFF" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#7C5CFF" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {/* Background glow line */}
      <path
        d={pathD}
        fill="none"
        stroke="url(#pulseGradientFade)"
        strokeWidth={variant === 'hero' ? 8 : 4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Main pulse line */}
      <path
        d={pathD}
        fill="none"
        stroke="url(#pulseGradient)"
        strokeWidth={variant === 'hero' ? 2.5 : 1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={animated ? '1200' : undefined}
        strokeDashoffset={animated ? '1200' : undefined}
        className={animated ? 'motion-safe:animate-pulse-line' : ''}
        style={
          animated
            ? {
                animation: 'pulse-line 4s ease-in-out infinite',
              }
            : undefined
        }
      />

      {/* Animated dot traveling along the line */}
      {animated && variant === 'hero' && (
        <circle r="4" fill="#14B8A6" className="motion-safe:animate-pulse">
          <animateMotion
            dur="4s"
            repeatCount="indefinite"
            path={pathD}
          />
        </circle>
      )}
    </svg>
  );
}
