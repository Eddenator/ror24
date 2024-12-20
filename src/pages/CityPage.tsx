import { useParams, Navigate } from 'react-router-dom';
import { cityContent } from '../data/cityContent';
import CityHero from '../components/city/CityHero';
import TrustSignals from '../components/city/TrustSignals';
import CityServices from '../components/city/CityServices';
import ContactForm from '../components/city/ContactForm';
import DocumentHead from '@/components/DocumentHead';
import { normalizeCity } from '../utils/cityContentUtils';

const CityPage = () => {
  const { city } = useParams<{ city: string }>();
  
  if (!city) {
    return <Navigate to="/404" replace />;
  }

  const normalizedCity = normalizeCity(city);
  const content = cityContent[normalizedCity];
  
  if (!content) {
    console.log('City not found:', city, 'Normalized:', normalizedCity);
    console.log('Available cities:', Object.keys(cityContent));
    return <Navigate to="/404" replace />;
  }

  // Use the original city name for display, not the normalized version
  const formattedCity = city.charAt(0).toUpperCase() + city.slice(1);
  const formattedDescription = content.description.replace(/%city%/g, formattedCity);

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
          <div className="md:col-span-2 prose max-w-none">
            <h2 className="text-2xl font-bold mb-4">24/7 jourhavande glasmästare i {formattedCity}</h2>
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              {formattedDescription.split('\n\n').map((paragraph, index) => (
                <p 
                  key={index} 
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </div>
          </div>

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