import { CityContent } from '../types/cityContent';

const generateCityIntro = (city: string) => {
  const intros = [
    `Behöver du en pålitlig rörmokare i ${city}? Rör24 är det självklara valet med vårt omfattande nätverk av auktoriserade VVS-tekniker. Vi finns tillgängliga dygnet runt för att hjälpa dig med alla typer av VVS-problem.`,
    `Letar du efter professionell VVS-service i ${city}? Rör24 står redo att hjälpa dig med alla dina rörmokarebehov. Som ett av Sveriges största nätverk av auktoriserade rörmokare erbjuder vi service dygnet runt.`,
    `När du behöver rörmokare i ${city} är Rör24 här för dig. Vi är stolta över att vara en del av Sveriges mest omfattande nätverk av auktoriserade VVS-tekniker, med jour 24/7 för alla typer av VVS-arbeten.`
  ];
  
  return intros[Math.floor(Math.random() * intros.length)];
};

const generateWhyChooseUs = (city: string) => {
  const reasons = [
    `I ${city} står vi för kvalitet och pålitlighet. När problem uppstår med rören kan du lita på vår expertis och snabba service.`,
    `Som din lokala VVS-partner i ${city} erbjuder vi expertis och tillförlitlighet när du behöver det som mest.`,
    `Med vår långa erfarenhet i ${city} vet vi exakt vad som krävs för att lösa dina VVS-problem snabbt och effektivt.`
  ];
  
  return reasons[Math.floor(Math.random() * reasons.length)];
};

const generateLocalExpertise = (city: string) => {
  const expertise = [
    `Våra lokala experter i ${city} känner området väl och kan vara på plats inom kort tid.`,
    `Med gedigen lokalkännedom i ${city} kan våra tekniker snabbt vara på plats för att hjälpa dig.`,
    `Vi har etablerat en stark närvaro i ${city} med erfarna rörmokare som känner området som sin egen ficka.`
  ];
  
  return expertise[Math.floor(Math.random() * expertise.length)];
};

export const defaultCityContent: CityContent = {
  heroImage: "https://s3.eu-west-1.amazonaws.com/storage.quickbutik.com/stores/28340q/files/ror24.jpg",
  description: (city: string) => `
<section>
    <h1>Jourhavande Rörmokare i ${city} – Dygnet runt med Rör24!</h1>
    <p>${generateCityIntro(city)}</p>
</section>

<section>
    <h2>Varför välja Rör24 i ${city}?</h2>
    <p>${generateWhyChooseUs(city)}</p>
    <ul>
        <li><strong>Dygnet runt jour</strong> – Vi finns här för dig, oavsett om det är mitt i natten eller tidig morgon.</li>
        <li><strong>55 000+ utförda jobb</strong> – 24 nätverket har utfört över 55 000 jourarbeten.</li>
        <li><strong>91% rekommenderar oss</strong> – Kvalitet och service i världsklass.</li>
        <li><strong>Lokala experter</strong> – ${generateLocalExpertise(city)}</li>
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
    <h2>Så funkar det</h2>
    <ol>
        <li><strong>Ring oss</strong> – Vi svarar alltid, 24 timmar om dygnet.</li>
        <li><strong>Snabb utryckning</strong> – Våra rörmokare i ${city} är snabbt på plats.</li>
        <li><strong>Problem löst!</strong> – Professionellt, tryggt och med garanti på arbetet.</li>
    </ol>
</section>

<section>
    <h2>${city}s mest pålitliga rörmokare</h2>
    <p>När olyckan är framme, är det oss du ska ringa. Vi kombinerar <strong>mångårig erfarenhet</strong> med modern utrustning och ett engagemang för att ge dig bästa möjliga service i ${city}.</p>
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