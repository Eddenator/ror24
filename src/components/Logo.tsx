import { GlassWater } from 'lucide-react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link 
      to="/" 
      className="flex items-center space-x-2 text-white hover:opacity-90 transition-opacity"
    >
      <GlassWater size={28} className="text-[#FFD700]" />
      <span className="text-xl font-bold tracking-tight">
        Glas<span className="text-[#FFD700]">24</span>.se
      </span>
    </Link>
  );
};

export default Logo;