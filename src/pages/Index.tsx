import { ArrowRight, Clock, Shield, Map } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import StickyCTA from '@/components/StickyCTA';
import DocumentHead from '@/components/DocumentHead';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // Add JSON-LD schema to head
    const schema = {
      "@context": "https://schema.org",
      "@type": "Plumber",
      "name": "Rör24",
      "image": "https://s3.eu-west-1.amazonaws.com/storage.quickbutik.com/stores/28340q/files/ror24.jpg",
      "description": "Sveriges ledande rörmokare med jour 24/7. Snabb utryckning inom 2 timmar.",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "SE",
        "addressRegion": "Sverige"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "59.3293",
        "longitude": "18.0686"
      },
      "url": "https://ror24.se",
      "telephone": "010-555 11 94",
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
      "priceRange": "$$",
      "areaServed": "Sverige",
      "availableLanguage": "Swedish"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <DocumentHead 
        title="Rörmokare i Sverige | Rör24 - Jour dygnet runt"
        description="Sveriges ledande rörmokare med jour 24/7. Snabb utryckning inom 2 timmar. Vi erbjuder professionell VVS-service i över 750 städer."
      />
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://s3.eu-west-1.amazonaws.com/storage.quickbutik.com/stores/28340q/files/ror24.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeIn">
            Rör24 - Öppet 24/7
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fadeIn opacity-90">
            Våra auktoriserade rörmokare betjänar hela Sverige
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 animate-fadeIn">
            <a href="tel:010-555 11 94" className="glass-button">
              Ring 010-555 11 94
            </a>
            <Link to="/omraden" className="glass-button bg-white/10 hover:bg-white/20">
              Hitta din stad
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Varför välja oss?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <Clock className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">24/7 Tillgängliga</h3>
              <p className="text-gray-600">
                Vi finns här för dig dygnet runt, alla dagar om året
              </p>
            </div>
            <div className="card">
              <Map className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Snabb Utryckning</h3>
              <p className="text-gray-600">
                På plats inom 2 timmar i de flesta områden
              </p>
            </div>
            <div className="card">
              <Shield className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Garanterat Arbete</h3>
              <p className="text-gray-600">
                Professionellt utförande med kvalitetsgaranti
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Behöver du hjälp med rör/vvs?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Vi finns tillgängliga i över 750 städer i Sverige
          </p>
          <Link
            to="/omraden"
            className="glass-button inline-flex items-center space-x-2"
          >
            <span>Hitta din stad</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;