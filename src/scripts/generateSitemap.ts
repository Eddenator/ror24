import fs from 'fs';
import path from 'path';
import { generateSitemapXml } from '../utils/sitemapUtils';

const outputPath = path.resolve(__dirname, '../../public/sitemap.xml');

// Generate sitemap content
const sitemapContent = generateSitemapXml();

// Write to file
fs.writeFileSync(outputPath, sitemapContent);

console.log(`Sitemap generated at ${outputPath}`);