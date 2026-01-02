import { CityContent } from "../types/cityContent";
import heroImage from "@/assets/hero-plumbers.jpg";
import serviceImage from "@/assets/ror24-service.jpg";

/**
 * Generates deterministic, stable city page content.
 * No random variations - each city always gets the same content.
 */

const generateDescription = (city: string): string => {
  return `
    <section>
      <h2>VVS & Rörmokare i ${city} - Jour 24/7</h2>
      <p>Välkommen till Rör24 i ${city}! Som en del av Sveriges största nätverk av auktoriserade rörmokare erbjuder vi professionell VVS-service dygnet runt, året om.</p>
      <p>Med vår omfattande erfarenhet och lokala närvaro i ${city} kan vi garantera snabb och pålitlig service för alla dina VVS-behov. Oavsett om det gäller akuta vattenläckor, stopp i avloppet eller planerade renoveringar – vi finns här för dig.</p>
    </section>

    <section>
      <h2>Våra VVS-tjänster i ${city}</h2>
      <ul>
        <li><strong>Akut VVS-jour</strong> – Dygnet runt, alla dagar</li>
        <li><strong>Avloppsrensning</strong> – Snabb åtgärd vid stopp</li>
        <li><strong>Vattenläckage</strong> – Lokalisering och reparation</li>
        <li><strong>Installation av blandare</strong> – Kök och badrum</li>
        <li><strong>Rörinspektion</strong> – Med modern kamerateknik</li>
        <li><strong>Värmesystem</strong> – Service och installation</li>
        <li><strong>Vattenskador</strong> – Akut hantering och åtgärd</li>
        <li><strong>Badrumsrenovering</strong> – Komplett VVS-installation</li>
      </ul>
    </section>

    <section>
      <h2>Varför välja Rör24 i ${city}?</h2>
      <ul>
        <li><strong>Dygnet runt jour</strong> – Vi finns här för dig, oavsett om det är mitt i natten eller tidig morgon.</li>
        <li><strong>55 000+ utförda jobb</strong> – 24 nätverket har utfört över 55 000 jourarbeten.</li>
        <li><strong>91% rekommenderar oss</strong> – Kvalitet och service i världsklass.</li>
        <li><strong>Lokala experter</strong> – Snabbt på plats i ${city}, alltid med rätt lösning.</li>
        <li><strong>Kostnadsfri offert</strong> – Du vet alltid vad det kostar innan vi börjar.</li>
        <li><strong>ROT-avdrag</strong> – Vi hjälper dig med ansökan för att sänka kostnaden.</li>
      </ul>
    </section>

    <img src="${serviceImage}" alt="Rör24 VVS-tjänster i ${city}" class="w-full rounded-lg my-8" loading="lazy" />

    <section>
      <h2>Så här fungerar det</h2>
      <ol>
        <li><strong>Ring oss</strong> – Kontakta oss på 010-555 11 94, dygnet runt.</li>
        <li><strong>Beskriv problemet</strong> – Vi ställer några frågor för att förstå din situation.</li>
        <li><strong>Få en offert</strong> – Du får en tydlig prisuppskattning innan arbetet påbörjas.</li>
        <li><strong>Vi kommer till dig</strong> – En lokal rörmokare i ${city} tar sig an uppdraget.</li>
        <li><strong>Problemet löst</strong> – Vi säkerställer att allt fungerar som det ska.</li>
      </ol>
    </section>

    <section>
      <h2>Kontakta oss nu!</h2>
      <p>Har du en vattenläcka eller stopp i avloppet i ${city}? Vänta inte – vi är redo att hjälpa dig <strong>NU</strong>.</p>
      <p><strong>📞 Ring oss direkt på 010-555 11 94</strong></p>
    </section>
  `;
};

export const defaultCityContent: CityContent = {
  heroImage: heroImage,
  description: generateDescription,
  services: [
    "Akut VVS-jour",
    "Avloppsrensning",
    "Vattenläckage",
    "Installation av blandare",
    "Rörinspektion",
    "Värmesystem",
    "Vattenskador",
    "Badrumsrenovering",
  ],
};
