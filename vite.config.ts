import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Base URL configured for GitHub Pages repository 'tame3723'
export default defineConfig({
  plugins: [react()],
  base: '/tame3723/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom', 'framer-motion']
        }
      }
    }
  }
});
