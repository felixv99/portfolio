/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true
  },
   /*assetPrefix: isProd ? "/portfolio/" : "",*/
  basePath: '/portfolio'
}

module.exports = nextConfig
