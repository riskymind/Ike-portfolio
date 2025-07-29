/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
      },
    ],
    domains: ["bvcwtsvh5z.ufs.sh"],
  },
};

export default nextConfig;

// import type { NextConfig } from 'next';

// const nextConfig: NextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'utfs.io',
//         port: '',
//       },
//     ],
//     domains: ['bvcwtsvh5z.ufs.sh'],
//   },
// };

// export default nextConfig;
