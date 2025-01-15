import { CityContent } from '../types/cityContent';
import { defaultCityContent } from '../data/defaultCityContent';

export const normalizeCity = (city: string): string => {
  return city.toLowerCase()
    .replace(/å/g, 'a')
    .replace(/ä/g, 'a')
    .replace(/ö/g, 'o')
    .replace(/é/g, 'e')
    .replace(/[^a-z0-9]/g, '-')
    .replace(/--+/g, '-')
    .replace(/^-|-$/g, '')
    .trim();
};

export const createCityContent = (city: string): CityContent => {
  console.log(`Generating content for city: ${city}`);
  
  return {
    ...defaultCityContent,
    description: typeof defaultCityContent.description === 'function' 
      ? defaultCityContent.description(city)
      : defaultCityContent.description
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