import { NearbyLocations } from './types';
import { stockholmRegion } from './regions/stockholmRegion';
import { skaneRegion } from './regions/skaneRegion';
import { vastraGotalandRegion } from './regions/vastraGotalandRegion';
import { smalandRegion } from './regions/smalandRegion';
import { norrlandRegion } from './regions/norrlandRegion';
import { mellansverige } from './regions/mellansverige';
import { hallandRegion } from './regions/hallandRegion';
import { blekingeRegion } from './regions/blekingeRegion';
import { normalizeCity } from '../../utils/cityContentUtils';

export const getNearbyLocations = (city: string): string[] => {
  const normalizedCity = normalizeCity(city);
  
  // Log for debugging
  console.log('Getting nearby locations for:', city);
  console.log('Normalized city:', normalizedCity);
  console.log('Available locations:', Object.keys(nearbyLocations));
  
  return nearbyLocations[normalizedCity] || [];
};

// Combine all regional data
export const nearbyLocations: NearbyLocations = {
  ...stockholmRegion,
  ...skaneRegion,
  ...vastraGotalandRegion,
  ...smalandRegion,
  ...norrlandRegion,
  ...mellansverige,
  ...hallandRegion,
  ...blekingeRegion
};

// Normalize all keys in the combined object
const normalizedLocations: NearbyLocations = {};
Object.entries(nearbyLocations).forEach(([city, nearby]) => {
  const normalizedCity = normalizeCity(city);
  normalizedLocations[normalizedCity] = nearby;
});

export { normalizedLocations as nearbyLocations };