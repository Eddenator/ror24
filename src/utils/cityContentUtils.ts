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

export const createCityContent = (city: string) => {
  return {
    city,
    normalizedName: normalizeCity(city)
  };
};

export const createCitiesObject = (cities: string[]) => {
  const cityContent: { [key: string]: any } = {};
  
  cities.forEach(city => {
    const key = normalizeCity(city);
    if (!key) {
      console.warn(`Warning: Empty key generated for city "${city}"`);
      return;
    }
    
    console.log(`Creating content for city: "${city}" with URL key: "${key}"`);
    cityContent[key] = createCityContent(city);
  });
  
  return cityContent;
};