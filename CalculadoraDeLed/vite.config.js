import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Calculadora-De-Led/', // 👈 importante para GitHub Pages
  build: {
    outDir: 'dist'
  }
})
