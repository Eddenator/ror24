interface NearbyLocations {
  [city: string]: string[];
}

/**
 * Hämtar "närliggande orter" baserat på normaliserat stadsnamn.
 */
export const getNearbyLocations = (city: string): string[] => {
  const normalizedCity = city
    .toLowerCase()
    .replace(/å/g, 'a')
    .replace(/ä/g, 'a')
    .replace(/ö/g, 'o')
    .replace(/é/g, 'e')
    .replace(/[^a-z0-9]/g, '')
    .replace(/--+/g, '-')
    .replace(/^-|-$/g, '')
    .trim();

  console.log('Normalized city:', normalizedCity);
  console.log('Available locations:', Object.keys(nearbyLocations));
  
  return nearbyLocations[normalizedCity] || [];
};

export const nearbyLocations: NearbyLocations = {
  // ===== START – STOCKHOLMSOMRÅDET =====
  // Stockholm suburbs
  alingsas: ["Vårgårda", "Lerum", "Floda", "Göteborg"],
  vanersborg: ["Trollhättan", "Vargön", "Uddevalla", "Mellerud"],
  boras: ["Ulricehamn", "Dalsjöfors", "Sandared", "Fristad"],
  goteborg: [
    "Mölndal",
    "Partille",
    "Kungälv",
    "Lerum",
    "Hisings Backa",
    "Hisings Kärra",
    "Västra Frölunda",
    "Angered",
    "Hovås",
    "Kungsbacka"
  ],
  molndal: ["Göteborg", "Partille", "Kungsbacka", "Mölnlycke"],
  partille: ["Göteborg", "Mölndal", "Lerum", "Floda", "Jonsered"],
  kungalv: ["Göteborg", "Kareby", "Ytterby", "Nödinge", "Surte"],
  lerum: ["Göteborg", "Partille", "Floda", "Gråbo", "Stenkullen"],
  angered: ["Göteborg", "Hisings Backa", "Gunnilse", "Bergsjön", "Partille"],
  vastrafrolunda: ["Göteborg", "Mölndal", "Hovås", "Askim"],
  hovas: ["Göteborg", "Askim", "Billdal", "Kungsbacka"],
  kungsbacka: ["Göteborg", "Särö", "Vallda", "Kullavik", "Onsala", "Mölndal"],
  hisingskarra: ["Göteborg", "Hisings Backa", "Kungälv"],
  hisingbacka: ["Göteborg", "Angered", "Hisings Kärra"],

  // Stockholm suburbs
  arsta: ["Stockholm", "Årsta havsbad", "Älvsjö", "Enskede"],
  arstahamn: ["Årsta", "Haninge", "Nynäshamn"],
  bagarmossen: ["Farsta", "Sköndal", "Skarpnäck"],
  enskede: ["Farsta", "Årsta", "Stockholm"],
  jarna: ["Södertälje", "Mörkö"],
  tungelsta: ["Haninge", "Västerhaninge", "Nynäshamn", "Stockholm"],

  // Grödinge and nearby
  grodinge: ["Tumba", "Södertälje", "Botkyrka", "Salem", "Rönninge"],
  tumba: ["Grödinge", "Tullinge", "Botkyrka", "Salem", "Stockholm"],
  botkyrka: ["Tumba", "Grödinge", "Salem", "Södertälje", "Stockholm"],
  salem: ["Rönninge", "Södertälje", "Tumba", "Grödinge"],
  ronninge: ["Salem", "Tumba", "Grödinge", "Södertälje"]
};
