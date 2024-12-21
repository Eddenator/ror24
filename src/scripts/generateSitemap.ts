import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { generateSitemaps } from '../utils/sitemapUtils';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputDir = path.resolve(__dirname, '../../dist');

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
  console.log('Created dist directory');
}

try {
  const { sitemaps, index } = generateSitemaps();
  console.log(`Generated ${sitemaps.length} sitemaps`);
  
  // Write sitemap index
  fs.writeFileSync(path.join(outputDir, 'sitemap.xml'), index);
  console.log('Written sitemap.xml');
  
  // Write individual sitemaps
  sitemaps.forEach((content, i) => {
    fs.writeFileSync(path.join(outputDir, `sitemap${i + 1}.xml`), content);
    console.log(`Written sitemap${i + 1}.xml`);
  });
  
  // Copy XSL file if it exists
  const xslSource = path.join(path.dirname(__dirname), 'public', 'sitemap.xsl');
  if (fs.existsSync(xslSource)) {
    fs.copyFileSync(xslSource, path.join(outputDir, 'sitemap.xsl'));
    console.log('Copied sitemap.xsl');
  }
  
  console.log('Sitemap generation completed successfully');
} catch (error) {
  console.error('Error generating sitemaps:', error);
  process.exit(1);
}