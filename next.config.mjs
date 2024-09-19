/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            "cdn.motor1.com", 
            "www.architecturaldigest.com",
            "lh3.googleusercontent.com", 
            "png.pngtree.com", 
            "api.dicebear.com", 
            "www.modrino.com",
            "www.architecturaldigest.com"
        ]
    }
};

export default nextConfig;