import { CityContent } from '../types/cityContent';
import { defaultCityContent } from './defaultCityContent';
import { stockholmRegionCities } from './cities/stockholmRegion';
import { stockholmSuburbsCities } from './cities/stockholmSuburbs';
import { otherCities } from './cities/otherCities';

export { defaultCityContent };

export const cityContent: { [key: string]: CityContent } = {
  ...stockholmRegionCities,
  ...stockholmSuburbsCities,
  ...otherCities
};