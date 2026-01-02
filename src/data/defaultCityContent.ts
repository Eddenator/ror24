import { CityContent } from '../types/cityContent';

// Deterministisk hash-funktion baserad på stadsnamn
const hashString = (str: string): number => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
};

// Välj variation baserat på stad (deterministiskt)
const selectVariation = <T>(city: string, variations: T[], seedModifier: number = 0): T => {
  const hash = hashString(city + seedModifier);
  return variations[hash % variations.length];
};

// Generera 100+ H1-variationer programmatiskt
const generateH1 = (city: string): string => {
  const templates = [
    "Jourhavande Rörmokare i CITY – Dygnet runt med Rör24!",
    "VVS & Rörmokare i CITY - Jour 24/7",
    "Akut VVS-service i CITY - Ring Rör24!",
    "Rörmokare CITY - Professionell VVS-service",
    "Dygnet Runt VVS i CITY - Rör24",
    "Erfarna Rörmokare i CITY",
    "VVS-service CITY - Tillgängliga Dygnet Runt",
    "Professionell VVS-hjälp i CITY",
    "CITYs Pålitliga VVS-partner",
    "Auktoriserad VVS-service i CITY",
    "Akut VVS-hjälp i CITY",
    "VVS-experter i CITY",
    "Rörmokare på Jour i CITY",
    "Komplett VVS-service i CITY",
    "Din VVS-partner i CITY",
    "Snabb VVS-service i CITY",
    "Kvalificerad VVS-hjälp i CITY",
    "Trygg VVS-service i CITY",
    "Lokal VVS-service i CITY",
    "Professionell Rörmokare i CITY",
    "Certifierad VVS-service i CITY",
    "Jourrörmokare CITY - Alltid tillgängliga",
    "VVS-specialister i CITY",
    "Rörmokartjänster i CITY - Rör24",
    "VVS-jour CITY - Snabb utryckning",
    "Pålitliga Rörmokare i CITY",
    "VVS-installation i CITY",
    "Akutrörmokare CITY - Ring Nu",
    "VVS-tekniker i CITY",
    "Rörmokeri i CITY - Rör24",
    "VVS-hjälp CITY - Dygnet runt",
    "Rörmokare Jour CITY",
    "Professionell VVS i CITY",
    "VVS-företag CITY - Rör24",
    "Rörmokare Nära Dig i CITY",
    "VVS-lösningar i CITY",
    "Bästa Rörmokaren i CITY",
    "VVS-akuten CITY",
    "Rörmokare 24/7 i CITY",
    "VVS-installation och Service i CITY",
    "Erfaren Rörmokare CITY",
    "VVS-service Nära CITY",
    "Din Lokala Rörmokare i CITY",
    "VVS-professionell i CITY",
    "Rörmokare Akut CITY",
    "VVS-support i CITY",
    "Kvalitetsrörmokare CITY",
    "VVS-team i CITY",
    "Snabbrörmokare CITY",
    "Auktoriserad Rörmokare i CITY",
    "VVS-service 24/7 i CITY",
    "Rörmokare Med Garanti i CITY",
    "VVS-expert CITY - Din Partner",
    "Lokala VVS-proffs i CITY",
    "Rörmokare i CITY - Snabba Åtgärder",
    "VVS-assistans CITY - Alltid Nära",
    "Din Rörmokare i CITY",
    "VVS-service För Hem och Företag i CITY",
    "Rörmokare För Alla Behov i CITY",
    "VVS-total i CITY",
    "Rörmokare Med Erfarenhet i CITY",
    "VVS-byrån CITY",
    "Jourservice VVS i CITY",
    "Rörmokare På Plats i CITY",
    "VVS-centrum CITY",
    "Ditt VVS-team i CITY",
    "Rörmokare Öppet Dygnet Runt i CITY",
    "VVS-stationen CITY",
    "Proffs På VVS i CITY",
    "Rörmokare Som Bryr Sig i CITY",
    "VVS-huset CITY",
    "Auktoriserad VVS CITY",
    "Rörmokare Mitt i CITY",
    "VVS-kompetens i CITY",
    "Din Pålitliga Rörmokare i CITY",
    "VVS-gruppen CITY",
    "Miljövänlig VVS i CITY",
    "Rörmokare Med Passion i CITY",
    "Total VVS-lösning i CITY",
    "Rörmokare För Fastigheter i CITY",
    "Modern VVS-teknik i CITY",
    "Rörmokare Nära När Du Behöver i CITY",
    "VVS-experten CITY - 24/7",
    "Rörmokare För Villor i CITY",
    "Företagets VVS-partner i CITY",
    "Kvalificerade Rörmokare i CITY",
    "VVS-service Med Garanti i CITY",
    "Snabb Rörmokare i CITY",
    "Din Trygghet VVS CITY",
    "Erfarna VVS-tekniker i CITY",
    "Rörmokare För Alla Fastigheter i CITY",
    "Premium VVS-service i CITY",
    "Rörmokare Som Levererar i CITY",
    "Helhets-VVS i CITY",
    "Rörmokare Året Runt i CITY",
    "Smart VVS-lösning i CITY",
    "Din Favorit-Rörmokare i CITY",
    "VVS-specialist Nära Dig i CITY",
    "Fullservice Rörmokare i CITY"
  ];
  
  const intros = [
    "Behöver du en pålitlig rörmokare i CITY? Rör24 är det självklara valet med vårt omfattande nätverk av auktoriserade VVS-tekniker.",
    "Välkommen till Rör24 i CITY! Som en del av Sveriges största nätverk av auktoriserade rörmokare erbjuder vi professionell VVS-service dygnet runt.",
    "Har du VVS-problem i CITY? Rör24 är din lokala partner för all typ av VVS-service.",
    "Vi är ett av Sveriges största nätverk med auktoriserade rörmokare. Vi har öppet 24/7 och finns här för dig i CITY.",
    "När du behöver rörmokare i CITY är Rör24 här för dig. Vi är stolta över att vara en del av Sveriges mest omfattande nätverk.",
    "I CITY erbjuder vi komplett VVS-service med garanti på alla arbeten. Vårt team står redo dygnet runt.",
    "Som din lokala VVS-partner i CITY erbjuder vi snabb och pålitlig service när du behöver det som mest.",
    "Med gedigen erfarenhet av VVS-arbeten i CITY vet vi exakt vad som krävs för att lösa dina problem.",
    "Vi har hjälpt hundratals nöjda kunder i CITY med deras VVS-behov. Låt oss hjälpa dig också.",
    "Som auktoriserad VVS-installatör i CITY garanterar vi högsta kvalitet på alla våra tjänster.",
    "Står du inför ett akut VVS-problem i CITY? Våra erfarna rörmokare rycker ut dygnet runt.",
    "Med lokal förankring i CITY och rikstäckande nätverk kan vi erbjuda marknadens bästa VVS-service.",
    "Vattenskada eller stopp i avloppet? I CITY står våra erfarna rörmokare redo att hjälpa dig - dygnet runt.",
    "Som din lokala VVS-partner i CITY erbjuder vi allt från akut jour till planerade installationer.",
    "Med Rör24 i CITY får du tillgång till erfarna rörmokare som kan hantera alla typer av VVS-arbeten.",
    "När du behöver professionell VVS-hjälp i CITY är vi bara ett samtal bort. Vi finns alltid nära.",
    "I CITY erbjuder vi professionell VVS-service med fokus på kvalitet och kundnöjdhet.",
    "Med vår jour i CITY kan du känna dig trygg. Vi är alltid redo att rycka ut när du behöver oss.",
    "Som etablerad VVS-partner i CITY erbjuder vi snabb och professionell service. Vi finns alltid nära till hands.",
    "Med Rör24 i CITY får du tillgång till marknadens mest erfarna rörmokare. Vi garanterar snabb service.",
    "Vi är din pålitliga partner för alla VVS-behov i CITY. Med över 55 000 utförda uppdrag vet vi exakt hur vi löser problem.",
    "Akuta VVS-problem? I CITY finns vi på plats snabbt med gedigen erfarenhet och modern utrustning.",
    "Letar du efter en kompetent rörmokare i CITY? Rör24 levererar professionell VVS-service med fokus på kvalitet.",
    "Från akuta läckor till planerade renoveringar - vi hanterar alla VVS-uppdrag i CITY.",
    "Behöver du akut VVS-hjälp i CITY? Vi har öppet dygnet runt och strävar efter att vara på plats inom 2 timmar.",
    "Med lokal närvaro i CITY och toppmodern utrustning löser vi alla VVS-problem effektivt.",
    "Professionell VVS-installation för hem och företag i CITY. Vi erbjuder både akutåtgärder och planerade installationer.",
    "Vattenläcka? Stopp i avloppet? Vi rycker ut omedelbart i CITY-området med erfarna rörmokare 24/7.",
    "Auktoriserade VVS-tekniker med spetskompetens finns nära dig i CITY.",
    "Traditionellt hantverk möter modern teknik. I CITY levererar vi VVS-tjänster i världsklass.",
    "Oavsett tid på dygnet finns vi här för dig i CITY. Snabb utryckning och garanterad kvalitet.",
    "Akuta VVS-situationer kräver snabb handling. I CITY har vi jourberedskap dygnet runt.",
    "Kvalitet är vår signum. I CITY utför vi alla typer av VVS-arbeten med högsta precision.",
    "Som ett av Sveriges mest erfarna VVS-företag erbjuder vi kompletta lösningar i CITY.",
    "Lokala rörmokare med kort utryckningstid i CITY. Vi prioriterar din trygghet.",
    "Skräddarsydda VVS-lösningar för fastighetsägare och privatpersoner i CITY.",
    "Sök inte längre - Rör24 är ditt självklara val i CITY med mångårig erfarenhet.",
    "När varje minut räknas finns VVS-akuten i CITY här för dig med snabb diagnos.",
    "Ingen annandag eller helg för oss - vi finns alltid tillgängliga för dig i CITY.",
    "Komplett VVS-service under ett tak i CITY med certifierade yrkesmän.",
    "Med decennier av samlad erfarenhet löser våra rörmokare i CITY även de mest komplexa problemen.",
    "Regional närvaro med lokal service. Vi täcker hela CITY med omnejd.",
    "Varför välja oss? För att vi känner CITY, vi bryr oss och levererar mer än vi lovar.",
    "Auktoriserade VVS-proffs med passion för yrket finns i CITY.",
    "Akuta VVS-problem tolererar ingen väntan. I CITY prioriterar vi snabb respons dygnet runt.",
    "Behöver du VVS-support i CITY? Vår kundservice är alltid öppen.",
    "Kvalitet går före kvantitet. I CITY fokuserar vi på att leverera perfekt utfört arbete.",
    "Vårt dedicerade VVS-team i CITY består av specialister inom alla områden.",
    "Tid är pengar, särskilt vid VVS-akuter. I CITY är vi kända för snabb respons.",
    "Letar du efter en auktoriserad rörmokare i CITY? Våra certifierade tekniker har kompetensen."
  ];
  const template = selectVariation(city, templates, 0);
  const intro = selectVariation(city, intros, 1);
  
  return `<section><h2>${template.replace(/CITY/g, city)}</h2><p>${intro.replace(/CITY/g, city)}</p></section>`;
};

