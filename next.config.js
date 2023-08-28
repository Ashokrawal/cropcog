/** @type {import('next').NextConfig} */
const nextConfig = {
  httpAgentOptions: {
    keepAlive: false,
  },

  experimental: {
    // appDir: true,
    serverActions: true,
  },
};

module.exports = nextConfig;
 