import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'

const resolve = src => fileURLToPath(new URL(src, import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    UnoCSS()
  ],
  build:{
    outDir: resolve(`../../dist`)
  }
})
