import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import pkg from './package.json' assert { type: 'json' }

const resolve = src => fileURLToPath(new URL(src, import.meta.url))

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    base: command === 'build' ? `/${pkg.name}/` : `/`,
    plugins: [react()],
    resolve: {
      alias: {
        '@': resolve('src'),
      }
    },
    build:{
      outDir: resolve(`../../dist/${pkg.name}`)
    }
  }
})
