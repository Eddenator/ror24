import { counties } from '../data/cities/counties';
import { normalizeCity } from './cityContentUtils';

const generateBaseUrls = () => [
  { url: 'https://glas24.se', priority: '1.0' },
  { url: 'https://glas24.se/om-oss', priority: '0.8' },
  { url: 'https://glas24.se/kontakt', priority: '0.8' },
  { url: 'https://glas24.se/omraden', priority: '0.8' },
];

const generateCityUrls = () => {
  // Get all cities from counties
  const allCities = Object.values(counties).flat();
  
  // Remove duplicates and sort alphabetically
  const uniqueCities = [...new Set(allCities)].sort();
  
  console.log(`Generating URLs for ${uniqueCities.length} unique cities`);
  
  return uniqueCities.map(city => {
    const normalizedCity = normalizeCity(city);
    console.log(`Generated URL for city: ${city} -> ${normalizedCity}`);
    return {
      url: `https://glas24.se/${normalizedCity}`,
      priority: '0.8'
    };
  });
};

export const generateSitemapUrls = () => {
  const baseUrls = generateBaseUrls();
  const cityUrls = generateCityUrls();
  
  console.log(`Generated ${baseUrls.length} base URLs and ${cityUrls.length} city URLs`);
  
  return [...baseUrls, ...cityUrls];
};

export const generateSitemapXml = () => {
  const urls = generateSitemapUrls();
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(({ url, priority }) => `  <url>
    <loc>${url}</loc>
    <changefreq>daily</changefreq>
    <priority>${priority}</priority>
  </url>`).join('\n')}
</urlset>`;
};