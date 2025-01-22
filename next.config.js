/** @type {import('next').NextConfig} */
const deployCloudflarePages = (nextConfig) => {
  // Show all environment variables in the console
  // console.log("Environment variables:", process.env);

  console.log("Environment", process.env);

  if (process.env.NODE_ENV === "production") {
    // Set the assetPrefix to the Cloudflare Pages URL
    console.log("Production build detected. Export to 'out'.");
    nextConfig.output = "export";
    // Add trailingSlash convert pages.html -> pages/index.html
    nextConfig.trailingSlash = true;
    // Define distDir
    nextConfig.distDir = "out";
  }
  return nextConfig;
}

const nextConfig = {
  reactStrictMode: true,
}

module.exports = deployCloudflarePages(nextConfig)
