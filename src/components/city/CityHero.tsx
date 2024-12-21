import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

interface CityHeroProps {
  cityName: string;
  heroImage: string;
}

const CityHero = ({ cityName, heroImage }: CityHeroProps) => {
  return (
    <div className="relative w-full h-[600px]">
      <img 
        src={heroImage}
        alt={`Rörmokare i ${cityName}`}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Rörmokare i {cityName}
          </h1>
          <p className="text-xl mb-4">Professionell VVS-service dygnet runt</p>
          <a 
            href="tel:010-555 11 93" 
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-yellow-400 text-black rounded-md hover:bg-yellow-500 transition-colors"
          >
            <Phone className="w-5 h-5" />
            Ring 010-555 11 93
          </a>
        </div>
      </div>
    </div>
  );
};

export default CityHero;