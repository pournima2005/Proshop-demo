 import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Option A: If you installed esbuild in step 1
    cssMinify: 'esbuild', 
    
    // OR Option B: Turn off CSS minification entirely (safest)
    // cssMinify: false, 
  },
});