import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* We commented out 'export' so Vercel handles the 
     routing and server-side features automatically. 
  */
  // output: 'export', 
  
  turbopack: {
    root: ".",
  },
  trailingSlash: true, 
};

export default nextConfig;