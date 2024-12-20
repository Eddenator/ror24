import { useParams, Navigate } from "react-router-dom";
import { useEffect } from "react";
import CityHero from "@/components/city/CityHero";
import CityServices from "@/components/city/CityServices";
import TrustSignals from "@/components/city/TrustSignals";
import ContactForm from "@/components/city/ContactForm";
import DocumentHead from "@/components/DocumentHead";
import { getCityContent } from "@/utils/cityContentUtils";
import { normalizeCity } from "@/utils/cityContentUtils";

const CityPage = () => {
  const { city } = useParams();
  
  if (!city) {
    return <Navigate to="/404" replace />;
  }

  const normalizedCity = normalizeCity(city);
  const cityContent = getCityContent(normalizedCity);

  // If no content found for this city, redirect to 404
  if (!cityContent) {
    return <Navigate to="/404" replace />;
  }

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <DocumentHead
        title={`${cityContent.title} | Glas24`}
        description={cityContent.description}
      />
      <div className="flex flex-col gap-12 md:gap-24">
        <CityHero cityContent={cityContent} />
        <CityServices cityContent={cityContent} />
        <TrustSignals />
        <ContactForm cityName={cityContent.city} />
      </div>
    </>
  );
};

export default CityPage;