import { clsx } from 'clsx';

// Campaign status badges
export type StatusBadgeType =
  | 'eligible'
  | 'not-eligible'
  | 'joined'
  | 'closed'
  | 'active'
  | 'pending'
  | 'failed';

// General category/pill badges
export type CategoryBadgeType = 'default' | 'accent';

const statusConfig: Record<
  StatusBadgeType,
  { label: string; bg: string; text: string; dot: string }
> = {
  eligible: {
    label: 'Eligible',
    bg: 'bg-[#F0FDF4]',
    text: 'text-[#16A34A]',
    dot: 'bg-[#16A34A]',
  },
  'not-eligible': {
    label: 'Not Eligible',
    bg: 'bg-[var(--bg-muted)]',
    text: 'text-[var(--text-muted)]',
    dot: 'bg-[var(--text-muted)]',
  },
  joined: {
    label: 'Joined',
    bg: 'bg-[var(--accent-light)]',
    text: 'text-[var(--accent)]',
    dot: 'bg-[var(--accent)]',
  },
  closed: {
    label: 'Closed',
    bg: 'bg-[#FFFBEB]',
    text: 'text-[#D97706]',
    dot: 'bg-[#D97706]',
  },
  active: {
    label: 'Active',
    bg: 'bg-[#E6FFF4]',
    text: 'text-[#00A855]',
    dot: 'bg-[#00C566]',
  },
  pending: {
    label: 'Pending',
    bg: 'bg-[#FFFBEB]',
    text: 'text-[#D97706]',
    dot: 'bg-[#D97706]',
  },
  failed: {
    label: 'Failed',
    bg: 'bg-[#FEF2F2]',
    text: 'text-[#DC2626]',
    dot: 'bg-[#DC2626]',
  },
};

interface StatusBadgeProps {
  status: StatusBadgeType;
  showDot?: boolean;
  className?: string;
}

export function StatusBadge({ status, showDot = true, className }: StatusBadgeProps) {
  const cfg = statusConfig[status];
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold',
        cfg.bg,
        cfg.text,
        className
      )}
    >
      {showDot && <span className={clsx('h-1.5 w-1.5 rounded-full', cfg.dot)} />}
      {cfg.label}
    </span>
  );
}

interface CategoryBadgeProps {
  children: React.ReactNode;
  type?: CategoryBadgeType;
  className?: string;
}

export function CategoryBadge({ children, type = 'default', className }: CategoryBadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide',
        type === 'accent'
          ? 'bg-[var(--accent-light)] text-[var(--accent)]'
          : 'bg-[var(--bg-muted)] text-[var(--text-secondary)]',
        className
      )}
    >
      {children}
    </span>
  );
}

// Partyverse-style neon lime highlight badge — slight tilt, vivid
interface HighlightBadgeProps {
  children: React.ReactNode;
  tilt?: boolean;
  className?: string;
}

export function HighlightBadge({ children, tilt = true, className }: HighlightBadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold',
        tilt && '-rotate-1',
        className
      )}
      style={{
        background: '#85ED91',
        color: '#0A2B0E',
      }}
    >
      {children}
    </span>
  );
}

// On-dark variant — for use inside dark/bento cards
interface DarkBadgeProps {
  children: React.ReactNode;
  color?: string; // e.g. var(--bento-green-accent)
  className?: string;
}

export function DarkBadge({ children, color, className }: DarkBadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold',
        className
      )}
      style={{
        background: color ? `${color}22` : 'rgba(255,255,255,0.10)',
        color: color ?? 'rgba(255,255,255,0.80)',
        border: `1px solid ${color ? `${color}44` : 'rgba(255,255,255,0.15)'}`,
      }}
    >
      {children}
    </span>
  );
}
