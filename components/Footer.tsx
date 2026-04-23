'use client';

import { usePathname } from 'next/navigation';
import { MotionFooter } from '@/components/ui/MotionFooter';

export default function Footer() {
  const pathname = usePathname();
  if (pathname === '/waitlist') return null;
  return <MotionFooter />;
}

