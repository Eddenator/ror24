import DocumentHead from '@/components/DocumentHead';
import PageHeader from '@/components/PageHeader';

const About = () => {
  return (
    <div className="min-h-screen">
      <DocumentHead 
        title="Om Rör24 | Sveriges mest tillgängliga VVS-service"
        description="Rör24 erbjuder VVS-tjänster i över 750 städer med auktoriserade rörmokare. 55 000+ utförda jobb och 91% nöjda kunder. Jour dygnet runt, året om."
      />
      <PageHeader
        title="Om Rör24"
        description="Sveriges mest tillgängliga VVS-service"
      />
      
      <div className="page-container max-w-4xl mx-auto">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Vår vision – att förenkla ditt VVS-liv</h2>
          <p className="text-lg mb-6">
            Rör24 vill vara din mest pålitliga VVS-partner i hela Sverige, oavsett var du befinner dig eller vilken tid på dygnet det är. Bakom Rör24 står ett team med över 10 års erfarenhet av byggbranschen, som tillsammans med 24 Center har skapat ett av Sveriges största nätverk av auktoriserade rörmokare. Resultatet? Hjälp med allt från akuta rörproblem mitt i natten till planerade renoveringar – 24 timmar om dygnet, alla dagar om året.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Vilka är vi?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">10+ års branscherfarenhet</h3>
              <p>Vårt team har arbetat med byggföretag och fastighetsprojekt i över ett decennium.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">En del av 24-nätverket</h3>
              <p>Vi samarbetar med 24 Center, vilket ger oss en rikstäckande närvaro och direkt tillgång till lokala proffs i över 750 städer.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">55 000+ utförda jobb</h3>
              <p>24 nätverket har utfört nästan 60 000 arbeten. Våra kunder känner sig trygga med vår långa erfarenhet och stabila processer.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">91% nöjda kunder</h3>
              <p>Vår främsta målsättning är att leverera kvalitet och säkerställa att varje kund känner sig omhändertagen.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Varför välja Rör24?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Dygnet-runt-jour</h3>
              <p>Problem med rör uppstår inte bara under kontorstid. Därför är vi alltid tillgängliga när du behöver oss, dygnet runt, alla dagar.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Snabb hjälp på plats</h3>
              <p>Tack vare vårt breda nätverk kan vi ofta vara på plats inom 15 minuter vid akuta situationer.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Transparent prissättning & ROT-avdrag</h3>
              <p>Vi ger alltid en tydlig offert och hjälper dig gärna med ansökan om ROT-avdrag för att sänka kostnaden.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Trygghet & kvalitet</h3>
              <p>Alla våra rörmokare är auktoriserade och har stor erfarenhet av olika VVS-uppdrag. Vi erbjuder dessutom en nöjdhetsgaranti för allt utfört arbete.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Vår historia – från byggprojekt till rikstäckande VVS-jour</h2>
          <p className="text-lg mb-6">
            Efter mer än 10 år i byggbranschen såg vi återkommande hur krångligt och oöverskådligt det kunde vara för både privatpersoner och företagare att hitta en pålitlig rörmokare – särskilt vid akuta problem. Därför gick vi ihop med 24 Center för att bygga upp ett nätverk av lokala rörmokare över hela landet. Vår målsättning: att göra det enkelt, snabbt och transparent att få professionell hjälp när man behöver det som mest.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Så här går det till:</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">1. Kontakta oss</h3>
              <p>Ring 010-555 11 94, mejla info@ror24.se, eller fyll i kontaktformuläret på vår webbplats.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">2. Behovsbedömning & offert</h3>
              <p>Vi ställer de viktigaste frågorna för att förstå din situation och lämnar en tydlig kostnadsuppskattning direkt.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">3. Uppdraget påbörjas</h3>
              <p>Vi lokaliserar den proffsiga rörmokare som kan vara hos dig snabbast. Du får en bekräftelse via telefon eller SMS.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">4. Utförande & uppföljning</h3>
              <p>Efter arbetets slutförande skickar vi faktura och följer upp för att säkerställa att du är nöjd med vår insats.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Ett heltäckande serviceutbud inom fastighetsteknik</h2>
          <p className="text-lg mb-4">Som en del av 24 Center-nätverket erbjuder vi inte bara rörmokartjänster, utan hjälper dig även med:</p>
          <ul className="list-disc list-inside text-lg mb-6 space-y-2">
            <li>Elektriker</li>
            <li>Låssmed</li>
            <li>Spolbil & Sugbil</li>
            <li>Kylning & Automation</li>
            <li>Rengöring och Glasarbeten</li>
          </ul>
          <p className="text-lg">Oavsett vilket problem du står inför, räcker det med ett telefonsamtal så ser vi till att rätt expert kommer till dig.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Kundservice & betalning</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Alltid öppet</h3>
              <p>Behöver du jourhjälp vid ett rörläckage mitt i natten? Vi är bara ett samtal bort!</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Smidig fakturering</h3>
              <p>Fakturan skickas inom 10 dagar efter slutfört arbete. Du kan välja mellan flera olika betalningsalternativ.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Nöjdhetsgaranti</h3>
              <p>Skulle något inte motsvara dina förväntningar rättar vi till det.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Kontakta oss redan idag!</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Telefon</h3>
              <p>010-555 11 94</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">E-post</h3>
              <p>info@ror24.se</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Adress</h3>
              <p>Kungsgatan 4, 421 47 Göteborg</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Hemsida</h3>
              <p>www.ror24.se</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Öppettider</h3>
              <p>Dygnet runt, året om</p>
            </div>
          </div>
        </section>

        <p className="text-lg">
          Med vår långa erfarenhet, vårt breda nätverk och en genuin vilja att hjälpa dig ser vi till att lösa dina VVS-problem snabbt och effektivt. Välkommen att höra av dig!
        </p>
      </div>
    </div>
  );
};

export default About;