import { generateSitemaps } from '../utils/sitemapUtils';

const ViewSitemap = () => {
  const { sitemaps } = generateSitemaps();
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Sitemap Preview</h1>
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
        {sitemaps[0]}
      </pre>
    </div>
  );
};

export default ViewSitemap;