const generatePageVariations = (city: string) => {
  const variations = [
    `<section>
      <h2>Jourhavande Rörmokare i ${city} – Dygnet runt med Rör24!</h2>
      <p>Behöver du en pålitlig rörmokare i ${city}? Rör24 är det självklara valet med vårt omfattande nätverk av auktoriserade VVS-tekniker. Vi finns tillgängliga dygnet runt för att hjälpa dig med alla typer av VVS-problem.</p>
    </section>`,
    
    `<section>
      <h2>VVS & Rörmokare i ${city} - Jour 24/7</h2>
      <p>Välkommen till Rör24 i ${city}! Som en del av Sveriges största nätverk av auktoriserade rörmokare erbjuder vi professionell VVS-service dygnet runt, året om.</p>
      <p>Med vår omfattande erfarenhet och lokala närvaro i ${city} kan vi garantera snabb och pålitlig service för alla dina VVS-behov.</p>
    </section>`,
    
    `<section>
      <h2>Akut VVS-service i ${city} - Ring Rör24!</h2>
      <p>Har du VVS-problem i ${city}? Rör24 är din lokala partner för all typ av VVS-service. Med vårt rikstäckande nätverk av certifierade rörmokare finns vi alltid nära till hands.</p>
    </section>`,
    
    `<section>
      <h2>Rörmokare ${city} - Professionell VVS-service</h2>
      <p>Behöver du hjälp med något relaterat till VVS/rör? Vi är ett av Sveriges största nätverk med auktoriserade rörmokare. Vi har öppet 24/7 och finns här för dig i ${city}.</p>
    </section>`,
    
    `<section>
      <h2>Dygnet Runt VVS i ${city} - Rör24</h2>
      <p>När du behöver rörmokare i ${city} är Rör24 här för dig. Vi är stolta över att vara en del av Sveriges mest omfattande nätverk av auktoriserade VVS-tekniker.</p>
    </section>`,

    `<section>
      <h2>Erfarna Rörmokare i ${city}</h2>
      <p>I ${city} erbjuder vi komplett VVS-service med garanti på alla arbeten. Vårt team av erfarna rörmokare står redo att hjälpa dig, oavsett tid på dygnet.</p>
    </section>`,

    `<section>
      <h2>VVS-service ${city} - Tillgängliga Dygnet Runt</h2>
      <p>Som din lokala VVS-partner i ${city} erbjuder vi snabb och pålitlig service när du behöver det som mest. Ring oss för omedelbar hjälp!</p>
    </section>`,

    `<section>
      <h2>Professionell VVS-hjälp i ${city}</h2>
      <p>Med gedigen erfarenhet av VVS-arbeten i ${city} vet vi exakt vad som krävs för att lösa dina problem. Kontakta oss för snabb och professionell hjälp.</p>
    </section>`,

    `<section>
      <h2>${city}s Pålitliga VVS-partner</h2>
      <p>Vi har hjälpt hundratals nöjda kunder i ${city} med deras VVS-behov. Låt oss hjälpa dig också med vår jour som är öppen dygnet runt.</p>
    </section>`,

    `<section>
      <h2>Auktoriserad VVS-service i ${city}</h2>
      <p>Som auktoriserad VVS-installatör i ${city} garanterar vi högsta kvalitet på alla våra tjänster. Vi finns här för dig - dygnet runt, året om.</p>
    </section>`,

    `<section>
      <h2>Akut VVS-hjälp i ${city}</h2>
      <p>Står du inför ett akut VVS-problem i ${city}? Våra erfarna rörmokare rycker ut dygnet runt för att hjälpa dig när du behöver det som mest.</p>
    </section>`,

    `<section>
      <h2>VVS-experter i ${city}</h2>
      <p>Med lokal förankring i ${city} och ett rikstäckande nätverk i ryggen kan vi erbjuda marknadens bästa VVS-service, oavsett tid på dygnet.</p>
    </section>`,

    `<section>
      <h2>Rörmokare på Jour i ${city}</h2>
      <p>Vattenskada eller stopp i avloppet? I ${city} står våra erfarna rörmokare redo att hjälpa dig med alla typer av VVS-problem - dygnet runt.</p>
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
    </section>`,
    
    `<section>
      <h2>Din trygghet i ${city} - Rör24</h2>
      <ul>
        <li><strong>Försäkrade arbeten</strong> – Alla våra tjänster är fullständigt försäkrade.</li>
        <li><strong>Garanterat resultat</strong> – Vi garanterar kvaliteten på alla installationer.</li>
        <li><strong>Snabb hjälp</strong> – Ofta på plats inom 2 timmar efter ditt samtal.</li>
        <li><strong>Lokala proffs</strong> – Rörmokare som känner ${city} väl.</li>
      </ul>
    </section>`,
    
    `<section>
      <h2>Expertrörmokare i ${city}</h2>
      <ul>
        <li><strong>Specialiserad kompetens</strong> – Experter inom alla VVS-områden.</li>
        <li><strong>Modern teknik</strong> – Vi investerar i den senaste utrustningen.</li>
        <li><strong>Kontinuerlig utbildning</strong> – Våra tekniker håller sig alltid uppdaterade.</li>
        <li><strong>Effektiv service</strong> – Vi löser problem snabbt och rätt första gången.</li>
      </ul>
    </section>`,
    
    `<section>
      <h2>Professionell VVS i ${city}</h2>
      <ul>
        <li><strong>Höga standarder</strong> – Vi följer alltid branschens bästa praxis.</li>
        <li><strong>Kvalitetsmaterial</strong> – Vi använder endast produkter från ledande tillverkare.</li>
        <li><strong>Dokumenterade resultat</strong> – 91% kundnöjdhet talar sitt tydliga språk.</li>
        <li><strong>Regional täckning</strong> – Vi täcker hela ${city} med närområden.</li>
      </ul>
    </section>`,
    
    `<section>
      <h2>Vad särskiljer oss i ${city}?</h2>
      <ul>
        <li><strong>Personlig service</strong> – Vi lyssnar på dina behov och löser ditt problem.</li>
        <li><strong>Snabb mobilisering</strong> – Vi kan ofta vara hos dig inom 2 timmar.</li>
        <li><strong>Transparent offert</strong> – Du får alltid veta kostnaden innan vi börjar.</li>
        <li><strong>Nöjda kunder</strong> – 55 000+ lyckade projekt genom åren.</li>
      </ul>
    </section>`,
    
    `<section>
      <h2>Ditt val för VVS i ${city}</h2>
      <ul>
        <li><strong>Tillförlitlig partner</strong> – Vi finns här långsiktigt för din trygghet.</li>
        <li><strong>Omfattande tjänster</strong> – Från akutåtgärder till stora renoveringar.</li>
        <li><strong>Miljöfokus</strong> – Vi rekommenderar energieffektiva lösningar.</li>
        <li><strong>Lokal kunskap</strong> – Vi känner ${city}s fastigheter och infrastruktur.</li>
      </ul>
    </section>`,
    
    `<section>
      <h2>Välkommen till Rör24 i ${city}</h2>
      <ul>
        <li><strong>Erfaret team</strong> – Våra rörmokare har decenniers samlad erfarenhet.</li>
        <li><strong>Modern utrustning</strong> – Vi använder branschens mest avancerade verktyg.</li>
        <li><strong>Flexibel service</strong> – Vi anpassar oss efter dina önskemål och schema.</li>
        <li><strong>Garanti på arbetet</strong> – Vi står bakom alla våra installationer.</li>
      </ul>
    </section>`,
    
    `<section>
      <h2>Rör24 - VVS-experten i ${city}</h2>
      <ul>
        <li><strong>Hög tillgänglighet</strong> – Jour dygnet runt, även helger och röda dagar.</li>
        <li><strong>Bevisat track-record</strong> – Över 55 000 nöjda kunder nationellt.</li>
        <li><strong>Certifierade tekniker</strong> – Alla våra rörmokare är fullständigt auktoriserade.</li>
        <li><strong>Prisvärd kvalitet</strong> – Rätt balans mellan pris och kvalitet.</li>
      </ul>
    </section>`,
    
    `<section>
      <h2>Fördelar med lokal VVS-service i ${city}</h2>
      <ul>
        <li><strong>Kort utryckningstid</strong> – Vi är ofta framme på under 2 timmar.</li>
        <li><strong>Känner området</strong> – Vi vet var vi ska och hur vi snabbast tar oss dit.</li>
        <li><strong>Relationsfokus</strong> – Vi vill vara din långsiktiga VVS-partner.</li>
        <li><strong>Hög servicegrad</strong> – 91% av våra kunder rekommenderar oss.</li>
      </ul>
    </section>`,
    
    `<section>
      <h2>Pålitlig VVS-hjälp i ${city}</h2>
      <ul>
        <li><strong>Snabba insatser</strong> – Vi prioriterar alltid akuta ärenden.</li>
        <li><strong>Professionellt bemötande</strong> – Vi behandlar ditt hem med respekt.</li>
        <li><strong>Fullständig service</strong> – Vi städar alltid efter oss när jobbet är klart.</li>
        <li><strong>Rådgivning ingår</strong> – Vi hjälper dig hitta den bästa lösningen.</li>
      </ul>
    </section>`,
    
    `<section>
      <h2>Din lokala VVS-specialist i ${city}</h2>
      <ul>
        <li><strong>Regional bas</strong> – Vi har tekniker stationerade nära ${city}.</li>
        <li><strong>Bred erfarenhet</strong> – Vi hanterar allt inom VVS-området.</li>
        <li><strong>Kvalitetsfokus</strong> – Inga genvägar, vi gör rätt från början.</li>
        <li><strong>Konkurrenskraftiga priser</strong> – Bra kvalitet till rimligt pris.</li>
      </ul>
    </section>`,
    
    `<section>
      <h2>Därför rekommenderas vi i ${city}</h2>
      <ul>
        <li><strong>Nöjda kunder</strong> – 91% rekommenderar oss till vänner och familj.</li>
        <li><strong>Pålitliga löften</strong> – Vi kommer när vi säger och gör vad vi lovar.</li>
        <li><strong>Transparent kommunikation</strong> – Inga dolda kostnader eller överraskningar.</li>
        <li><strong>Lokal trygghet</strong> – Vi finns kvar i ${city} även efter jobbet är klart.</li>
      </ul>
    </section>`,
    
    `<section>
      <h2>VVS med hjärtat i ${city}</h2>
      <ul>
        <li><strong>Passion för yrket</strong> – Vi älskar det vi gör och det syns.</li>
        <li><strong>Kundorienterade</strong> – Din tillfredsställelse är vår prioritet.</li>
        <li><strong>Alltid nåbara</strong> – Ring när som helst, vi svarar alltid.</li>
        <li><strong>Beprövad kvalitet</strong> – 55 000+ lyckade uppdrag bakom oss.</li>
      </ul>
    </section>`,
    
    `<section>
      <h2>Kvalitet och service i ${city}</h2>
      <ul>
        <li><strong>ISO-certifierade</strong> – Vi arbetar enligt dokumenterade kvalitetssystem.</li>
        <li><strong>Miljöcertifierade</strong> – Vi tar ansvar för vår miljöpåverkan.</li>
        <li><strong>Försäkringsgodkända</strong> – Alla arbeten är fullständigt försäkrade.</li>
        <li><strong>Kundservice i fokus</strong> – Vi finns här för dig, före, under och efter.</li>
      </ul>
    </section>`,
    
    `<section>
      <h2>Din första kontakt för VVS i ${city}</h2>
      <ul>
        <li><strong>Enkel kontakt</strong> – Ring eller mejla oss när som helst.</li>
        <li><strong>Snabb respons</strong> – Vi återkommer alltid samma dag.</li>
        <li><strong>Kostnadsfri offert</strong> – Vi ger dig alltid ett fast pris först.</li>
        <li><strong>Professionell hjälp</strong> – Från första samtalet till färdigt jobb.</li>
      </ul>
    </section>`,
    
    `<section>
      <h2>Mest rekommenderade i ${city}</h2>
      <ul>
        <li><strong>Högt förtroende</strong> – 91% av våra kunder rekommenderar oss vidare.</li>
        <li><strong>Lång erfarenhet</strong> – Vi har varit i branschen i många år.</li>
        <li><strong>Bred kompetens</strong> – Inga VVS-problem är för stora eller små för oss.</li>
        <li><strong>Alltid tillgängliga</strong> – Jour 24/7, året runt i ${city}.</li>
      </ul>
    </section>`,
    
    `<section>
      <h2>Smarta VVS-lösningar i ${city}</h2>
      <ul>
        <li><strong>Innovativ approach</strong> – Vi använder moderna metoder och material.</li>
        <li><strong>Energieffektivt</strong> – Vi hjälper dig spara pengar på sikt.</li>
        <li><strong>Långsiktig kvalitet</strong> – Våra installationer håller över tid.</li>
        <li><strong>Hållbart tänkande</strong> – Vi rekommenderar miljövänliga alternativ.</li>
      </ul>
    </section>`,
    
    `<section>
      <h2>Toppbetyg från kunder i ${city}</h2>
      <ul>
        <li><strong>Betyg 4.8/5</strong> – Våra kunder är mycket nöjda med vår service.</li>
        <li><strong>Återkommande kunder</strong> – Många väljer oss gång på gång.</li>
        <li><strong>Positiva recensioner</strong> – Läs vad andra i ${city} säger om oss.</li>
        <li><strong>Rekommenderas starkt</strong> – 91% skulle rekommendera oss till andra.</li>
      </ul>
    </section>`,
    
    `<section>
      <h2>Erfarna VVS-proffs i ${city}</h2>
      <ul>
        <li><strong>Mångårig erfarenhet</strong> – Vi har sett och löst det mesta.</li>
        <li><strong>Specialistkompetens</strong> – Vi har experter inom alla VVS-områden.</li>
        <li><strong>Fortsatt utveckling</strong> – Vi utbildas kontinuerligt i nya metoder.</li>
        <li><strong>Problemlösare</strong> – Vi hittar alltid en lösning i ${city}.</li>
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
    ],
    [
      "Jourservice dygnet runt",
      "Spolning och rensning av avlopp",
      "Läckagedetektion och åtgärd",
      "Blandarbyten och installation",
      "Kamera-TV-inspektion av ledningar",
      "Värmeanläggningsservice",
      "Sanering av fukt och vatten",
      "Badrumsrenoveringar i toppklass"
    ],
    [
      "VVS-beredskap 24/7",
      "Avloppsåtgärder alla typer",
      "Läckagesanering och reparation",
      "Installation av alla blandartyper",
      "Videoinspektering av rörsystem",
      "Underhåll av värmeanläggningar",
      "Professionell vattenskadeåtgärd",
      "Kompletta badrumslösningar"
    ],
    [
      "Akut VVS-jourservice",
      "Effektiv avloppsdiagnostik",
      "Professionell läckagelokalinsering",
      "Kvalitetsblandarinstallation",
      "Rörinspektering med moderna metoder",
      "Värmesystem och energioptimering",
      "Snabb vattenskadeinsats",
      "Badrumsrenoveringar på mått"
    ],
    [
      "VVS-hjälp när som helst",
      "Avloppsrensning med garanti",
      "Läckspårning och fixering",
      "Installation av sparblandare",
      "Kameraspolning av ledningar",
      "Service och optimering värme",
      "Hantering av vattenrelaterade skador",
      "Totalrenoveringar av våtrum"
    ],
    [
      "Jour för akuta VVS-problem",
      "Professionell avloppsåtgärd",
      "Snabb läckagereparationsservice",
      "Moderna blandarinstallationer",
      "Digital inspektion av rör",
      "Värmesystemsjustering och service",
      "Omfattande sanering efter läcka",
      "Premiumrenovering badrum"
    ],
    [
      "VVS-akut dygnet runt",
      "Avloppsrensning och spolning",
      "Läckageåtgärd med precision",
      "Installation av miljövänliga blandare",
      "HD-kamerainspektion rörledningar",
      "Effektivisering av värmesystem",
      "Professionell fuktsanering",
      "Kvalitetssäkrad badrumsrenovering"
    ],
    [
      "24/7 VVS-service och jour",
      "Snabb rensning av avloppsstopp",
      "Läcksökning med värmekamera",
      "Blandarservice och installation",
      "Avancerad rörinspektion",
      "Värmepumpar och radiatorsystem",
      "Akut åtgärd vid vattenskada",
      "Renovering av alla våtutrymmen"
    ],
    [
      "Jourrörmokare alltid tillgänglig",
      "Mekanisk avloppsrensning",
      "Precision läckagesökning",
      "Kvalitetsblandare från ledande märken",
      "Kamerainspektion med dokumentation",
      "Optimal drift av värmesystem",
      "Total vattenskadehantering",
      "Moderna badrumsrenoveringar"
    ],
    [
      "VVS-support dygnet runt",
      "Högkapacitetsavloppsrensning",
      "Termografisk läcksökning",
      "Energisparande blandarinstallationer",
      "Digital rörinspekteringsteknik",
      "Maximera värmesystemeffektivitet",
      "Snabb sanering vid översvämningar",
      "Kompletta badrumsuppgraderingar"
    ],
    [
      "Akutservice för VVS-problem",
      "Avancerad avloppsrensning och analys",
      "Snabb och säker läckagereparation",
      "Installation av toppmodern blandarteknik",
      "Omfattande rörsystemskontroll",
      "Service av alla typer värmesystem",
      "Professionell sanering och återställning",
      "Lyxrenoveringar av badrum"
    ],
    [
      "VVS-jour öppen hela dygnet",
      "Professionell stopprensning",
      "Effektiv läckage-lokalisering",
      "Blandare för alla behov och stilar",
      "Kamerainspektering och rapportering",
      "Energieffektiv värmedrift",
      "Omfattande vattenskadeåtgärder",
      "Skräddarsydda badrumsprojekt"
    ],
    [
      "Alltid tillgänglig VVS-jour",
      "Avloppsservice med kvalitetsgaranti",
      "Läckspårning med modern teknik",
      "Hållbara och stilrena blandare",
      "Videoinspektering av rörledningssystem",
      "Optimal värmesystemsprestanda",
      "Snabb vattenskadehantering",
      "Totalrenoveringar med stil"
    ],
    [
      "VVS-akutinsats när som helst",
      "Komplett avloppsrensningsservice",
      "Professionell läcksökning och åtgärd",
      "Installation av designerblandare",
      "Avancerad diagnostik av rörsystem",
      "Värmesystem och energirådgivning",
      "Effektiv sanering efter vattenskador",
      "Premiumkvalitet på badrumsrenoveringar"
    ],
    [
      "Jour dygnet runt året runt",
      "Spolning och underhåll av avlopp",
      "Läckageidentifiering och reparation",
      "Alla typer av blandarinstallationer",
      "Kamerabaserad röranalys",
      "Service och felavhjälpning värmesystem",
      "Akuta vattenskadeåtgärder",
      "Heltäckande badrumslösningar"
    ],
    [
      "VVS-beredskap varje dag",
      "Professionell avloppsrensning och service",
      "Snabb lokalisering av vattenläckor",
      "Installation av kvalitetskranar",
      "Inspektion med modern kamerateknik",
      "Optimering och service värmeanläggningar",
      "Total hantering av vattenskador",
      "Exklusiva badrumsrenoveringar"
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