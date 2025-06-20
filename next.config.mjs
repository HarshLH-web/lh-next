/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lhtalentagency.com",
      }
    ],
  },
  redirects: async () => {
    return [
      {
        source: "/blogs/how-to-earn-money-on-poppo-live-beginner-guide",
        destination: "/blogs/become-poppo-live-host-and-earn-money",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
