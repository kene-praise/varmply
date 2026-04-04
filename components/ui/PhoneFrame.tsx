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

import { useId } from 'react';
import { clsx } from 'clsx';

interface PhoneFrameProps {
  children?: React.ReactNode;
  /** Scale via CSS transform — natural canvas stays at W×H */
  scale?: number;
  /** Background visible before / behind children (default #000) */
  screenBg?: string;
  className?: string;
  style?: React.CSSProperties;
}

// Natural canvas — matches the Figma SVG aspect ratio 999:2173
const W = 320;
const H = Math.round(W * (2173 / 999)); // ≈ 696

// Body border-radius: tuned down from Figma's 172 units so the outer curve
// visually matches the inner screen clip radius (~33px) + bezel gap.
const BODY_R = Math.round(130 * (W / 999)); // ≈ 42px

// Front-camera border-radius: 35.785 figma units → scaled
const CAM_R = Math.round(35.785 * (W / 999)); // ≈ 11px

// Screen clip-path: the exact rounded-rect from the Figma mask path,
// normalised to objectBoundingBox (all coords ÷ 999 for x, ÷ 2173 for y).
const SCREEN_CLIP =
  'M0 0.05325C0 0.02382 0.05156 0 0.11516 0H0.88484C0.94844 0 1 0.02382 1 0.05325V0.94675C1 0.97618 0.94844 1 0.88484 1H0.11516C0.05156 1 0 0.97618 0 0.94675V0.05325Z';

export function PhoneFrame({
  children,
  scale,
  screenBg = '#000',
  className,
  style,
}: PhoneFrameProps) {
  const uid = useId();
  const clipId = `iphone-clip-${uid.replace(/:/g, '')}`;

  return (
    <div
      className={clsx('relative shrink-0 select-none', className)}
      style={{
        width: W,
        height: H,
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
          borderRadius: BODY_R,
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
          borderRadius: CAM_R,
          background: '#000',
        }}
      />
    </div>
  );
}
