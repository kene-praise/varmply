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
        {/* Detect ?embed=1 before first paint — adds .embed class, CSS hides chrome */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){var sp=new URLSearchParams(location.search);if(sp.get("embed")==="1"){document.documentElement.classList.add("embed");var s=sp.get("section");if(s){document.documentElement.classList.add("section-"+s);var el=document.createElement("style");el.textContent="html.embed section:not(#"+s+"){display:none!important}html.embed main:not(:has(#"+s+")){display:none!important}";document.head.appendChild(el)}}})()` }} />
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
