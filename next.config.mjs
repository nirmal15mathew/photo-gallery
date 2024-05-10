/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'source.unsplash.com',
            port: '',
        },
        {
            protocol: 'https',
            hostname: 'firebasestorage.googleapis.com',
            port: ''
        }
    ]
    }
};

export default nextConfig;
