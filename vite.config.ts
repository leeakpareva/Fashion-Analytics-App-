import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'vendor-react';
            if (id.includes('lucide')) return 'vendor-lucide';
            if (id.includes('web3')) return 'vendor-web3';
            return 'vendor';
          }
        }
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
    exclude: ['web3']
  },
  server: {
    host: true,
    port: 5173
  }
});