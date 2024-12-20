import { Window as WindowIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link 
      to="/" 
      className="flex items-center space-x-2 text-primary hover:opacity-90 transition-opacity"
    >
      <WindowIcon size={28} className="text-black" />
      <span className="text-xl font-bold tracking-tight">
        <span className="text-black">Glas</span>
        <span className="text-[#FFD700]">24</span>
        <span className="text-black">.se</span>
      </span>
    </Link>
  );
};

export default Logo;