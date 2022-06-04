/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['s4.anilist.co'],
        deviceSizes: [576, 768, 992, 1200],
        imageSizes: [64, 96, 128, 256, 384],
    },
}

module.exports = nextConfig
