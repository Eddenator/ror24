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
      <div className="grid md:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg">
            <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
            <span>{service}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityServices;