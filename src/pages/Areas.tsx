import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { Search } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const citiesByCounty = {
  "Stockholms län": [
    "Stockholm", "Södertälje", "Norrtälje", "Vallentuna", "Ekerö",
    "Lidingö", "Upplands Väsby", "Sigtuna", "Nynäshamn",
    "Adelsö", "Arholma", "Arlandastad", "Bagarmossen", "Bandhagen",
    "Bergshamra", "Björkö", "Blidö", "Brandbergen", "Bro", "Bromma",
    "Brottby", "Dalarö", "Danderyd", "Djurhamn", "Djursholm",
    "Drottningholm", "Edsbro", "Enebyberg", "Enhörna", "Enskede",
    "Enskededalen", "Farsta", "Furusund", "Färentuna", "Grinda",
    "Grisslehamn", "Gräddö", "Gränö", "Grödinge", "Gustavsberg",
    "Gålö", "Gällnöby", "Hallstavik", "Handen", "Haninge", "Harö",
    "Herräng", "Huddinge", "Husarö", "Hårsfjärden", "Hägersten",
    "Hässelby", "Hölö", "Ingarö", "Ingmarsö", "Johanneshov",
    "Jordbro", "Järfälla", "Järna", "Kista", "Kungens kurva",
    "Kungsängen", "Ljusterö", "Munsö", "Muskö", "Märsta", "Möja",
    "Mölnbo", "Mörkö", "Nacka", "Norra Sorunda", "Norrby",
    "Norsborg", "Nykvarn", "Nämdö", "Ornö", "Rimbo", "Rosersberg",
    "Runmarö", "Rånäs", "Rönninge", "Saltsjöbaden", "Saltsjö-Boo",
    "Sandhamn", "Segeltorp", "Segersäng", "Skarpnäck", "Skebobruk",
    "Skogås", "Skå", "Skälvik", "Skärholmen", "Sköndal", "Sollentuna",
    "Solna", "Sorunda", "Spånga", "Stavsnäs", "Steningehöjden",
    "Stocksund", "Stora Vika", "Svartsjö", "Söderby", "Tomteboda",
    "Trångsund", "Tullinge", "Tumba", "Tungelsta", "Tyresö", "Täby",
    "Uttran", "Utö", "Vaxholm", "Vega", "Vendelsö", "Vårby", "Väddö",
    "Vällingby", "Värmdö", "Västerhaninge", "Vätö", "Yxlan",
    "Åkersberga", "Årsta", "Älta", "Älvsjö", "Ösmo", "Österhaninge",
    "Österskär", "Akalla", "Aspudden", "Axelsberg", "Barkarby", "Beckomberga", 
    "Blackeberg", "Bredäng", "Bromsten", "Duvbo", "Enskede Gård",
    "Fittja", "Flemingsberg", "Fruängen", "Gamla Enskede", "Gröndal",
    "Gubbängen", "Hagsätra", "Hammarby", "Hammarbyhöjden", "Hässelby Gård",
    "Hässelby Strand", "Hässelby Villastad", "Hökarängen", "Högdalen",
    "Johanneshov", "Kärrtorp", "Kallhäll", "Kista", "Kungsholmen",
    "Liljeholmen", "Långbro", "Långsjö", "Mariehäll", "Midsommarkransen",
    "Mälarhöjden", "Nockeby", "Norra Ängby", "Näsbypark", "Orhem",
    "Råcksta", "Rågsved", "Råsunda", "Rinkeby", "Rotebro", "Skarpnäcksgården",
    "Skärholmen", "Sköndal", "Sollentuna", "Solna", "Spånga", "Stureby",
    "Sundbyberg", "Sätra", "Södermalm", "Södertörn", "Tallkrogen",
    "Tensta", "Traneberg", "Ulvsunda", "Vasastan", "Vaxholm", "Vällingby",
    "Västertorp", "Årsta", "Östberga"
  ],
  "Västra Götalands län": [
    "Göteborg", "Borås", "Uddevalla", "Skövde", "Trollhättan",
    "Alingsås", "Lerum", "Kungälv", "Vänersborg", "Lidköping",
    "Torslanda", "Partille", "Mölndal", "Alafors", "Alvhem",
    "Bohus", "Nol", "Nödinge", "Skepplanda", "Surte", "Älvängen",
    "Sollebrunn", "Berghem", "Björketorp", "Fotskäl", "Fritsla",
    "Hajom", "Horred", "Hyssna", "Istorp", "Kinna", "Kinnahult",
    "Rydal", "Skene", "Skephult", "Sätila", "Torestorp", "Tostared",
    "Örby", "Öxabäck", "Öxnevalla", "Bohus-Björkö", "Fotö",
    "Grötö", "Hyppeln", "Hälsö", "Hönö", "Kalvsund", "Källö-Knippla",
    "Rörö", "Öckerö", "Jörlanda", "Spekeröd", "Stora Höga",
    "Svenshögen", "Ucklum", "Ödsmål", "Hindås", "Hällingsjö",
    "Härryda", "Landvetter", "Mölnlycke", "Pixbo", "Rävlanda",
    "Bleket", "Dyrön", "Fagerfjäll", "Hakenäset", "Hjälteby",
    "Höviksnäs", "Klädesholmen", "Klövedal", "Kyrkesund",
    "Kållekärr", "Myggenäs", "Rönnäng", "Skärhamn", "Tjörnarp",
    "Vallhamn", "Åstol", "Angered", "Askim", "Backa", "Bergsjön", "Billdal", "Biskopsgården",
    "Björlanda", "Brännö", "Eriksberg", "Frölunda", "Gårdsten", "Gamlestaden",
    "Gunnared", "Hammarkullen", "Hjällbo", "Hovås", "Härlanda", "Högsbo",
    "Johanneberg", "Kortedala", "Kungsbacka", "Kviberg", "Kärra", "Lindholmen",
    "Linnéstaden", "Lundby", "Lärjedalen", "Majorna", "Masthugget",
    "Olskroken", "Rannebergen", "Sävedalen", "Torslanda", "Tuve", "Tynnered",
    "Utby", "Västra Frölunda", "Örgryte", "Öckerö"
  ],
  "Skåne län": [
    "Malmö", "Helsingborg", "Lund", "Kristianstad", "Landskrona",
    "Trelleborg", "Ängelholm", "Eslöv", "Ystad", "Hässleholm",
    "Staffanstorp", "Höganäs", "Lomma", "Höör", "Svedala",
    "Bjuv", "Åstorp", "Kävlinge", "Klippan", "Sölvesborg",
    "Bunkeflostrand", "Klagshamn", "Limhamn", "Oxie", "Tygelsjö",
    "Vintrie", "Alnarp", "Bjärred", "Anderslöv", "Beddingestrand",
    "Klagstorp", "Smygehamn", "Annelöv", "Asmundstorp", "Glumslöv",
    "Häljarp", "Härslöv", "Sankt Ibb", "Saxtorp", "Arild",
    "Farhult", "Jonstorp", "Lerberget", "Mjöhult", "Mölle",
    "Nyhamnsläge", "Skäret", "Strandbaden", "Viken", "Arlöv", "Bjärred", "Bjuv", "Bromölla", "Burlöv", "Dalby", "Dösjebro",
    "Ekeby", "Eslöv", "Furulund", "Genarp", "Hjärup", "Hofterup", "Hörby",
    "Höör", "Kävlinge", "Landskrona", "Löddeköpinge", "Lund", "Malmö",
    "Marieholm", "Oxie", "Perstorp", "Rydsgård", "Sjöbo", "Skurup",
    "Staffanstorp", "Svalöv", "Svedala", "Södra Sandby", "Tollarp",
    "Tomelilla", "Trelleborg", "Tygelsjö", "Tågarp", "Veberöd", "Vellinge",
    "Vittsjö", "Vollsjö", "Ystad", "Åhus", "Åkarp", "Ängelholm", "Örkelljunga"
  ],
  "Uppsala län": [
    "Uppsala", "Enköping", "Almunge", "Björklinge", "Bälinge",
    "Järlåsa", "Knutby", "Länna", "Skyttorp", "Storvreta",
    "Vattholma", "Vränge", "Alunda", "Björklinge", "Bälinge", "Enköping", "Gunsta", "Gåvsta",
    "Järlåsa", "Knivsta", "Lövstalöt", "Morgongåva", "Oxsätra", "Skyttorp",
    "Storvreta", "Sävja", "Tierp", "Uppsala", "Vattholma", "Vänge",
    "Örbyhus", "Österbybruk"
  ],
  "Östergötlands län": [
    "Linköping", "Norrköping", "Motala", "Finspång", "Mjölby"
  ],
  "Örebro län": [
    "Örebro", "Karlskoga", "Kumla", "Lindesberg", "Brevens Bruk",
    "Dyltabruk", "Ervalla", "Garphyttan", "Glanshammar", "Kilsmo",
    "Lillkyrka", "Odensbacken", "Stora Mellösa", "Vintrosa"
  ],
  "Södermanlands län": [
    "Eskilstuna", "Nyköping", "Strängnäs", "Katrineholm", "Oxelösund"
  ],
  "Värmlands län": [
    "Karlstad", "Kristinehamn", "Arvika", "Säffle", "Åmål"
  ],
  "Gävleborgs län": [
    "Gävle", "Sandviken", "Hudiksvall", "Bollnäs", "Söderhamn"
  ],
  "Västernorrlands län": [
    "Sundsvall", "Örnsköldsvik", "Härnösand", "Timrå", "Sollefteå"
  ],
  "Västerbottens län": [
    "Umeå", "Skellefteå", "Lycksele"
  ],
  "Norrbottens län": [
    "Luleå", "Piteå", "Boden", "Kiruna", "Gällivare"
  ],
  "Jönköpings län": [
    "Jönköping", "Värnamo", "Nässjö", "Vetlanda", "Eksjö",
    "Gislaved", "Anderstorp"
  ],
  "Hallands län": [
    "Halmstad", "Varberg", "Falkenberg", "Kungsbacka"
  ],
  "Dalarnas län": [
    "Falun", "Borlänge", "Ludvika", "Mora", "Avesta"
  ],
  "Kalmar län": [
    "Kalmar", "Västervik", "Oskarshamn", "Nybro", "Borgholm"
  ],
  "Blekinge län": [
    "Karlskrona", "Karlshamn", "Ronneby"
  ],
  "Kronobergs län": [
    "Växjö", "Ljungby", "Älmhult"
  ],
  "Västmanlands län": [
    "Västerås", "Köping", "Sala", "Fagersta", "Hallstahammar"
  ],
  "Jämtlands län": [
    "Östersund", "Sälen"
  ],
  "Gotlands län": [
    "Visby"
  ]
};

const Areas = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCounties = Object.entries(citiesByCounty).map(([county, cities]) => ({
    county,
    cities: cities.filter(city => 
      city.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(({ cities }) => cities.length > 0);

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Våra Områden"
        description="Vi erbjuder service i över 750 städer"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Sök din stad..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-12 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {filteredCounties.map(({ county, cities }) => (
              <AccordionItem key={county} value={county}>
                <AccordionTrigger className="text-lg font-semibold">
                  {county} ({cities.length} städer)
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
                    {cities.map((city) => (
                      <Link
                        key={city}
                        to={`/${city.toLowerCase()}`}
                        className="hover:text-primary transition-colors duration-200"
                      >
                        {city}
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Areas;
