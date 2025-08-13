import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // IMPORTANT: your repo name here (including the trailing slash)
  base: '/YOOW-ECOMERCE-/',
})
