/** @type {import('next').NextConfig} */
const deployCloudflarePages = (nextConfig) => {
  // Show all environment variables in the console
  // console.log("Environment variables:", process.env);

  if ((process.env.NODE_ENV === "production") && (process.env.CF_PAGES == '1')) {
    const outputDir = "out";
    const outputDirEnvironment = "public"
    // Set the assetPrefix to the Cloudflare Pages URL
    console.log("Production build detected. Export to 'out'.");
    nextConfig.output = "export";
    // Add trailingSlash convert pages.html -> pages/index.html
    nextConfig.trailingSlash = true;
    // Define distDir
    nextConfig.distDir = outputDir;

    // If you want CF Pages add some environment variables
    // CF_PAGES => 1
    // CF_PAGES_COMMIT_SHA => The commit SHA of the deployment
    // CF_PAGES_BRANCH => The branch name
    // CF_PAGES_URL => The URL of the deployment
    // Generate a .json file with the environment variables
    const fs = require("fs");
    const path = require("path");
    const env = {
      CF_PAGES: process.env.CF_PAGES,
      CF_PAGES_COMMIT_SHA: process.env.CF_PAGES_COMMIT_SHA,
      CF_PAGES_BRANCH: process.env.CF_PAGES_BRANCH,
      CF_PAGES_URL: process.env.CF_PAGES_URL,
    };
    // Create directory if it doesn't exist
    if (!fs.existsSync(path.resolve(__dirname, outputDirEnvironment))) {
      fs.mkdirSync(path.resolve(__dirname, outputDirEnvironment));
    }
    // Create the .json file
    fs.writeFileSync(
      path.resolve(__dirname, outputDirEnvironment, "pages.env.json"),
      JSON.stringify(env)
    );
  }
  return nextConfig;
}

const nextConfig = {
  reactStrictMode: true,
}

module.exports = deployCloudflarePages(nextConfig)
