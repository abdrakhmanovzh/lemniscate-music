/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "i.scdn.co",
                protocol: "https",
            },
        ],
    },
};

export default nextConfig;
