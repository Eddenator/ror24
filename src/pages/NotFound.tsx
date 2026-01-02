import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import DocumentHead from '@/components/DocumentHead';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-4">
      <DocumentHead 
        title="Sidan hittades inte | 404 - Rör24"
        description="Tyvärr kunde vi inte hitta sidan du letar efter. Gå tillbaka till startsidan eller kontakta oss för hjälp."
        robots="noindex, follow"
      />
      <h1 className="text-4xl md:text-6xl font-bold mb-4">404</h1>
      <p className="text-xl md:text-2xl mb-8 text-gray-600">
        Tyvärr kunde vi inte hitta sidan du letar efter
      </p>
      <Link to="/">
        <Button className="flex items-center gap-2">
          <Home size={20} />
          Tillbaka till startsidan
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
