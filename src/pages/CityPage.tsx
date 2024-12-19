import { useParams } from 'react-router-dom';
import { Clock, Phone, MapPin, CheckCircle, Shield, Star, Award, ThumbsUp } from 'lucide-react';
import { cityContent, defaultCityContent } from '../data/cityContent';

const CityPage = () => {
  const { city } = useParams<{ city: string }>();
  const formattedCity = city ? city.charAt(0).toUpperCase() + city.slice(1) : '';
  
  // Get city-specific content or fall back to default
  const content = city ? cityContent[city.toLowerCase()] || defaultCityContent : defaultCityContent;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Full-width Image */}
      <div className="relative w-full h-[600px] mt-[-80px]">
        <img 
          src={content.heroImage}
          alt={`Glasmästare i ${formattedCity}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white mt-20">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Glasmästare {formattedCity}</h1>
            <p className="text-xl mb-4">Professionell glasservice i {formattedCity} - Jour dygnet runt</p>
            <a href="tel:010-555 11 93" className="glass-button bg-yellow-400 text-black hover:bg-yellow-500">
              Ring 010-555 11 93
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Trust Signals */}
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

          <div className="prose max-w-none mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Professionell Glasmästare i {formattedCity}</h2>
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>{content.description}</p>
              <p>{content.experience}</p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Våra Tjänster i {formattedCity}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {content.services.map((service, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                  <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center bg-black text-white rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">
              Behöver du glasmästare i {formattedCity}?
            </h2>
            <p className="text-lg mb-6">
              Vi finns här för dig dygnet runt. Ring oss för snabb och professionell hjälp.
            </p>
            <div className="space-y-4">
              <a
                href="tel:010-555 11 93"
                className="glass-button bg-yellow-400 text-black hover:bg-yellow-500 inline-flex items-center space-x-2"
              >
                <Phone size={18} />
                <span>Ring 010-555 11 93</span>
              </a>
              <p className="text-sm text-gray-400">
                Svarstid under 60 sekunder
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityPage;