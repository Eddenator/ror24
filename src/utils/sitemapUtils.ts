import { counties } from '../data/cities/counties';
import { normalizeCity } from './cityContentUtils';

export const generateSitemapUrls = () => {
  const baseUrls = [
    { url: 'https://glas24.se', priority: '1.0' },
    { url: 'https://glas24.se/om-oss', priority: '0.8' },
    { url: 'https://glas24.se/kontakt', priority: '0.8' },
    { url: 'https://glas24.se/omraden', priority: '0.8' },
  ];

  const cityUrls = Object.values(counties)
    .flat()
    .map(city => ({
      url: `https://glas24.se/${normalizeCity(city)}`,
      priority: '0.8'
    }));

  return [...baseUrls, ...cityUrls];
};

// Add debug logging
console.log('Total number of URLs in sitemap:', generateSitemapUrls().length);
Object.entries(counties).forEach(([county, cities]) => {
  console.log(`${county}: ${cities.length} cities`);
});