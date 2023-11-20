import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import pkg from './package.json' assert { type: 'json' }

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    base: command === 'build' ? `/${pkg.name}/` : `/`,
    plugins: [react()],
    define: {
      APP_NAME: JSON.stringify(pkg.name),
    },
    build:{
      outDir: resolve(`../../dist/${pkg.name}`)
    }
  }
})
