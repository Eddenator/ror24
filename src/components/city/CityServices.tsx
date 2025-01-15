import { CheckCircle } from "lucide-react";

interface CityServicesProps {
  cityName: string;
  services: string[];
}

const CityServices = ({ cityName, services }: CityServicesProps) => {
  return (
    <div className="bg-gray-50 rounded-lg p-8 mt-12">
      <h2 className="text-2xl font-semibold mb-6">
        Våra VVS-tjänster i {cityName}
      </h2>
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
                Vi erbjuder professionell {service.toLowerCase()} i {cityName} med snabb service och garanterat resultat.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityServices;