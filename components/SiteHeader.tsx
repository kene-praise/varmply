'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { clsx } from 'clsx';

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/creators', label: 'For Creators' },
    { href: '/sponsors', label: 'For Sponsors' },
    { href: '/#how-it-works', label: 'How It Works' },
    { href: '/#faq', label: 'FAQ' },
  ];

  return (
    <header className="relative z-40 border-b border-[#E4E4EC] bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="group flex items-center gap-2.5">
          <div className="relative h-8 w-8">
            <div className="absolute left-0 top-0 h-5 w-5 rounded-full bg-[#7C5CFC] opacity-80" />
            <div className="absolute bottom-0 right-0 h-5 w-5 rounded-full bg-[#A78BFA] opacity-80" />
          </div>
          <span className="text-xl font-bold tracking-tight text-[#0F0F1A]">VARMPLY</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
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
        </div>

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
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-[#E4E4EC] bg-white md:hidden">
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
