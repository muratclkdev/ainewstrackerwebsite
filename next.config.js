/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cimg.co',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'thecryptobasic.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.coindesk.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'seeklogo.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'u.today',
        pathname: '/img/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.cloakcoin.com',
        pathname: '/user/pages/partner/U.Today/**',
      }
    ],
  },
}

module.exports = nextConfig