import { CityContent } from '../types/cityContent';
import { defaultCityContent } from '../data/defaultCityContent';

export const createCityContent = (city: string): CityContent => ({
  ...defaultCityContent,
  heroImage: "https://s3.eu-west-1.amazonaws.com/storage.quickbutik.com/stores/28340q/files/glas.jpg",
  description: defaultCityContent.description.split('%city%').join(city)
});

export const createCitiesObject = (cities: string[]) => {
  return cities.reduce((acc, city) => {
    const key = city.toLowerCase()
      .replace('å', 'a')
      .replace('ä', 'a')
      .replace('ö', 'o')
      .replace(/[^a-z0-9]/g, '');
    return {
      ...acc,
      [key]: createCityContent(city)
    };
  }, {});
};