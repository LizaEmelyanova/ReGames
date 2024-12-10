import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  server: {
    port: 5173,
    open: 'http://localhost:5173/',
    // proxy: {
    //   '/api/v1': {
    //     //dev
    //     target: 'http://91.240.84.100:8000/api/v1',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api\/v1/, ''),
    //   },
    // },
  },
  resolve: {
    alias: {
      app: '/src/app',
      pages: '/src/pages',
      widgets: '/src/widgets',
      features: '/src/features',
      entities: '/src/entities',
      shared: '/src/shared',
    }
  }
})
