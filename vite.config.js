import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/assignment-8/',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/index.js`,
        chunkFileNames: `assets/index.js`,
        assetFileNames: `assets/index.css`
      }
    }
  }
});