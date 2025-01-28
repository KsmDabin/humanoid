/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['localhost', 'humanoid-dbk.vercel.app'],
  },
  output: 'standalone',
}

module.exports = nextConfig
