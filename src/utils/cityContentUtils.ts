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
    .replace(/[^a-z0-9]/g, '')
    .trim();
};

export const createCitiesObject = (cities: string[]) => {
  return cities.reduce((acc, city) => {
    const key = normalizeCity(city);
    if (!key) return acc; // Skip empty keys
    return {
      ...acc,
      [key]: createCityContent(city)
    };
  }, {});
};