/** @type { import('next').NextConfig } */

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "aceternity.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com", // Another hostname
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "images.pexels.com", // Yet another hostname
                port: "",
                pathname: "/**",
            }
        ]
    }
}

module.exports = nextConfig;