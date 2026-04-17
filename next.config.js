module.exports = {
  images: {
    // Avoid `/_next/image` on serverless: Next 12’s optimizer uses a Lambda handler
    // shape that Node.js 24 runtimes reject (callback-style handlers).
    unoptimized: true,
    domains: [
      'res.cloudinary.com',
      'avatars.githubusercontent.com',
      'imgur.com',
    ],
  },
};
