/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['example.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.yamaha-motor.com.br',
        port: '',
        pathname: '**',
      },
    ]
  }
};

export default nextConfig;
