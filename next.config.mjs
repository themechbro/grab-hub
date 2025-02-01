/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.ccbp.in",
        pathname: "/**", // Allow all paths
      },
    ],
  },
};

export default nextConfig;
