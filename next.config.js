/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
};

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  pwa: {
    disable: process.env.NODE_ENV === "development",
    register: true,
    scope: "/",
    sw: "service-worker.js",
  },
});

// Your Next config is automatically typed!
module.exports = withPWA(nextConfig);
