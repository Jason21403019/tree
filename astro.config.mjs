import { defineConfig } from 'astro/config'

export default defineConfig({
  typescript: {
    strict: false,
  },

  base: '',
  build: {
    format: 'file',
    compressHTML: true,
    assetsPrefix: '.',
    img: {
      optimize: {
        webp: true,
      },
    },
  },
})
