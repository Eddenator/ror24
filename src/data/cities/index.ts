import { createCitiesObject } from '../../utils/cityContentUtils';
import { counties } from './counties';

// Create a flat array of all cities from all counties
const allCities = Object.values(counties).flat();

// Create city content for all cities
export const cityContent = createCitiesObject(allCities);

// Export counties for the Areas page and sitemap generation
export { counties };

// Add console logging to help debug city content generation
console.log('Generated city content for cities:', Object.keys(cityContent).length);
console.log('Total number of cities:', allCities.length);