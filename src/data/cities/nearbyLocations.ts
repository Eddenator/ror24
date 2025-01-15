import { NearbyLocations } from './types';
import { stockholmRegion } from './regions/stockholmRegion';
import { skaneRegion } from './regions/skaneRegion';
import { vastraGotalandRegion } from './regions/vastraGotalandRegion';
import { smalandRegion } from './regions/smalandRegion';
import { norrlandRegion } from './regions/norrlandRegion';
import { mellansverige } from './regions/mellansverige';
import { hallandRegion } from './regions/hallandRegion';
import { blekingeRegion } from './regions/blekingeRegion';
import { kalmarRegion } from './regions/kalmarRegion';
import { normalizeCity } from '../../utils/cityContentUtils';

// Combine all regional data
const rawLocations: NearbyLocations = {
  ...stockholmRegion,
  ...skaneRegion,
  ...vastraGotalandRegion,
  ...smalandRegion,
  ...norrlandRegion,
  ...mellansverige,
  ...hallandRegion,
  ...blekingeRegion,
  ...kalmarRegion
};

// Normalize all keys in the combined object
export const nearbyLocations: NearbyLocations = {};
Object.entries(rawLocations).forEach(([city, nearby]) => {
  const normalizedCity = normalizeCity(city);
  nearbyLocations[normalizedCity] = nearby;
});

export const getNearbyLocations = (city: string): string[] => {
  const normalizedCity = normalizeCity(city);
  
  // Log for debugging
  console.log('Getting nearby locations for:', city);
  console.log('Normalized city:', normalizedCity);
  console.log('Available locations:', Object.keys(nearbyLocations));
  
  return nearbyLocations[normalizedCity] || [];
};