import { fileURLToPath, URL } from 'node:url'
import * as path from "path";

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/monaco-editor',
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  optimizeDeps: {
    include: ["path-browserify", "@vue/language-service", "monaco-editor-core"],
  },
  build: {
    minify: false,
    outDir: path.resolve(__dirname, "./out"),
  },
})
