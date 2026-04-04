import { clsx } from 'clsx';
import { colors, type BentoColor } from '@/lib/tokens';

// One distinct CSS pattern per bento color — white overlays on vibrant bg
const bentoPatterns: Record<BentoColor, React.CSSProperties> = {
  purple: {
    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px)',
    backgroundSize: '18px 18px',
  },
  green: {
    backgroundImage:
      'repeating-linear-gradient(45deg, rgba(255,255,255,0.12) 0, rgba(255,255,255,0.12) 1px, transparent 0, transparent 50%)',
    backgroundSize: '12px 12px',
  },
  amber: {
    backgroundImage:
      'repeating-linear-gradient(0deg, rgba(255,255,255,0.10) 0, rgba(255,255,255,0.10) 1px, transparent 0, transparent 20px), repeating-linear-gradient(90deg, rgba(255,255,255,0.10) 0, rgba(255,255,255,0.10) 1px, transparent 0, transparent 20px)',
    backgroundSize: '20px 20px',
  },
  blue: {
    backgroundImage:
      'repeating-linear-gradient(0deg, rgba(255,255,255,0.10) 0, rgba(255,255,255,0.10) 1px, transparent 0, transparent 16px)',
    backgroundSize: '100% 16px',
  },
  rose: {
    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.16) 2px, transparent 2px)',
    backgroundSize: '28px 28px',
  },
};

type CardVariant = 'light' | 'dark' | 'subtle' | 'glass' | 'bento' | 'featured';
type CardPadding = 'none' | 'sm' | 'md' | 'lg';

interface CardProps {
  variant?: CardVariant;
  padding?: CardPadding;
  hoverable?: boolean;
  // bento variant only
  color?: BentoColor;
  // dark variant: show ambient glow blobs
  glow?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const paddingMap: Record<CardPadding, string> = {
  none: '',
  sm:   'p-4',
  md:   'p-6',
  lg:   'p-8',
};

export function Card({
  variant = 'light',
  padding = 'md',
  hoverable = false,
  color = 'purple',
  glow = false,
  className,
  style,
  children,
}: CardProps) {
  const base = 'relative overflow-hidden rounded-[var(--radius-xl)]'; // outermost card — 20px max

  if (variant === 'bento') {
    const cfg = colors.bento[color];
    return (
      <div
        className={clsx(base, paddingMap[padding], hoverable && 'transition-transform duration-300 hover:-translate-y-1', className)}
        style={{
          background: cfg.bg,
          border: `1px solid ${cfg.border}`,
          ...style,
        }}
      >
        {/* Pattern overlay */}
        <div className="pointer-events-none absolute inset-0" style={bentoPatterns[color]} />
        <div className="relative">{children}</div>
      </div>
    );
  }

  if (variant === 'dark') {
    return (
      <div
        className={clsx(base, paddingMap[padding], hoverable && 'transition-transform duration-300 hover:-translate-y-1', className)}
        style={{ background: 'var(--bg-dark-card)', border: '1px solid var(--border-dark)', boxShadow: 'var(--shadow-dark)', ...style }}
      >
        {/* Dot grid texture */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        {glow && (
          <>
            <div
              className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(124,59,237,0.25) 0%, transparent 70%)' }}
            />
            <div
              className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(0,197,102,0.15) 0%, transparent 70%)' }}
            />
          </>
        )}
        <div className="relative">{children}</div>
      </div>
    );
  }

  if (variant === 'glass') {
    return (
      <div
        className={clsx(
          base,
          paddingMap[padding],
          'backdrop-blur-xl',
          hoverable && 'transition-all duration-300 hover:-translate-y-1',
          className
        )}
        style={{
          background: 'rgba(255,255,255,0.10)',
          border: '1px solid rgba(255,255,255,0.18)',
          ...style,
        }}
      >
        {children}
      </div>
    );
  }

  if (variant === 'subtle') {
    return (
      <div
        className={clsx(
          base,
          paddingMap[padding],
          hoverable && 'transition-colors duration-200 hover:border-[var(--border-default)]',
          className
        )}
        style={{
          background: 'var(--bg-subtle)',
          border: '1px solid var(--border-subtle)',
          ...style,
        }}
      >
        {children}
      </div>
    );
  }

  // featured — partyverse technique: dark bg + noise grain + bottom gradient overlay
  if (variant === 'featured') {
    return (
      <div
        className={clsx(
          base,
          'noise-overlay card-depth-overlay',
          paddingMap[padding],
          hoverable && 'hover-lift',
          className
        )}
        style={{
          background: 'var(--bg-dark-card)',
          border: '1px solid var(--border-dark)',
          boxShadow: 'var(--shadow-dark)',
          ...style,
        }}
      >
        {children}
      </div>
    );
  }

  // light (default)
  return (
    <div
      className={clsx(
        base,
        paddingMap[padding],
        hoverable && 'transition-all duration-200 hover:shadow-[var(--shadow-lg)] hover:-translate-y-0.5',
        className
      )}
      style={{
        background: 'var(--bg-base)',
        border: '1px solid var(--border-subtle)',
        boxShadow: 'var(--shadow-md)',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
