/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomfox.ca',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
}

module.exports = nextConfig
