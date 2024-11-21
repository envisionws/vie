const path = require("path");

const nextConfig = {
  reactStrictMode: true, // Enforce best practices.
  sassOptions: {
    includePaths: [path.join(__dirname, "css")],
  },
  trailingSlash: true, // Retain trailing slashes if needed.
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

module.exports = nextConfig;
