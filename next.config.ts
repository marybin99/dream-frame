import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.pollinations.ai",
      },
    ],
    unoptimized: true, // 이미지 최적화 비활성화
  },
  /* config options here */
};

export default nextConfig;
