/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['res.cloudinary.com']
  },
  swcMinify: true,
  experimental: { images: { allowFutureImage: true } }
}

module.exports = nextConfig
