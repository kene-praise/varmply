import Image from 'next/image';

type BrandLogoProps = {
  className?: string;
  /** LCP: set on header only */
  priority?: boolean;
};

export default function BrandLogo({ className = 'h-8 w-auto', priority = false }: BrandLogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Varmply"
      width={648}
      height={488}
      className={className}
      priority={priority}
    />
  );
}
