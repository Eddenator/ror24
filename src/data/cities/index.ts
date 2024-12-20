import { createCitiesObject } from '../../utils/cityContentUtils';
import { counties } from './counties';

export const citiesByCounty = counties;

const allCities = Object.values(counties).flat();
export const cityContent = createCitiesObject(allCities);