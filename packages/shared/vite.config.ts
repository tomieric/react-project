import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    dts(),
  ],
  build: {
    target: 'es2015',
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name: 'reactProjectShared',
      fileName: 'index',
      formats: ['es', 'umd', 'cjs', 'iife']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})