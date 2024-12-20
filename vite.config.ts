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
        console.log('Starting sitemap generation...');
        try {
          const { sitemaps, index } = generateSitemaps();
          console.log(`Generated ${sitemaps.length} sitemaps`);
          
          // Ensure dist directory exists
          if (!fs.existsSync('dist')) {
            fs.mkdirSync('dist');
            console.log('Created dist directory');
          }
          
          // Write sitemap index
          fs.writeFileSync('dist/sitemap.xml', index);
          console.log('Written sitemap.xml');
          
          // Write individual sitemaps
          sitemaps.forEach((content, i) => {
            fs.writeFileSync(`dist/sitemap${i + 1}.xml`, content);
            console.log(`Written sitemap${i + 1}.xml`);
          });
          
          // Copy XSL file
          fs.copyFileSync('public/sitemap.xsl', 'dist/sitemap.xsl');
          console.log('Copied sitemap.xsl');
          
          console.log('Sitemap generation completed successfully');
        } catch (error) {
          console.error('Error generating sitemaps:', error);
        }
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