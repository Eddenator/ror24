import { counties } from '../data/cities/counties';

const URLS_PER_SITEMAP = 1000;

const generateBaseUrls = () => [
  { url: 'https://glas24.se', priority: '1.0' },
  { url: 'https://glas24.se/hem', priority: '0.8' },
  { url: 'https://glas24.se/om-oss', priority: '0.8' },
  { url: 'https://glas24.se/kontakt', priority: '0.8' },
  { url: 'https://glas24.se/omraden', priority: '0.8' }
];

const generateCityUrls = () => {
  // Get all cities from the counties object
  const allCities = counties["Alla städer"];
  
  // Remove duplicates and sort alphabetically
  const uniqueCities = [...new Set(allCities)].sort((a, b) => 
    a.localeCompare(b, 'sv')
  );

  console.log(`Generating sitemap for ${uniqueCities.length} unique cities`);

  return uniqueCities.map(city => ({
    url: `https://glas24.se/${city.toLowerCase()
      .replace(/å/g, 'a')
      .replace(/ä/g, 'a')
      .replace(/ö/g, 'o')
      .replace(/[^a-z0-9]/g, '-')
      .replace(/--+/g, '-')
      .replace(/^-|-$/g, '')}`,
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
  
  console.log(`Generating ${sitemapCount} sitemaps for ${allUrls.length} total URLs`);
  
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