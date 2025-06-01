import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Amazon-FrontEnd-Clone/',
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true  
  }
})
