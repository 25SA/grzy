import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",
  plugins: [react()],
  publicDir: "images",
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        share: "share.html",
      },
    },
  },
});
