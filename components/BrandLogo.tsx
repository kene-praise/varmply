import Image from 'next/image';

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
  white?: boolean;
};

export default function BrandLogo({ className = 'h-8 w-auto', priority = false, white = false }: BrandLogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Varmply"
      width={648}
      height={488}
      className={className}
      priority={priority}
      style={{
        filter: white ? 'brightness(0) invert(1)' : 'none',
        transition: 'filter 0.3s ease',
      }}
    />
  );
}
