import { CityContent } from '../types/cityContent';
import { defaultCityContent } from '../data/defaultCityContent';

export const normalizeCity = (city: string): string => {
  return city.toLowerCase()
    .replace(/å/g, 'a')
    .replace(/ä/g, 'a')
    .replace(/ö/g, 'o')
    .replace(/é/g, 'e')
    .replace(/[^a-z0-9]/g, '-')
    .replace(/--+/g, '-')
    .replace(/^-|-$/g, '')
    .trim();
};

export const createCityContent = (city: string): CityContent => {
  const heroImages = [
    "photo-1472396961693-142e6e269027",
    "photo-1466721591366-2d5fba72006d",
    "photo-1493962853295-0fd70327578a",
    "photo-1438565434616-3ef039228b15",
    "photo-1469041797191-50ace28483c3"
  ];
  
  // Välj en slumpmässig bild för varje stad
  const randomImage = heroImages[Math.floor(Math.random() * heroImages.length)];
  const heroImage = `https://images.unsplash.com/${randomImage}`;

  console.log(`Generating content for city: ${city}`);
  
  return {
    heroImage,
    description: defaultCityContent.description.replace(/%city%/g, city),
    services: defaultCityContent.services
  };
};

export const createCitiesObject = (cities: string[]) => {
  console.log(`Creating content for ${cities.length} cities`);
  const cityContent: { [key: string]: CityContent } = {};
  
  cities.forEach(city => {
    const key = normalizeCity(city);
    if (!key) {
      console.warn(`Warning: Empty key generated for city "${city}"`);
      return;
    }
    cityContent[key] = createCityContent(city);
  });
  
  console.log(`Successfully generated content for ${Object.keys(cityContent).length} cities`);
  return cityContent;
};