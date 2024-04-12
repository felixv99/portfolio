/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true
  },
   /*assetPrefix: isProd ? "/portfolio/" : "",*/
  basePath: '/portfolio' //comment out basepath when testing in localhost
}

module.exports = nextConfig
