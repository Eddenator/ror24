import { useParams, Navigate, Link } from 'react-router-dom';
import { cityContent } from '../data/cityContent';
import { counties } from '../data/cities';
import CityHero from '../components/city/CityHero';
import TrustSignals from '../components/city/TrustSignals';
import CityServices from '../components/city/CityServices';
import ContactForm from '../components/city/ContactForm';
import DocumentHead from '@/components/DocumentHead';
import Breadcrumbs from '@/components/Breadcrumbs';
import { normalizeCity } from '../utils/cityContentUtils';
import { useToast } from '@/components/ui/use-toast';
import { getNearbyLocations } from '../data/cities/nearbyLocations';
import { useEffect } from 'react';

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

  useEffect(() => {
    if (!content || !originalCity) {
      console.error('City not found:', city);
      console.error('Normalized city:', normalizedCity);
      
      toast({
        variant: "destructive",
        title: "Sidan hittades inte",
        description: "Vi kunde inte hitta den begärda staden."
      });
    }
  }, [content, originalCity, city, normalizedCity, toast]);

  if (!content || !originalCity) {
    return <Navigate to="/404" replace />;
  }

  const nearbyLocations = getNearbyLocations(originalCity)
    .filter(location => location && !location.includes("(ex.)"));

  const description = typeof content.description === 'function' 
    ? content.description(originalCity)
    : content.description;

  const canonicalUrl = `https://ror24.se/${normalizedCity}`;
  const pageTitle = `Rörmokare ${originalCity} - VVS Jour är öppen 24/7 - Rör24`;
  const pageDescription = `Rörmokare i ${originalCity}. Vi kan vara på plats inom 2 timmar (genomsnitt). Endast auktoriserade rörmokare. Vi har öppet dygnet runt. Ring oss för en kostnadsfri offert!`;

  // Structured data för LocalBusiness och Service
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${canonicalUrl}#organization`,
        "name": `Rör24 - Rörmokare ${originalCity}`,
        "image": content.heroImage,
        "description": pageDescription,
        "url": canonicalUrl,
        "telephone": "010-555 11 94",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": originalCity,
          "addressCountry": "SE"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "addressLocality": originalCity
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        },
        "areaServed": {
          "@type": "City",
          "name": originalCity
        }
      },
      {
        "@type": "Service",
        "@id": `${canonicalUrl}#service`,
        "serviceType": "VVS-tjänster och Rörmokare",
        "provider": {
          "@id": `${canonicalUrl}#organization`
        },
        "areaServed": {
          "@type": "City",
          "name": originalCity
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "VVS-tjänster",
          "itemListElement": content.services.map((service, index) => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": service
            }
          }))
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <DocumentHead 
        title={pageTitle}
        description={pageDescription}
        canonicalUrl={canonicalUrl}
        ogImage={content.heroImage}
        structuredData={structuredData}
      />
      <CityHero 
        cityName={originalCity}
        heroImage={content.heroImage}
      />

      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs items={[
          { label: 'Våra områden', href: '/omraden' },
          { label: originalCity }
        ]} />
      </div>

      <div className="container mx-auto px-4 py-8">
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
              <div className="mt-12 bg-gray-50 p-6 rounded-lg">
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