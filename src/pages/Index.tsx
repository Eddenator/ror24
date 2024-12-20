const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Välkommen till Glas24</h1>
        <p className="text-lg mb-4">
          Vi är din pålitliga partner för alla typer av glasarbeten. Med vår expertis och erfarenhet kan vi hjälpa dig med allt från akuta glasreparationer till planerade fönsterbyten.
        </p>
        <p className="text-lg mb-4">
          Vårt team av erfarna glasmästare finns tillgängliga dygnet runt för att säkerställa att du får den hjälp du behöver, när du behöver den.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Våra Tjänster</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Akut Glasservice</h3>
              <p>Tillgängliga dygnet runt för alla dina akuta glasbehov.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Fönsterbyte</h3>
              <p>Professionell installation och byte av alla typer av fönster.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;