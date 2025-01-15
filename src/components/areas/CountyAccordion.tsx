import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { normalizeCity } from '@/utils/cityContentUtils';
import { cityContent } from '@/data/cityContent';

interface CountyAccordionProps {
  counties: { county: string; cities: string[] }[];
}

const CountyAccordion = ({ counties }: CountyAccordionProps) => {
  // Validate that city exists in cityContent before creating link
  const cityExists = (city: string): boolean => {
    const normalizedCity = normalizeCity(city);
    return !!cityContent[normalizedCity];
  };

  return (
    <Accordion type="single" collapsible className="w-full">
      {counties.map(({ county, cities }) => (
        <AccordionItem key={county} value={county}>
          <AccordionTrigger className="text-lg font-semibold">
            {county} ({cities.length} {cities.length === 1 ? 'stad' : 'städer'})
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
              {cities.map((city) => {
                if (!cityExists(city)) {
                  console.warn(`Warning: City "${city}" has no content defined`);
                  return null;
                }
                
                return (
                  <Link
                    key={city}
                    to={`/${normalizeCity(city)}`}
                    className="hover:text-primary transition-colors duration-200"
                  >
                    {city}
                  </Link>
                );
              })}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default CountyAccordion;