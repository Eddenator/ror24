import { useParams, Navigate, Link } from 'react-router-dom';
import { cityContent } from '../data/cityContent';
import { counties } from '../data/cities';
import CityHero from '../components/city/CityHero';
import TrustSignals from '../components/city/TrustSignals';
import CityServices from '../components/city/CityServices';
import ContactForm from '../components/city/ContactForm';
import DocumentHead from '@/components/DocumentHead';
import { normalizeCity } from '../utils/cityContentUtils';
import { useToast } from '@/components/ui/use-toast';
import { getNearbyLocations } from '../data/cities/nearbyLocations';

const CityPage = () => {
  const { city } = useParams<{ city: string }>();
  const { toast } = useToast();
  
  if (!city) {
    console.error('No city parameter provided');
    return <Navigate to="/404" replace />;
  }

  const normalizedCity = normalizeCity(city);
  const content = cityContent[normalizedCity];
  
  const originalCity = Object.values(counties)
    .flat()
    .find(c => normalizeCity(c) === normalizedCity);

  if (!content || !originalCity) {
    console.error('City not found:', city);
    console.error('Normalized city:', normalizedCity);
    
    toast({
      variant: "destructive",
      title: "Sidan hittades inte",
      description: "Vi kunde inte hitta den begärda staden."
    });
    
    return <Navigate to="/404" replace />;
  }

  const nearbyLocations = getNearbyLocations(originalCity);

  const description = typeof content.description === 'function' 
    ? content.description(originalCity)
    : content.description;

  return (
    <div className="min-h-screen bg-white">
      <DocumentHead 
        title={`Rörmokare ${originalCity} - VVS Jour är öppen 24/7 - Rör24`}
        description={`Rörmokare i ${originalCity}. Vi kan vara på plats inom 2 timmar (genomsnitt). Endast auktoriserade rörmokare. Vi har öppet dygnet runt. Ring oss för en kostnadsfri offert!`}
      />
      <CityHero 
        cityName={originalCity}
        heroImage={content.heroImage}
      />

      <div className="container mx-auto px-4 py-12">
        <TrustSignals />

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="md:col-span-2">
            <div 
              className="prose prose-lg max-w-none prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-p:text-gray-600 prose-strong:text-gray-900 prose-ul:space-y-2 prose-ol:space-y-2 prose-li:text-gray-600 space-y-8"
              dangerouslySetInnerHTML={{ 
                __html: description
              }}
            />

            {nearbyLocations.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-4">Vi täcker även dessa närliggande områden:</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {nearbyLocations.map((location) => (
                    <Link
                      key={location}
                      to={`/${normalizeCity(location)}`}
                      className="text-primary hover:text-[#FFD700] transition-colors"
                    >
                      {location}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="md:col-span-1">
            <div className="md:sticky md:top-24 space-y-8">
              <ContactForm />
            </div>
          </div>
        </div>

        <CityServices 
          cityName={originalCity}
          services={content.services}
        />
      </div>
    </div>
  );
};

export default CityPage;