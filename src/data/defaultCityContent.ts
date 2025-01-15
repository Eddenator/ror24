import { CityContent } from '../types/cityContent';

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

  // Get a random variation
  return variations[Math.floor(Math.random() * variations.length)];
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
    </section>`
  ];

  return variations[Math.floor(Math.random() * variations.length)];
};

const generateServiceList = () => {
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
    ]
  ];

  return serviceVariations[Math.floor(Math.random() * serviceVariations.length)];
};

export const defaultCityContent: CityContent = {
  heroImage: "https://s3.eu-west-1.amazonaws.com/storage.quickbutik.com/stores/28340q/files/ror24.jpg",
  description: (city: string) => {
    const pageVariation = generatePageVariations(city);
    const whyChooseUs = generateWhyChooseUs(city);
    const services = generateServiceList();
    
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