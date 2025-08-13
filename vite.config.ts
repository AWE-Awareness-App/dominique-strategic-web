import { defineConfig, type UserConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const config: UserConfig = {
    server: {
      host: "::",
      port: 8080,
      proxy: {
        '/api': {
          target: 'http://localhost:3000', // Your backend server
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      },
      // @ts-ignore - This is a valid Vite server option
      historyApiFallback: true
    },
    preview: {
      // @ts-ignore - This is a valid Vite preview option
      historyApiFallback: true
    },
    plugins: [
      react(),
      mode === 'development' && componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };

  return config;
});
