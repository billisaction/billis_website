import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

// Prefer import.meta when available; fall back for CJS loaders Next may use.
const configDir =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

const projectRoot = path.resolve(configDir);

const nextConfig: NextConfig = {
  // A stray package-lock.json in the home directory makes Next infer the wrong
  // workspace root and then fail to resolve CSS packages like tailwindcss.
  outputFileTracingRoot: projectRoot,
  turbopack: {
    root: projectRoot,
    resolveAlias: {
      tailwindcss: path.join(projectRoot, "node_modules/tailwindcss"),
      "tw-animate-css": path.join(projectRoot, "node_modules/tw-animate-css"),
      "shadcn/tailwind.css": path.join(
        projectRoot,
        "node_modules/shadcn/dist/tailwind.css"
      ),
    },
  },
  // Static HTML export — deployed to Apache/cPanel, where no Node runtime is available.
  output: "export",
  // Emits /about/index.html so Apache serves routes without rewrite rules.
  trailingSlash: true,
  images: {
    // The Next.js image optimizer requires a running server.
    unoptimized: true,
  },
};

export default nextConfig;
