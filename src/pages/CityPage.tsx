import { useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { Clock, Phone, MapPin, CheckCircle, Shield } from 'lucide-react';

const CityPage = () => {
  const { city } = useParams<{ city: string }>();
  const formattedCity = city ? city.charAt(0).toUpperCase() + city.slice(1) : '';

  return (
    <div className="min-h-screen">
      <PageHeader
        title={`Glasmästare ${formattedCity}`}
        description={`Professionell glasservice i ${formattedCity} - Jour dygnet runt`}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="card bg-white shadow-lg">
              <Clock className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Jour 24/7</h3>
              <p className="text-gray-600">
                Vi är tillgängliga dygnet runt i {formattedCity} med omnejd
              </p>
            </div>
            <div className="card bg-white shadow-lg">
              <Shield className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Snabb Utryckning</h3>
              <p className="text-gray-600">
                Vi är på plats inom 2 timmar i {formattedCity}
              </p>
            </div>
          </div>

          {/* Services Section */}
          <div className="bg-secondary rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6">
              Våra Tjänster i {formattedCity}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Akut glasreparation',
                'Fönsterbyte',
                'Glasmontering',
                'Isolerglas',
                'Säkerhetsglas',
                'Energiglas'
              ].map((service, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">
              Behöver du glasmästare i {formattedCity}?
            </h2>
            <p className="text-gray-600 mb-6">
              Vi finns här för dig dygnet runt. Ring oss för snabb och professionell hjälp.
            </p>
            <a
              href="tel:+46XXXXXXXXX"
              className="glass-button inline-flex items-center space-x-2"
            >
              <Phone size={18} />
              <span>Ring Nu</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityPage;