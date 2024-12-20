import { useParams, Navigate } from "react-router-dom";
import { useEffect } from "react";
import CityHero from "../components/city/CityHero";
import CityServices from "../components/city/CityServices";
import ContactForm from "../components/city/ContactForm";
import TrustSignals from "../components/city/TrustSignals";
import DocumentHead from "../components/DocumentHead";
import { cityContent, defaultCityContent } from "../data/cityContent";
import StickyCTA from "../components/StickyCTA";

const CityPage = () => {
  const { city } = useParams();
  
  if (!city) {
    return <Navigate to="/404" replace />;
  }

  const normalizedCity = city.toLowerCase()
    .replace(/å/g, 'a')
    .replace(/ä/g, 'a')
    .replace(/ö/g, 'o')
    .replace(/é/g, 'e')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .trim();

  const content = cityContent[normalizedCity] || null;

  if (!content) {
    return <Navigate to="/404" replace />;
  }

  const description = content.description.replace(/%city%/g, content.city);

  return (
    <div className="min-h-screen">
      <DocumentHead
        title={`Glasmästare i ${content.city} | Glas24`}
        description={`Behöver du en glasmästare i ${content.city}? Vi på Glas24 hjälper dig med alla typer av glasarbeten. Ring oss på 010-555 11 93 för snabb hjälp!`}
      />
      <CityHero city={content.city} image={content.heroImage} />
      <div className="container mx-auto px-4 py-12">
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: description }} />
      </div>
      <CityServices city={content.city} services={content.services} />
      <TrustSignals />
      <ContactForm city={content.city} />
      <StickyCTA />
    </div>
  );
};

export default CityPage;