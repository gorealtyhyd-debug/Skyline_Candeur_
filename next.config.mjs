/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // 100% static HTML/CSS/JS — no Node server needed
  trailingSlash: false,
  reactStrictMode: true,
  poweredByHeader: false,
  // Next's compiled JS/CSS/fonts are referenced from /assets/_next/… ;
  // scripts/postbuild.mjs moves them there inside dist/.
  assetPrefix: '/assets',
  images: { unoptimized: true },
};

export default nextConfig;
