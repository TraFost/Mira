import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	eslint: {
		dirs: ["pages", "utils", "components", "services"],
	},
};

export default nextConfig;
