'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';

/** Fixed bottom pill: audience only (Creators vs Sponsors). Does not replace the main header. */
export default function AudienceSwitcher() {
  const pathname = usePathname();
  const creatorsActive = pathname === '/creators';
  const sponsorsActive = pathname === '/sponsors';

  return (
    <nav
      className="pointer-events-none fixed bottom-5 left-0 right-0 z-50 flex justify-center px-4 sm:bottom-7 sm:px-6"
      aria-label="Audience"
    >
      <div
        className={clsx(
          'pointer-events-auto flex items-center rounded-full p-1 ring-1 ring-black/[0.06] sm:p-1.5',
          'border border-white/80',
          'backdrop-blur-[24px] backdrop-saturate-[180%]'
        )}
        style={{
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.62) 0%, rgba(255,255,255,0.42) 100%)',
        }}
      >
        <div className="flex items-center rounded-full bg-[#0F0F1A]/[0.05] p-1" role="group" aria-label="Choose audience">
          <Link
            href="/creators"
            className={clsx(
              'rounded-full px-4 py-2.5 text-xs font-semibold transition-all sm:px-5 sm:text-[13px]',
              creatorsActive
                ? 'border border-[#E4E4EC] bg-white text-[#0F0F1A]'
                : 'border border-transparent text-[#4A4A6A] hover:text-[#0F0F1A]'
            )}
          >
            For Creators
          </Link>
          <Link
            href="/sponsors"
            className={clsx(
              'rounded-full px-4 py-2.5 text-xs font-semibold transition-all sm:px-5 sm:text-[13px]',
              sponsorsActive
                ? 'border border-[#E4E4EC] bg-white text-[#0F0F1A]'
                : 'border border-transparent text-[#4A4A6A] hover:text-[#0F0F1A]'
            )}
          >
            For Sponsors
          </Link>
        </div>
      </div>
    </nav>
  );
}
