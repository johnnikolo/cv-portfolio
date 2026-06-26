import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/cv-portfolio/',
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('lottie')) return 'lottie'
          if (id.includes('@mui')) return 'mui'
          if (id.includes('node_modules')) return 'vendor'
        },
      },
    },
  },
})
