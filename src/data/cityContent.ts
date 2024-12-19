type CityContent = {
  heroImage: string;
  description: string;
  experience: string;
  services: string[];
};

type CityContentMap = {
  [key: string]: CityContent;
};

export const cityContent: CityContentMap = {
  stockholm: {
    heroImage: "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
    description: "Som ledande glasmästare i Stockholm erbjuder vi omfattande glastjänster i hela Stockholmsområdet. Med vår centrala verkstad i Stockholm city kan vi snabbt nå ut till både privatpersoner och företag i hela regionen. Vårt team av erfarna glasmästare har gedigen kunskap om Stockholms varierande arkitektur, från sekelskifteshus på Östermalm till moderna kontorsbyggnader i Kista. Vi förstår de unika utmaningarna som kommer med stadens olika byggnadsstilar och klimatförhållanden. I en storstad som Stockholm är säkerhet och energieffektivitet viktiga aspekter av vårt arbete. Vi arbetar med de senaste teknikerna och materialen för att säkerställa att våra lösningar möter både dagens och framtidens krav. Vår långa erfarenhet av att arbeta i Stockholmsområdet har gett oss djup insikt i lokala byggnadstraditioner och regelverk. Vi har utvecklat särskild expertis inom renovering av äldre fastigheter och installation av moderna glaslösningar som respekterar byggnadernas historiska karaktär. Vårt nätverk av leverantörer och samarbetspartners i Stockholm gör att vi kan erbjuda snabba leveranser och konkurrenskraftiga priser. Vi är stolta över att ha bidragit till att bevara och förbättra många av Stockholms vackra byggnader genom åren.",
    experience: "Med över 20 års erfarenhet av glasmästeri i Stockholm har vi byggt upp ett starkt nätverk och gedigen kunskap om lokala fastigheter och byggnader.",
    services: [
      'Akut glasreparation i Stockholmsområdet',
      'Fönsterbyte för äldre fastigheter',
      'Specialanpassade glaslösningar för Stockholms innerstad',
      'Energieffektiva glaslösningar för nordiskt klimat',
    ]
  },
  södertälje: {
    heroImage: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d",
    description: "Som etablerad glasmästare i Södertälje erbjuder vi professionella glastjänster till hela kommunen och närliggande områden. Vår verkstad i Södertälje är strategiskt placerad för att effektivt kunna serva både centrum och ytterområden. Vi har särskild erfarenhet av att arbeta med de industriella fastigheterna kring Scania och AstraZeneca, såväl som de charmiga äldre byggnaderna i stadskärnan. Södertäljes unika mix av industri och historia ställer särskilda krav på glasmästeritjänster, och vi har utvecklat specialkunskap för att möta dessa behov. Vi förstår vikten av snabb service för industrianläggningar där produktionen är beroende av fungerande faciliteter. Samtidigt har vi stor respekt för de kulturhistoriska värdena i Södertäljes äldre bebyggelse. Vårt team har omfattande erfarenhet av att arbeta med både moderna industrifastigheter och kulturmärkta byggnader. Vi har byggt upp ett starkt nätverk av lokala leverantörer och partners i Södertälje-området, vilket gör att vi kan erbjuda snabba och kostnadseffektiva lösningar. Vår kunskap om lokala förhållanden och byggtraditioner gör oss till ett naturligt val för både företag och privatpersoner i Södertälje med omnejd.",
    experience: "Med över 15 års erfarenhet av glasmästeri i Södertälje har vi specialiserat oss på både industriella och historiska byggnader i området.",
    services: [
      'Akut glasreparation i Södertälje',
      'Industrianpassade glaslösningar',
      'Specialanpassade lösningar för äldre fastigheter',
      'Energieffektiva fönsterlösningar',
    ]
  },
  göteborg: {
    heroImage: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4",
    description: "Som Göteborgs erfarna glasmästare erbjuder vi professionella glastjänster längs hela västkusten. Från vår verkstad i centrala Göteborg servar vi både privatpersoner och företag i hela regionen. Vi har särskild expertis när det gäller de utmaningar som det maritima klimatet innebär för glasinstallationer. Vårt team har omfattande erfarenhet av att arbeta med allt från de klassiska landshövdingehusen i Haga till de moderna kontorskomplexen på Lindholmen. Vi förstår de unika kraven som Göteborgs väder ställer på glaslösningar, med salt havsbris och kraftiga vindar som påverkar materialval och installationsmetoder. Genom åren har vi utvecklat specialanpassade tekniker för att säkerställa hållbara glaslösningar i det krävande västkustklimatet. Vi har också byggt upp ett omfattande nätverk av leverantörer och samarbetspartners i Göteborgsregionen. Detta gör att vi kan erbjuda snabba leveranser och skräddarsydda lösningar för varje projekt. Vår djupa förankring i det lokala näringslivet och vår förståelse för stadens arkitektoniska särart gör oss till en pålitlig partner för alla typer av glasmästeriarbeten i Göteborg.",
    experience: "Vi har över två decenniers erfarenhet av glasmästeri i Göteborg och har specialiserat oss på västkustens unika arkitektur och väderförhållanden.",
    services: [
      'Akut glasreparation i Göteborgsområdet',
      'Specialanpassade lösningar för kuststaden',
      'Saltvattenresistenta glasbehandlingar',
      'Energibesparande fönsterlösningar',
    ]
  },
  malmö: {
    heroImage: "https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a",
    description: "Som Malmös pålitliga glasmästare erbjuder vi omfattande glastjänster i hela Öresundsregionen. Från vår verkstad i Malmö når vi snabbt ut till kunder i hela Skåne. Vi har specialiserat oss på de unika utmaningar som det skånska klimatet och den lokala arkitekturen medför. Vårt team har gedigen erfarenhet av att arbeta med allt från de historiska byggnaderna i Gamla Staden till de moderna bostadskomplexen i Västra Hamnen. Vi förstår vikten av att kombinera traditionellt hantverk med moderna tekniker för att möta dagens krav på energieffektivitet och komfort. Genom åren har vi byggt upp omfattande kunskap om lokala byggnadstraditioner och materialval som passar det skånska klimatet. Vi har också utvecklat särskild expertis inom installation av ljudisolerande glas, vilket är särskilt viktigt i en växande storstad som Malmö. Vårt starka nätverk i Öresundsregionen ger oss tillgång till de senaste innovationerna inom glasbranschen. Vi är stolta över att ha bidragit till utvecklingen av många av Malmös mest ikoniska byggnader och fortsätter att vara en viktig partner i stadens fortsatta utveckling.",
    experience: "Med djup förankring i Malmös näringsliv och två decenniers erfarenhet av lokalt glasmästeri har vi byggt upp ett omfattande nätverk i regionen.",
    services: [
      'Akut glasreparation i Malmöområdet',
      'Specialanpassade lösningar för Öresundsregionen',
      'Moderna glaslösningar för nybyggnation',
      'Energieffektiva fönsterlösningar',
    ]
  }
};

