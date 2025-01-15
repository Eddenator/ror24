interface NearbyLocations {
  [city: string]: string[];
}

export const nearbyLocations: NearbyLocations = {
  // Stockholmsområdet
  stockholm: ["Solna", "Sundbyberg", "Nacka", "Lidingö", "Huddinge"],
  solna: ["Stockholm", "Sundbyberg", "Danderyd", "Sollentuna"],
  
  // Göteborgsområdet
  goteborg: ["Mölndal", "Partille", "Kungälv", "Lerum"],
  molndal: ["Göteborg", "Partille", "Kungsbacka"],
  
  // Malmöområdet
  malmo: ["Lund", "Burlöv", "Lomma", "Staffanstorp"],
  lund: ["Malmö", "Staffanstorp", "Eslöv", "Lomma"],
  
  // Växjöområdet
  vaxjo: ["Alvesta", "Lessebo", "Tingsryd", "Rottne", "Ingelstad"],
  alvesta: ["Växjö", "Ljungby", "Älmhult"],
  
  // Lägg till fler städer efter behov...
};

export const getNearbyLocations = (city: string): string[] => {
  const normalizedCity = city.toLowerCase()
    .replace(/å/g, 'a')
    .replace(/ä/g, 'a')
    .replace(/ö/g, 'o')
    .replace(/[^a-z0-9]/g, '');
    
  return nearbyLocations[normalizedCity] || [];
};