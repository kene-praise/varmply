'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { clsx } from 'clsx';
import BrandLogo from '@/components/BrandLogo';

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isDarkHero = pathname === '/' || pathname === '/creators' || pathname === '/sponsors';
  const isLightHeader = !isDarkHero;

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/#how-it-works', label: 'How It Works' },
    { href: '/#faq', label: 'FAQ' },
  ];

  return (
    <header className={clsx(
      'w-full z-50',
      // Desktop: absolute overlay over hero, scrolls away with page
      'md:absolute md:top-0 md:left-0 md:right-0 md:bg-transparent',
      // Mobile: solid fill in normal flow
      isLightHeader ? 'bg-white' : 'bg-[#07071A]',
    )}>
      <div className="relative mx-auto flex min-h-16 max-w-6xl items-center justify-between px-6 py-2 md:min-h-[4.25rem] md:py-2.5">
        <div className="flex flex-1 items-center justify-start">
          <Link href="/" className="flex items-center gap-1" aria-label="Varmply home">
            <BrandLogo className="h-9 w-auto md:h-13" priority white={!isLightHeader} />
            <span className={clsx(
              'text-[17px] md:text-[24px] font-black tracking-tight',
              isLightHeader ? 'text-[#0F0F1A]' : 'text-white'
            )}>
              Varmply
            </span>
          </Link>
        </div>

        <nav
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-1 md:flex"
          aria-label="Main"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                'rounded-full px-4 py-2 text-sm font-medium transition-all duration-200',
                isLightHeader
                  ? 'text-[#0F0F1A]/70 hover:bg-black/5 hover:text-[#0F0F1A]'
                  : 'text-white/80 hover:bg-white/10 hover:text-white'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2 md:gap-3">
          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="#"
              className={clsx(
                'rounded-full px-5 py-2 text-sm font-semibold transition-all',
                isLightHeader
                  ? 'text-[#0F0F1A]/70 hover:bg-black/5 hover:text-[#0F0F1A]'
                  : 'text-white/80 hover:bg-white/10 hover:text-white'
              )}
            >
              Sign In
            </Link>
            <Link
              href="#"
              className={clsx(
                'rounded-full px-5 py-2 text-sm font-semibold transition-all',
                isLightHeader
                  ? 'bg-[#7C3BED] text-white hover:bg-[#6B28D9]'
                  : 'bg-white text-[#0F0F1A] hover:bg-white/90'
              )}
              style={{ boxShadow: isLightHeader ? '0 2px 12px rgba(124,59,237,0.3)' : '0 2px 12px rgba(0,0,0,0.15)' }}
            >
              Get Started →
            </Link>
          </div>

          <button
            type="button"
            className={clsx(
              'rounded-full p-2 transition-colors md:hidden',
              isLightHeader
                ? 'text-[#0F0F1A]/70 hover:bg-black/5 hover:text-[#0F0F1A]'
                : 'text-white/70 hover:bg-white/10 hover:text-white'
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className={clsx(
          'backdrop-blur-xl md:hidden border-t',
          isLightHeader
            ? 'bg-white/90 border-black/[0.06]'
            : 'bg-[rgba(10,2,40,0.92)] border-white/10'
        )}>
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  'rounded-full px-4 py-3 text-sm font-medium transition-all',
                  isLightHeader
                    ? 'text-[#0F0F1A]/70 hover:bg-black/5 hover:text-[#0F0F1A]'
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className={clsx('mt-3 flex flex-col gap-2 border-t pt-3', isLightHeader ? 'border-black/[0.06]' : 'border-white/10')}>
              <Link
                href="#"
                className={clsx(
                  'rounded-full px-4 py-2.5 text-center text-sm font-semibold transition-all',
                  isLightHeader
                    ? 'text-[#0F0F1A]/70 hover:bg-black/5'
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                )}
              >
                Sign In
              </Link>
              <Link
                href="#"
                className={clsx(
                  'rounded-full px-4 py-2.5 text-center text-sm font-semibold',
                  isLightHeader ? 'bg-[#7C3BED] text-white' : 'bg-white text-[#0F0F1A]'
                )}
              >
                Get Started →
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
