/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lhtalentagency.com",
      },
      {
        protocol: "https",
        hostname: "chametappagency.com",
      },
    ],
  },
};

export default nextConfig;
