/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.coindesk.com',
        pathname: '/_next/image/**',
      },
      {
        protocol: 'https',
        hostname: 'thecryptobasic.com',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'cimg.co',
        pathname: '/p/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.decrypt.co',
        pathname: '/wp-content/themes/**',
      },
      {
        protocol: 'https',
        hostname: 'news.bitcoin.com',
        pathname: '/images/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'crypto.news',
        pathname: '/app/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '/wikipedia/commons/**',
      },
    ],
  },
}

module.exports = nextConfig