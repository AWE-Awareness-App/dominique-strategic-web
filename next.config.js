/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  images: {
    domains: ['localhost'],
    unoptimized: true, // Required for static exports
  },
  // Enable static exports
  output: 'export',
  // Optional: Add a trailing slash to all paths
  trailingSlash: true,
  // Optional: Configure the base path if your app is served from a subdirectory
  // basePath: '/your-base-path',
  // Optional: Configure the asset prefix if your app is served from a subdomain
  // assetPrefix: '/your-asset-prefix/',
};

module.exports = withContentlayer(nextConfig);
