import DocumentHead from '@/components/DocumentHead';

const About = () => {
  return (
    <div className="min-h-screen">
      <DocumentHead 
        title="Om Rör24 | Sveriges mest tillgängliga VVS-service"
        description="Rör24 erbjuder VVS-tjänster i över 750 städer med auktoriserade rörmokare. 55 000+ utförda jobb och 91% nöjda kunder. Jour dygnet runt, året om."
      />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Om Rör24</h1>
        <p className="text-lg text-gray-700 mb-4">
          Rör24 är ett av Sveriges största nätverk av auktoriserade rörmokare. Vi erbjuder professionell VVS-service dygnet runt, året om.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Med över 55 000 utförda jobb och en nöjd kundbas på 91%, kan du lita på att vi alltid är här för att hjälpa dig med dina VVS-behov.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Våra Tjänster</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Akut VVS-jour</li>
          <li>Avloppsrensning</li>
          <li>Installation av blandare och toaletter</li>
          <li>Reparation av läckor och skador</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Varför Välja Oss?</h2>
        <p className="text-lg text-gray-700 mb-4">
          Vi är alltid tillgängliga, har snabba utryckningar och erbjuder garantier på vårt arbete. Vårt mål är att ge dig den bästa servicen och tryggheten när du behöver hjälp.
        </p>
      </div>
    </div>
  );
};

export default About;
