import { generateSitemapUrls } from '../utils/sitemapUtils';

const Sitemap = () => {
  const urls = generateSitemapUrls();
  
  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(({ url, priority }) => `
  <url>
    <loc>${url}</loc>
    <changefreq>daily</changefreq>
    <priority>${priority}</priority>
  </url>`).join('')}
</urlset>`;

  return (
    <pre>
      {xmlContent}
    </pre>
  );
};

export default Sitemap;