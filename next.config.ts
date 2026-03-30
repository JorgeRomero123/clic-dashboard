import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/clic-dashboard",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
