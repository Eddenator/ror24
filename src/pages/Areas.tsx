import DocumentHead from '@/components/DocumentHead';
import PageHeader from '@/components/PageHeader';

const Areas = () => {
  return (
    <div className="min-h-screen">
      <DocumentHead 
        title="Rörmokare i hela Sverige | VVS Service i 750+ städer"
        description="Hitta en auktoriserad rörmokare nära dig. Vi erbjuder akut VVS-service i över 750 städer i Sverige. Jour dygnet runt med snabb utryckning."
      />
      <PageHeader
        title="Våra Tjänster i Sverige"
        description="Vi erbjuder VVS-tjänster i hela Sverige, dygnet runt."
      />

      <div className="container mx-auto px-4 py-12">
        <div className="prose max-w-3xl mx-auto">
          <h2>Våra Tjänster</h2>
          <p>
            Rör24 är stolta över att erbjuda ett brett utbud av VVS-tjänster i över 750 städer i Sverige. Oavsett om du behöver akut hjälp eller planerar en installation, har vi auktoriserade rörmokare redo att hjälpa dig.
          </p>

          <h3>Akut VVS-service</h3>
          <p>
            Vi erbjuder dygnet runt jour för akuta VVS-problem. Våra rörmokare är snabbt på plats för att lösa dina problem.
          </p>

          <h3>Installationer</h3>
          <p>
            Vi kan hjälpa till med installation av blandare, toaletter, diskmaskiner och mycket mer. Kontakta oss för en kostnadsfri offert.
          </p>

          <h3>Felsökning och reparation</h3>
          <p>
            Har du problem med värme eller vatten? Våra experter kan snabbt identifiera och åtgärda problemen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Areas;
