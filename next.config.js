/** @type {import('next').NextConfig} */
const nextConfig = {
  httpAgentOptions: {
    keepAlive: false,
  },
  // output: "export",
  images: {},

  experimental: {
    appDir: true,
    serverActions: true,
  },
};

module.exports = nextConfig;
