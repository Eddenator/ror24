import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import DocumentHead from "@/components/DocumentHead";

const NotFound = () => {
  return (
    <>
      <DocumentHead
        title="404 - Sidan kunde inte hittas | Glas24"
        description="Tyvärr kunde vi inte hitta sidan du söker. Gå tillbaka till startsidan eller kontakta oss för hjälp."
      />
      <div className="container flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
        <h1 className="text-4xl font-bold mb-4">404 - Sidan kunde inte hittas</h1>
        <p className="text-lg mb-8 max-w-md">
          Tyvärr kunde vi inte hitta sidan du söker. Kontrollera att adressen är korrekt eller gå tillbaka till startsidan.
        </p>
        <div className="space-x-4">
          <Button asChild>
            <Link to="/">
              Gå till startsidan
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/kontakt">
              Kontakta oss
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default NotFound;