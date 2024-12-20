import { CityContent } from '../../types/cityContent';
import { counties } from './counties';

// Helper function to normalize city names
const normalizeCity = (city: string): string => {
  return city.toLowerCase()
    .replace(/å/g, 'a')
    .replace(/ä/g, 'a')
    .replace(/ö/g, 'o')
    .replace(/é/g, 'e')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/--+/g, '-')
    .replace(/^-|-$/g, '')
    .trim();
};

// Create a flat array of all cities from all counties
const allCities = Object.values(counties).flat();

// Create city content for all cities
const createCitiesObject = (cities: string[]) => {
  const cityContentObj: { [key: string]: CityContent } = {};
  
  cities.forEach(city => {
    const key = normalizeCity(city);
    if (!key) {
      console.warn(`Warning: Empty key generated for city "${city}"`);
      return;
    }
    cityContentObj[key] = {
      city,
      heroImage: "https://s3.eu-west-1.amazonaws.com/storage.quickbutik.com/stores/28340q/files/glas.jpg",
      description: `Behöver du en glasmästare i ${city}? Du har hittat rätt! Glas24 är en del av ett av Sveriges största nätverk av auktoriserade glasmästare, alltid redo att rycka in när du behöver hjälp. Vår filial i ${city} tillsammans med våra partners står redo, oavsett om dete är en akut jourutryckning mitt i natten eller ett planerat glasbyte.`,
      services: [
        "Fönsterbyte",
        "Glasreparation",
        "Glasmästeri",
        "Inglasning",
        "Bilglas"
      ]
    };
  });
  
  return cityContentObj;
};

export const cityContent = createCitiesObject(allCities);

// Export counties for the Areas page and sitemap generation
export { counties };

// Add console logging to help debug city content generation
console.log('Generated city content for cities:', Object.keys(cityContent).length);
console.log('Total number of cities:', allCities.length);