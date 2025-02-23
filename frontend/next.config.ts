import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["res.cloudinary.com"], // Allow Cloudinary images
  },
  reactStrictMode: true,
};

export default nextConfig;
