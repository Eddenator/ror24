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

/**
 * Här börjar vårt stora nearbyLocations-objekt!
 * 
 * PART 1: Stockholmsområdet (+ omnejd).
 */
export const nearbyLocations: NearbyLocations = {
  // ===== START – STOCKHOLMSOMRÅDET =====
  stockholm: [
    "Solna",
    "Sundbyberg",
    "Nacka",
    "Lidingö",
    "Huddinge",
    "Kista",
    "Bromma",
    "Farsta",
    "Årsta",
    "Älvsjö",
    "Tyresö",
    "Haninge",
    "Tumba",
    "Tullinge",
    "Tungelsta",
    "Älta",
    "Skärholmen",
    "Skogås",
    "Spånga",
    "Järfälla",
    "Upplands Väsby",
    "Sollentuna",
  ],
  solna: ["Stockholm", "Sundbyberg", "Danderyd", "Bromma", "Sollentuna", "Kista"],
  sundbyberg: ["Stockholm", "Solna", "Bromma", "Kista", "Danderyd"],
  nacka: ["Stockholm", "Saltsjö-Boo", "Saltsjö-Duvnäs", "Saltsjöbaden", "Gustavsberg"],
  lidingo: ["Stockholm", "Djursholm", "Danderyd", "Nacka"],
  huddinge: ["Stockholm", "Farsta", "Skärholmen", "Tullinge", "Botkyrka"],
  danderyd: ["Stockholm", "Sollentuna", "Solna", "Lidingö", "Täby"],
  bromma: ["Stockholm", "Solna", "Sundbyberg", "Kista"],
  farsta: ["Stockholm", "Huddinge", "Haninge", "Enskede", "Bagarmossen", "Sköndal"],
  kista: ["Stockholm", "Sollentuna", "Husby", "Spånga", "Bromma"],
  haninge: ["Stockholm", "Handen", "Västerhaninge", "Tungelsta", "Tyresö"],
  jarfalla: ["Spånga", "Kista", "Sollentuna", "Viksjö", "Upplands Väsby", "Stockholm"],
  upplandsvasby: ["Upplands Väsby", "Märsta", "Sigtuna", "Sollentuna", "Kista", "Stockholm"],
  sollentuna: ["Kista", "Stockholm", "Danderyd", "Solna", "Upplands Väsby"],

  saltsjoboo: ["Nacka", "Saltsjöbaden", "Gustavsberg", "Stockholm"],
  saltsjoduvnas: ["Nacka", "Saltsjöbaden", "Stockholm"],
  saltsjobaden: ["Nacka", "Saltsjö-Boo", "Älta", "Gustavsberg"],

  // Kring Stockholm / Mellersta Sverige
  enkoping: ["Bålsta", "Västerås", "Strängnäs", "Uppsala"],
  norrtalje: ["Rimbo", "Hallstavik", "Stockholm", "Åkersberga"],
  nykoping: ["Oxelösund", "Trosa", "Södertälje", "Katrineholm", "Flen"],
  sodertalje: ["Nykvarn", "Järna", "Stockholm", "Botkyrka"],
  vasterhaninge: ["Haninge", "Stockholm", "Tungelsta", "Nynäshamn"],
  nynashamn: ["Ösmo", "Sorunda", "Tungelsta", "Stockholm"],

  // Exempel: några av de orter i sitemappen som ligger i Stockholms län:
  arsta: ["Stockholm", "Årsta havsbad", "Älvsjö", "Enskede"],
  arsta-havsbad: ["Årsta", "Haninge", "Nynäshamn"],
  bagarmossen: ["Farsta", "Sköndal", "Skarpnäck", "Kärrtorp (ex.)"],
  enskede: ["Farsta", "Gamla Enskede (ex.)", "Årsta", "Stockholm"],
  jarna: ["Södertälje", "Mörkö", "Hölö (ex.)"],
  tungelsta: ["Haninge", "Västerhaninge", "Nynäshamn", "Stockholm"],

  // Add Grödinge and nearby locations
  grodinge: ["Tumba", "Södertälje", "Botkyrka", "Salem", "Rönninge"],
  tumba: ["Grödinge", "Tullinge", "Botkyrka", "Salem", "Stockholm"],
  botkyrka: ["Tumba", "Grödinge", "Salem", "Södertälje", "Stockholm"],
  salem: ["Rönninge", "Södertälje", "Tumba", "Grödinge"],
  ronninge: ["Salem", "Tumba", "Grödinge", "Södertälje"],

  // ... fortsätter (Part 2) ...
};
