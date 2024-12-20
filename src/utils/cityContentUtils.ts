import { CityContent } from '../types/cityContent';
import { defaultCityContent } from '../data/defaultCityContent';

export const createCityContent = (city: string): CityContent => ({
  ...defaultCityContent,
  heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c",
  description: defaultCityContent.description.replace(/glasmästare(\?| i )/g, `glasmästare i ${city}$1`)
});