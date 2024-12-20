import { createCitiesObject } from '../../utils/cityContentUtils';
import { counties } from './counties';
import { otherCities } from './otherCities';

export const citiesByCounty = counties;

// Create a flat array of all cities from all counties
const allCities = Object.values(counties).flat();

// Create city content for all cities and merge with otherCities
export const cityContent = {
  ...createCitiesObject(allCities),
  ...otherCities
};