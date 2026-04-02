import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/** Revert pinned ScrollTrigger layouts before React mutates the DOM on client-side route changes. */
export function killAllScrollTriggers(): void {
  if (typeof window === 'undefined') return;
  ScrollTrigger.getAll().slice().forEach((st) => st.kill(true, false));
}
