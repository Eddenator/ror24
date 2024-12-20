import fs from 'fs';
import path from 'path';
import { generateSitemaps } from '../src/utils/sitemapUtils';

const outputDir = path.resolve(__dirname, '../public');

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

try {
  // Generate all sitemaps
  const { sitemaps, index } = generateSitemaps();

  // Write sitemap index
  fs.writeFileSync(path.join(outputDir, 'sitemap.xml'), index);

  // Write individual sitemaps
  sitemaps.forEach((content, i) => {
    fs.writeFileSync(path.join(outputDir, `sitemap${i + 1}.xml`), content);
  });

  console.log(`Generated sitemap index and ${sitemaps.length} sitemap files in ${outputDir}`);
} catch (error) {
  console.error('Error generating sitemaps:', error);
  process.exit(1);
}