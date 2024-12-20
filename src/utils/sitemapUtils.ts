import { counties } from '../data/cities/counties';
import { normalizeCity } from './cityContentUtils';

const URLS_PER_SITEMAP = 100;

const generateBaseUrls = () => [
  { url: 'https://glas24.se', priority: '1.0' },
  { url: 'https://glas24.se/om-oss', priority: '0.8' },
  { url: 'https://glas24.se/kontakt', priority: '0.8' },
  { url: 'https://glas24.se/omraden', priority: '0.8' },
];

const generateCityUrls = () => {
  const allCities = Object.values(counties).flat();
  const uniqueCities = [...new Set(allCities)].sort();
  return uniqueCities.map(city => ({
    url: `https://glas24.se/${normalizeCity(city)}`,
    priority: '0.8'
  }));
};

const generateSitemapContent = (urls: { url: string; priority: string }[]) => {
  const sortedUrls = urls.sort((a, b) => a.url.localeCompare(b.url));
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sortedUrls.map(({ url, priority }) => `  <url>
    <loc>${url}</loc>
    <changefreq>daily</changefreq>
    <priority>${priority}</priority>
  </url>`).join('\n')}
</urlset>`;
};

const generateSitemapIndex = (sitemapCount: number) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Array.from({ length: sitemapCount }, (_, i) => `  <sitemap>
    <loc>https://glas24.se/sitemap${i + 1}.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>`).join('\n')}
</sitemapindex>`;
};

export const generateSitemaps = () => {
  const baseUrls = generateBaseUrls();
  const cityUrls = generateCityUrls();
  const allUrls = [...baseUrls, ...cityUrls];
  
  // Split URLs into chunks
  const sitemaps: string[] = [];
  for (let i = 0; i < allUrls.length; i += URLS_PER_SITEMAP) {
    const chunk = allUrls.slice(i, i + URLS_PER_SITEMAP);
    sitemaps.push(generateSitemapContent(chunk));
  }
  
  return {
    sitemaps,
    index: generateSitemapIndex(sitemaps.length)
  };
};