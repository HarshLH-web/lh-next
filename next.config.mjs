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
      {
        source: "/blogs/how-to-create-poppo-live-account",
        destination: "/blogs/create-poppo-live-account",
        permanent: true,
      },
      {
        source: "/blogs/joyo-live-agency",
        destination: "/blogs/joyo-live-agent-registration",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
