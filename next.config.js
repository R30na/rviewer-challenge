/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.rviewer.io",
        port: "",
        pathname: "/challenges/**",
      },
    ],
  },
};

module.exports = nextConfig;
