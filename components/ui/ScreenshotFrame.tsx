import { clsx } from 'clsx';
import Image from 'next/image';

// Cutflow-inspired: in-app screenshots presented with minimal framing.
// The UI IS the marketing — no heavy device chrome.

interface ScreenshotFrameProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  // Optional floating badge (e.g. "Live", "New")
  badge?: string;
  badgeColor?: string;
  // Optional caption below
  caption?: string;
  // Surface determines frame treatment
  surface?: 'light' | 'dark';
  // Adds subtle inner border to separate screenshot from bg
  bordered?: boolean;
  className?: string;
  priority?: boolean;
}

export function ScreenshotFrame({
  src,
  alt,
  width,
  height,
  badge,
  badgeColor,
  caption,
  surface = 'light',
  bordered = true,
  className,
  priority,
}: ScreenshotFrameProps) {
  const isDark = surface === 'dark';

  return (
    <div className={clsx('flex flex-col gap-3', className)}>
      <div
        className="relative overflow-hidden rounded-[var(--radius-lg)]"
        style={{
          boxShadow: isDark ? 'var(--shadow-dark)' : 'var(--shadow-xl)',
          border: bordered
            ? isDark
              ? '1px solid rgba(255,255,255,0.10)'
              : '1px solid var(--border-subtle)'
            : undefined,
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="block w-full h-auto"
          priority={priority}
        />

        {/* Floating badge — top-right corner */}
        {badge && (
          <span
            className="absolute right-3 top-3 rounded-full px-2.5 py-1 text-xs font-semibold text-white"
            style={{
              background: badgeColor ?? 'var(--accent)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.20)',
            }}
          >
            {badge}
          </span>
        )}
      </div>

      {caption && (
        <p
          className={clsx(
            'text-center text-sm',
            isDark ? 'text-white/50' : 'text-[var(--text-muted)]'
          )}
        >
          {caption}
        </p>
      )}
    </div>
  );
}

// ── BrowserFrame ──────────────────────────────────────────────────────────────
// Minimal browser chrome — for web app screenshots that benefit from context.

interface BrowserFrameProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  url?: string;
  surface?: 'light' | 'dark';
  className?: string;
  priority?: boolean;
}

export function BrowserFrame({
  src,
  alt,
  width,
  height,
  url = 'app.varmply.com',
  surface = 'light',
  className,
  priority,
}: BrowserFrameProps) {
  const isDark = surface === 'dark';

  return (
    <div
      className={clsx('overflow-hidden rounded-[var(--radius-lg)]', className)}
      style={{
        border: isDark ? '1px solid rgba(255,255,255,0.12)' : '1px solid var(--border-subtle)',
        boxShadow: isDark ? 'var(--shadow-dark)' : 'var(--shadow-xl)',
      }}
    >
      {/* Minimal browser bar */}
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{
          background: isDark ? 'var(--bg-dark-raised)' : 'var(--bg-subtle)',
          borderBottom: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid var(--border-subtle)',
        }}
      >
        {/* Traffic lights */}
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
        </div>
        {/* URL bar */}
        <div
          className="mx-auto flex items-center gap-1.5 rounded-full px-3 py-1 text-xs"
          style={{
            background: isDark ? 'rgba(255,255,255,0.06)' : 'white',
            border: isDark ? '1px solid rgba(255,255,255,0.10)' : '1px solid var(--border-subtle)',
            color: isDark ? 'rgba(255,255,255,0.50)' : 'var(--text-muted)',
          }}
        >
          <LockIcon />
          {url}
        </div>
        <div className="w-11" />
      </div>

      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="block w-full h-auto"
        priority={priority}
      />
    </div>
  );
}

// ── BrowserWindow ─────────────────────────────────────────────────────────────
// Children-based browser frame — wraps live React components (not just images).

interface BrowserWindowProps {
  children: React.ReactNode;
  url?: string;
  surface?: 'light' | 'dark';
  className?: string;
  style?: React.CSSProperties;
}

export function BrowserWindow({
  children,
  url = 'app.varmply.com',
  surface = 'light',
  className,
  style,
}: BrowserWindowProps) {
  const isDark = surface === 'dark';

  return (
    <div
      className={clsx('overflow-hidden rounded-[var(--radius-lg)]', className)}
      style={{
        border: isDark ? '1px solid rgba(255,255,255,0.10)' : '1px solid var(--border-subtle)',
        boxShadow: isDark ? 'var(--shadow-dark)' : 'var(--shadow-xl)',
        ...style,
      }}
    >
      {/* Chrome bar */}
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{
          background: isDark ? 'var(--bg-dark-raised)' : 'var(--bg-subtle)',
          borderBottom: isDark ? '1px solid rgba(255,255,255,0.07)' : '1px solid var(--border-subtle)',
        }}
      >
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
        </div>
        <div
          className="mx-auto flex items-center gap-1.5 rounded-full px-3 py-1 text-xs"
          style={{
            background: isDark ? 'rgba(255,255,255,0.06)' : 'white',
            border: isDark ? '1px solid rgba(255,255,255,0.10)' : '1px solid var(--border-subtle)',
            color: isDark ? 'rgba(255,255,255,0.45)' : 'var(--text-muted)',
          }}
        >
          <LockIcon />
          {url}
        </div>
        <div className="w-11" />
      </div>

      {/* Content */}
      <div style={{ background: isDark ? 'var(--bg-dark-card)' : 'var(--bg-base)' }}>
        {children}
      </div>
    </div>
  );
}

function LockIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}
