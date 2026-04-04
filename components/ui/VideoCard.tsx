'use client';

// Cutflow-inspired media presentation:
// Clean rounded frames, floating metric chips, gradient overlays, autoplay loops.
// Used for creator content previews, platform post samples, and campaign demos.

import { clsx } from 'clsx';
import Image from 'next/image';
import { Play, Volume2, VolumeX } from 'lucide-react';
import { useState, useRef } from 'react';

// ── FloatingChip ─────────────────────────────────────────────────────────────
// Small pill that overlays on media — metric, label, status

interface FloatingChipProps {
  children: React.ReactNode;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  variant?: 'dark' | 'light' | 'accent' | 'green';
  className?: string;
}

const chipPositions = {
  'top-left': 'top-3 left-3',
  'top-right': 'top-3 right-3',
  'bottom-left': 'bottom-3 left-3',
  'bottom-right': 'bottom-3 right-3',
};

const chipVariants = {
  dark: { background: 'rgba(7,7,26,0.80)', color: 'rgba(255,255,255,0.90)', backdropFilter: 'blur(8px)' },
  light: { background: 'rgba(255,255,255,0.90)', color: '#0F0F1A', backdropFilter: 'blur(8px)' },
  accent: { background: '#7C3BED', color: '#FFFFFF', backdropFilter: 'none' },
  green: { background: '#00A050', color: '#FFFFFF', backdropFilter: 'none' },
};

export function FloatingChip({
  children,
  position = 'top-left',
  variant = 'dark',
  className,
}: FloatingChipProps) {
  return (
    <div
      className={clsx(
        'absolute z-10 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold',
        chipPositions[position],
        className
      )}
      style={chipVariants[variant]}
    >
      {children}
    </div>
  );
}

// ── VideoCard ─────────────────────────────────────────────────────────────────

type AspectRatio = '16/9' | '9/16' | '4/5' | '1/1' | '3/2' | '3/4';

interface VideoCardProps {
  // Pass either src (video) or imageSrc (static)
  src?: string;
  imageSrc?: string;
  imageAlt?: string;
  poster?: string;                // video poster frame
  aspectRatio?: AspectRatio;
  // Overlay chips — pass an array to stack multiple
  chips?: Array<{
    label: React.ReactNode;
    position: FloatingChipProps['position'];
    variant?: FloatingChipProps['variant'];
  }>;
  // Bottom gradient overlay with text
  caption?: string;
  subcaption?: string;
  showGradient?: boolean;
  // Controls
  autoPlay?: boolean;
  showMuteToggle?: boolean;
  showPlayButton?: boolean;       // show large centered play button (non-autoplay)
  surface?: 'light' | 'dark';
  hoverable?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const aspectRatioMap: Record<AspectRatio, string> = {
  '16/9': 'aspect-video',
  '9/16': 'aspect-[9/16]',
  '4/5': 'aspect-[4/5]',
  '1/1': 'aspect-square',
  '3/2': 'aspect-[3/2]',
  '3/4': 'aspect-[3/4]',
};

export function VideoCard({
  src,
  imageSrc,
  imageAlt = '',
  poster,
  aspectRatio = '16/9',
  chips = [],
  caption,
  subcaption,
  showGradient = true,
  autoPlay = true,
  showMuteToggle = false,
  showPlayButton = false,
  surface = 'light',
  hoverable = false,
  className,
  style,
}: VideoCardProps) {
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const isDark = surface === 'dark';

  return (
    <div
      className={clsx(
        'relative overflow-hidden rounded-[var(--radius-lg)]',
        aspectRatioMap[aspectRatio],
        hoverable && 'hover-lift cursor-pointer',
        className
      )}
      style={{
        boxShadow: isDark ? 'var(--shadow-dark)' : 'var(--shadow-xl)',
        border: isDark
          ? '1px solid rgba(255,255,255,0.10)'
          : '1px solid var(--border-subtle)',
        ...style,
      }}
    >
      {/* Media layer */}
      {src ? (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay={autoPlay}
          muted={muted}
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : imageSrc ? (
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          quality={90}
        />
      ) : (
        // Placeholder when no media supplied
        <div className="absolute inset-0 bg-[var(--bg-muted)]" />
      )}

      {/* Bottom gradient overlay */}
      {showGradient && (caption || subcaption) && (
        <div
          className="absolute inset-x-0 bottom-0 px-4 pb-4 pt-12"
          style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.65) 100%)' }}
        >
          {caption && (
            <p className="text-sm font-semibold leading-tight text-white">{caption}</p>
          )}
          {subcaption && (
            <p className="mt-0.5 text-xs text-white/70">{subcaption}</p>
          )}
        </div>
      )}

      {/* Floating chips */}
      {chips.map((chip, i) => (
        <FloatingChip key={i} position={chip.position} variant={chip.variant ?? 'dark'}>
          {chip.label}
        </FloatingChip>
      ))}

      {/* Centered play button overlay */}
      {showPlayButton && !autoPlay && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="flex h-14 w-14 items-center justify-center rounded-full"
            style={{ background: 'rgba(255,255,255,0.90)', backdropFilter: 'blur(8px)' }}
          >
            <Play size={22} className="ml-1 text-[var(--text-primary)]" fill="currentColor" />
          </div>
        </div>
      )}

