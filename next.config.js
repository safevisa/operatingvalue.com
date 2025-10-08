const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  experimental: {
    // optimizeCss: true // 暂时禁用，避免构建错误
  }
}

module.exports = nextConfig
