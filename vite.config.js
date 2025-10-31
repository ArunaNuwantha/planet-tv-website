import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/planet-tv-website/",
  build: {
    outDir: "docs",
    assetsDir: "assets",
  },
});
