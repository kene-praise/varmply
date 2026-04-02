import Lenis from '@studio-freight/lenis';

let lenis: Lenis | null = null;

export function initLenis(): Lenis {
  if (typeof window === 'undefined') {
    throw new Error('Lenis can only be initialized in the browser');
  }

  lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    smoothWheel: true,
  });

  return lenis;
}

export function getLenis(): Lenis | null {
  return lenis;
}

export function destroyLenis(): void {
  if (lenis) {
    lenis.destroy();
    lenis = null;
  }
}
