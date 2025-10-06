import { Phone } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const StickyCTA = () => {
  const isMobile = useIsMobile();

  if (!isMobile) return null;

  return (
    <a
      href="tel:010-55511194"
      className="fixed bottom-4 right-4 z-50 glass-button bg-warning text-warning-foreground 
                hover:bg-warning/90 shadow-lg flex items-center space-x-2"
      aria-label="Ring oss på 010-555 11 94"
    >
      <Phone size={18} />
      <span>Ring Nu</span>
    </a>
  );
};

export default StickyCTA;