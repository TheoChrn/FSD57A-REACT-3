/** @type {import('next').NextConfig} */
const nextConfig = {
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
