await import("./src/env.js");

/** @type {import('next').NextConfig} */

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
    basePath,
    images: {
        unoptimized: true,
    },
    env: {
        BASE_PATH: basePath,
    },
};

export default nextConfig;
