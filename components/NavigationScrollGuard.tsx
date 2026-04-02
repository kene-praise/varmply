'use client';

import { useEffect } from 'react';

import { killAllScrollTriggers } from '@/lib/killScrollTriggers';

/**
 * ScrollTrigger + pin() reparents DOM. React then unmounts Framer children first, which can throw
 * `removeChild` on client navigations. Run kill *before* Next.js handles the click (capture phase).
 */
export default function NavigationScrollGuard() {
  useEffect(() => {
    const onClickCapture = (e: MouseEvent) => {
      if (e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const el = (e.target as HTMLElement | null)?.closest?.('a[href]');
      if (!el) return;

      const a = el as HTMLAnchorElement;
      if (a.target && a.target !== '' && a.target !== '_self') return;

      const href = a.getAttribute('href');
      if (!href || href.startsWith('mailto:') || href.startsWith('tel:')) return;

      let next: URL;
      try {
        next = new URL(href, window.location.href);
      } catch {
        return;
      }

      if (next.origin !== window.location.origin) return;

      const cur = new URL(window.location.href);
      if (
        next.pathname === cur.pathname &&
        next.search === cur.search
      ) {
        return;
      }

      killAllScrollTriggers();
    };

    document.addEventListener('click', onClickCapture, true);
    return () => document.removeEventListener('click', onClickCapture, true);
  }, []);

  return null;
}
