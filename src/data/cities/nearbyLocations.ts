import { NearbyLocations } from './types';
import { stockholmRegion } from './regions/stockholmRegion';
import { skaneRegion } from './regions/skaneRegion';
import { vastraGotalandRegion } from './regions/vastraGotalandRegion';
import { smalandRegion } from './regions/smalandRegion';
import { norrlandRegion } from './regions/norrlandRegion';
import { mellansverige } from './regions/mellansverige';
import { hallandRegion } from './regions/hallandRegion';
import { blekingeRegion } from './regions/blekingeRegion';

export const getNearbyLocations = (city: string): string[] => {
  const normalizedCity = city
    .toLowerCase()
    .replace(/å/g, 'a')
    .replace(/ä/g, 'a')
    .replace(/ö/g, 'o')
    .replace(/é/g, 'e')
    .replace(/[^a-z0-9]/g, '')
    .trim();

  console.log('Normalized city:', normalizedCity);
  console.log('Available locations:', Object.keys(nearbyLocations));
  
  return nearbyLocations[normalizedCity] || [];
};

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