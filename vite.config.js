import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'https://trivy-backend.onrender.com',  // Ensure this is correct
    },
    allowedHosts: ['trivy-frontend.onrender.com'],  // Add this line to allow the host
  },
});
