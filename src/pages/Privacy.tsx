import DocumentHead from '@/components/DocumentHead';
import PageHeader from '@/components/PageHeader';

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <DocumentHead 
        title="Integritetspolicy | Rör24"
        description="Läs om hur Rör24 hanterar dina personuppgifter och cookies."
      />
      <PageHeader
        title="Integritetspolicy"
        description="Information om hur vi hanterar dina personuppgifter"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="prose max-w-3xl mx-auto">
          <h2>Cookies och personuppgifter</h2>
          <p>
            På Rör24.se använder vi cookies för att förbättra din upplevelse på vår webbplats 
            och för att hjälpa oss förstå hur du använder den.
          </p>

          <h3>Vad är cookies?</h3>
          <p>
            Cookies är små textfiler som lagras på din dator eller mobila enhet när du besöker 
            vår webbplats. De hjälper oss att komma ihåg dina preferenser och förbättra din 
            upplevelse på webbplatsen.
          </p>

          <h3>Hur vi använder cookies</h3>
          <ul>
            <li>För att förbättra webbplatsens funktionalitet</li>
            <li>För att analysera hur webbplatsen används</li>
            <li>För att spara dina preferenser</li>
          </ul>

          <h3>Personuppgifter</h3>
          <p>
            Vi värnar om din integritet och behandlar dina personuppgifter i enlighet med 
            gällande dataskyddslagstiftning (GDPR).
          </p>

          <h3>Kontakta oss</h3>
          <p>
            Om du har frågor om hur vi hanterar dina personuppgifter eller cookies, 
            är du välkommen att kontakta oss på{' '}
            <a href="mailto:info@ror24.se">info@ror24.se</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;