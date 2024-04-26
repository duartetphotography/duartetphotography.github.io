// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  plugins: [react()],
  resolve: {
    alias: {
      'react-router-dom': 'react-router-dom',
      $landing: resolve('./public/landing'),
    },
  },
});
