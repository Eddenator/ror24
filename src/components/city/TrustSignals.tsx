import { Star, ThumbsUp, Award } from "lucide-react";

const TrustSignals = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 mb-12">
      <div className="text-center p-6 rounded-lg bg-gray-50">
        <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">91% rekommenderar oss</h3>
        <p className="text-gray-600">I undersökelse rekommenderar 91 % av kunderna oss</p>
      </div>
      <div className="text-center p-6 rounded-lg bg-gray-50">
        <ThumbsUp className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Proffs på plats</h3>
        <p className="text-gray-600">Mer än 55 000 slutförda jobb</p>
      </div>
      <div className="text-center p-6 rounded-lg bg-gray-50">
        <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Certifierade partners</h3>
        <p className="text-gray-600">Vårt nätverk är auktoriserade glasmästare</p>
      </div>
    </div>
  );
};

export default TrustSignals;