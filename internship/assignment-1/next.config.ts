import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    eslint: {
        ignoreDuringBuilds: true, // ✅ disables ESLint errors on Vercel builds
    },
};

export default nextConfig;
