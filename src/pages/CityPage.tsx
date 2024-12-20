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

        {/* Services Section - Now Full Width */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6">
            Våra Tjänster i {formattedCity}
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {content.services.map((service, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Main Content Column (2/3) */}
          <div className="md:col-span-2 prose max-w-none">
            <h2 className="text-3xl font-bold mb-6">Professionell Glasmästare i {formattedCity}</h2>
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              {content.description.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* CTA Column (1/3) */}
          <div className="md:col-span-1 space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-lg mb-4 font-medium">
                Sveriges troligen största nätverk med auktoriserade glasmästare. Vi håller öppet 24/7. Ring oss för rådgivning
              </p>
              <a
                href="tel:010-555 11 93"
                className="glass-button bg-yellow-400 text-black hover:bg-yellow-500 w-full flex items-center justify-center space-x-2 mb-6"
              >
                <Phone size={18} />
                <span>Ring 010-555 11 93</span>
              </a>
              
              {/* Contact Form */}
              <div data-marquiz-id="67653b66469d4d00263e29f7"></div>
              <script dangerouslySetInnerHTML={{
                __html: `
                  (function(t, p) {
                    window.Marquiz ? Marquiz.add([t, p]) : document.addEventListener('marquizLoaded', function() {
                      Marquiz.add([t, p])
                    })
                  })('Inline', {
                    id: '67653b66469d4d00263e29f7',
                    buttonText: 'Start',
                    bgColor: '#efce36',
                    textColor: '#ffffff',
                    rounded: true,
                    shadow: 'rgba(239, 206, 54, 0.5)',
                    blicked: true
                  })
                `
              }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityPage;