import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  // No server-side image optimizer exists on Cloudflare static assets.
  images: { unoptimized: true },
};

export default nextConfig;
