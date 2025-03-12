import { defineConfig } from 'astro/config'

export default defineConfig({
  typescript: {
    strict: false,
  },
  vite: {
    ssr: {
      noExternal: ['locomotive-scroll'],
    },
    optimizeDeps: {
      include: ['locomotive-scroll'],
    },
  },
  base: '',
  build: {
    assetsPrefix: '.',
    img: {
      optimize: {
        webp: true,
      },
    },
  },
})
