import { counties } from '../data/cities/counties';
import { normalizeCity } from './cityContentUtils';

export const generateSitemapUrls = () => {
  const baseUrls = [
    { url: 'https://glas24.se', priority: '1.0' },
    { url: 'https://glas24.se/om-oss', priority: '0.8' },
    { url: 'https://glas24.se/kontakt', priority: '0.8' },
    { url: 'https://glas24.se/omraden', priority: '0.8' },
  ];

  // Get all cities and remove duplicates
  const allCities = [...new Set(Object.values(counties).flat())];
  
  console.log(`Processing ${allCities.length} unique cities for sitemap`);

  const cityUrls = allCities.map(city => {
    const normalizedCity = normalizeCity(city);
    console.log(`Generating URL for city: ${city} -> ${normalizedCity}`);
    return {
      url: `https://glas24.se/${normalizedCity}`,
      priority: '0.8'
    };
  });

  // Sort URLs alphabetically for consistency
  cityUrls.sort((a, b) => a.url.localeCompare(b.url));

  console.log(`Generated ${cityUrls.length} city URLs`);
  return [...baseUrls, ...cityUrls];
};