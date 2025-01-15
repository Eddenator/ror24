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
import { counties } from './counties';

// Get all valid cities from counties
const allValidCities = new Set(counties["Alla städer"]);

// Function to filter and validate nearby cities
const validateAndFilterNearby = (nearby: string[]): string[] => {
  return nearby.filter(city => allValidCities.has(city));
};

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

// Normalize all keys in the combined object and validate nearby cities
export const nearbyLocations: NearbyLocations = {};
Object.entries(rawLocations).forEach(([city, nearby]) => {
  if (allValidCities.has(city)) {
    const normalizedCity = normalizeCity(city);
    nearbyLocations[normalizedCity] = validateAndFilterNearby(nearby);
  } else {
    console.warn(`Warning: City "${city}" is referenced in regions but does not exist in counties list`);
  }
});

export const getNearbyLocations = (city: string): string[] => {
  const normalizedCity = normalizeCity(city);
  
  // Log for debugging
  console.log('Getting nearby locations for:', city);
  console.log('Normalized city:', normalizedCity);
  console.log('Available locations:', Object.keys(nearbyLocations));
  console.log('Is city in valid cities list:', allValidCities.has(city));
  
  return nearbyLocations[normalizedCity] || [];
};