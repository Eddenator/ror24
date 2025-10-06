import { CityContent } from '../types/cityContent';

// Deterministisk hash-funktion baserad på stadsnamn
const hashString = (str: string): number => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
};

// Välj variation baserat på stad (deterministiskt)
const selectVariation = <T>(city: string, variations: T[]): T => {
  const hash = hashString(city);
  return variations[hash % variations.length];
};

const generatePageVariations = (city: string) => {
  const variations = [
    `<section>
      <h1>Jourhavande Rörmokare i ${city} – Dygnet runt med Rör24!</h1>
      <p>Behöver du en pålitlig rörmokare i ${city}? Rör24 är det självklara valet med vårt omfattande nätverk av auktoriserade VVS-tekniker. Vi finns tillgängliga dygnet runt för att hjälpa dig med alla typer av VVS-problem.</p>
    </section>`,
    
    `<section>
      <h1>VVS & Rörmokare i ${city} - Jour 24/7</h1>
      <p>Välkommen till Rör24 i ${city}! Som en del av Sveriges största nätverk av auktoriserade rörmokare erbjuder vi professionell VVS-service dygnet runt, året om.</p>
      <p>Med vår omfattande erfarenhet och lokala närvaro i ${city} kan vi garantera snabb och pålitlig service för alla dina VVS-behov.</p>
    </section>`,
    
    `<section>
      <h1>Akut VVS-service i ${city} - Ring Rör24!</h1>
      <p>Har du VVS-problem i ${city}? Rör24 är din lokala partner för all typ av VVS-service. Med vårt rikstäckande nätverk av certifierade rörmokare finns vi alltid nära till hands.</p>
    </section>`,
    
    `<section>
      <h1>Rörmokare ${city} - Professionell VVS-service</h1>
      <p>Behöver du hjälp med något relaterat till VVS/rör? Vi är ett av Sveriges största nätverk med auktoriserade rörmokare. Vi har öppet 24/7 och finns här för dig i ${city}.</p>
    </section>`,
    
    `<section>
      <h1>Dygnet Runt VVS i ${city} - Rör24</h1>
      <p>När du behöver rörmokare i ${city} är Rör24 här för dig. Vi är stolta över att vara en del av Sveriges mest omfattande nätverk av auktoriserade VVS-tekniker.</p>
    </section>`,

    `<section>
      <h1>Erfarna Rörmokare i ${city}</h1>
      <p>I ${city} erbjuder vi komplett VVS-service med garanti på alla arbeten. Vårt team av erfarna rörmokare står redo att hjälpa dig, oavsett tid på dygnet.</p>
    </section>`,

    `<section>
      <h1>VVS-service ${city} - Tillgängliga Dygnet Runt</h1>
      <p>Som din lokala VVS-partner i ${city} erbjuder vi snabb och pålitlig service när du behöver det som mest. Ring oss för omedelbar hjälp!</p>
    </section>`,

    `<section>
      <h1>Professionell VVS-hjälp i ${city}</h1>
      <p>Med gedigen erfarenhet av VVS-arbeten i ${city} vet vi exakt vad som krävs för att lösa dina problem. Kontakta oss för snabb och professionell hjälp.</p>
    </section>`,

    `<section>
      <h1>${city}s Pålitliga VVS-partner</h1>
      <p>Vi har hjälpt hundratals nöjda kunder i ${city} med deras VVS-behov. Låt oss hjälpa dig också med vår jour som är öppen dygnet runt.</p>
    </section>`,

    `<section>
      <h1>Auktoriserad VVS-service i ${city}</h1>
      <p>Som auktoriserad VVS-installatör i ${city} garanterar vi högsta kvalitet på alla våra tjänster. Vi finns här för dig - dygnet runt, året om.</p>
    </section>`,

    `<section>
      <h1>Akut VVS-hjälp i ${city}</h1>
      <p>Står du inför ett akut VVS-problem i ${city}? Våra erfarna rörmokare rycker ut dygnet runt för att hjälpa dig när du behöver det som mest.</p>
    </section>`,

    `<section>
      <h1>VVS-experter i ${city}</h1>
      <p>Med lokal förankring i ${city} och ett rikstäckande nätverk i ryggen kan vi erbjuda marknadens bästa VVS-service, oavsett tid på dygnet.</p>
    </section>`,

    `<section>
      <h1>Rörmokare på Jour i ${city}</h1>
      <p>Vattenskada eller stopp i avloppet? I ${city} står våra erfarna rörmokare redo att hjälpa dig med alla typer av VVS-problem - dygnet runt.</p>
    </section>`,

    `<section>
      <h1>Komplett VVS-service i ${city}</h1>
      <p>Som din lokala VVS-partner i ${city} erbjuder vi allt från akut jour till planerade installationer. Kontakta oss för professionell hjälp!</p>
    </section>`,

    `<section>
      <h1>Din VVS-partner i ${city}</h1>
      <p>Med Rör24 i ${city} får du tillgång till erfarna rörmokare som kan hantera alla typer av VVS-arbeten. Vi finns här för dig - dygnet runt!</p>
    </section>`,

    `<section>
      <h1>Snabb VVS-service i ${city}</h1>
      <p>När du behöver professionell VVS-hjälp i ${city} är vi bara ett samtal bort. Våra erfarna rörmokare står redo att rycka ut - oavsett tid på dygnet.</p>
    </section>`,

    `<section>
      <h1>Kvalificerad VVS-hjälp i ${city}</h1>
      <p>I ${city} erbjuder vi professionell VVS-service med fokus på kvalitet och kundnöjdhet. Ring oss för snabb och pålitlig hjälp!</p>
    </section>`,

    `<section>
      <h1>Trygg VVS-service i ${city}</h1>
      <p>Med vår jour i ${city} kan du känna dig trygg. Vi är alltid redo att rycka ut när du behöver oss som mest, med garanterat professionellt resultat.</p>
    </section>`,

    `<section>
      <h1>Lokal VVS-service i ${city}</h1>
      <p>Som etablerad VVS-partner i ${city} erbjuder vi snabb och professionell service. Våra erfarna rörmokare finns alltid nära till hands.</p>
    </section>`,

    `<section>
      <h1>Professionell Rörmokare i ${city}</h1>
      <p>Med Rör24 i ${city} får du tillgång till marknadens mest erfarna rörmokare. Vi garanterar snabb service och professionellt utförande.</p>
    </section>`
  ];

  return selectVariation(city, variations);
};

