import DocumentHead from '@/components/DocumentHead';

const NotFound = () => {
  return (
    <div className="min-h-screen">
      <DocumentHead 
        title="Sidan hittades inte | Rör24"
        description="Sidan du söker kunde inte hittas. Besök vår hemsida för att hitta en auktoriserad rörmokare nära dig."
      />
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Sidan hittades inte</h1>
        <p className="text-lg text-gray-600 mb-8">
          Tyvärr kunde vi inte hitta den sidan du letade efter.
        </p>
        <a href="/" className="text-blue-500 hover:underline">
          Gå tillbaka till startsidan
        </a>
      </div>
    </div>
  );
};

export default NotFound;
