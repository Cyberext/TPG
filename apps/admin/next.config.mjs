/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["ui", "config", "types"],
  reactStrictMode: true,
};

export default nextConfig;
