/** @type {import('next').NextConfig} */

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  pwa: {
    disable: process.env.NODE_ENV === "development",
    register: true,
    scope: "/", 
    sw: "service-worker.js", 
  },
});

module.exports = withPWA({
  // Sua configuração do Next.js
});

