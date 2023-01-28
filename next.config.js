/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true
  },
   /*assetPrefix: isProd ? "/portfolio/" : "",*/
  basePath: '/portfolio'
}

module.exports = nextConfig
