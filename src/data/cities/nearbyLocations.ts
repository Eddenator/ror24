interface NearbyLocations {
  [city: string]: string[];
}

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
  // Major cities and their surrounding areas
  stockholm: [
    "Solna", "Nacka", "Lidingö", "Huddinge", "Bromma", 
    "Södertälje", "Vallentuna", "Upplands Väsby"
  ],
  goteborg: [
    "Mölndal", "Kungsbacka", "Kungälv", "Lerum", "Partille",
    "Torslanda", "Kärna", "Ytterby"
  ],
  malmo: [
    "Lund", "Trelleborg", "Staffanstorp", "Lomma", "Burlöv",
    "Svedala", "Vellinge"
  ],
  uppsala: [
    "Enköping", "Knivsta", "Bålsta", "Storvreta", "Sigtuna"
  ],
  vasteras: [
    "Köping", "Hallstahammar", "Sala", "Enköping", "Eskilstuna"
  ],
  orebro: [
    "Kumla", "Hallsberg", "Lindesberg", "Karlskoga"
  ],
  linkoping: [
    "Norrköping", "Mjölby", "Motala", "Finspång"
  ],
  helsingborg: [
    "Ängelholm", "Höganäs", "Landskrona", "Bjuv", "Åstorp"
  ],
  jonkoping: [
    "Nässjö", "Huskvarna", "Värnamo", "Tranås"
  ],
  norrkoping: [
    "Linköping", "Finspång", "Söderköping", "Nyköping"
  ],
  umea: [
    "Holmsund", "Sävar", "Vännäs", "Robertsfors"
  ],
  lulea: [
    "Boden", "Piteå", "Kalix", "Älvsbyn"
  ],
  boras: [
    "Ulricehamn", "Kinna", "Dalsjöfors", "Fristad"
  ],
  sodertalje: [
    "Nykvarn", "Stockholm", "Järna", "Salem"
  ],
  eskilstuna: [
    "Västerås", "Strängnäs", "Torshälla", "Kungsör"
  ],
  gavle: [
    "Sandviken", "Söderhamn", "Skutskär", "Valbo"
  ],
  sundsvall: [
    "Timrå", "Härnösand", "Matfors", "Njurunda"
  ],
  karlstad: [
    "Kristinehamn", "Hammarö", "Kil", "Grums"
  ],
  // Smaller cities and their connections
  alingsas: [
    "Vårgårda", "Lerum", "Herrljunga", "Borås"
  ],
  kungalv: [
    "Göteborg", "Kärna", "Ytterby", "Marstrand"
  ],
  karna: [
    "Kungälv", "Ytterby", "Göteborg", "Marstrand"
  ],
  ytterby: [
    "Kungälv", "Kärna", "Göteborg", "Marstrand"
  ],
  // ... Add more cities as needed
};