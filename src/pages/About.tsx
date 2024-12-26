import DocumentHead from '@/components/DocumentHead';
import PageHeader from '@/components/PageHeader';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    // Add JSON-LD schema to head
    const schema = {
      "@context": "https://schema.org",
      "@type": "HomeAndConstructionBusiness",
      "name": "Rör24",
      "image": "https://s3.eu-west-1.amazonaws.com/storage.quickbutik.com/stores/28340q/files/ror24.jpg",
      "description": "Rör24 är Sveriges mest tillgängliga VVS-service med över 750 städer i vårt nätverk. Vi erbjuder akut VVS-jour och planerade arbeten med snabb utryckning.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kungsgatan 4",
        "addressLocality": "Göteborg",
        "postalCode": "421 47",
        "addressCountry": "SE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "57.7089",
        "longitude": "11.9746"
      },
      "url": "https://ror24.se/om-oss",
      "telephone": "010-555 11 94",
      "email": "info@ror24.se",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "sameAs": [
        "https://www.facebook.com/ror24",
        "https://www.linkedin.com/company/106096021/"
      ],
      "priceRange": "$$",
      "areaServed": "Sverige",
      "availableLanguage": "Swedish",
      "foundingDate": "2013",
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "value": "50+"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.5",
        "reviewCount": "55000"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <DocumentHead 
        title="Om Rör24 | Sveriges ledande rörmokare med jour dygnet runt"
        description="Rör24 är Sveriges mest tillgängliga VVS-service med över 750 städer i vårt nätverk. Vi erbjuder akut VVS-jour och planerade arbeten med snabb utryckning."
      />
      <PageHeader
        title="Om Oss"
        description="Sveriges mest tillgängliga VVS-service"
      />

      <div className="page-container">
        <div className="max-w-3xl mx-auto mb-12">
          <div className="prose max-w-none">
            {/* Hero Section */}
            <h1 className="text-4xl font-bold mb-4">Välkommen till Rör24 – Sveriges mest tillgängliga VVS-service</h1>
            <p className="text-xl mb-8">Auktoriserade rörmokare i över 750 städer, redo dygnet runt.</p>

            {/* Vision Section */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Vår vision – att förenkla ditt VVS-liv</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Rör24 vill vara din mest pålitliga VVS-partner i hela Sverige, oavsett var du befinner dig eller vilken tid på dygnet det är. Bakom Rör24 står ett team med över 10 års erfarenhet av byggbranschen, som tillsammans med 24 Center har skapat ett av Sveriges största nätverk av auktoriserade rörmokare. Resultatet? Hjälp med allt från akuta rörproblem mitt i natten till planerade renoveringar – 24 timmar om dygnet, alla dagar om året.
              </p>
            </section>

            {/* Stats Grid */}
            <section className="grid md:grid-cols-2 gap-6 my-12">
              <div className="bg-secondary rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">10+ års branscherfarenhet</h3>
                <p>Vårt team har arbetat med byggföretag och fastighetsprojekt i över ett decennium.</p>
              </div>
              <div className="bg-secondary rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">En del av 24-nätverket</h3>
                <p>Vi samarbetar med 24 Center, vilket ger oss en rikstäckande närvaro och direkt tillgång till lokala proffs i över 750 städer.</p>
              </div>
              <div className="bg-secondary rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">55 000+ utförda jobb</h3>
                <p>24 nätverket har utfört nästan 60 000 arbeten. Våra kunder känner sig trygga med vår långa erfarenhet och stabila processer.</p>
              </div>
              <div className="bg-secondary rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">91% nöjda kunder</h3>
                <p>Vår främsta målsättning är att leverera kvalitet och säkerställa att varje kund känner sig omhändertagen.</p>
              </div>
            </section>

            {/* Why Choose Us Section */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Varför välja Rör24?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card">
                  <h3 className="text-xl font-semibold mb-2">Dygnet-runt-jour</h3>
                  <p>Problem med rör uppstår inte bara under kontorstid. Därför är vi alltid tillgängliga när du behöver oss, dygnet runt, alla dagar.</p>
                </div>
                <div className="card">
                  <h3 className="text-xl font-semibold mb-2">Snabb hjälp på plats</h3>
                  <p>Tack vare vårt breda nätverk kan vi ofta vara på plats inom 15 minuter vid akuta situationer.</p>
                </div>
                <div className="card">
                  <h3 className="text-xl font-semibold mb-2">Transparent prissättning & ROT-avdrag</h3>
                  <p>Vi ger alltid en tydlig offert och hjälper dig gärna med ansökan om ROT-avdrag för att sänka kostnaden.</p>
                </div>
                <div className="card">
                  <h3 className="text-xl font-semibold mb-2">Trygghet & kvalitet</h3>
                  <p>Alla våra rörmokare är auktoriserade och har stor erfarenhet av olika VVS-uppdrag. Vi erbjuder dessutom en nöjdhetsgaranti för allt utfört arbete.</p>
                </div>
              </div>
            </section>

            {/* History Section */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Vår historia – från byggprojekt till rikstäckande VVS-jour</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Efter mer än 10 år i byggbranschen såg vi återkommande hur krångligt och oöverskådligt det kunde vara för både privatpersoner och företagare att hitta en pålitlig rörmokare – särskilt vid akuta problem. Därför gick vi ihop med 24 Center för att bygga upp ett nätverk av lokala rörmokare över hela landet. Vår målsättning: att göra det enkelt, snabbt och transparent att få professionell hjälp när man behöver det som mest.
              </p>
            </section>

            {/* Process Section */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Så här går det till:</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card">
                  <h3 className="text-xl font-semibold mb-2">1. Kontakta oss</h3>
                  <p>Ring 010-555 11 94, mejla info@ror24.se, eller fyll i kontaktformuläret på vår webbplats.</p>
                </div>
                <div className="card">
                  <h3 className="text-xl font-semibold mb-2">2. Behovsbedömning & offert</h3>
                  <p>Vi ställer de viktigaste frågorna för att förstå din situation och lämnar en tydlig kostnadsuppskattning direkt.</p>
                </div>
                <div className="card">
                  <h3 className="text-xl font-semibold mb-2">3. Uppdraget påbörjas</h3>
                  <p>Vi lokaliserar den proffsiga rörmokare som kan vara hos dig snabbast. Du får en bekräftelse via telefon eller SMS.</p>
                </div>
                <div className="card">
                  <h3 className="text-xl font-semibold mb-2">4. Utförande & uppföljning</h3>
                  <p>Efter arbetets slutförande skickar vi faktura och följer upp för att säkerställa att du är nöjd med vår insats.</p>
                </div>
              </div>
            </section>

            {/* Services Section */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Ett heltäckande serviceutbud inom fastighetsteknik</h2>
              <p className="mb-4">Som en del av 24 Center-nätverket erbjuder vi inte bara rörmokartjänster, utan hjälper dig även med:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Elektriker</li>
                <li>Låssmed</li>
                <li>Spolbil & Sugbil</li>
                <li>Kylning & Automation</li>
                <li>Rengöring och Glasarbeten</li>
              </ul>
              <p>Oavsett vilket problem du står inför, räcker det med ett telefonsamtal så ser vi till att rätt expert kommer till dig.</p>
            </section>

            {/* Customer Service Section */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Kundservice & betalning</h2>
              <ul className="space-y-4">
                <li><strong>Alltid öppet:</strong> Behöver du jourhjälp vid ett rörläckage mitt i natten? Vi är bara ett samtal bort!</li>
                <li><strong>Smidig fakturering:</strong> Fakturan skickas inom 10 dagar efter slutfört arbete. Du kan välja mellan flera olika betalningsalternativ.</li>
                <li><strong>Nöjdhetsgaranti:</strong> Skulle något inte motsvara dina förväntningar rättar vi till det.</li>
              </ul>
            </section>

            {/* Contact Information */}
            <section className="bg-gray-50 p-8 rounded-lg mt-8">
              <h2 className="text-2xl font-bold mb-6">Kontakta oss redan idag!</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-yellow-400" />
                    <div>
                      <p className="font-semibold">Ring oss</p>
                      <a href="tel:010-555 11 94" className="text-gray-600 hover:text-primary">010-555 11 94</a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-yellow-400" />
                    <div>
                      <p className="font-semibold">E-post</p>
                      <a href="mailto:info@ror24.se" className="text-gray-600 hover:text-primary">info@ror24.se</a>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-yellow-400" />
                    <div>
                      <p className="font-semibold">Adress</p>
                      <p className="text-gray-600">Kungsgatan 4</p>
                      <p className="text-gray-600">421 47 Göteborg</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-yellow-400" />
                    <div>
                      <p className="font-semibold">Öppettider</p>
                      <p className="text-gray-600">Öppet dygnet runt</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <p className="text-lg text-gray-600 leading-relaxed mt-8">
              Med vår långa erfarenhet, vårt breda nätverk och en genuin vilja att hjälpa dig ser vi till att lösa dina VVS-problem snabbt och effektivt. Välkommen att höra av dig!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;