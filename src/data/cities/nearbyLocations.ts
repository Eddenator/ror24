import { NearbyLocations } from './types';
import { allRegions } from './regions/allRegions';
import { counties } from './counties';
import { normalizeCity } from '../../utils/cityContentUtils';

// Get all valid cities from counties
const allValidCities = new Set(counties["Alla städer"]);

// Function to filter and validate nearby cities
const validateAndFilterNearby = (nearby: string[]): string[] => {
  return nearby.filter(city => allValidCities.has(city));
};

// Normalize all keys and validate nearby cities
export const nearbyLocations: NearbyLocations = {};

Object.entries(allRegions).forEach(([city, nearby]) => {
  if (allValidCities.has(city)) {
    const normalizedCity = normalizeCity(city);
    nearbyLocations[normalizedCity] = validateAndFilterNearby(nearby);
  } else {
    console.warn(`Warning: City "${city}" is referenced in regions but does not exist in counties list`);
  }
});

export const getNearbyLocations = (city: string): string[] => {
  const normalizedCity = normalizeCity(city);
  
  console.log('Getting nearby locations for:', city);
  console.log('Normalized city:', normalizedCity);
  console.log('Available locations:', Object.keys(nearbyLocations));
  console.log('Is city in valid cities list:', allValidCities.has(city));
  
  return nearbyLocations[normalizedCity] || [];
};