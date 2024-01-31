import { hostname } from "os";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "oaidalleapiprodscus.blob.core.window.net" }],
  },
};

export default nextConfig;
