/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export so the site keeps deploying to GitHub Pages exactly as the
  // original static index.html did (see public/CNAME -> www.avonstowe.com).
  // The site has no client-side code and no form, so no server runtime is required.
  output: "export",
  images: {
    // GitHub Pages has no image optimisation server.
    unoptimized: true,
  },
  // Clean URLs: / and /legal/.
  trailingSlash: true,
};

export default nextConfig;