      {/* Mute toggle */}
      {showMuteToggle && src && (
        <button
          type="button"
          onClick={() => setMuted((m) => !m)}
          className="absolute bottom-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full transition-opacity hover:opacity-80"
          style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)' }}
          aria-label={muted ? 'Unmute' : 'Mute'}
        >
          {muted
            ? <VolumeX size={14} color="white" />
            : <Volume2 size={14} color="white" />}
        </button>
      )}
    </div>
  );
}

// ── MediaGrid ─────────────────────────────────────────────────────────────────
// Asymmetric 2–3 item media grid — cutflow's signature layout

interface MediaGridProps {
  items: Array<Omit<VideoCardProps, 'className' | 'style'>>;
  layout?: 'featured-left' | 'featured-right' | 'equal' | 'tall-left';
  gap?: 'sm' | 'md';
  surface?: 'light' | 'dark';
  className?: string;
}

export function MediaGrid({
  items,
  layout = 'featured-left',
  gap = 'md',
  surface = 'light',
  className,
}: MediaGridProps) {
  const gapClass = gap === 'sm' ? 'gap-2' : 'gap-3';

  if (layout === 'equal') {
    return (
      <div className={clsx('grid grid-cols-2', gapClass, className)}>
        {items.slice(0, 2).map((item, i) => (
          <VideoCard key={i} {...item} surface={surface} aspectRatio="4/5" hoverable />
        ))}
      </div>
    );
  }

  if (layout === 'tall-left') {
    // Left col tall (9/16), right col two stacked squares
    return (
      <div className={clsx('grid grid-cols-2', gapClass, className)}>
        <VideoCard {...items[0]} surface={surface} aspectRatio="9/16" hoverable />
        <div className={clsx('flex flex-col', gapClass)}>
          {items.slice(1, 3).map((item, i) => (
            <VideoCard key={i} {...item} surface={surface} aspectRatio="1/1" hoverable />
          ))}
        </div>
      </div>
    );
  }

  // featured-left / featured-right: large + small stack
  const [featured, ...rest] = layout === 'featured-right' ? [...items].reverse() : items;
  const isRight = layout === 'featured-right';

  return (
    <div className={clsx('grid grid-cols-3', gapClass, className)}>
      <div className={clsx('col-span-2', isRight && 'order-last')}>
        <VideoCard {...featured} surface={surface} aspectRatio="3/4" hoverable />
      </div>
      <div className={clsx('flex flex-col', gapClass)}>
        {rest.slice(0, 2).map((item, i) => (
          <VideoCard key={i} {...item} surface={surface} aspectRatio="1/1" hoverable className="flex-1" />
        ))}
      </div>
    </div>
  );
}
