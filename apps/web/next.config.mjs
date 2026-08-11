/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["ui", "config", "types"],
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
