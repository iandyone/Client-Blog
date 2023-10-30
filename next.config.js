const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'styles')],
    additionalData: '@import "@variables"; @import "@templates"; @import "@mixins";',
  },

  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@styles': path.join(__dirname, 'src', 'styles'),
      '@public': path.join(__dirname, 'public'),
      '@variables': path.join(__dirname, 'src', 'styles', 'variables.scss'),
      '@templates': path.join(__dirname, 'src', 'styles', 'templates.scss'),
      '@mixins': path.join(__dirname, 'src', 'styles', 'mixins.scss'),
    };

    return config;
  },
};

module.exports = nextConfig;