const generateWhyChooseUs = (city: string) => {
  const variations = [
    `<section>
      <h2>Varför välja Rör24 i ${city}?</h2>
      <ul>
        <li><strong>Dygnet runt jour</strong> – Vi finns här för dig, oavsett om det är mitt i natten eller tidig morgon.</li>
        <li><strong>55 000+ utförda jobb</strong> – 24 nätverket har utfört över 55 000 jourarbeten.</li>
        <li><strong>91% rekommenderar oss</strong> – Kvalitet och service i världsklass.</li>
        <li><strong>Lokala experter</strong> – Snabbt på plats i ${city}, alltid med rätt lösning.</li>
      </ul>
    </section>`,
    
    `<section>
      <h2>Därför ska du välja Rör24 i ${city}</h2>
      <ul>
        <li><strong>Alltid tillgängliga</strong> – Jour dygnet runt, alla dagar i veckan.</li>
        <li><strong>Omfattande erfarenhet</strong> – Över 55 000 genomförda uppdrag.</li>
        <li><strong>Högt kundbetyg</strong> – 91% av våra kunder rekommenderar oss.</li>
        <li><strong>Lokal service</strong> – Snabb utryckning i ${city} med omnejd.</li>
      </ul>
    </section>`,
    
    `<section>
      <h2>Fördelar med Rör24 i ${city}</h2>
      <ul>
        <li><strong>24/7 Tillgänglighet</strong> – Redo att hjälpa dig när som helst.</li>
        <li><strong>Beprövad expertis</strong> – 55 000+ framgångsrika uppdrag.</li>
        <li><strong>Nöjda kunder</strong> – 91% rekommendationsgrad.</li>
        <li><strong>Lokalkännedom</strong> – Vi känner ${city} utan och innan.</li>
      </ul>
    </section>`,
    
    `<section>
      <h2>Dina fördelar med Rör24 i ${city}</h2>
      <ul>
        <li><strong>Snabb responstid</strong> – Vi strävar efter att vara på plats inom 2 timmar.</li>
        <li><strong>Certifierade tekniker</strong> – Alla våra rörmokare är auktoriserade.</li>
        <li><strong>Transparent prissättning</strong> – Kostnadsfri offert utan dolda avgifter.</li>
        <li><strong>Lokal närvaro</strong> – Vi känner ${city} och kan snabbt nå dig.</li>
      </ul>
    </section>`,
    
    `<section>
      <h2>Det här får du med Rör24 i ${city}</h2>
      <ul>
        <li><strong>Erfarna specialister</strong> – Över 55 000 lyckade VVS-uppdrag.</li>
        <li><strong>Kvalitetsgaranti</strong> – Vi står bakom alla våra installationer.</li>
        <li><strong>Öppen dygnet runt</strong> – Ring oss när som helst, året runt.</li>
        <li><strong>Nära dig</strong> – Lokala rörmokare i ${city}-området.</li>
      </ul>
    </section>`,
    
    `<section>
      <h2>Varför är Rör24 rätt val i ${city}?</h2>
      <ul>
        <li><strong>Snabb utryckning</strong> – Vi prioriterar akuta ärenden i ${city}.</li>
        <li><strong>Professionell utrustning</strong> – Modern teknik för bästa resultat.</li>
        <li><strong>Tydlig kommunikation</strong> – Vi håller dig informerad genom hela processen.</li>
        <li><strong>Hög kundnöjdhet</strong> – 91% av våra kunder rekommenderar oss vidare.</li>
      </ul>
    </section>`,
    
    `<section>
      <h2>Så här hjälper vi dig i ${city}</h2>
      <ul>
        <li><strong>Akut hjälp</strong> – Jour dygnet runt för alla akuta VVS-problem.</li>
        <li><strong>Planerade arbeten</strong> – Renovering och installation efter din tidsplan.</li>
        <li><strong>Kostnadsfri rådgivning</strong> – Vi hjälper dig hitta rätt lösning.</li>
        <li><strong>Garanterad kvalitet</strong> – Alla arbeten utförs enligt branschstandard.</li>
      </ul>
    </section>`,
    
    `<section>
      <h2>Rör24 - din VVS-partner i ${city}</h2>
      <ul>
        <li><strong>Lokal förankring</strong> – Vi känner området och kan snabbt nå fram.</li>
        <li><strong>Bred kompetens</strong> – Vi hanterar allt från akuta läckor till totalrenoveringar.</li>
        <li><strong>Pålitlig service</strong> – Vi kommer när vi säger och håller våra löften.</li>
        <li><strong>Konkurrensmässiga priser</strong> – Alltid kostnadsfri offert innan arbete påbörjas.</li>
      </ul>
    </section>`,
    
    `<section>
      <h2>Därför är vi ${city}s bästa val för VVS</h2>
      <ul>
        <li><strong>Omedelbar tillgänglighet</strong> – Ring när som helst, vi svarar alltid.</li>
        <li><strong>Gedigen erfarenhet</strong> – Över 55 000 genomförda VVS-projekt.</li>
        <li><strong>Nöjd-kund-garanti</strong> – Vi är inte nöjda förrän du är nöjd.</li>
        <li><strong>Kort väg</strong> – Lokala rörmokare som snabbt tar sig till ${city}.</li>
      </ul>
    </section>`,
    
    `<section>
      <h2>Vad gör Rör24 unikt i ${city}?</h2>
      <ul>
        <li><strong>24-timmars tillgänglighet</strong> – Vi finns här när du behöver oss.</li>
        <li><strong>Erfarna yrkesmän</strong> – Auktoriserade rörmokare med lång erfarenhet.</li>
        <li><strong>Hög kvalitetsstandard</strong> – Vi använder endast kvalitetsmaterial.</li>
        <li><strong>Flexibel schemaläggning</strong> – Vi anpassar oss efter dina behov i ${city}.</li>
      </ul>
    </section>`,
    
    `<section>
      <h2>Välj professionell VVS-service i ${city}</h2>
      <ul>
        <li><strong>Alltid öppet</strong> – Jour varje dag, alla tider på året.</li>
        <li><strong>Certifierad kompetens</strong> – Alla våra tekniker är fullständigt utbildade.</li>
        <li><strong>Tydliga priser</strong> – Inga dolda kostnader eller överraskningar.</li>
        <li><strong>Lokal service</strong> – Vi opererar i hela ${city} med omnejd.</li>
      </ul>
    </section>`,
    
    `<section>
      <h2>Vi är ${city}s VVS-specialister</h2>
      <ul>
        <li><strong>Snabb respons</strong> – Vi prioriterar akuta VVS-problem.</li>
        <li><strong>Modern utrustning</strong> – Senaste tekniken för effektiva lösningar.</li>
        <li><strong>Miljömedvetet</strong> – Vi rekommenderar hållbara och energieffektiva lösningar.</li>
        <li><strong>Beprövad metodik</strong> – 55 000+ lyckade uppdrag talar för sig själva.</li>
      </ul>
    </section>`,
    
    `<section>
      <h2>Fördelar med att välja oss i ${city}</h2>
      <ul>
        <li><strong>Jour varje dag</strong> – Vi finns tillgängliga dygnet runt, året om.</li>
        <li><strong>Kvalitetssäkring</strong> – Alla arbeten genomförs enligt gällande standard.</li>
        <li><strong>Kundnöjdhet</strong> – 91% av våra kunder skulle rekommendera oss.</li>
        <li><strong>Närhet</strong> – Korta avstånd innebär snabbare hjälp i ${city}.</li>
      </ul>
    </section>`,
    
    `<section>
      <h2>Rör24 i ${city} - ditt självklara val</h2>
      <ul>
        <li><strong>Total tillgänglighet</strong> – Ring oss vilken tid som helst.</li>
        <li><strong>Professionella lösningar</strong> – Vi löser alla typer av VVS-problem.</li>
        <li><strong>Transparent process</strong> – Du vet alltid vad som händer och vad det kostar.</li>
        <li><strong>Lokal expertis</strong> – Vi känner ${city} och dess infrastruktur väl.</li>
      </ul>
    </section>`,
    
    `<section>
      <h2>Därför litar ${city}-bor på Rör24</h2>
      <ul>
        <li><strong>Alltid tillgängliga</strong> – Jourtelefon öppen 24 timmar om dygnet.</li>
        <li><strong>Bevisat förtroende</strong> – Över 55 000 nöjda kunder.</li>
        <li><strong>Hög servicegrad</strong> – 91% rekommendationsgrad från våra kunder.</li>
        <li><strong>Snabb service</strong> – Vi strävar efter utryckning inom 2 timmar i ${city}.</li>
      </ul>
    </section>`
  ];

  return selectVariation(city, variations);
};

