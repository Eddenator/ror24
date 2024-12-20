import { generateSitemaps } from '../utils/sitemapUtils';

const Sitemap = () => {
  const { sitemaps } = generateSitemaps();
  
  // Display the first sitemap content as an example
  const xmlContent = sitemaps[0] || '';
  
  return (
    <pre className="whitespace-pre-wrap">
      {xmlContent}
    </pre>
  );
};

export default Sitemap;