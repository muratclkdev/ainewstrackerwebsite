/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cointelegraph.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'thecryptobasic.com',
      },
      {
        protocol: 'https',
        hostname: 'cimg.co',
      },
      {
        protocol: 'https',
        hostname: 'wp.decrypt.co',
      },
      {
        protocol: 'https',
        hostname: 'news.bitcoin.com',
      },
    ],
    domains: ['localhost', 'avatars.githubusercontent.com'],
  },
}

module.exports = nextConfig