'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

interface DomeGalleryProps {
  images?: string[];
  fit?: number;
  minRadius?: number;
  maxVerticalRotationDeg?: number;
  segments?: number;
  dragDampening?: number;
  grayscale?: boolean;
  className?: string;
}

const DEFAULT_IMAGES = Array.from({ length: 34 }, (_, i) =>
  `https://picsum.photos/seed/${i + 1}/200/200`
);

export default function DomeGallery({
  images = DEFAULT_IMAGES,
  fit = 0.8,
  minRadius = 600,
  maxVerticalRotationDeg = 0,
  segments = 34,
  dragDampening = 2,
  grayscale = false,
  className = '',
}: DomeGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef(0);
  const targetRotationRef = useRef(0);
  const dragStartRef = useRef<{ x: number; rotation: number } | null>(null);
  const rafRef = useRef<number>(0);
  const [rotation, setRotation] = useState(0);

  const imgList = images.slice(0, segments);
  const count = imgList.length;

  const animate = useCallback(() => {
    const diff = targetRotationRef.current - rotationRef.current;
    rotationRef.current += diff / dragDampening;
    setRotation(rotationRef.current);
    rafRef.current = requestAnimationFrame(animate);
  }, [dragDampening]);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [animate]);

  const onPointerDown = (e: React.PointerEvent) => {
    dragStartRef.current = { x: e.clientX, rotation: targetRotationRef.current };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragStartRef.current) return;
    const delta = e.clientX - dragStartRef.current.x;
    targetRotationRef.current = dragStartRef.current.rotation + delta * 0.4;
  };

  const onPointerUp = () => { dragStartRef.current = null; };

  const cardW = Math.round((2 * Math.PI * minRadius * fit) / count);
  const cardH = Math.round(cardW * 1.3);
  const angleStep = (2 * Math.PI) / count;

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ width: '100%', height: '100%', perspective: minRadius * 2, perspectiveOrigin: '50% 50%', overflow: 'hidden', cursor: 'grab', userSelect: 'none' }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      <div style={{ width: '100%', height: '100%', position: 'relative', transformStyle: 'preserve-3d', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {imgList.map((src, i) => {
          const angle = angleStep * i + (rotation * Math.PI) / 180;
          const x = Math.sin(angle) * minRadius;
          const z = Math.cos(angle) * minRadius;
          const rotY = (angle * 180) / Math.PI;
          const maxV = maxVerticalRotationDeg;
          const rotX = maxV > 0 ? Math.sin(angle * 2) * maxV : 0;

          return (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: cardW,
                height: cardH,
                transform: `translate3d(${x}px, 0, ${z}px) rotateY(${rotY}deg) rotateX(${rotX}deg)`,
                borderRadius: 12,
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  filter: grayscale ? 'grayscale(1)' : 'none',
                  pointerEvents: 'none',
                }}
                draggable={false}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
