/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**', // すべてのホスト名を許可
        },
      ],
    },
  };
  
  export default nextConfig;
  