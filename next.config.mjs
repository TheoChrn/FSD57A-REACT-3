/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_API_URL: process.env.NEXT_API_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "botw-compendium.herokuapp.com",
        pathname: "/api/v3/compendium/entry/**/image",
      },
    ],
  },
};

export default nextConfig;