const generateServiceList = (city: string) => {
  const serviceVariations = [
    [
      "Akut VVS-jour dygnet runt",
      "Professionell avloppsrensning",
      "Åtgärd av vattenläckage",
      "Installation och byte av blandare",
      "Rörinspektion med kamera",
      "Service av värmesystem",
      "Sanering av vattenskador",
      "Kompletta badrumsrenoveringar"
    ],
    [
      "Jour för akuta VVS-ärenden",
      "Effektiv stopp i avlopp",
      "Läckagesökning och reparation",
      "Montering av kranar och blandare",
      "Kamerainspektion av rör",
      "Värmepumpsservice",
      "Hantering av fuktskador",
      "Badrumsrenovering och underhåll"
    ],
    [
      "Dygnet-runt VVS-service",
      "Avloppsrensning och underhåll",
      "Läckspårning och reparation",
      "Installation av vattenkranar",
      "Rörinspektioner",
      "Optimering av värmesystem",
      "Vattenskadehantering",
      "Totalrenovering av badrum"
    ],
    [
      "24/7 VVS-jour och support",
      "Snabb avloppsrensning",
      "Effektiv läckageåtgärd",
      "Blandarinstallation och service",
      "Videoinspektering av rörledningar",
      "Värmesystemsoptimering",
      "Professionell vattensanering",
      "Badrumstotalrenovering"
    ],
    [
      "Akuta VVS-insatser dygnet runt",
      "Avancerad avloppsrensning",
      "Precision läcksökning",
      "Kvalitetsblandare och installation",
      "Modern rörinspektion",
      "Effektiv värmeservice",
      "Komplett vattenskadehantering",
      "Exklusiv badrumsrenovering"
    ],
    [
      "VVS-jour för alla ärenden",
      "Grundlig avloppsservice",
      "Snabb läckagereparation",
      "Installation av kranar",
      "Kamerabaserad rördiagnostik",
      "Service för värmeanläggningar",
      "Sanering efter vattenskada",
      "Helhetslösning badrumsrenovering"
    ],
    [
      "Dygnet runt akutservice",
      "Professionell spolning av avlopp",
      "Avancerad läckagedetektering",
      "Montering av moderna blandare",
      "Detaljerad rörinspektion",
      "Underhåll av värmesystem",
      "Akut vattenskadeåtgärd",
      "Premiumrenovering av badrum"
    ],
    [
      "24-timmarsjour för VVS",
      "Effektiv rensning av stopp",
      "Läckspårning med värmekamera",
      "Installation av energisnåla blandare",
      "Videoinspektering med rapport",
      "Optimering av uppvärmning",
      "Fukt och vattensanering",
      "Komplett badrumsuppgradering"
    ],
    [
      "Alltid öppen VVS-jour",
      "Snabb åtgärd vid avloppsstopp",
      "Professionell läckageåtgärd",
      "Kvalitetssäkrad blandarinstallation",
      "Digital rördiagnostik",
      "Service av värmepumpar",
      "Hantering av omfattande vattenskador",
      "Stilren badrumsrenovering"
    ],
    [
      "Akut VVS-support 24/7",
      "Avancerad rensning och spolning",
      "Exakt läckageidentifiering",
      "Installation av designblandare",
      "Kameraspolning och inspektion",
      "Värmeoptimering och service",
      "Professionell sanering",
      "Modern badrumsdesign och renovering"
    ],
    [
      "VVS-jourtelefon öppen alltid",
      "Mekanisk och kemisk avloppsrensning",
      "Termografisk läcksökning",
      "Hållbara blandarinstallationer",
      "HD-kamerainspektion av rör",
      "Effektivisering av värmesystem",
      "Totalåtgärd vid vattenskada",
      "Lyxrenovering av våtrum"
    ],
    [
      "Jour för alla VVS-behov",
      "Högeffektiv avloppsservice",
      "Icke-invasiv läcksökning",
      "Installation av premiumkranar",
      "Professionell rörkontroll",
      "Maximerad värmeeffekt",
      "Snabb vattenskadeinsats",
      "Totalrenovering våtutrymmen"
    ],
    [
      "VVS-akuthjälp dygnet runt",
      "Omfattande avloppsunderhåll",
      "Läckageåtgärd med garanti",
      "Säker blandarmontering",
      "Detaljerad röranalys",
      "Effektiv värmeservice",
      "Komplett fuktsanering",
      "Heltäckande badrumsrenovering"
    ],
    [
      "Jourhavande VVS-tekniker 24/7",
      "Professionell avloppsdiagnostik",
      "Precision vid läckagereparation",
      "Installation av toppmoderna blandare",
      "Avancerad kamerainspektion",
      "Optimal värmesystemsdrift",
      "Akut sanering vid översvämning",
      "Fullständig badrumsförnyelse"
    ],
    [
      "VVS-service alla tider",
      "Kraftfull avloppsrensning",
      "Snabb läckagelokalinsering",
      "Energieffektiva blandarinstallationer",
      "Rörinspektion med HD-video",
      "Service för alla värmesystem",
      "Omfattande vattenskadeåtgärder",
      "Exklusiv badrumstransformation"
    ]
  ];

  return selectVariation(city, serviceVariations);
};

