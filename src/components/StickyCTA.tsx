import { Phone } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const StickyCTA = () => {
  const isMobile = useIsMobile();

  if (!isMobile) return null;

  return (
    <a
      href="tel:010-555 11 93"
      className="fixed bottom-4 right-4 z-50 glass-button bg-yellow-400 text-black 
                hover:bg-yellow-500 shadow-lg flex items-center space-x-2"
    >
      <Phone size={18} />
      <span>Ring Nu</span>
    </a>
  );
};

export default StickyCTA;