import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0a1f44',
          light: '#0f2d5c',
          dark: '#061528',
        },
        neon: {
          DEFAULT: '#00C8FF',
          glow: '#5CE1FF',
          dim: '#0099CC',
        },
        offwhite: '#F4F6F8',
        primary: {
          DEFAULT: '#0a1f44',
          end: '#00C8FF',
        },
        signal: '#00C8FF',
        alert: '#F59E0B',
        slate: {
          50: '#F8FAFC',
          100: '#F1F5F5',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'gradient-primary':
          'linear-gradient(135deg, #0a1f44 0%, #0f3d6e 45%, #00C8FF 100%)',
        'gradient-neon':
          'linear-gradient(90deg, #00C8FF 0%, #5CE1FF 50%, #00C8FF 100%)',
        'gradient-radial':
          'radial-gradient(ellipse at top, rgba(0, 200, 255, 0.14), transparent 62%)',
        'gradient-navy-radial':
          'radial-gradient(ellipse at bottom, rgba(10, 31, 68, 0.06), transparent 70%)',
      },
      boxShadow: {
        neon: '0 0 24px rgba(0, 200, 255, 0.35)',
        'neon-sm': '0 0 12px rgba(0, 200, 255, 0.25)',
        navy: '0 8px 32px rgba(10, 31, 68, 0.12)',
      },
      animation: {
        'pulse-line': 'pulse-line 3s ease-in-out infinite',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'slide-up': 'slide-up 0.6s ease-out forwards',
        'logo-marquee': 'logo-marquee 35s linear infinite',
        'balloon-float': 'balloon-float 3s ease-in-out infinite',
      },
      keyframes: {
        'pulse-line': {
          '0%, 100%': { strokeDashoffset: '1000' },
          '50%': { strokeDashoffset: '0' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'logo-marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'balloon-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-18px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
