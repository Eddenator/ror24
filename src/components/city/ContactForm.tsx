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
      <div className="mb-4">
        <div data-marquiz-id="676c2caba883b70026888c76"></div>
        <script dangerouslySetInnerHTML={{
          __html: `
            (function(t, p) {
              window.Marquiz ? Marquiz.add([t, p]) : document.addEventListener('marquizLoaded', function() {
                Marquiz.add([t, p])
              })
            })('Button', {
              id: '676c2caba883b70026888c76',
              buttonText: 'Offert ',
              bgColor: '#efce36',
              textColor: '#ffffff',
              rounded: true,
              shadow: 'rgba(239, 206, 54, 0.5)',
              blicked: true
            })
          `
        }} />
      </div>
    </div>
  );
};

export default ContactForm;