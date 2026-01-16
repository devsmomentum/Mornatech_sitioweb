import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'morna.tech',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
