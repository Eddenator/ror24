import { useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { Clock, Phone, MapPin, CheckCircle } from 'lucide-react';

const CityPage = () => {
  const { city } = useParams<{ city: string }>();
  const formattedCity = city ? city.charAt(0).toUpperCase() + city.slice(1) : '';

  return (
    <div className="min-h-screen">
      <PageHeader
        title={`Glasmästare i ${formattedCity}`}
        description="Snabb och professionell glasservice"
      />

      <div className="page-container">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="card">
              <Clock className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Snabb Utryckning</h3>
              <p className="text-gray-600">
                Vi är på plats inom 2 timmar i {formattedCity} med omnejd
              </p>
            </div>
            <div className="card">
              <Phone className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Dygnet Runt Service</h3>
              <p className="text-gray-600">
                Ring oss när som helst - vi finns här för dig 24/7
              </p>
            </div>
          </div>

          <div className="bg-secondary rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6">
              Våra Tjänster i {formattedCity}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Glasreparation',
                'Fönsterbyte',
                'Glasmontering',
                'Akut glasservice',
                'Isolerglas',
                'Säkerhetsglas'
              ].map((service, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-6">
              Behöver du hjälp i {formattedCity}?
            </h2>
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