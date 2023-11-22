// uno.config.ts
import { defineConfig, presetUno, presetIcons } from 'unocss'

export default defineConfig({
  shortcuts: {
    'border-base': 'border-b border-gray:50'
  },
  presets: [
    presetUno(),
    presetIcons(),
  ]
})