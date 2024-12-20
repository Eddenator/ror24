import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Logo />
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <X /> : <Menu />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-primary">Hem</Link>
            <Link to="/omraden" className="hover:text-primary">Områden</Link>
            <Link to="/om-oss" className="hover:text-primary">Om Oss</Link>
            <Link to="/kontakt" className="hover:text-primary">Kontakt</Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link to="/" className="block hover:text-primary">Hem</Link>
            <Link to="/omraden" className="block hover:text-primary">Områden</Link>
            <Link to="/om-oss" className="block hover:text-primary">Om Oss</Link>
            <Link to="/kontakt" className="block hover:text-primary">Kontakt</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;