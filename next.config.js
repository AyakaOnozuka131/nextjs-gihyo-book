/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: () => {
    let compilerConfig = {
      styledComponents: true,
    };
    return compilerConfig;
  },
};

module.exports = nextConfig;
