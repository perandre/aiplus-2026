import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  server: {
    port: 5173,
    open: true,
    proxy: {
      // Lar oss iframe reisnordland.no — vi stripper X-Frame-Options i dev.
      '/proxy/reisnordland': {
        target: 'https://www.reisnordland.no',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/proxy\/reisnordland/, '') || '/',
        configure: (proxy) => {
          proxy.on('proxyRes', (proxyRes) => {
            delete proxyRes.headers['x-frame-options'];
            delete proxyRes.headers['content-security-policy'];
          });
        },
      },
    },
  },
  build: {
    target: 'es2022',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        speaker: resolve(__dirname, 'speaker.html'),
      },
    },
  },
});
