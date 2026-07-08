import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { TopBar } from '@/components/layout/TopBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { siteConfig } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} – ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'B2B',
    'business utilities',
    'energy',
    'water',
    'card machines',
    'payment solutions',
    'UK',
  ],
  openGraph: {
    title: `${siteConfig.name} – ${siteConfig.tagline}`,
    description: siteConfig.description,
    type: 'website',
    locale: 'en_GB',
    siteName: siteConfig.name,
    url: siteConfig.url,
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TopBar />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
