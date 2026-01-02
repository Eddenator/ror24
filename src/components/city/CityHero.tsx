import { Phone } from "lucide-react";

interface CityHeroProps {
  cityName: string;
  heroImage: string;
}

const CityHero = ({ cityName, heroImage }: CityHeroProps) => {
  return (
    <div className="relative w-full h-[500px] md:h-[600px]">
      <img
        src={heroImage}
        alt={`Professionell VVS-service och rörmokare i ${cityName} - Dygnet runt jour`}
        loading="eager"
        className="w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">
            Rörmokare i {cityName}
          </h1>
          <p className="text-lg md:text-xl mb-6 opacity-90">
            Professionell VVS-service dygnet runt
          </p>
          <a
            href="tel:010-55511194"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-warning text-warning-foreground rounded-md hover:bg-warning/90 transition-colors font-semibold text-lg"
            aria-label="Ring oss på 010-555 11 94"
          >
            <Phone className="w-5 h-5" />
            Ring 010-555 11 94
          </a>
        </div>
      </div>
    </div>
  );
};

export default CityHero;
