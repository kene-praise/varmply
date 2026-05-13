import type { NextConfig } from "next";

const varmplyApiBaseUrl = process.env.NEXT_PUBLIC_VARMPLY_API_BASE_URL;

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self' https://praize.dev https://*.praize.dev https://*.vercel.app http://localhost:3000 http://localhost:3001",
          },
        ],
      },
    ];
  },
  async rewrites() {
    if (!varmplyApiBaseUrl) {
      return [];
    }

    return [
      {
        source: "/api/waitlist/entries",
        destination: `${varmplyApiBaseUrl}/waitlist/entries`,
      },
    ];
  },
  images: {
    qualities: [75, 90],
  },
};

export default nextConfig;
