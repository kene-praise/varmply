'use client';

// LaunchFolio-inspired floating glass navigation pill.
// Sits at the top of a section, appears to float above content.
// Dark variant: near-black frosted glass with subtle border glow.
// Light variant: white frosted glass with soft shadow.

import { clsx } from 'clsx';

export interface NavLink {
  label: string;
  href?: string;
  active?: boolean;
}

interface GlassHeaderProps {
  /** Left slot: brand name or logo */
  brand?: React.ReactNode;
  links?: NavLink[];
  /** Right slot: CTA button or any node */
  action?: React.ReactNode;
  surface?: 'dark' | 'light';
  className?: string;
  style?: React.CSSProperties;
}

export function GlassHeader({
  brand,
  links = [],
  action,
  surface = 'dark',
  className,
  style,
}: GlassHeaderProps) {
  const isDark = surface === 'dark';

  return (
    <nav
      className={clsx(
        'flex items-center gap-6 rounded-full px-5 py-3',
        className
      )}
      style={{
        background: isDark
          ? 'rgba(7, 7, 26, 0.72)'
          : 'rgba(255, 255, 255, 0.72)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: isDark
          ? '1px solid rgba(255,255,255,0.10)'
          : '1px solid rgba(0,0,0,0.06)',
        boxShadow: isDark
          ? '0 8px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.06)'
          : '0 8px 40px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.90)',
        ...style,
      }}
    >
      {/* Brand */}
      {brand && (
        <div
          className="shrink-0 text-sm font-bold tracking-tight"
          style={{ color: isDark ? 'white' : 'var(--text-primary)' }}
        >
          {brand}
        </div>
      )}

      {/* Nav links */}
      {links.length > 0 && (
        <div className="flex flex-1 items-center justify-center gap-1">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href ?? '#'}
              className={clsx(
                'rounded-full px-3.5 py-1.5 text-sm transition-colors duration-150',
                link.active
                  ? isDark
                    ? 'bg-white/10 font-medium'
                    : 'bg-black/06 font-medium'
                  : 'hover:opacity-70'
              )}
              style={{
                color: link.active
                  ? isDark ? 'white' : 'var(--text-primary)'
                  : isDark ? 'rgba(255,255,255,0.55)' : 'var(--text-secondary)',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      {/* Action */}
      {action && <div className="shrink-0">{action}</div>}
    </nav>
  );
}