// Default content for cities without specific content
export const defaultCityContent: CityContent = {
  heroImage: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2",
  description: "Som erfaren glasmästare erbjuder vi omfattande glastjänster för både privatpersoner och företag i området. Vi har lång erfarenhet av att arbeta med olika typer av glasinstallationer och reparationer i regionen. Vårt team av kvalificerade glasmästare är väl förtrogna med lokala byggnadstraditioner och moderna tekniker. Vi arbetar med de senaste materialen och metoderna för att säkerställa högsta kvalitet i alla våra installationer. Vår verkstad är utrustad med modern teknik som gör att vi kan hantera alla typer av glasarbeten effektivt och professionellt. Vi lägger stor vikt vid att förstå varje kunds unika behov och anpassar våra lösningar därefter. Säkerhet och kvalitet är alltid våra främsta prioriteringar, och vi använder endast certifierade produkter och material. Vi har byggt upp ett omfattande nätverk av leverantörer vilket gör att vi kan erbjuda konkurrenskraftiga priser och snabba leveranser. Vårt erfarna team står redo att hjälpa till med allt från akuta reparationer till planerade installationer. Vi är stolta över vårt rykte som en pålitlig och professionell glasmästare i området.",
  experience: "Med över 20 års erfarenhet i branschen kan vi hantera alla typer av glasarbeten, från akuta reparationer till planerade installationer.",
  services: [
    'Akut glasreparation',
    'Fönsterbyte',
    'Glasmontering',
    'Energieffektiva lösningar',
  ]
};