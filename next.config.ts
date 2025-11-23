import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "https://coin-images.coingecko.com",
      "https://hhgtlcjhcxkodhwowjeq.supabase.co",
      // "C:\fakepathdownload.jpeg",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "coin-images.coingecko.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      // {
      //   protocol: "C:",
      //   hostname: "C:\fakepathdownload.jpeg",
      // },
    ],
  },
};

export default nextConfig;
