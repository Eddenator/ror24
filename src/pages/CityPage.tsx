import { useParams } from 'react-router-dom';
import { cityContent, defaultCityContent } from '../data/cityContent';
import CityHero from '../components/city/CityHero';
import TrustSignals from '../components/city/TrustSignals';
import CityServices from '../components/city/CityServices';
import ContactForm from '../components/city/ContactForm';
import DocumentHead from '@/components/DocumentHead';

const CityPage = () => {
  const { city } = useParams<{ city: string }>();
  const formattedCity = city ? city.charAt(0).toUpperCase() + city.slice(1) : '';
  
  // Get city-specific content or fall back to default
  const content = city ? cityContent[city.toLowerCase()] || defaultCityContent : defaultCityContent;

  return (
    <div className="min-h-screen bg-white">
      <DocumentHead 
        title={`Glasmästare ${formattedCity} - Jour öppen 24/7 - På plats inom 2t`}
        description={`Professionell glasmästare i ${formattedCity}. Akut glasservice med jour dygnet runt. Vi är på plats inom 2 timmar. Ring 010-555 11 93.`}
      />
      <CityHero 
        cityName={formattedCity}
        heroImage={content.heroImage}
      />

      <div className="container mx-auto px-4 py-12">
        <TrustSignals />

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Main Content Column */}
          <div className="md:col-span-2 prose max-w-none">
            <h2 className="text-2xl font-bold mb-4">24/7 jourhavande glasmästare i {formattedCity}</h2>
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              {content.description.split('\n\n').map((paragraph, index) => (
                <p 
                  key={index} 
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="md:col-span-1 space-y-8">
            <ContactForm />
          </div>
        </div>

        <CityServices 
          cityName={formattedCity}
          services={content.services}
        />
      </div>
    </div>
  );
};

export default CityPage;
