/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'images.unsplash.com',
      'plus.unsplash.com',
      'avatars.githubusercontent.com', // Thêm hostname này
    ],
  },
};

module.exports = nextConfig;
