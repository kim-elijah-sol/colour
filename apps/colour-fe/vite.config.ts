import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  server: {
    host: true,
    allowedHosts: ['colour-fe.run.goorm.io'],
  },
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  define: {
    'process.env': {},
  },
});
