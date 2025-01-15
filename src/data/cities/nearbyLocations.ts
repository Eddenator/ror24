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
    .replace(/[^a-z0-9]/g, '');

  return nearbyLocations[normalizedCity] || [];
};

/**
 * Här börjar vårt stora nearbyLocations-objekt!
 */
export const nearbyLocations: NearbyLocations = {
  // Stockholmsområdet
  stockholm: [
    "Solna", "Sundbyberg", "Nacka", "Lidingö", "Huddinge", "Kista", 
    "Bromma", "Farsta", "Årsta", "Älvsjö", "Tyresö", "Haninge", 
    "Tumba", "Tullinge", "Tungelsta", "Älta", "Skärholmen", "Skogås", 
    "Spånga", "Järfälla", "Upplands Väsby", "Sollentuna"
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

  // Göteborgsområdet
  goteborg: [
    "Mölndal", "Partille", "Kungälv", "Lerum", "Hisings Backa",
    "Hisings Kärra", "Torslanda", "Västra Frölunda", "Angered",
    "Hovås", "Kungsbacka"
  ],
  molndal: ["Göteborg", "Partille", "Kungsbacka", "Mölnlycke"],
  partille: ["Göteborg", "Mölndal", "Lerum", "Floda", "Jonsered"],
  kungalv: ["Göteborg", "Kareby", "Ytterby", "Nödinge", "Surte"],
  lerum: ["Göteborg", "Partille", "Floda", "Gråbo", "Stenkullen"],
  angered: ["Göteborg", "Hisings Backa", "Gunnilse", "Bergsjön", "Partille"],
  "vastra-frolunda": ["Göteborg", "Mölndal", "Hovås", "Askim"],
  hovas: ["Göteborg", "Askim", "Billdal", "Kungsbacka"],
  kungsbacka: ["Göteborg", "Särö", "Vallda", "Kullavik", "Onsala", "Mölndal"],
  
  // Malmöområdet
  malmo: ["Lund", "Burlöv", "Lomma", "Staffanstorp", "Oxie", "Klagshamn", "Hyllie"],
  lund: ["Malmö", "Staffanstorp", "Eslöv", "Lomma", "Dalby", "Södra Sandby"],
  staffanstorp: ["Malmö", "Lund", "Bara", "Hjärup"],
  lomma: ["Malmö", "Lund", "Alnarp", "Flädie", "Burlöv"],
  burlov: ["Malmö", "Lomma", "Åkarp"],

  // Specialfall med bindestreck (måste använda citattecken)
  "arsta-havsbad": ["Årsta", "Haninge", "Nynäshamn"],
  "hisings-backa": ["Göteborg", "Angered", "Hisings Kärra"],
  "hisings-karra": ["Göteborg", "Hisings Backa", "Kungälv"],
  "saltsjoboo": ["Nacka", "Saltsjöbaden", "Gustavsberg", "Stockholm"],
  "saltsjoduvnas": ["Nacka", "Saltsjöbaden", "Stockholm"],
  "saltsjobaden": ["Nacka", "Saltsjö-Boo", "Älta", "Gustavsberg"],

  // Övriga städer
  enkoping: ["Bålsta", "Västerås", "Strängnäs", "Uppsala"],
  norrtalje: ["Rimbo", "Hallstavik", "Stockholm", "Åkersberga"],
  nykoping: ["Oxelösund", "Trosa", "Södertälje", "Katrineholm", "Flen"],
  sodertalje: ["Nykvarn", "Järna", "Stockholm", "Botkyrka"],
  vasterhaninge: ["Haninge", "Stockholm", "Tungelsta", "Nynäshamn"],
  nynashamn: ["Ösmo", "Sorunda", "Tungelsta", "Stockholm"],
  arsta: ["Stockholm", "Årsta havsbad", "Älvsjö", "Enskede"],
  bagarmossen: ["Farsta", "Sköndal", "Skarpnäck", "Kärrtorp (ex.)"],
  enskede: ["Farsta", "Gamla Enskede (ex.)", "Årsta", "Stockholm"],
  jarna: ["Södertälje", "Mörkö", "Hölö (ex.)"],
  tungelsta: ["Haninge", "Västerhaninge", "Nynäshamn", "Stockholm"],
};
