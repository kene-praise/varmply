import type { Metadata } from 'next';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import AudienceSwitcher from '@/components/AudienceSwitcher';
import Footer from '@/components/Footer';
import LenisProvider from '@/components/LenisProvider';
import NavigationScrollGuard from '@/components/NavigationScrollGuard';

export const metadata: Metadata = {
  title: 'Varmply — Creator-Sponsor Campaign Platform',
  description:
    'Structured campaigns, verified performance, transparent payments. Varmply connects creators and sponsors across Nigeria.',
  keywords: ['creator platform', 'sponsor campaigns', 'influencer marketing', 'Nigeria creators'],
  openGraph: {
    title: 'Varmply — Creator-Sponsor Campaign Platform',
    description:
      'No scattered DMs. No vague agreements. Structured campaigns, verified performance, transparent payments.',
    type: 'website',
    url: 'https://varmply.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SiteHeader />
        <LenisProvider>
          <NavigationScrollGuard />
          <main className="pb-24 sm:pb-28">{children}</main>
          <AudienceSwitcher />
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
