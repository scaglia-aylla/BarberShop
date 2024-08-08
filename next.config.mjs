/** @type {import('next').NextConfig} */
const nextConfig = {
    /**configuração para permirtir o uso das imagens que vem do servidor */
    images: {
        remotePatterns: [
            {hostname: "utfs.io"}
        ]
    }
};

export default nextConfig;
