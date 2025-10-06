import { Phone, Mail } from "lucide-react";

const ContactForm = () => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <p className="text-lg mb-4 font-medium">
        Sveriges troligen största nätverk med auktoriserade rörmokare. Vi håller öppet 24/7. Ring oss för rådgivning
      </p>
      <a
        href="tel:010-55511194"
        className="glass-button bg-warning text-warning-foreground hover:bg-warning/90 w-full flex items-center justify-center space-x-2 mb-6"
        aria-label="Ring oss på 010-555 11 94"
      >
        <Phone size={18} />
        <span>Ring 010-555 11 94</span>
      </a>
      
      <p className="text-lg mb-4 font-medium">Fyll ut kontaktformulär:</p>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          (window as any).Marquiz.showModal('676c2caba883b70026888c76');
        }}
        className="glass-button bg-warning text-warning-foreground hover:bg-warning/90 w-full flex items-center justify-center space-x-2"
        aria-label="Öppna kontaktformulär för offert"
      >
        <Mail size={18} />
        <span>Få offert ✉️</span>
      </a>
    </div>
  );
};

export default ContactForm;