export const defaultCityContent: CityContent = {
  heroImage: "https://s3.eu-west-1.amazonaws.com/storage.quickbutik.com/stores/28340q/files/ror24.jpg",
  description: (city: string) => {
    const pageVariation = generatePageVariations(city);
    const whyChooseUs = generateWhyChooseUs(city);
    const services = generateServiceList(city);
    
    return `
      ${pageVariation}

      <section>
        <h2>Våra VVS-tjänster i ${city}</h2>
        <div class="service-list">
          ${services.map(service => `<div class="service-item">${service}</div>`).join('')}
        </div>
      </section>

      ${whyChooseUs}

      <img src="https://s3.eu-west-1.amazonaws.com/storage.quickbutik.com/stores/28340q/files/436-ror24.jpg" alt="Rör24 VVS-tjänster i ${city}" class="w-full rounded-lg my-8" />

      <section>
        <h2>Kontakta oss nu!</h2>
        <p>Har du en vattenläcka eller stopp i avloppet i ${city}? Vänta inte – vi är redo att hjälpa dig <strong>NU</strong>.</p>
        <p><strong>📞 Ring oss direkt på 010-555 11 94</strong></p>
      </section>
    `;
  },
  services: [
    "Akut VVS-jour",
    "Avloppsrensning",
    "Vattenläckage",
    "Installation av blandare",
    "Rörinspektion",
    "Värmesystem",
    "Vattenskador",
    "Badrumsrenovering"
  ]
};