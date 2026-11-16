// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  // Build configuration
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});