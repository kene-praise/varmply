// LaunchFolio-inspired work history timeline.
// Large company name on the left, role + period right-aligned.
// Clean divider between rows, monospaced index, hover shift.

import { clsx } from 'clsx';

export interface WorkEntry {
  company: string;
  role: string;
  period: string;
  /** Optional short descriptor shown below company name */
  descriptor?: string;
}

interface WorkHistoryProps {
  entries: WorkEntry[];
  surface?: 'light' | 'dark';
  /** Show numbered index (01, 02…) — default true */
  showIndex?: boolean;
  className?: string;
}

export function WorkHistory({
  entries,
  surface = 'light',
  showIndex = true,
  className,
}: WorkHistoryProps) {
  const isDark = surface === 'dark';
  const divider = isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)';

  return (
    <div className={clsx('w-full', className)}>
      {/* Top border */}
      <div style={{ borderTop: `1px solid ${divider}` }} />

      {entries.map((entry, i) => (
        <div
          key={i}
          className="group flex items-center gap-5 py-5 transition-colors duration-150"
          style={{ borderBottom: `1px solid ${divider}` }}
        >
          {/* Index */}
          {showIndex && (
            <span
              className="w-6 shrink-0 font-mono text-[11px] leading-none tabular-nums"
              style={{ color: isDark ? 'rgba(255,255,255,0.22)' : 'rgba(0,0,0,0.22)' }}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
          )}

          {/* Company */}
          <div className="min-w-0 flex-1">
            <p
              className="truncate text-[2rem] font-bold leading-none tracking-tight transition-colors duration-150 group-hover:opacity-80"
              style={{ color: isDark ? '#FFFFFF' : 'var(--text-primary)' }}
            >
              {entry.company}
            </p>
            {entry.descriptor && (
              <p
                className="mt-1 text-xs"
                style={{ color: isDark ? 'rgba(255,255,255,0.35)' : 'var(--text-muted)' }}
              >
                {entry.descriptor}
              </p>
            )}
          </div>

          {/* Role + period */}
          <div className="shrink-0 text-right">
            <p
              className="text-sm font-medium leading-tight"
              style={{ color: isDark ? 'rgba(255,255,255,0.60)' : 'var(--text-secondary)' }}
            >
              {entry.role}
            </p>
            <p
              className="mt-1 font-mono text-[11px] tabular-nums"
              style={{ color: isDark ? 'rgba(255,255,255,0.28)' : 'var(--text-muted)' }}
            >
              {entry.period}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
