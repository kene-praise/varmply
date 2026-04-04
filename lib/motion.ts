export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export const fadeRight = {
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: 28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const staggerContainerSlow = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export const viewportOptions = {
  once: true,
  margin: '-80px',
};

// jeton-inspired easing — slightly bouncier
const bounceEase = [0.215, 0.61, 0.355, 1] as const;

export const revealUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: bounceEase },
  },
};

export const popIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: bounceEase },
  },
};

// Word-by-word split reveal — apply to each word wrapped in a motion.span
export const splitWord = {
  hidden: { opacity: 0, y: '100%' },
  visible: {
    opacity: 1,
    y: '0%',
    transition: { duration: 0.5, ease: bounceEase },
  },
};

export const splitWordContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

// partyverse easing — silky decelerate
const smoothEase = [0.3, 1, 0.7, 1] as const;

// Slide up — for modals, drawers, bottom sheets
export const slideUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: smoothEase },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.25, ease: smoothEase },
  },
};

// Tilt-in from slight angle — partyverse card entrance
export const tiltIn = {
  hidden: { opacity: 0, scale: 0.96, rotate: -1.5 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.55, ease: smoothEase },
  },
};

// Brightness pulse — partyverse hover hint (wrap with whileHover)
export const hoverLift = {
  scale: 1.02,
  y: -4,
  transition: { duration: 0.35, ease: smoothEase },
};
