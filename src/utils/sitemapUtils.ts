import { counties } from '../data/cities/counties';
import { normalizeCity } from './cityContentUtils';

export const generateSitemapUrls = () => {
  const baseUrls = [
    { url: 'https://glas24.se', priority: '1.0' },
    { url: 'https://glas24.se/om-oss', priority: '0.8' },
    { url: 'https://glas24.se/kontakt', priority: '0.8' },
    { url: 'https://glas24.se/omraden', priority: '0.8' },
  ];

  const allCities = Object.values(counties).flat();
  console.log(`Processing ${allCities.length} cities for sitemap...`);

  const cityUrls = allCities.map(city => {
    const normalizedCity = normalizeCity(city);
    const url = `https://glas24.se/${normalizedCity}`;
    console.log(`Generated URL for ${city}: ${url}`);
    return {
      url,
      priority: '0.8'
    };
  });

  console.log(`Successfully generated ${cityUrls.length} city URLs`);
  return [...baseUrls, ...cityUrls];
};