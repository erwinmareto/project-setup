/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: false // Set to true if it's a permanent redirect (301)
      }
    ];
  }
};

export default nextConfig;
