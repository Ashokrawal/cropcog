/** @type {import('next').NextConfig} */
const nextConfig = {
  httpAgentOptions: {
    keepAlive: false,
  },
  // output: "export",
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
