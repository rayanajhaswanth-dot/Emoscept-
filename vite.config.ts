import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Ensures assets load correctly from any subfolder
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});