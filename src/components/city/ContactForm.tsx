import { Phone } from "lucide-react";
import { useEffect } from "react";

const ContactForm = () => {
  useEffect(() => {
    // Initialize Marquiz after component mounts
    if (window.Marquiz) {
      window.Marquiz.add(['Button', {
        id: '67653b66469d4d00263e29f7',
        buttonText: 'Få offert ✉️',
        bgColor: '#efce36',
        textColor: '#ffffff',
        rounded: true,
        shadow: 'rgba(239, 206, 54, 0.5)',
        blicked: true
      }]);
    } else {
      document.addEventListener('marquizLoaded', function() {
        window.Marquiz?.add(['Button', {
          id: '67653b66469d4d00263e29f7',
          buttonText: 'Få offert ✉️',
          bgColor: '#efce36',
          textColor: '#ffffff',
          rounded: true,
          shadow: 'rgba(239, 206, 54, 0.5)',
          blicked: true
        }]);
      });
    }
  }, []);

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <p className="text-lg mb-4 font-medium">
        Sveriges troligen största nätverk med auktoriserade glasmästare. Vi håller öppet 24/7. Ring oss för rådgivning
      </p>
      <a
        href="tel:010-555 11 93"
        className="glass-button bg-yellow-400 text-black hover:bg-yellow-500 w-full flex items-center justify-center space-x-2 mb-6"
      >
        <Phone size={18} />
        <span>Ring 010-555 11 93</span>
      </a>
      
      <div data-marquiz-id="67653b66469d4d00263e29f7"></div>
    </div>
  );
};

export default ContactForm;