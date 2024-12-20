import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface CountyAccordionProps {
  counties: { county: string; cities: string[] }[];
}

const CountyAccordion = ({ counties }: CountyAccordionProps) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {counties.map(({ county, cities }) => (
        <AccordionItem key={county} value={county}>
          <AccordionTrigger className="text-lg font-semibold">
            {county} ({cities.length} städer)
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
              {cities.map((city) => (
                <Link
                  key={city}
                  to={`/${city.toLowerCase()
                    .replace('å', 'a')
                    .replace('ä', 'a')
                    .replace('ö', 'o')
                    .replace(/[^a-z0-9]/g, '')}`}
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
  );
};

export default CountyAccordion;