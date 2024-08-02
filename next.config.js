/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.cloudinary.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
