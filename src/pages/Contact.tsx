import DocumentHead from '@/components/DocumentHead';
import { Phone, Mail, MapPin } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <DocumentHead 
        title="Kontakta Rör24 | Dygnet runt VVS-service"
        description="Kontakta Rör24 för akut VVS-service eller offertförfrågan. Ring 010-555 11 93 för omedelbar hjälp. Öppet dygnet runt, alla dagar."
      />
      <PageHeader
        title="Kontakta Oss"
        description="Vi finns här för dig dygnet runt"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-2xl font-semibold mb-6">Kontaktinformation</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Telefon</h3>
                    <p className="text-gray-600">010-555 11 93</p>
                    <p className="text-sm text-gray-500">Öppet dygnet runt</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">E-post</h3>
                    <p className="text-gray-600">info@ror24.se</p>
                    <p className="text-sm text-gray-500">Svar inom 24 timmar</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Täckningsområde</h3>
                    <p className="text-gray-600">Hela Sverige</p>
                    <p className="text-sm text-gray-500">750+ städer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-lg mb-4 font-medium">
                Sveriges troligen största nätverk med auktoriserade rörmokare. Vi håller öppet 24/7. Ring oss för rådgivning
              </p>
              <a
                href="tel:010-555 11 93"
                className="glass-button bg-yellow-400 text-black hover:bg-yellow-500 w-full flex items-center justify-center space-x-2 mb-6"
              >
                <Phone size={18} />
                <span>Ring 010-555 11 93</span>
              </a>
              
              <p className="text-lg mb-4 font-medium">Fyll ut kontaktformulär:</p>
              <a
                href="#"
                onClick={() => (window as any).Marquiz.showModal('67653b66469d4d00263e29f7')}
                className="glass-button bg-yellow-400 text-black hover:bg-yellow-500 w-full flex items-center justify-center space-x-2"
              >
                <Mail size={18} />
                <span>Få offert ✉️</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;