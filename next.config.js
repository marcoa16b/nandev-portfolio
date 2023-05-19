/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'cdn.dribbble.com',
      's3.us-west-2.amazonaws.com',
      'images.unsplash.com',
      'i.imgur.com'
    ]
  }
}

module.exports = nextConfig
