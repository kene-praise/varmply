import { clsx } from 'clsx';
import Image from 'next/image';

type PersonCardSize = 'sm' | 'md' | 'lg';

type Platform = 'instagram' | 'tiktok' | 'youtube' | 'twitter' | 'x';

interface PersonCardProps {
  name: string;
  handle: string;
  platform?: Platform;
  metric?: string;           // e.g. "48K followers"
  metricLabel?: string;      // e.g. "followers"
  avatarSrc?: string;
  // Pass a video src for animated creator preview (influence.framer.media style)
  videoSrc?: string;
  size?: PersonCardSize;
  surface?: 'light' | 'dark';
  className?: string;
}

const platformColors: Record<Platform, string> = {
  instagram: '#E1306C',
  tiktok: '#000000',
  youtube: '#FF0000',
  twitter: '#1DA1F2',
  x: '#000000',
};

const platformLabels: Record<Platform, string> = {
  instagram: 'Instagram',
  tiktok: 'TikTok',
  youtube: 'YouTube',
  twitter: 'Twitter',
  x: 'X',
};

const sizeConfig: Record<PersonCardSize, { avatar: number; name: string; handle: string; metric: string }> = {
  sm: { avatar: 36, name: 'text-sm font-semibold', handle: 'text-xs', metric: 'text-xs' },
  md: { avatar: 48, name: 'text-base font-semibold', handle: 'text-sm', metric: 'text-sm' },
  lg: { avatar: 64, name: 'text-lg font-bold', handle: 'text-sm', metric: 'text-base font-semibold' },
};

export function PersonCard({
  name,
  handle,
  platform,
  metric,
  metricLabel,
  avatarSrc,
  videoSrc,
  size = 'md',
  surface = 'light',
  className,
}: PersonCardProps) {
  const cfg = sizeConfig[size];
  const isDark = surface === 'dark';

  return (
    <div className={clsx('flex items-center gap-3', className)}>
      {/* Avatar — circle crop, optional video loop */}
      <div
        className="relative shrink-0 overflow-hidden rounded-full bg-[var(--bg-muted)]"
        style={{ width: cfg.avatar, height: cfg.avatar }}
      >
        {videoSrc ? (
          <video
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : avatarSrc ? (
          <Image
            src={avatarSrc}
            alt={name}
            fill
            className="object-cover"
            sizes={`${cfg.avatar}px`}
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center font-bold text-white"
            style={{ background: 'var(--accent)', fontSize: cfg.avatar * 0.35 }}
          >
            {name.charAt(0).toUpperCase()}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className={clsx(cfg.name, isDark ? 'text-white' : 'text-[var(--text-primary)]')}>
            {name}
          </span>
          {platform && (
            <span
              className="rounded-full px-1.5 py-0.5 text-[10px] font-semibold text-white"
              style={{ background: platformColors[platform] }}
            >
              {platformLabels[platform]}
            </span>
          )}
        </div>
        <p className={clsx(cfg.handle, 'truncate', isDark ? 'text-white/50' : 'text-[var(--text-muted)]')}>
          @{handle}
        </p>
        {metric && (
          <p className={clsx(cfg.metric, 'mt-0.5', isDark ? 'text-[var(--money-green)]' : 'text-[var(--status-green)]')}>
            {metric}
            {metricLabel && (
              <span className={isDark ? 'text-white/40' : 'text-[var(--text-muted)]'}> {metricLabel}</span>
            )}
          </p>
        )}
      </div>
    </div>
  );
}

// ── CreatorCard ───────────────────────────────────────────────────────────────
// Full card version — for bento grids and testimonial sections (jeton/influence style)

interface CreatorCardProps extends PersonCardProps {
  quote?: string;
  engagement?: string;
}

export function CreatorCard({ quote, engagement, ...personProps }: CreatorCardProps) {
  const isDark = personProps.surface === 'dark';

  return (
    <div
      className={clsx(
        'rounded-[var(--radius-lg)] p-5',
        isDark
          ? 'bg-[var(--bg-dark-card)] border border-[var(--border-dark)]'
          : 'bg-white border border-[var(--border-subtle)] shadow-[var(--shadow-md)]'
      )}
    >
      <PersonCard {...personProps} />
      {quote && (
        <p
          className={clsx(
            'mt-4 text-sm leading-relaxed',
            isDark ? 'text-white/60' : 'text-[var(--text-secondary)]'
          )}
        >
          &ldquo;{quote}&rdquo;
        </p>
      )}
      {engagement && (
        <div className="mt-4 pt-4" style={{ borderTop: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid var(--border-subtle)' }}>
          <p className={clsx('text-xs font-medium', isDark ? 'text-white/40' : 'text-[var(--text-muted)]')}>
            Engagement
          </p>
          <p className={clsx('text-lg font-bold', isDark ? 'text-[var(--money-green)]' : 'text-[var(--status-green)]')}>
            {engagement}
          </p>
        </div>
      )}
    </div>
  );
}
