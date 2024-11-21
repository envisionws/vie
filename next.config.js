/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true, // Enforce best practices.
  sassOptions: {
    includePaths: [path.join(__dirname, "css")],
  },
  trailingSlash: true, // Retain trailing slashes for static exports if needed.
  devIndicators: {
    buildActivity: false, // Disable build activity indicator during development.
  },
  eslint: {
    ignoreDuringBuilds: false, // Fail the build if ESLint errors occur.
  },
  // Uncomment the following line ONLY if static export is required:
  // output: 'export',
};

module.exports = nextConfig;
