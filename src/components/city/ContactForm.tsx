import { Phone, Mail } from "lucide-react";

const ContactForm = () => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <p className="text-lg mb-4 font-medium">
        Sveriges troligen största nätverk med auktoriserade rörmokare. Vi håller öppet 24/7. Ring oss för rådgivning
      </p>
      <a
        href="tel:010-555 11 94"
        className="glass-button bg-yellow-400 text-black hover:bg-yellow-500 w-full flex items-center justify-center space-x-2 mb-6"
      >
        <Phone size={18} />
        <span>Ring 010-555 11 94</span>
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
  );
};

export default ContactForm;