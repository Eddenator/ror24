import { createCitiesObject } from '../../utils/cityContentUtils';
import { counties } from './counties';

export const citiesByCounty = counties;

// Create a flat array of all cities from all counties
const allCities = Object.values(counties).flat();

// Create city content for all cities
export const cityContent = createCitiesObject(allCities);