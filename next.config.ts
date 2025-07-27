import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    dirs: ["pages", "utils", "components", "services"],
  },
  env: {
    NEXT_PUBLIC_WC_PROJECT_ID: process.env.NEXT_PUBLIC_WC_PROJECT_ID,
    DATABASE_URL: process.env.DATABASE_URL,
  },
};

export default nextConfig;
