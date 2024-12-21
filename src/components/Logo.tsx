import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link 
      to="/" 
      className="flex items-center space-x-2 text-primary hover:opacity-90 transition-opacity"
    >
      <span className="text-xl font-bold tracking-tight">
        <span className="text-black">Rör</span>
        <span className="text-[#FFD700]">24</span>
        <span className="text-black">.se</span>
      </span>
    </Link>
  );
};

export default Logo;