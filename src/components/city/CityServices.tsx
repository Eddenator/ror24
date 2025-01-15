import { CheckCircle } from "lucide-react";

interface CityServicesProps {
  cityName: string;
  services: string[];
}

// Pool of service descriptions
const serviceDescriptions = {
  "Akut VVS-jour": [
    "Snabb utryckning dygnet runt för alla akuta VVS-problem",
    "Omedelbar hjälp vid vattenläckor och andra VVS-kriser",
    "Professionell jourassistans när du behöver det som mest"
  ],
  "Avloppsrensning": [
    "Effektiv rensning av alla typer av stopp i avlopp",
    "Modern teknik för att åtgärda även svåra blockeringar",
    "Förebyggande underhåll för att undvika framtida stopp"
  ],
  "Vattenläckage": [
    "Noggrann läcksökning med modern utrustning",
    "Snabb åtgärd för att minimera vattenskador",
    "Expertis inom alla typer av vattenläckor"
  ],
  "Installation av blandare": [
    "Fackmannamässig installation av alla typer av blandare",
    "Rådgivning för val av energieffektiva lösningar",
    "Komplett service från val till installation"
  ],
  "Rörinspektion": [
    "Grundlig inspektion med modern kamerautrustning",
    "Detaljerad diagnostik av rörsystemets skick",
    "Förebyggande kontroller för att undvika framtida problem"
  ],
  "Värmesystem": [
    "Optimering och service av alla typer av värmesystem",
    "Energieffektiva lösningar för lägre driftskostnader",
    "Expert på både traditionella och moderna värmesystem"
  ],
  "Vattenskador": [
    "Professionell sanering och återställning efter vattenskador",
    "Omfattande erfarenhet av försäkringsärenden",
    "Snabb insats för att minimera skadeomfattningen"
  ],
  "Badrumsrenovering": [
    "Totalrenovering med fokus på kvalitet och design",
    "Certifierade hantverkare för säkert våtrumsarbete",
    "Kompletta lösningar från planering till färdigt badrum"
  ]
};

const CityServices = ({ cityName, services }: CityServicesProps) => {
  // Function to get a random description for a service
  const getRandomDescription = (service: string) => {
    const descriptions = serviceDescriptions[service as keyof typeof serviceDescriptions] || [];
    return descriptions[Math.floor(Math.random() * descriptions.length)] || 
           "Professionell service med garanterad kvalitet";
  };

  return (
    <div className="bg-gray-50 rounded-lg p-8 mt-12">
      <h2 className="text-2xl font-semibold mb-6">
        Våra VVS-tjänster i {cityName}
      </h2>
      <p className="text-gray-600 mb-6">
        Som din lokala VVS-partner erbjuder vi ett komplett utbud av tjänster för både akuta och planerade behov.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">{service}</h3>
              <p className="text-sm text-gray-600">
                {getRandomDescription(service)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityServices;