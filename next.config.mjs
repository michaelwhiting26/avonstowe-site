/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export so the site keeps deploying to GitHub Pages exactly as the
  // original static index.html did (see public/CNAME -> www.avonstowe.com).
  // All interactivity is client-side and the enquiry form posts directly to
  // FormSubmit, so no server runtime is required.
  output: "export",
  images: {
    // GitHub Pages has no image optimisation server.
    unoptimized: true,
  },
  // Preserve clean URLs; single page so this only affects the root document.
  trailingSlash: true,
};

export default nextConfig;
