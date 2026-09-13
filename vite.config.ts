import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import svgr from "vite-plugin-svgr";

const isRootBuild = process.env.VITE_BUILD_TARGET === "root";
const base = isRootBuild ? "/" : "/MyPersonalSite/";

const siteUrl = (
  process.env.VITE_SITE_URL ??
  (isRootBuild
    ? "https://sergeygrigorash.com"
    : "https://otec-s.github.io/MyPersonalSite")
).replace(/\/?$/, "/");

const ogImage = new URL(`${base}SG-FD.png`.replace(/\/+/g, "/"), siteUrl).href;

function htmlMetaPlugin(): Plugin {
  return {
    name: "html-meta",
    transformIndexHtml(html) {
      return html
        .replaceAll("__SITE_URL__", siteUrl)
        .replaceAll("__OG_IMAGE__", ogImage);
    },
  };
}

// public/robots.txt and public/sitemap.xml are copied verbatim by Vite (they
// don't go through transformIndexHtml), so substitute their __SITE_URL__
// placeholder after the bundle is written.
function staticMetaPlugin(): Plugin {
  return {
    name: "static-meta",
    closeBundle() {
      const outDir = isRootBuild ? "dist2" : "dist";
      for (const file of ["robots.txt", "sitemap.xml"]) {
        const filePath = path.resolve(__dirname, outDir, file);
        if (fs.existsSync(filePath)) {
          const content = fs.readFileSync(filePath, "utf-8");
          fs.writeFileSync(filePath, content.replaceAll("__SITE_URL__", siteUrl));
        }
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr({
      include: "**/*.svg",
    }),
    react(),
    htmlMetaPlugin(),
    staticMetaPlugin(),
  ],
  base,
  build: {
    outDir: isRootBuild ? "dist2" : "dist",
  },
  resolve: {
    alias: {
      "@pages": path.resolve(__dirname, "src/pages"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@shared": path.resolve(__dirname, "src/shared"),
    },
  },
});
