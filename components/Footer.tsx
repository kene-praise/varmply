'use client';

import Link from 'next/link';

/** Lucide dropped brand icons; inline SVGs keep recognizable social marks */
function SocialX({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
function SocialLinkedIn({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
function SocialInstagram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}
function SocialYoutube({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0F0F1A] text-white">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1: Logo + tagline + socials */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="relative w-7 h-7">
                <div className="absolute w-4.5 h-4.5 rounded-full bg-[#7C5CFC] opacity-80 top-0 left-0" style={{width:'18px',height:'18px'}} />
                <div className="absolute w-4.5 h-4.5 rounded-full bg-[#A78BFA] opacity-80 bottom-0 right-0" style={{width:'18px',height:'18px'}} />
              </div>
              <span className="font-bold text-lg tracking-tight">VARMPLY</span>
            </Link>
            <p className="text-[#8888AA] text-sm leading-relaxed mb-6">
              The creator-sponsor platform built for structured campaigns, verified performance, and transparent payouts.
            </p>
            <div className="flex items-center gap-3">
              {[
                { Icon: SocialX, label: 'X', href: '#' },
                { Icon: SocialLinkedIn, label: 'LinkedIn', href: '#' },
                { Icon: SocialInstagram, label: 'Instagram', href: '#' },
                { Icon: SocialYoutube, label: 'YouTube', href: '#' },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-[#8888AA] transition-all duration-200 hover:bg-[#7C5CFC] hover:text-white"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Product */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Product</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'How It Works', href: '/#how-it-works' },
                { label: 'Campaign Marketplace', href: '/creators' },
                { label: 'Analytics', href: '/creators' },
                { label: 'Escrow System', href: '/sponsors' },
                { label: 'Pricing', href: '#' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-[#8888AA] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Creators */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Creators</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Browse Campaigns', href: '/creators' },
                { label: 'Eligibility Guide', href: '/creators#eligibility' },
                { label: 'Wallet & Earnings', href: '/creators#wallet' },
                { label: 'Creator Analytics', href: '/creators#analytics' },
                { label: 'Creator FAQ', href: '/creators#faq' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-[#8888AA] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Sponsors */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Sponsors</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Launch Campaign', href: '/sponsors' },
                { label: 'Escrow System', href: '/sponsors#escrow' },
                { label: 'Real-time Analytics', href: '/sponsors#analytics' },
                { label: 'Campaign Performance', href: '/sponsors#performance' },
                { label: 'Sponsor FAQ', href: '/sponsors#faq' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-[#8888AA] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#8888AA] text-sm">
            © 2025 Varmply. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm text-[#8888AA] hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-[#8888AA] hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
