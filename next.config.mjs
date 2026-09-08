/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin the workspace root: an unrelated package-lock.json exists in the parent
  // directory and Next would otherwise infer that as the root.
  outputFileTracingRoot: import.meta.dirname,

  // Static HTML export. The site has no server runtime: no forms, no API routes,
  // no server-side state. Deployable to Cloudflare Pages or Vercel as static files.
  output: "export",

  images: {
    // No image optimisation server exists for a static export.
    unoptimized: true,
  },

  // Emits /contact/index.html rather than /contact.html, which works on every
  // static host. Canonical URLs in lib/metadata.ts are built to match.
  trailingSlash: true,

  // Fail the build on type errors and lint errors rather than shipping them.
  typescript: { ignoreBuildErrors: false },
  eslint: { ignoreDuringBuilds: false },
};

export default nextConfig;
