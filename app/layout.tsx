import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import AudienceSwitcher from '@/components/AudienceSwitcher';
import Footer from '@/components/Footer';
import LenisProvider from '@/components/LenisProvider';
import NavigationScrollGuard from '@/components/NavigationScrollGuard';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  weight: ['400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Varmply - Music Campaigns That Pay for Performance',
  description:
    'Structured campaigns, verified performance, transparent payments. Varmply connects creators and sponsors across Nigeria.',
  keywords: ['creator platform', 'sponsor campaigns', 'influencer marketing', 'Nigeria creators'],
  openGraph: {
    title: 'Varmply - Music Campaigns That Pay for Performance',
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
      <body className={`${inter.variable} ${jetBrainsMono.variable}`}>
        {/* Detect ?embed=1 before first paint — adds .embed class, CSS hides chrome */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){var sp=new URLSearchParams(location.search);if(sp.get("embed")==="1"){document.documentElement.classList.add("embed");var s=sp.get("section");if(s){document.documentElement.classList.add("section-"+s)}}})()` }} />
        <SiteHeader />
        <LenisProvider>
          <NavigationScrollGuard />
          <main>{children}</main>
          <AudienceSwitcher />
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
