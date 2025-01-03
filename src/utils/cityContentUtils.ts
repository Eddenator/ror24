import { CityContent } from '../types/cityContent';
import { defaultCityContent } from '../data/defaultCityContent';

export const normalizeCity = (city: string): string => {
  return city.toLowerCase()
    .replace(/å/g, 'a')
    .replace(/ä/g, 'a')
    .replace(/ö/g, 'o')
    .replace(/é/g, 'e')
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^a-z0-9-]/g, '') // Remove all other special characters except hyphens
    .replace(/--+/g, '-') // Replace multiple consecutive hyphens with a single hyphen
    .replace(/^-|-$/g, '') // Remove leading and trailing hyphens
    .trim();
};

export const createCityContent = (city: string): CityContent => {
  console.log(`Generating content for city: ${city}`);
  
  return {
    ...defaultCityContent,
    description: defaultCityContent.description.replace(/%city%/g, city)
  };
};

export const createCitiesObject = (cities: string[]) => {
  console.log(`Creating content for ${cities.length} cities`);
  const cityContent: { [key: string]: CityContent } = {};
  
  cities.forEach(city => {
    const key = normalizeCity(city);
    if (!key) {
      console.warn(`Warning: Empty key generated for city "${city}"`);
      return;
    }
    cityContent[key] = createCityContent(city);
  });
  
  console.log(`Successfully generated content for ${Object.keys(cityContent).length} cities`);
  return cityContent;
};