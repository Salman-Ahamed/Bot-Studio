import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Transpile the @smythos/chatbot package for Next.js compatibility.
   * This is needed when using linked/local packages.
   */
  transpilePackages: ["@smythos/chatbot"],

  /**
   * Experimental features for better local package support
   */
  experimental: {
    // Enable external directory support for linked packages
    externalDir: true,
  },
};

export default nextConfig;
