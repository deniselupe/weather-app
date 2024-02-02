/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: false,
    output: "standalone",
    basePath: "/weather",
    images: {
        remotePatterns:[
            {
                protocol: "http",
                hostname: "openweathermap.org",
                port:  "",
                pathname: "/img/wn/**",
            }
        ]
    },
}

module.exports = nextConfig
