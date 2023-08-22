/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true, // suggest you enable Strict Mode - https://nextjs.org/docs/api-reference/next.config.js/react-strict-mode
  images: {
    domains: ['cdn.sanity.io'],
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack', 'url-loader'],
    });

    return config;
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
