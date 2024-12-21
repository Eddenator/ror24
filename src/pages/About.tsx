import DocumentHead from '@/components/DocumentHead';
import PageHeader from '@/components/PageHeader';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      <DocumentHead 
        title="Om Rör24 | Sveriges ledande rörmokare"
        description="Rör24 är Sveriges mest tillgängliga VVS-service med över 750 städer i vårt nätverk. Jour dygnet runt med snabb utryckning."
      />
      <PageHeader
        title="Om Oss"
        description="Sveriges mest tillgängliga VVS-service"
      />

      <div className="page-container">
        <div className="max-w-3xl mx-auto mb-12">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Rör24 är en del av ett av Sveriges största nätverk av auktoriserade rörmokare, alltid redo att rycka in när du behöver hjälp. Med vår omfattande närvaro i över 750 städer står vi redo, oavsett om det är en akut jourutryckning mitt i natten eller ett planerat VVS-arbete.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Alltid öppet – alltid tillgängliga</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Vi vet att olyckor inte har några kontorstider. Därför håller vi öppet 24/7, varje dag året runt. Ett samtal till oss – och vi är på väg för att hjälpa dig.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Rör24 – En del av 24-nätverket</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Vi är stolta medlemmar i 24-nätverket, som har:
            </p>
            <ul className="list-none space-y-2 mb-8">
              <li className="flex items-center space-x-2">
                <span className="text-yellow-400">✓</span>
                <span>55 000+ utförda jobb i ryggen</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-yellow-400">✓</span>
                <span>91% nöjda kunder som gärna rekommenderar oss vidare</span>
              </li>
            </ul>
            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              Med erfarenhet, tillgänglighet och pålitlighet i varje jobb ser vi till att du alltid kan känna dig trygg när du anlitar oss.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 bg-gray-50 p-8 rounded-lg">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400" />
                <div>
                  <p className="font-semibold">Ring oss</p>
                  <a href="tel:010-555 11 93" className="text-gray-600 hover:text-primary">010-555 11 93</a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400" />
                <div>
                  <p className="font-semibold">E-post</p>
                  <a href="mailto:info@ror24.se" className="text-gray-600 hover:text-primary">info@ror24.se</a>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400" />
                <div>
                  <p className="font-semibold">Adress</p>
                  <p className="text-gray-600">Kungsgatan 4</p>
                  <p className="text-gray-600">421 47 Göteborg</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-yellow-400" />
                <div>
                  <p className="font-semibold">Öppettider</p>
                  <p className="text-gray-600">Öppet dygnet runt</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;