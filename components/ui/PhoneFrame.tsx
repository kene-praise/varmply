'use client';

// iPhone 14 Pro mockup — sourced from Figma community file:
// https://www.figma.com/design/d3AoXecskdQXpTZRKVUPHO/
//
// Structure follows the Figma component exactly:
//   - Dark rounded body (#2c2c2c) with inner shadow at inset 0 0.98%
//   - Screen content at inset 1.94% 5.6% 2.46% 5.6%, clipped to screen path
//   - Buttons SVG overlay at inset 18.12% 0.46% 59.82% 0
//   - Front camera pill at inset 4.53% 38.49% 92.15% 36.18%
//
// Shadow is intentionally omitted — use the card background to give depth.

import { useId, useState, useEffect } from 'react';
import { clsx } from 'clsx';

interface PhoneFrameProps {
  children?: React.ReactNode;
  /** Scale via CSS transform — natural canvas stays at W×H */
  scale?: number;
  /** Override the natural canvas width — all derived values recompute from this */
  frameWidth?: number;
  /** Background visible before / behind children (default #000) */
  screenBg?: string;
  className?: string;
  style?: React.CSSProperties;
}

// Natural canvas — matches the Figma SVG aspect ratio 999:2173
const W = 320;

// Screen clip-path: the exact rounded-rect from the Figma mask path,
// normalised to objectBoundingBox (all coords ÷ 999 for x, ÷ 2173 for y).
const SCREEN_CLIP =
  'M0 0.05325C0 0.02382 0.05156 0 0.11516 0H0.88484C0.94844 0 1 0.02382 1 0.05325V0.94675C1 0.97618 0.94844 1 0.88484 1H0.11516C0.05156 1 0 0.97618 0 0.94675V0.05325Z';

// Derive a readable foreground colour from the screen background hex
function fgFromBg(bg: string): string {
  const hex = bg.replace('#', '');
  if (hex.length < 6) return '#ffffff';
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  // perceived luminance
  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return lum > 0.55 ? '#0F0F1A' : '#ffffff';
}

function StatusBar({ screenBg }: { screenBg: string }) {
  const [time, setTime] = useState(() =>
    new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })
  );
  const color = fgFromBg(screenBg);

  useEffect(() => {
    const fmt = () =>
      new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
    const id = setInterval(() => setTime(fmt()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 z-30 flex items-center justify-between"
      style={{ height: 60, paddingLeft: 22, paddingRight: 18 }}
    >
      {/* Time — left of dynamic island */}
      <span style={{ fontSize: 11.5, fontWeight: 700, color, letterSpacing: '-0.2px', fontVariantNumeric: 'tabular-nums' }}>
        {time}
      </span>

      {/* Network indicators — right of dynamic island */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 5.5 }}>
        {/* Signal bars */}
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
          <rect x="0"  y="8"  width="3" height="4"  rx="0.8" fill={color} opacity="1"   />
          <rect x="4.5" y="5.5" width="3" height="6.5" rx="0.8" fill={color} opacity="1"   />
          <rect x="9"  y="3"  width="3" height="9"  rx="0.8" fill={color} opacity="1"   />
          <rect x="13.5" y="0" width="2.5" height="12" rx="0.8" fill={color} opacity="0.3" />
        </svg>

        {/* WiFi */}
        <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
          <path d="M7.5 8.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"            fill={color} />
          <path d="M4.7 6.5a4.0 4.0 0 0 1 5.6 0"                       stroke={color} strokeWidth="1.4" strokeLinecap="round" fill="none"/>
          <path d="M2.2 4.1a7.2 7.2 0 0 1 10.6 0"                      stroke={color} strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.5"/>
        </svg>

        {/* Battery */}
        <svg width="22" height="11" viewBox="0 0 22 11" fill="none">
          <rect x="0.5" y="0.5" width="18" height="10" rx="2.5" stroke={color} strokeWidth="1" opacity="0.35"/>
          <rect x="1.5" y="1.5" width="14" height="8"  rx="1.8" fill={color} />
          <path d="M19.5 3.5v4a1.5 1.5 0 0 0 0-4Z"                    fill={color} opacity="0.4"/>
        </svg>
      </div>
    </div>
  );
}

export function PhoneFrame({
  children,
  scale,
  frameWidth,
  screenBg = '#000',
  className,
  style,
}: PhoneFrameProps) {
  const uid = useId();
  const clipId = `iphone-clip-${uid.replace(/:/g, '')}`;

  const fw = frameWidth ?? W;
  const fh = Math.round(fw * (2173 / 999));
  const bodyR = Math.round(130 * (fw / 999));
  const camR = Math.round(35.785 * (fw / 999));

  return (
    <div
      className={clsx('relative shrink-0 select-none', className)}
      style={{
        width: fw,
        height: fh,
        ...(scale !== undefined && {
          transform: `scale(${scale})`,
          transformOrigin: 'top center',
        }),
        ...style,
      }}
    >
      {/* ── Clip-path definition (hidden) ─────────────────────────── */}
      <svg
        aria-hidden
        style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
      >
        <defs>
          <clipPath id={clipId} clipPathUnits="objectBoundingBox">
            <path d={SCREEN_CLIP} />
          </clipPath>
        </defs>
      </svg>

      {/* ── Phone body — dark rounded rect ────────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          inset: '0 0.98%',
          borderRadius: bodyR,
          background: '#050505',
          boxShadow: 'inset 0px -5px 20px 0px #000, inset -10px 0px 24px -15px #000',
        }}
      />

      {/* ── Screen content — clipped to exact phone screen shape ──── */}
      <div
        className="absolute overflow-hidden"
        style={{
          top: '1.94%',
          left: '5.6%',
          right: '5.6%',
          bottom: '2.46%',
          clipPath: `url(#${clipId})`,
          background: screenBg,
        }}
      >
        <StatusBar screenBg={screenBg} />
        {children}
      </div>

      {/* ── Side buttons SVG ──────────────────────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          top: '18.12%',
          left: 0,
          right: '0.46%',
          bottom: '59.82%',
          overflow: 'visible',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt=""
          src="/mockups/iphone-buttons.svg"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: 'block',
            maxWidth: 'none',
            overflow: 'visible',
          }}
        />
      </div>

      {/* ── Front camera pill ─────────────────────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute z-20"
        style={{
          top: '4.53%',
          left: '36.18%',
          right: '38.49%',
          bottom: '92.15%',
          borderRadius: camR,
          background: '#000',
        }}
      />
    </div>
  );
}
