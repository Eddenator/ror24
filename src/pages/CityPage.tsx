import { useParams, Navigate } from 'react-router-dom';
import { cityContent, defaultCityContent } from '../data/cityContent';
import CityHero from '../components/city/CityHero';
import CityServices from '../components/city/CityServices';
import ContactForm from '../components/city/ContactForm';
import DocumentHead from '@/components/DocumentHead';

const CityPage = () => {
  const { city } = useParams();
  
  // Format city name for display (capitalize first letter)
  const formattedCity = city ? city.charAt(0).toUpperCase() + city.slice(1) : '';
  
  // Check if the city exists in our content
  const normalizedCity = city?.toLowerCase().replace(/å/g, 'a').replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/[^a-z0-9]/g, '');
  const cityExists = normalizedCity ? cityContent.hasOwnProperty(normalizedCity) : false;

  // If city doesn't exist in our content, redirect to 404
  if (!cityExists) {
    return <Navigate to="/404" />;
  }

  // Get city-specific content or fall back to default
  const content = cityContent[normalizedCity!] || defaultCityContent;

  // Replace %city% with the actual city name in the description using regex
  const formattedDescription = content.description.replace(/%city%/g, formattedCity);

  return (
    <div className="min-h-screen bg-white">
      <DocumentHead 
        title={`Glasmästare i ${formattedCity} | Glas24`}
        description={`Professionell glasmästare i ${formattedCity}. Vi erbjuder akut glasservice, fönsterbyte och reparationer dygnet runt med kort väntetid.`}
      />
      <CityHero city={formattedCity} image={content.heroImage} />
      <div className="container mx-auto px-4 py-12">
        <div className="prose max-w-none">
          <p className="text-lg mb-8">{formattedDescription}</p>
        </div>
        <CityServices services={content.services} city={formattedCity} />
        <ContactForm city={formattedCity} />
      </div>
    </div>
  );
};

export default CityPage;