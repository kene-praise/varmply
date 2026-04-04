// Typed design token constants for use in inline styles, Framer Motion, and GSAP.
// Source of truth lives in app/globals.css — keep in sync.

export const colors = {
  // Brand
  accent: '#7C3BED',
  accentHover: '#6B28D9',
  accentSoft: '#9D6FF5',
  accentLight: '#EDE9FF',
  accentGlow: 'rgba(124,59,237,0.12)',

  // Text
  textPrimary: '#0F0F1A',
  textSecondary: '#4A4A6A',
  textMuted: '#8888AA',

  // Light surfaces
  bgBase: '#FFFFFF',
  bgSubtle: '#F7F7F9',
  bgMuted: '#F0F0F4',
  borderSubtle: '#E4E4EC',
  borderDefault: '#D1D1DE',

  // Dark surfaces
  bgDark: '#07071A',
  bgDarkCard: '#0D0D2B',
  bgDarkRaised: '#13132E',
  borderDark: 'rgba(255,255,255,0.10)',
  borderDarkSubtle: 'rgba(255,255,255,0.06)',
  textOnDark: 'rgba(255,255,255,0.92)',
  textOnDarkMuted: 'rgba(255,255,255,0.60)',
  textOnDarkFaint: 'rgba(255,255,255,0.35)',

  // Money / earnings
  moneyGreen: '#00C566',
  moneyGreenHover: '#00A855',
  moneyGreenBg: '#E6FFF4',
  moneyGreenDark: '#002E18',

  // Status
  statusGreen: '#16A34A',
  statusGreenBg: '#F0FDF4',
  statusAmber: '#D97706',
  statusAmberBg: '#FFFBEB',
  statusRed: '#DC2626',
  statusRedBg: '#FEF2F2',

  // Partyverse-inspired accents
  highlight: '#85ED91',        // neon lime — success callouts, tags
  highlightDark: '#1A3D1F',
  accentOrange: '#FF662E',
  accentOrangeHover: '#EB521A',
  accentOrangeBg: '#FFF0EB',

  // Bento card palette — vibrant solid backgrounds (pocketapp style)
  bento: {
    purple: { bg: '#7C3BED', accent: '#FFFFFF', border: 'rgba(255,255,255,0.18)' },
    green:  { bg: '#00A050', accent: '#FFFFFF', border: 'rgba(255,255,255,0.18)' },
    amber:  { bg: '#D97706', accent: '#FFFFFF', border: 'rgba(255,255,255,0.18)' },
    blue:   { bg: '#2563EB', accent: '#FFFFFF', border: 'rgba(255,255,255,0.18)' },
    rose:   { bg: '#E11D48', accent: '#FFFFFF', border: 'rgba(255,255,255,0.18)' },
  },
} as const;

export const radii = {
  xs: '4px',
  sm: '6px',
  md: '10px',
  lg: '16px',
  xl: '24px',
  '2xl': '32px',
  full: '9999px',
} as const;

export const shadows = {
  sm: '0 2px 8px rgba(15,15,26,0.06), 0 1px 2px rgba(15,15,26,0.04)',
  md: '0 8px 24px rgba(15,15,26,0.08), 0 2px 6px rgba(15,15,26,0.04)',
  lg: '0 16px 48px rgba(15,15,26,0.10), 0 4px 12px rgba(15,15,26,0.05)',
  xl: '0 24px 64px rgba(15,15,26,0.12), 0 8px 24px rgba(15,15,26,0.06)',
  purple: '0 8px 32px rgba(124,59,237,0.22)',
  green: '0 8px 32px rgba(0,197,102,0.22)',
  dark: '0 24px 64px rgba(0,0,0,0.40), 0 8px 24px rgba(0,0,0,0.25)',
} as const;

export const easings = {
  spring: [0.16, 1, 0.3, 1] as const,          // Varmply standard
  bounce: [0.215, 0.61, 0.355, 1] as const,     // jeton-inspired
  smooth: [0.3, 1, 0.7, 1] as const,            // partyverse — silky decelerate
} as const;

export const durations = {
  fast: 0.3,
  base: 0.5,
  slow: 0.8,
  xslow: 1.2,
} as const;

export type BentoColor = keyof typeof colors.bento;
