import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  server: {
    host: true,
    allowedHosts: ['solreacttest.run.goorm.io'],
  },
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
});
