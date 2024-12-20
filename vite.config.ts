import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { generateSitemaps } from "./src/utils/sitemapUtils";
import fs from "fs";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    {
      name: 'generate-sitemap',
      closeBundle: () => {
        const { sitemaps, index } = generateSitemaps();
        
        // Ensure dist directory exists
        if (!fs.existsSync('dist')) {
          fs.mkdirSync('dist');
        }
        
        // Write sitemap index
        fs.writeFileSync('dist/sitemap.xml', index);
        
        // Write individual sitemaps
        sitemaps.forEach((content, i) => {
          fs.writeFileSync(`dist/sitemap${i + 1}.xml`, content);
        });
        
        // Copy XSL file
        fs.copyFileSync('public/sitemap.xsl', 'dist/sitemap.xsl');
        
        console.log('Generated sitemaps successfully');
      }
    }
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
}));