/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const withSass = require('@zeit/next-sass');
const withImages = require('next-images');
const withLess = require('@zeit/next-less');
const withCSS = require('@zeit/next-css');

module.exports = withCSS(
  withLess(
    withImages(
      withSass({
        env: {
          ANY_ENV_KEY: 'ANY_ENV_VARIABLE',
        },
      })
    )
  )
);

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // set 'fs' to an empty module on the client to prevent this error on build --> Error: Can't resolve 'fs'
      config.node = {
        fs: 'empty',
      };
    }

    return config;
  },
};

module.exports = nextConfig;
