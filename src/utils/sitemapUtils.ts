import { counties } from '../data/cities/counties';
import { normalizeCity } from './cityContentUtils';

const URLS_PER_SITEMAP = 1000; // Increased to keep all URLs in one file for now

const generateBaseUrls = () => [
  { url: 'https://glas24.se', priority: '1.0' },
  { url: 'https://glas24.se/hem', priority: '0.9' },
  { url: 'https://glas24.se/om-oss', priority: '0.8' },
  { url: 'https://glas24.se/kontakt', priority: '0.8' },
  { url: 'https://glas24.se/omraden', priority: '0.9' }
];

const generateCityUrls = () => {
  const allCities = counties["Alla städer"];
  return allCities
    .sort((a, b) => a.localeCompare(b, 'sv'))
    .map(city => ({
      url: `https://glas24.se/${normalizeCity(city)}`,
      priority: '0.8'
    }));
};

const generateSitemapContent = (urls: { url: string; priority: string }[]) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(({ url, priority }) => `  <url>
    <loc>${url}</loc>
    <changefreq>daily</changefreq>
    <priority>${priority}</priority>
  </url>`).join('\n')}
</urlset>`;
};

const generateSitemapIndex = (count: number) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="sitemap.xsl"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Array.from({ length: count }, (_, i) => `  <sitemap>
    <loc>https://glas24.se/sitemap${i + 1}.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>`).join('\n')}
</sitemapindex>`;
};

export const generateSitemaps = () => {
  const allUrls = [...generateBaseUrls(), ...generateCityUrls()];
  const sitemapCount = Math.ceil(allUrls.length / URLS_PER_SITEMAP);
  
  const sitemaps = Array.from({ length: sitemapCount }, (_, i) => {
    const start = i * URLS_PER_SITEMAP;
    const end = start + URLS_PER_SITEMAP;
    return generateSitemapContent(allUrls.slice(start, end));
  });

  return {
    sitemaps,
    index: generateSitemapIndex(sitemapCount)
  };
};