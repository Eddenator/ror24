import { CityContent } from '../types/cityContent';
import { defaultCityContent } from '../data/defaultCityContent';
import { cityContent } from '../data/cityContent';

export const normalizeCity = (city: string): string => {
  return city.toLowerCase()
    .replace(/å/g, 'a')
    .replace(/ä/g, 'a')
    .replace(/ö/g, 'o')
    .replace(/é/g, 'e')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/--+/g, '-')
    .replace(/^-|-$/g, '')
    .trim();
};

export const createCityContent = (city: string): CityContent => {
  return {
    ...defaultCityContent,
    description: defaultCityContent.description.replace(/%city%/g, city)
  };
};

export const getCityContent = (normalizedCity: string): CityContent | null => {
  return cityContent[normalizedCity] || null;
};

export const createCitiesObject = (cities: string[]) => {
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