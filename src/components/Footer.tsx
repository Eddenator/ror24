import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Kontakta Oss</h3>
            <div className="space-y-3">
              <a href="tel:010-555 11 94" className="flex items-center gap-2 hover:text-yellow-400">
                <Phone size={18} />
                010-555 11 94
              </a>
              <a href="mailto:info@ror24.se" className="flex items-center gap-2 hover:text-yellow-400">
                <Mail size={18} />
                info@ror24.se
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                Kungsgatan 4<br />
                421 47 Göteborg
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                Öppet dygnet runt
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Snabblänkar</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-yellow-400">Hem</Link></li>
              <li><Link to="/om-oss" className="hover:text-yellow-400">Om Oss</Link></li>
              <li><Link to="/omraden" className="hover:text-yellow-400">Områden</Link></li>
              <li><Link to="/kontakt" className="hover:text-yellow-400">Kontakt</Link></li>
              <li><Link to="/integritetspolicy" className="hover:text-yellow-400">Integritetspolicy</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Våra Tjänster</h3>
            <ul className="space-y-2">
              <li>Akut VVS-service</li>
              <li>Rörinspektion</li>
              <li>Avloppsrensning</li>
              <li>Värmepumpar</li>
              <li>Vattenskador</li>
            </ul>
          </div>

          {/* Social & Certifications */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Följ Oss</h3>
            <div className="flex gap-4 mb-6">
              <a href="#" className="hover:text-yellow-400"><Facebook /></a>
              <a href="#" className="hover:text-yellow-400"><Instagram /></a>
              <a href="#" className="hover:text-yellow-400"><Linkedin /></a>
            </div>
            <div className="space-y-2 text-sm">
              <p>✓ Certifierad Rörmokare</p>
              <p>✓ Auktoriserad Partner</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Rör24.se - Alla rättigheter förbehållna</p>
          <p className="mt-2 text-gray-400">Rör24.se - Ett samarbete med 24 Center Sverige AB 559262-4919</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;