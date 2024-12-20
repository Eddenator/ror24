import { createCitiesObject } from '../../utils/cityContentUtils';
import { counties } from './counties';
import { otherCities } from './otherCities';
import { stockholmRegionCities } from './stockholmRegion';
import { stockholmSuburbsCities } from './stockholmSuburbs';

// Flatten all cities from counties into a single array
const allCities = Object.values(counties).flat();

// Merge all city content sources
export const cityContent = {
  ...createCitiesObject(allCities),
  ...otherCities,
  ...stockholmRegionCities,
  ...stockholmSuburbsCities
};

export const citiesByCounty = counties;