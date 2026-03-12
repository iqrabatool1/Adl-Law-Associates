import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* We UNCOMMENTED 'export' so Next.js generates static HTML files 
     that can be uploaded to your public_html folder.
  */
  output: 'export', 
  
  // This helps with 404 issues on some servers
  trailingSlash: true, 
  
  // Optional: only if you are using Turbopack
  experimental: {
    turbo: {
       root: ".",
    },
  },
};

export default nextConfig;