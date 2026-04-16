'use client';

type Item = {
  type: 'heart' | 'comment' | 'share' | 'fire' | 'bookmark';
  bg: string;
  right: string;
  sz: number;
  dur: number;
  del: number;
  drift: number;
};

const ITEMS: Item[] = [
  { type: 'heart',    bg: '#FF2D55', right: '12%', sz: 42, dur: 8.0,  del: -2.0, drift: 24 },
  { type: 'comment',  bg: '#3B82F6', right: '15%', sz: 45, dur: 9.5,  del: -5.5, drift: 18 },
  { type: 'share',    bg: '#10B981', right: '9%',  sz: 42, dur: 8.5,  del: -1.0, drift: 28 },
  { type: 'fire',     bg: '#F97316', right: '14%', sz: 45, dur: 10.0, del: -7.0, drift: 15 },
  { type: 'heart',    bg: '#FF2D55', right: '11%', sz: 42, dur: 9.0,  del: -3.5, drift: 22 },
  { type: 'bookmark', bg: '#8B5CF6', right: '16%', sz: 43, dur: 8.8,  del: -6.0, drift: 20 },
  { type: 'comment',  bg: '#3B82F6', right: '10%', sz: 42, dur: 9.5,  del: -4.0, drift: 25 },
  { type: 'share',    bg: '#10B981', right: '13%', sz: 43, dur: 8.2,  del: -1.5, drift: 19 },
  { type: 'heart',    bg: '#FF2D55', right: '15%', sz: 45, dur: 10.5, del: -8.0, drift: 26 },
  { type: 'fire',     bg: '#F97316', right: '8%',  sz: 42, dur: 9.2,  del: -4.5, drift: 21 },
  { type: 'bookmark', bg: '#8B5CF6', right: '14%', sz: 42, dur: 9.8,  del: -6.5, drift: 17 },
];

function IconSvg({ type, size }: { type: Item['type']; size: number }) {
  const s = Math.round(size * 0.52);
  switch (type) {
    case 'heart':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="white">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      );
    case 'comment':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="white">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      );
    case 'share':
      // Paper plane icon
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 2L11 13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      );
    case 'fire':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="white">
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
        </svg>
      );
    case 'bookmark':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="white">
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
        </svg>
      );
  }
}

export default function CreatorHeroRisingIcons() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 15 }}
    >
      <style>{`
        @keyframes engagement-rise {
          from { transform: translateY(0);      opacity: 0; }
          10%  {                                opacity: 1; }
          75%  {                                opacity: 1; }
          to   { transform: translateY(-750px); opacity: 0; }
        }
        @keyframes icon-sway {
          0%   { margin-left: 0px; }
          25%  { margin-left: calc(var(--drift) * 1px); }
          50%  { margin-left: 0px; }
          75%  { margin-left: calc(var(--drift) * -1px); }
          100% { margin-left: 0px; }
        }
      `}</style>

      {ITEMS.map((item, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            bottom: -60,
            right: item.right,
            width: item.sz,
            height: item.sz,
            borderRadius: Math.round(item.sz * 0.28),
            overflow: 'hidden',
            background: item.bg,
            boxShadow: '0 4px 18px rgba(0,0,0,0.32)',
            animation: `engagement-rise ${item.dur}s linear ${item.del}s infinite, icon-sway ${item.dur * 0.4}s ease-in-out ${item.del}s infinite`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            ...({ '--drift': item.drift } as any),
          }}
        >
          <IconSvg type={item.type} size={item.sz} />
          {/* 3D specular lighting overlay — mimics baked light */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: [
                'radial-gradient(circle at 32% 26%, rgba(255,255,255,0.52) 0%, rgba(255,255,255,0.14) 38%, transparent 60%)',
                'radial-gradient(circle at 72% 78%, rgba(0,0,0,0.22) 0%, transparent 45%)',
              ].join(', '),
              pointerEvents: 'none',
              zIndex: 20,
            }}
          />
        </div>
      ))}
    </div>
  );
}

