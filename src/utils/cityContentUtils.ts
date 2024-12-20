import { CityContent } from '../types/cityContent';
import { defaultCityContent } from '../data/defaultCityContent';

export const createCityContent = (city: string): CityContent => ({
  ...defaultCityContent,
  heroImage: "https://s3.eu-west-1.amazonaws.com/storage.quickbutik.com/stores/28340q/files/glas.jpg",
  description: defaultCityContent.description.replace(/%city%/g, city)
});