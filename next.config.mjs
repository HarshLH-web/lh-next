/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lhtalentagency.com",
      },
    ],
  },
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     config.resolve.alias['gsap/ScrollTrigger'] = 'gsap/dist/ScrollTrigger';
  //   }
  //   return config;
  // },
};

export default nextConfig;
