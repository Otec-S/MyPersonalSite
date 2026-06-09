import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import svgr from "vite-plugin-svgr";

const isRootBuild = process.env.VITE_BUILD_TARGET === "root";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr({
      include: "**/*.svg",
    }),
    react(),
  ],
  base: isRootBuild ? "/" : "/MyPersonalSite/",
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
