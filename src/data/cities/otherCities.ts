import { createCityContent } from '../../utils/cityContentUtils';

// Create a function to generate city content for an array of cities
const createMultipleCityContent = (cities: string[]) => {
  return cities.reduce((acc, city) => {
    const key = city.toLowerCase()
      .replace(/å/g, 'a')
      .replace(/ä/g, 'a')
      .replace(/ö/g, 'o')
      .replace(/[^a-z0-9]/g, '');
    return {
      ...acc,
      [key]: createCityContent(city)
    };
  }, {});
};

// List all additional cities
const additionalCities = [
  "Alingsås", "Borgholm", "Falkenberg", "Falun", "Kalmar", "Karlskoga",
  "Karlskrona", "Kristianstad", "Landskrona", "Motala", "Nyköping",
  "Piteå", "Sandviken", "Skellefteå", "Skövde", "Strömstad", "Trelleborg",
  "Uddevalla", "Vallentuna", "Varberg", "Ängelholm", "Örnsköldsvik",
  "Borlänge", "Borås", "Eskilstuna", "Gävle", "Halmstad", "Helsingborg",
  "Jönköping", "Karlstad", "Linköping", "Luleå", "Lund", "Malmö",
  "Norrköping", "Stockholm", "Sundsvall", "Södertälje", "Umeå", "Uppsala",
  "Västerås", "Växjö", "Örebro", "Östersund", "Enköping", "Katrineholm",
  "Vänersborg", "Kungsbacka", "Lidköping", "Torslanda", "Norrtälje",
  "Västervik", "Karlshamn", "Ystad", "Kungälv", "Värnamo", "Eslöv",
  "Hässleholm", "Köping", "Oskarshamn", "Kristinehamn", "Härnösand",
  "Nässjö", "Falköping", "Kumla", "Boden", "Kiruna", "Mariestad",
  "Hudiksvall", "Avesta", "Staffanstorp", "Ljungby", "Höganäs", "Ludvika",
  "Nynäshamn", "Tranås", "Strängnäs", "Arvika", "Bollnäs", "Mjölby",
  "Stenungsund", "Vetlanda", "Lomma", "Sala", "Nybro", "Finspång",
  "Ronneby", "Mora", "Höör", "Svedala", "Ekerö", "Söderhamn", "Fagersta",
  "Skara", "Ulricehamn", "Oxelösund", "Arboga", "Bjuv", "Eksjö", "Lerum",
  "Lidingö", "Upplands Väsby", "Älmhult", "Gällivare", "Åstorp", "Timrå",
  "Gislaved", "Anderstorp", "Hallstahammar", "Kävlinge", "Lindesberg",
  "Sigtuna", "Åmål", "Säffle", "Alvesta", "Klippan", "Sölvesborg",
  "Sollefteå", "Lycksele", "Tibro", "Öland", "Vintrosa"
  // ... all other cities from the list
];

export const otherCities = createMultipleCityContent(additionalCities);