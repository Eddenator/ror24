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
    .trim();

  console.log('Normalized city:', normalizedCity);
  console.log('Available locations:', Object.keys(nearbyLocations));
  
  return nearbyLocations[normalizedCity] || [];
};

export const nearbyLocations: NearbyLocations = {
  stockholm: [
    "Solna",
    "Sundbyberg",
    "Nacka",
    "Lidingö",
    "Danderyd",
    "Sollentuna",
    "Täby",
    "Järfälla",
    "Huddinge",
    "Botkyrka"
  ],
  
  goteborg: [
    "Mölndal",
    "Partille",
    "Kungälv",
    "Kungsbacka",
    "Lerum",
    "Härryda",
    "Ale",
    "Öckerö"
  ],
  
  malmo: [
    "Lund",
    "Trelleborg",
    "Vellinge",
    "Lomma",
    "Staffanstorp",
    "Svedala",
    "Burlöv"
  ],

  umea: [
    "Holmsund",
    "Obbola",
    "Vännäs",
    "Robertsfors",
    "Sävar",
    "Hörnefors"
  ],
  
  karna: [
    "Kungälv",
    "Ytterby",
    "Marstrand",
    "Göteborg",
    "Hisings Kärra"
  ],

  alingsas: [
    "Vårgårda",
    "Lerum",
    "Floda",
    "Göteborg"
  ],

  kungalv: [
    "Kärna",
    "Ytterby",
    "Göteborg",
    "Hisings Kärra",
    "Marstrand"
  ],

  ytterby: [
    "Kungälv",
    "Kärna",
    "Göteborg",
    "Hisings Kärra"
  ],

  uppsala: [
    "Knivsta",
    "Storvreta",
    "Bälinge",
    "Björklinge",
    "Vattholma"
  ],

  vasteras: [
    "Hallstahammar",
    "Surahammar",
    "Köping",
    "Enköping",
    "Sala"
  ],

  orebro: [
    "Kumla",
    "Hallsberg",
    "Lindesberg",
    "Karlskoga",
    "Nora"
  ],

  linkoping: [
    "Norrköping",
    "Mjölby",
    "Motala",
    "Finspång",
    "Åtvidaberg"
  ],

  helsingborg: [
    "Landskrona",
    "Höganäs",
    "Ängelholm",
    "Bjuv",
    "Åstorp"
  ],

  jonkoping: [
    "Huskvarna",
    "Nässjö",
    "Vaggeryd",
    "Mullsjö",
    "Gränna"
  ],

  norrkoping: [
    "Linköping",
    "Finspång",
    "Söderköping",
    "Valdemarsvik",
    "Åby"
  ],

  lund: [
    "Malmö",
    "Staffanstorp",
    "Lomma",
    "Eslöv",
    "Dalby"
  ],

  gavle: [
    "Sandviken",
    "Storvik",
    "Skutskär",
    "Furuvik",
    "Valbo"
  ],

  boras: [
    "Ulricehamn",
    "Bollebygd",
    "Kinna",
    "Dalsjöfors",
    "Fristad"
  ],

  eskilstuna: [
    "Torshälla",
    "Strängnäs",
    "Kungsör",
    "Malmköping",
    "Arboga"
  ],

  sodertalje: [
    "Nykvarn",
    "Salem",
    "Järna",
    "Tumba",
    "Rönninge"
  ],

  karlstad: [
    "Hammarö",
    "Kil",
    "Grums",
    "Forshaga",
    "Kristinehamn"
  ],

  lulea: [
    "Boden",
    "Piteå",
    "Älvsbyn",
    "Råneå",
    "Kalix"
  ]
};