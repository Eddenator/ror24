import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Pages with header image
  const pagesWithHeaderImage = ['/', '/om-oss', '/omraden', '/kontakt'];
  const hasHeaderImage = pagesWithHeaderImage.includes(location.pathname) || location.pathname.startsWith('/stockholm');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Hem' },
    { path: '/om-oss', label: 'Om oss' },
    { path: '/omraden', label: 'Områden' },
    { path: '/kontakt', label: 'Kontakt' },
  ];

  const textColorClass = hasHeaderImage && !isScrolled 
    ? 'text-white hover:text-white/80' 
    : 'text-gray-600 hover:text-primary';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className={`text-2xl font-bold ${hasHeaderImage && !isScrolled ? 'text-white' : ''}`}>
            Glas24.se
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors duration-300 ${
                  location.pathname === link.path
                    ? `${hasHeaderImage && !isScrolled ? 'text-white font-semibold' : 'text-primary font-semibold'}`
                    : textColorClass
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+46XXXXXXXXX"
              className="glass-button flex items-center space-x-2"
            >
              <Phone size={18} />
              <span>Ring Nu</span>
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className={`md:hidden p-2 ${hasHeaderImage && !isScrolled ? 'text-white' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg animate-fadeIn">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block py-2 transition-colors duration-300 ${
                    location.pathname === link.path
                      ? 'text-primary font-semibold'
                      : 'text-gray-600'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+46XXXXXXXXX"
                className="glass-button text-center"
                onClick={() => setIsOpen(false)}
              >
                Ring Nu
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;