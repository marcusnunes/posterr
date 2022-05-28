/** @type {import('next').NextConfig} */

const nextTranslate = require('next-translate');

const nextConfig = {
  ...nextTranslate(),
  reactStrictMode: true,
  poweredByHeader: false,
}

module.exports = nextConfig
