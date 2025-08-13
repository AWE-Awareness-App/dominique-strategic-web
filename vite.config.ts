import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Base public path when served in production
  base: '/',
  
  // Development server configuration
  server: {
    host: "::",
    port: 8080,
    strictPort: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    },
    fs: {
      strict: false
    }
  },

  // Build configuration
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor and app code for better caching
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
    // Ensure _redirects file is copied to the dist directory
    emptyOutDir: true,
    copyPublicDir: true,
  },
  
  // Ensure public files are copied to the dist directory
  publicDir: 'public',

  // Preview configuration
  preview: {
    port: 8080,
    proxy: {
      '^/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '^/.*': {
        target: '/',
        rewrite: () => '/index.html'
      }
    }
  },

  // Resolve configuration
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // Plugins
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
}));
