'use client';

import Image from 'next/image';

type Item = {
  img: string;
  name: string;
  bg: string;
  left: string;
  sz: number;
  dur: number;
  del: number;
  contain?: boolean; // SVG logos: padded + contained vs. PNG 3D spheres: full-bleed
};

const ITEMS: Item[] = [
  { img: '/brand-icons/spotify.png',     name: 'Spotify',     bg: '#1DB954', left: '10%', sz: 42, dur: 8.0,  del: -3.0 },
  { img: '/brand-icons/apple-music.png', name: 'Apple Music', bg: '#FC3C44', left: '28%', sz: 45, dur: 9.5,  del: -1.5 },
  { img: '/brand-icons/soundcloud.png',  name: 'SoundCloud',  bg: '#FF5500', left: '48%', sz: 42, dur: 8.5,  del: -5.5 },
  { img: '/brand-icons/audiomack.svg',   name: 'Audiomack',   bg: '#FE6D00', left: '66%', sz: 45, dur: 10.0, del: -7.0, contain: true },
  { img: '/brand-icons/spotify.png',     name: 'Spotify',     bg: '#1DB954', left: '82%', sz: 42, dur: 9.0,  del: -2.5 },
  { img: '/brand-icons/apple-music.png', name: 'Apple Music', bg: '#FC3C44', left: '20%', sz: 43, dur: 8.8,  del: -6.0 },
  { img: '/brand-icons/soundcloud.png',  name: 'SoundCloud',  bg: '#FF5500', left: '57%', sz: 42, dur: 9.5,  del: -4.0 },
  { img: '/brand-icons/audiomack.svg',   name: 'Audiomack',   bg: '#FE6D00', left: '38%', sz: 43, dur: 8.2,  del: -1.0, contain: true },
  { img: '/brand-icons/spotify.png',     name: 'Spotify',     bg: '#1DB954', left: '74%', sz: 45, dur: 10.5, del: -8.0 },
  { img: '/brand-icons/apple-music.png', name: 'Apple Music', bg: '#FC3C44', left: '5%',  sz: 42, dur: 9.2,  del: -4.5 },
  { img: '/brand-icons/audiomack.svg',   name: 'Audiomack',   bg: '#FE6D00', left: '87%', sz: 42, dur: 9.8,  del: -6.5, contain: true },
];

export default function HomeHeroFallingIcons() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 15 }}
    >
      <style>{`
        @keyframes icon-rise {
          from { transform: translateY(0);       opacity: 0; }
          10%  {                                 opacity: 1; }
          75%  {                                 opacity: 1; }
          to   { transform: translateY(-900px);  opacity: 0; }
        }
      `}</style>

      {ITEMS.map((item, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            bottom: -60,
            left: item.left,
            width: item.sz,
            height: item.sz,
            borderRadius: Math.round(item.sz * 0.28),
            overflow: 'hidden',
            background: item.bg,
            boxShadow: '0 4px 18px rgba(0,0,0,0.32)',
            animation: `icon-rise ${item.dur}s linear ${item.del}s infinite`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {item.contain ? (
            <>
              <Image
                src={item.img}
                alt={item.name}
                width={Math.round(item.sz * 0.62)}
                height={Math.round(item.sz * 0.62)}
                className="object-contain relative z-10"
              />
              {/* Top-left specular highlight — mimics the baked light on the PNG spheres */}
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
            </>
          ) : (
            <Image
              src={item.img}
              alt={item.name}
              fill
              sizes="60px"
              className="object-cover"
            />
          )}
        </div>
      ))}
    </div>
  );
}
