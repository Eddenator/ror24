import { Link } from "react-router-dom";
import { normalizeCity } from "@/utils/cityContentUtils";
import { MapPin } from "lucide-react";

interface RegionLinksProps {
  currentCity: string;
}

const popularCities = [
  "Stockholm",
  "Göteborg",
  "Malmö",
  "Uppsala",
  "Linköping",
  "Örebro",
  "Västerås",
  "Helsingborg",
  "Norrköping",
  "Jönköping",
  "Lund",
  "Umeå",
];

const RegionLinks = ({ currentCity }: RegionLinksProps) => {
  const citiesToShow = popularCities.filter(
    (city) => normalizeCity(city) !== normalizeCity(currentCity)
  );

  return (
    <section className="mt-12 border-t pt-8">
      <div className="flex items-center gap-2 mb-4">
        <MapPin className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-bold">Rörmokare i andra städer</h2>
      </div>
      <p className="text-muted-foreground mb-4">
        Vi erbjuder professionell VVS-service i över 750 städer i Sverige. Här är
        några av våra populäraste områden:
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {citiesToShow.map((city) => (
          <Link
            key={city}
            to={`/${normalizeCity(city)}`}
            className="text-sm text-primary hover:text-warning transition-colors underline-offset-4 hover:underline"
          >
            Rörmokare {city}
          </Link>
        ))}
      </div>
      <div className="mt-4">
        <Link
          to="/omraden"
          className="inline-flex items-center text-sm font-medium text-primary hover:text-warning transition-colors"
        >
          Se alla {">"}750 städer →
        </Link>
      </div>
    </section>
  );
};

export default RegionLinks;
