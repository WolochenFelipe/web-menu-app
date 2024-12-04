// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: true,
//     async rewrites() {
//       return [
//         {
//           source: '/:path*',
//           destination: '/:path*',
//         },
//         {
//           source: '/',
//           destination: '/api/tenant',
//         },
//       ]
//     },
//   }

//   export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: 'standalone',
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/api/tenant', // Certifique-se de que /api/tenant funciona corretamente
      },
    ];
  },
};

export default nextConfig;
