import { CityContent } from '../types/cityContent';

const generateServiceDescriptions = () => {
  const descriptions = [
    "Behöver du professionell VVS-service i %city%? Våra erfarna rörmokare står redo att hjälpa dig med alla typer av rörarbeten.",
    "I %city% erbjuder vi snabb och pålitlig VVS-jour dygnet runt. Ingen uppgift är för stor eller för liten för våra experter.",
    "Som din lokala VVS-partner i %city% garanterar vi högkvalitativt arbete till konkurrenskraftiga priser.",
    "Söker du en pålitlig rörmokare i %city%? Vi har den expertis och erfarenhet som krävs för att lösa dina VVS-problem.",
    "Med vår jour i %city% kan du känna dig trygg. Vi är alltid redo att rycka ut när du behöver oss som mest.",
    "Vi har hjälpt hundratals nöjda kunder i %city% med deras VVS-behov. Låt oss hjälpa dig också!",
    "För akuta VVS-problem i %city% finns vi tillgängliga dygnet runt. Ring oss så är vi snabbt på plats!",
    "Våra rörmokare i %city% har den lokalkännedom och expertis som krävs för att hantera alla typer av VVS-arbeten.",
    "I %city% står vi för kvalitet och pålitlighet. När problem uppstår med rören kan du lita på vår expertis.",
    "Med gedigen erfarenhet av VVS-arbeten i %city% vet vi exakt vad som krävs för att lösa dina problem."
  ];
  
  return descriptions[Math.floor(Math.random() * descriptions.length)];
};

const generateServiceList = (city: string) => {
  const serviceDescriptions = [
    `Akut VVS-jour i ${city} - Vi rycker ut dygnet runt för att hjälpa dig med akuta problem`,
    `Professionell avloppsrensning i ${city} - Från små stopp till omfattande rensningar`,
    `Experthjälp med vattenläckage i ${city} - Snabb identifiering och åtgärd av läckor`,
    `Installation av blandare i ${city} - Montering och service av alla typer av blandare`,
    `Rörinspektion i ${city} - Modern teknik för att hitta dolda problem`,
    `Service av värmesystem i ${city} - Optimering och underhåll för bättre effektivitet`,
    `Åtgärd av vattenskador i ${city} - Omfattande expertis inom vattensanering`,
    `Badrumsrenovering i ${city} - Från planering till färdig installation`
  ];

  return serviceDescriptions;
};

const generateNearbyLinks = (city: string) => {
  // This is a placeholder. In a real implementation, you would need to
  // implement logic to find actually nearby cities based on geographical data
  return `Bor du nära ${city}? Vi hjälper även kunder i närliggande områden.`;
};

const generateCityIntro = (city: string) => {
  const intros = [
    `Behöver du en pålitlig rörmokare i ${city}? Rör24 är det självklara valet med vårt omfattande nätverk av auktoriserade VVS-tekniker. Vi finns tillgängliga dygnet runt för att hjälpa dig med alla typer av VVS-problem.`,
    `Letar du efter professionell VVS-service i ${city}? Rör24 står redo att hjälpa dig med alla dina rörmokarebehov. Som ett av Sveriges största nätverk av auktoriserade rörmokare erbjuder vi service dygnet runt.`,
    `När du behöver rörmokare i ${city} är Rör24 här för dig. Vi är stolta över att vara en del av Sveriges mest omfattande nätverk av auktoriserade VVS-tekniker, med jour 24/7 för alla typer av VVS-arbeten.`
  ];
  
  return intros[Math.floor(Math.random() * intros.length)];
};

export const defaultCityContent: CityContent = {
  heroImage: "https://s3.eu-west-1.amazonaws.com/storage.quickbutik.com/stores/28340q/files/ror24.jpg",
  description: (city: string) => `
<section>
    <h1>Jourhavande Rörmokare i ${city} – Dygnet runt med Rör24!</h1>
    <p>${generateCityIntro(city)}</p>
    <p>${generateServiceDescriptions().replace(/%city%/g, city)}</p>
</section>

<section>
    <h2>Våra VVS-tjänster i ${city}</h2>
    <div class="service-list">
        ${generateServiceList(city).map(service => `<div class="service-item">${service}</div>`).join('')}
    </div>
</section>

<section>
    <h2>Varför välja Rör24 i ${city}?</h2>
    <ul>
        <li><strong>Dygnet runt jour</strong> – Vi finns här för dig, oavsett om det är mitt i natten eller tidig morgon.</li>
        <li><strong>55 000+ utförda jobb</strong> – 24 nätverket har utfört över 55 000 jourarbeten.</li>
        <li><strong>91% rekommenderar oss</strong> – Kvalitet och service i världsklass.</li>
        <li><strong>Lokala experter</strong> – Snabbt på plats i ${city}, alltid med rätt lösning.</li>
    </ul>
</section>

<img src="https://s3.eu-west-1.amazonaws.com/storage.quickbutik.com/stores/28340q/files/436-ror24.jpg" alt="Rör24 VVS-tjänster i ${city}" class="w-full rounded-lg my-8" />

<section>
    <h2>Vad kan vi hjälpa dig med i ${city}?</h2>
    <p>Oavsett VVS-problem har vi lösningen! Här är några av våra mest efterfrågade tjänster:</p>
    <ul>
        <li>✅ <strong>Akuta problem:</strong> Vattenläckor, trasiga rör eller översvämningar.</li>
        <li>✅ <strong>Avloppsrensning:</strong> Från små stopp till totalstopp i avloppet.</li>
        <li>✅ <strong>Installationer:</strong> Blandare, toaletter, diskmaskiner – vi installerar det smidigt.</li>
        <li>✅ <strong>Felsökning & reparation:</strong> Problem med värme eller vatten? Vi hittar och fixar det.</li>
    </ul>
</section>

<section>
    <h2>Täckningsområde</h2>
    <p>${generateNearbyLinks(city)}</p>
</section>

<section>
    <h2>Kontakta oss nu!</h2>
    <p>Har du en vattenläcka eller stopp i avloppet i ${city}? Vänta inte – vi är redo att hjälpa dig <strong>NU</strong>.</p>
    <p><strong>📞 Ring oss direkt på 010-555 11 94</strong></p>
</section>`,
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