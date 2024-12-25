import { useParams, Navigate } from 'react-router-dom';
import { cityContent } from '../data/cityContent';
import { counties } from '../data/cities';
import CityHero from '../components/city/CityHero';
import TrustSignals from '../components/city/TrustSignals';
import CityServices from '../components/city/CityServices';
import ContactForm from '../components/city/ContactForm';
import DocumentHead from '@/components/DocumentHead';
import { normalizeCity } from '../utils/cityContentUtils';
import { useToast } from '@/components/ui/use-toast';

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

  return (
    <div className="min-h-screen bg-white">
      <DocumentHead 
        title={`Rörmokare ${originalCity} - Jour öppen 24/7 - På plats inom 2t`}
        description={`Professionell rörmokare i ${originalCity}. Akut VVS-service med jour dygnet runt. Vi är på plats inom 2 timmar. Ring 010-555 11 94.`}
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
                __html: content.description.replace(/%city%/g, originalCity) 
              }}
            />
          </div>

          <div className="md:col-span-1 space-y-8">
            <ContactForm />
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