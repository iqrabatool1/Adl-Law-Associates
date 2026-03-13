import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', 
  trailingSlash: true,
  images: {
    unoptimized: true, // This fixes the Image Optimization error
  },
  turbopack: {
    root: ".",
  },
};

export default nextConfig;