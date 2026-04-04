import type { Metadata } from "next";
import localFont from "next/font/local";
import { Fragment_Mono } from "next/font/google";
import "./launchfolio.css";

const switzer = localFont({
  src: [
    { path: "../../public/fonts/switzer-500.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/switzer-600.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/switzer-900.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-switzer",
  display: "swap",
});

const fragmentMono = Fragment_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Joseph Alexander — Full-stack Designer",
  description:
    "Launch your design business in hours with this conversion-optimized portfolio template. Built with Framer's powerful CMS, it combines stunning project showcases with client management tools to help you land more clients and grow your business.",
  openGraph: {
    title: "Joseph Alexander — Full-stack Designer",
    description: "Strategic design that drives growth, not just looks good.",
    type: "website",
    images: ["/seo/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joseph Alexander — Full-stack Designer",
    description: "Strategic design that drives growth, not just looks good.",
    images: ["/seo/og-image.png"],
  },
  icons: {
    icon: "/seo/favicon.svg",
    apple: "/seo/apple-touch-icon.png",
  },
};

export default function LaunchfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${switzer.variable} ${fragmentMono.variable} lf-root`}>
      {children}
    </div>
  );
}
