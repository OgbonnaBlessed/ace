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
                hostname: "assets.aceternity.com", // Another hostname
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "another-host.com", // Yet another hostname
                port: "",
                pathname: "/**",
            }
        ]
    }
}

module.exports = nextConfig;