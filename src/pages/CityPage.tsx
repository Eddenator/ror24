import { useParams, Navigate } from "react-router-dom";
import { useEffect } from "react";
import CityHero from "@/components/city/CityHero";
import CityServices from "@/components/city/CityServices";
import TrustSignals from "@/components/city/TrustSignals";
import ContactForm from "@/components/city/ContactForm";
import DocumentHead from "@/components/DocumentHead";
import { getCityContent, normalizeCity } from "@/utils/cityContentUtils";

const CityPage = () => {
  const { city } = useParams();
  
  if (!city) {
    return <Navigate to="/404" replace />;
  }

  const normalizedCity = normalizeCity(city);
  const content = getCityContent(normalizedCity);

  // If no content found for this city, redirect to 404
  if (!content) {
    return <Navigate to="/404" replace />;
  }

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <DocumentHead
        title={`Glasmästare i ${content.city} | Glas24`}
        description={content.description}
      />
      <div className="flex flex-col gap-12 md:gap-24">
        <CityHero 
          cityName={content.city} 
          heroImage={content.heroImage} 
        />
        <CityServices 
          cityName={content.city} 
          services={content.services} 
        />
        <TrustSignals />
        <ContactForm />
      </div>
    </>
  );
};

export default CityPage;