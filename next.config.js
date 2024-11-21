const path = require("path");

const nextConfig = {
  reactStrictMode: true, // Enforce best practices.
  sassOptions: {
    includePaths: [path.join(__dirname, "css")],
  },
  trailingSlash: true, // Optional, keep if needed.
  devIndicators: {
    buildActivity: false, // Optional, for development builds.
  },
  eslint: {
    ignoreDuringBuilds: false, // Fail build on ESLint errors.
  },
};

module.exports = nextConfig;
