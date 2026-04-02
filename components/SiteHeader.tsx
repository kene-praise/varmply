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

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/#how-it-works', label: 'How It Works' },
    { href: '/#faq', label: 'FAQ' },
  ];

  return (
    <header className="relative z-40 bg-[#F7F7F9]">
      <div className="relative mx-auto flex min-h-16 max-w-6xl items-center justify-between px-6 py-2 md:min-h-[4.25rem] md:py-2.5">
        <div className="flex flex-1 items-center justify-start">
          <Link href="/" className="flex items-center" aria-label="Varmply home">
            <BrandLogo className="h-10 w-auto sm:h-12" priority />
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
                pathname === link.href
                  ? 'bg-[#EDE9FF] text-[#7C5CFC]'
                  : 'text-[#4A4A6A] hover:bg-[#F0F0F4] hover:text-[#0F0F1A]'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2 md:gap-3">
          <div className="hidden items-center gap-3 md:flex">
            <Link href="#" className="btn-ghost !py-2 !px-4 text-sm">
              Sign In
            </Link>
            <Link href="#" className="btn-primary !py-2 !px-4 text-sm">
              Get Started →
            </Link>
          </div>

          <button
            type="button"
            className="rounded-full p-2 text-[#4A4A6A] transition-colors hover:bg-[#F0F0F4] md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="bg-[#F7F7F9] md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-3 text-sm font-medium text-[#4A4A6A] transition-all hover:bg-[#F0F0F4] hover:text-[#0F0F1A]"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-[#E4E4EC] pt-3">
              <Link href="#" className="btn-ghost !py-2.5 !px-4 text-center text-sm">
                Sign In
              </Link>
              <Link href="#" className="btn-primary !py-2.5 !px-4 text-center text-sm">
                Get Started →
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
