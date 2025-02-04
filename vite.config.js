import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy the /api calls to the backend (hosted on Render)
      '/api': {
        target: 'https://trivy-backend.onrender.com', // Hosted backend URL
        changeOrigin: true, // Ensures the host header matches the target
        secure: true, // Enable for HTTPS connections
        rewrite: (path) => path.replace(/^\/api/, ''), // Optionally strip /api from the path if needed
      },
    },
  },
});
