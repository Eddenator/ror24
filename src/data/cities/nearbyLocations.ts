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

  // Adding new cities and their nearby locations
  saffle: [
    "Åmål", "Karlstad", "Grums", "Kristinehamn", "Arvika"
  ],
  amal: [
    "Säffle", "Bengtsfors", "Mellerud", "Karlstad"
  ],
  karlstad: [
    "Säffle", "Kristinehamn", "Grums", "Kil", "Hammarö"
  ],
  arvika: [
    "Säffle", "Karlstad", "Eda", "Sunne", "Grums"
  ],
  alingsas: [
    "Vårgårda", "Lerum", "Herrljunga", "Borås", "Partille"
  ],
  boras: [
    "Ulricehamn", "Alingsås", "Kinna", "Dalsjöfors", "Fristad"
  ],
  falkenberg: [
    "Varberg", "Halmstad", "Ullared", "Getinge"
  ],
  falun: [
    "Borlänge", "Säter", "Gagnef", "Ludvika"
  ],
  kalmar: [
    "Nybro", "Färjestaden", "Lindsdal", "Smedby"
  ],
  karlskoga: [
    "Degerfors", "Kristinehamn", "Örebro", "Storfors"
  ],
  karlskrona: [
    "Ronneby", "Nättraby", "Jämjö", "Lyckeby"
  ],
  kristianstad: [
    "Hässleholm", "Åhus", "Bromölla", "Tollarp"
  ],
  landskrona: [
    "Helsingborg", "Eslöv", "Svalöv", "Lund"
  ],
  motala: [
    "Linköping", "Vadstena", "Mjölby", "Skänninge"
  ],
  nykoping: [
    "Oxelösund", "Södertälje", "Trosa", "Gnesta"
  ],
  pitea: [
    "Luleå", "Älvsbyn", "Boden", "Skellefteå"
  ],
  sandviken: [
    "Gävle", "Hofors", "Storvik", "Valbo"
  ],
  skelleftea: [
    "Piteå", "Burträsk", "Boliden", "Byske"
  ],
  skovde: [
    "Falköping", "Mariestad", "Tibro", "Skara"
  ],
  stromsund: [
    "Östersund", "Hammerdal", "Gäddede", "Hoting"
  ],
  trelleborg: [
    "Malmö", "Vellinge", "Svedala", "Skurup"
  ],
  uddevalla: [
    "Trollhättan", "Vänersborg", "Lysekil", "Stenungsund"
  ],
  vallentuna: [
    "Stockholm", "Täby", "Upplands Väsby", "Åkersberga"
  ],
  varberg: [
    "Falkenberg", "Kungsbacka", "Veddige", "Träslövsläge"
  ],
  angelholm: [
    "Helsingborg", "Höganäs", "Båstad", "Munka-Ljungby"
  ],
  ornskoldsvik: [
    "Umeå", "Härnösand", "Sollefteå", "Kramfors"
  ],
  borlange: [
    "Falun", "Ludvika", "Säter", "Gagnef"
  ],
  eskilstuna: [
    "Västerås", "Strängnäs", "Torshälla", "Kungsör"
  ],
  gavle: [
    "Sandviken", "Söderhamn", "Skutskär", "Valbo"
  ],
  halmstad: [
    "Falkenberg", "Laholm", "Oskarström", "Getinge"
  ],
  helsingborg: [
    "Landskrona", "Höganäs", "Ängelholm", "Bjuv"
  ],
  jonkoping: [
    "Huskvarna", "Nässjö", "Värnamo", "Tranås"
  ],
  linkoping: [
    "Norrköping", "Mjölby", "Motala", "Finspång"
  ],
  lulea: [
    "Boden", "Piteå", "Kalix", "Älvsbyn"
  ],
  lund: [
    "Malmö", "Staffanstorp", "Eslöv", "Lomma"
  ],
  norrkoping: [
    "Linköping", "Finspång", "Söderköping", "Nyköping"
  ],
  sundsvall: [
    "Timrå", "Härnösand", "Matfors", "Njurunda"
  ],
  sodertalje: [
    "Stockholm", "Nykvarn", "Salem", "Järna"
  ],
  umea: [
    "Holmsund", "Sävar", "Vännäs", "Robertsfors"
  ],
  uppsala: [
    "Knivsta", "Storvreta", "Bälinge", "Björklinge"
  ],
  vasteras: [
    "Köping", "Hallstahammar", "Sala", "Enköping"
  ],
  vaxjo: [
    "Alvesta", "Lessebo", "Rottne", "Braås"
  ],
  orebro: [
    "Kumla", "Hallsberg", "Lindesberg", "Karlskoga"
  ],
  ostersund: [
    "Krokom", "Brunflo", "Lit", "Frösön"
  ],
  enkoping: [
    "Västerås", "Uppsala", "Bålsta", "Strängnäs"
  ],
  katrineholm: [
    "Flen", "Vingåker", "Norrköping", "Nyköping"
  ],
  vanersborg: [
    "Trollhättan", "Uddevalla", "Vargön", "Grästorp"
  ],
  kungsbacka: [
    "Göteborg", "Varberg", "Onsala", "Särö"
  ],
  lidkoping: [
    "Skara", "Mariestad", "Götene", "Vara"
  ],
  torslanda: [
    "Göteborg", "Öckerö", "Hisings Kärra", "Björlanda"
  ],
  norrtalje: [
    "Stockholm", "Rimbo", "Hallstavik", "Älmsta"
  ],
  vastervik: [
    "Oskarshamn", "Gamleby", "Ankarsrum", "Överum"
  ],
  karlshamn: [
    "Ronneby", "Asarum", "Mörrum", "Sölvesborg"
  ],
  ystad: [
    "Simrishamn", "Tomelilla", "Skurup", "Köpingebro"
  ],
  kungalv: [
    "Göteborg", "Ytterby", "Kärna", "Marstrand"
  ],
  varnamo: [
    "Gislaved", "Skillingaryd", "Rydaholm", "Bredaryd"
  ],
  eslov: [
    "Lund", "Höör", "Landskrona", "Kävlinge"
  ],
  hassleholm: [
    "Kristianstad", "Tyringe", "Vinslöv", "Bjärnum"
  ],
  koping: [
    "Västerås", "Kolsva", "Arboga", "Hallstahammar"
  ],
  oskarshamn: [
    "Västervik", "Mönsterås", "Högsby", "Figeholm"
  ],
  kristinehamn: [
    "Karlstad", "Karlskoga", "Degerfors", "Storfors"
  ],
  harnosand: [
    "Sundsvall", "Kramfors", "Timrå", "Sollefteå"
  ],
  nassjo: [
    "Jönköping", "Eksjö", "Vetlanda", "Tranås"
  ],
  falkoping: [
    "Skövde", "Tidaholm", "Skara", "Ulricehamn"
  ],
  kumla: [
    "Örebro", "Hallsberg", "Fjugesta", "Askersund"
  ],
  boden: [
    "Luleå", "Älvsbyn", "Harads", "Gunnarsbyn"
  ],
  kiruna: [
    "Gällivare", "Vittangi", "Karesuando", "Abisko"
  ],
  mariestad: [
    "Skövde", "Töreboda", "Lidköping", "Götene"
  ],
  hudiksvall: [
    "Söderhamn", "Iggesund", "Delsbo", "Bergsjö"
  ],
  avesta: [
    "Fagersta", "Hedemora", "Norberg", "Krylbo"
  ],
  staffanstorp: [
    "Malmö", "Lund", "Dalby", "Hjärup"
  ],
  ljungby: [
    "Värnamo", "Älmhult", "Markaryd", "Lagan"
  ],
  hoganas: [
    "Helsingborg", "Viken", "Jonstorp", "Lerberget"
  ],
  ludvika: [
    "Borlänge", "Smedjebacken", "Grängesberg", "Fredriksberg"
  ],
  nynashamn: [
    "Stockholm", "Ösmo", "Sorunda", "Stora Vika"
  ],
  tranas: [
    "Jönköping", "Nässjö", "Eksjö", "Ydre"
  ],
  strangnas: [
    "Eskilstuna", "Mariefred", "Åkers styckebruk", "Stallarholmen"
  ],
  bollnas: [
    "Söderhamn", "Edsbyn", "Arbrå", "Kilafors"
  ],
  mjolby: [
    "Linköping", "Motala", "Boxholm", "Skänninge"
  ],
  stenungsund: [
    "Kungälv", "Ljungskile", "Stora Höga", "Jörlanda"
  ],
  vetlanda: [
    "Nässjö", "Eksjö", "Sävsjö", "Korsberga"
  ],
  lomma: [
    "Malmö", "Lund", "Bjärred", "Arlöv"
  ],
  sala: [
    "Västerås", "Heby", "Ransta", "Möklinta"
  ],
  nybro: [
    "Kalmar", "Emmaboda", "Orrefors", "Alsterbro"
  ],
  finspang: [
    "Norrköping", "Linköping", "Skärblacka", "Rejmyre"
  ],
  ronneby: [
    "Karlskrona", "Kallinge", "Bräkne-Hoby", "Johannishus"
  ],
  mora: [
    "Orsa", "Rättvik", "Älvdalen", "Malung"
  ]
};