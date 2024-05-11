/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    JSONLINK_API_KEY: process.env.JSONLINK_API_KEY,
    EMOJI_API_KEY: process.env.EMOJI_API_KEY,
  },
};

export default nextConfig;
