/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "13.49.159.208",
      "localhost",
      "strapi.harley-davidson-legends.pl",
      "46.101.147.9",
      "strapi.harley-heaven-poland.pl",
    ],
  },
};

module.exports = nextConfig;
