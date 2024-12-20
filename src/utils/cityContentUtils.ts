import { CityContent } from '../types/cityContent';
import { defaultCityContent } from '../data/defaultCityContent';

export const createCityContent = (city: string): CityContent => ({
  ...defaultCityContent,
  heroImage: "https://s3.eu-west-1.amazonaws.com/storage.quickbutik.com/stores/28340q/files/glas.jpg",
  description: defaultCityContent.description.replace(/%city%/g, city)
});

export const normalizeCity = (city: string): string => {
  return city.toLowerCase()
    .replace(/å/g, 'a')
    .replace(/ä/g, 'a')
    .replace(/ö/g, 'o')
    .replace(/é/g, 'e')
    .replace(/[^a-z0-9-]/g, '') // Allow hyphens in normalized city names
    .replace(/--+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-|-$/g, '') // Remove leading/trailing hyphens
    .trim();
};

export const createCitiesObject = (cities: string[]) => {
  const cityContent: { [key: string]: CityContent } = {};
  
  cities.forEach(city => {
    const key = normalizeCity(city);
    if (!key) return; // Skip empty keys
    
    // Log each city and its normalized key for debugging
    console.log(`Normalizing city: "${city}" -> "${key}"`);
    
    cityContent[key] = createCityContent(city);
  });
  
  return cityContent;
};