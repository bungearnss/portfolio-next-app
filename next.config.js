/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/webp', 'image/jpeg', 'image/png'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.cloudinary.com',
        pathname: '/**',
      },
    ],
  },
  eslint: {
    dirs: ['src/app/'],
},
}

module.exports = nextConfig