import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // expose on local network so phones/tablets can connect
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
