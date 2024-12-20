import { CityContent } from '../../types/cityContent';
import { counties } from './counties';
import { createCityContent, normalizeCity } from '../../utils/cityContentUtils';

// Create a flat array of all cities from all counties
const allCities = Object.values(counties).flat();

// Create city content for all cities
const createCitiesObject = (cities: string[]) => {
  const cityContentObj: { [key: string]: CityContent } = {};
  
  cities.forEach(city => {
    const key = normalizeCity(city);
    if (!key) {
      console.warn(`Warning: Empty key generated for city "${city}"`);
      return;
    }
    cityContentObj[key] = createCityContent(city);
  });
  
  return cityContentObj;
};

export const cityContent = createCitiesObject(allCities);

// Export counties for the Areas page and sitemap generation
export { counties };

// Add console logging to help debug city content generation
console.log('Generated city content for cities:', Object.keys(cityContent).length);
console.log('Total number of cities:', allCities.length);