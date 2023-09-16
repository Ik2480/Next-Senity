/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "cdn.sanity.io",
          port: "",
        },
      ],
    },

    distDir: 'build', // Change 'build' to your preferred output directory
  };
