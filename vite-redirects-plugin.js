import { writeFileSync, copyFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

export default function vitePluginRedirects() {
  return {
    name: 'vite-plugin-redirects',
    apply: 'build',
    closeBundle() {
      const outDir = 'dist';
      const redirectsContent = '/* /index.html 200';
      
      // Ensure the dist directory exists
      if (!existsSync(outDir)) {
        mkdirSync(outDir, { recursive: true });
      }
      
      // Write the _redirects file
      writeFileSync(join(outDir, '_redirects'), redirectsContent);
      console.log('Created _redirects file in dist directory');
    },
  };
}
