import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // ✅ fix for custom domain
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
