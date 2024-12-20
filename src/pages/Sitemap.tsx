import { generateSitemapXml } from '../utils/sitemapUtils';

const Sitemap = () => {
  const xmlContent = generateSitemapXml();
  
  return (
    <pre className="whitespace-pre-wrap">
      {xmlContent}
    </pre>
  );
};

export default Sitemap;