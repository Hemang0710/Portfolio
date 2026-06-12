/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // three.js ships untranspiled ESM; Next must transpile it for the server build.
  transpilePackages: ['three', '@react-three/fiber'],
  images: {
    domains: [],
  },
}

module.exports = nextConfig

