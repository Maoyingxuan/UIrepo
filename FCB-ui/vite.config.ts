
import path from 'path'
import { defineConfig } from 'vite'
import dts from "vite-plugin-dts";

import react from '@vitejs/plugin-react'

function resolve(str: string) {
  return path.resolve(__dirname, str);
}
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  resolve: {
    alias: {
      "FCB-ui": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    lib: {
      entry: resolve("src/index.ts"),
      name: "fcb-ui",
      fileName: (format) => `fcb-ui.${format}.js`,
      formats: ["cjs", "es", "umd"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        format: "cjs",
      },
    },
  },
})
