import { useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { Clock, Phone, MapPin, CheckCircle, Shield, Star, Award, ThumbsUp } from 'lucide-react';

const CityPage = () => {
  const { city } = useParams<{ city: string }>();
  const formattedCity = city ? city.charAt(0).toUpperCase() + city.slice(1) : '';

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title={`Glasmästare ${formattedCity}`}
        description={`Professionell glasservice i ${formattedCity} - Jour dygnet runt`}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section with Image */}
          <div className="relative h-[400px] mb-12 rounded-lg overflow-hidden">
            <img 
              src="/photo-1496307653780-42ee777d4833" 
              alt={`Glasmästare i ${formattedCity}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Dygnet Runt Glasservice</h2>
                <a href="tel:010-555 11 93" className="glass-button bg-yellow-400 text-black hover:bg-yellow-500">
                  Ring 010-555 11 93
                </a>
              </div>
            </div>
          </div>

          {/* Trust Signals */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 rounded-lg bg-gray-50">
              <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">4.9/5 Betyg</h3>
              <p className="text-gray-600">Från över 500 kunder</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-50">
              <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Certifierad</h3>
              <p className="text-gray-600">ISO 9001:2015</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-50">
              <ThumbsUp className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">10 års garanti</h3>
              <p className="text-gray-600">På alla installationer</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="prose max-w-none mb-12">
            <h2>Professionell Glasmästare i {formattedCity}</h2>
            <p>
              Som ledande glasmästare i {formattedCity} erbjuder vi omfattande glastjänster för både privatpersoner och företag. 
              Med över 20 års erfarenhet i branschen kan vi hantera alla typer av glasarbeten, från akuta reparationer till 
              planerade installationer.
            </p>
            <p>
              Vårt team av certifierade glasmästare är tillgängliga dygnet runt för att säkerställa att du får den hjälp du 
              behöver, när du behöver den. Vi använder endast material av högsta kvalitet och följer de senaste 
              branschstandarderna för att garantera bästa möjliga resultat.
            </p>
          </div>

          {/* Services Grid */}
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Våra Tjänster i {formattedCity}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Akut glasreparation',
                'Fönsterbyte',
                'Glasmontering',
                'Isolerglas',
                'Säkerhetsglas',
                'Energiglas',
                'Glasräcken',
                'Duschväggar'
              ].map((service, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                  <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center bg-black text-white rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">
              Behöver du glasmästare i {formattedCity}?
            </h2>
            <p className="text-lg mb-6">
              Vi finns här för dig dygnet runt. Ring oss för snabb och professionell hjälp.
            </p>
            <div className="space-y-4">
              <a
                href="tel:010-555 11 93"
                className="glass-button bg-yellow-400 text-black hover:bg-yellow-500 inline-flex items-center space-x-2"
              >
                <Phone size={18} />
                <span>Ring 010-555 11 93</span>
              </a>
              <p className="text-sm text-gray-400">
                Svarstid under 60 sekunder
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityPage;