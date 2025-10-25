import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "cdn.shopify.com",
            port: "",
            pathname: "/s/files/1/0664/0218/9430/files/**",
         },
      ],
   }
};

export default nextConfig;
