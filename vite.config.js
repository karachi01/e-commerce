import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/ecommerce/",
  plugins: [react()],
  assetsInclude: ['**/*.JPG'],
  server: {
    host: '0.0.0.0',
  }
})