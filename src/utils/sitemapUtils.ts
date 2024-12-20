import { counties } from '../data/cities/counties';
import { normalizeCity } from './cityContentUtils';

export const generateSitemapUrls = () => {
  const baseUrls = [
    { url: 'https://glas24.se', priority: '1.0' },
    { url: 'https://glas24.se/om-oss', priority: '0.8' },
    { url: 'https://glas24.se/kontakt', priority: '0.8' },
    { url: 'https://glas24.se/omraden', priority: '0.8' },
  ];

  // Flatten all cities from all counties into a single array
  const allCities = Object.values(counties).flat();
  
  // Remove duplicates and sort alphabetically
  const uniqueCities = [...new Set(allCities)].sort();
  
  console.log(`Total number of cities before deduplication: ${allCities.length}`);
  console.log(`Number of unique cities: ${uniqueCities.length}`);

  const cityUrls = uniqueCities.map(city => {
    const normalizedCity = normalizeCity(city);
    console.log(`Processing city: ${city} -> ${normalizedCity}`);
    return {
      url: `https://glas24.se/${normalizedCity}`,
      priority: '0.8'
    };
  });

  console.log(`Successfully generated ${cityUrls.length} city URLs`);
  return [...baseUrls, ...cityUrls];
};