import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import Logo from "./Logo";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Stäng menyn när användaren navigerar till en ny sida
  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Logo />
          
          <div className="flex items-center">
            {/* Desktop menu */}
            <div className="hidden md:flex space-x-8 mr-8">
              <Link to="/" className="text-primary hover:text-warning transition-colors">Hem</Link>
              <Link to="/omraden" className="text-primary hover:text-warning transition-colors">Områden</Link>
              <Link to="/om-oss" className="text-primary hover:text-warning transition-colors">Om Oss</Link>
              <Link to="/kontakt" className="text-primary hover:text-warning transition-colors">Kontakt</Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-primary mr-4"
              aria-label={isOpen ? "Stäng meny" : "Öppna meny"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X /> : <Menu />}
            </button>

            {/* Phone number button */}
            <a 
              href="tel:010-55511194" 
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-warning text-warning-foreground rounded-md hover:bg-warning/90 transition-colors"
              aria-label="Ring oss på 010-555 11 94"
            >
              <Phone size={18} />
              010-555 11 94
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div id="mobile-menu" className="md:hidden py-4 space-y-4">
            <Link to="/" className="block text-primary hover:text-warning transition-colors">Hem</Link>
            <Link to="/omraden" className="block text-primary hover:text-warning transition-colors">Områden</Link>
            <Link to="/om-oss" className="block text-primary hover:text-warning transition-colors">Om Oss</Link>
            <Link to="/kontakt" className="block text-primary hover:text-warning transition-colors">Kontakt</Link>
            <a 
              href="tel:010-55511194" 
              className="flex items-center gap-2 px-4 py-2 bg-warning text-warning-foreground rounded-md hover:bg-warning/90 transition-colors w-fit"
              aria-label="Ring oss på 010-555 11 94"
            >
              <Phone size={18} />
              010-555 11 94
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;