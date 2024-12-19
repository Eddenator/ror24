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

// Grouped by län (county)
const citiesByCounty = {
  "Stockholms län": [
    "Stockholm", "Södertälje", "Norrtälje", "Nynäshamn", "Vallentuna", "Ekerö",
    "Lidingö", "Upplands Väsby", "Sigtuna"
  ],
  "Västra Götalands län": [
    "Göteborg", "Borås", "Uddevalla", "Skövde", "Trollhättan", "Alingsås",
    "Lerum", "Kungälv", "Vänersborg"
  ],
  "Skåne län": [
    "Malmö", "Helsingborg", "Lund", "Kristianstad", "Landskrona", "Trelleborg",
    "Ängelholm", "Eslöv", "Ystad"
  ],
  "Östergötlands län": [
    "Linköping", "Norrköping", "Motala", "Finspång", "Mjölby", "Katrineholm"
  ],
  "Uppsala län": [
    "Uppsala", "Enköping", "Bålsta", "Östhammar", "Tierp"
  ],
  "Södermanlands län": [
    "Eskilstuna", "Nyköping", "Strängnäs", "Katrineholm", "Oxelösund"
  ],
  "Jönköpings län": [
    "Jönköping", "Värnamo", "Huskvarna", "Gislaved", "Nässjö"
  ],
  "Hallands län": [
    "Halmstad", "Varberg", "Falkenberg", "Kungsbacka"
  ],
  "Värmlands län": [
    "Karlstad", "Kristinehamn", "Arvika", "Hagfors", "Munkfors"
  ],
  "Örebro län": [
    "Örebro", "Karlskoga", "Lindesberg", "Hällefors"
  ],
  "Västmanlands län": [
    "Västerås", "Kungsör", "Hallstahammar", "Surahammar"
  ],
  "Dalarna": [
    "Falun", "Borlänge", "Ludvika", "Smedjebacken"
  ],
  "Gävleborg": [
    "Gävle", "Sandviken", "Bollnäs", "Hudiksvall"
  ],
  "Västernorrland": [
    "Sundsvall", "Härnösand", "Kramfors", "Örnsköldsvik"
  ],
  "Jämtland": [
    "Östersund", "Krokom", "Strömsund", "Berg"
  ],
  "Västerbotten": [
    "Umeå", "Skellefteå", "Vindeln", "Bjurholm"
  ],
  "Norrbotten": [
    "Luleå", "Piteå", "Kiruna", "Gällivare"
  ],
  // ... Add more counties and cities as needed
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
                        to={`/omraden/${city.toLowerCase()}`}
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
