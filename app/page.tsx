import HeroSection from '@/components/HeroSection';
import LogoBar from '@/components/LogoBar';
import WhatVarmplyDoes from '@/components/WhatVarmplyDoes';
import HowItWorks from '@/components/HowItWorks';
import BentoGrid from '@/components/BentoGrid';
import ImageFeature from '@/components/ImageFeature';
import StatsSection from '@/components/StatsSection';
import TrustSection from '@/components/TrustSection';
import CTABanner from '@/components/CTABanner';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LogoBar />
      <WhatVarmplyDoes />
      <HowItWorks />
      <BentoGrid />
      <ImageFeature />
      <StatsSection />
      <TrustSection />
      <CTABanner />
    </>
  );
}
