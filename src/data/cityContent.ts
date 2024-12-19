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
    description: "Som ledande glasmästare i Stockholm erbjuder vi omfattande glastjänster i hela Stockholmsområdet. Med vår centrala verkstad i Stockholm city kan vi snabbt nå ut till både privatpersoner och företag i hela regionen.\n\nVårt team av erfarna glasmästare har gedigen kunskap om Stockholms varierande arkitektur, från sekelskifteshus på Östermalm till moderna kontorsbyggnader i Kista. Vi förstår de unika utmaningarna som kommer med stadens olika byggnadsstilar och klimatförhållanden.\n\nI en storstad som Stockholm är säkerhet och energieffektivitet viktiga aspekter av vårt arbete. Vi arbetar med de senaste teknikerna och materialen för att säkerställa att våra lösningar möter både dagens och framtidens krav.\n\nVår långa erfarenhet av att arbeta i Stockholmsområdet har gett oss djup insikt i lokala byggnadstraditioner och regelverk. Vi har utvecklat särskild expertis inom renovering av äldre fastigheter och installation av moderna glaslösningar som respekterar byggnadernas historiska karaktär.\n\nVårt nätverk av leverantörer och samarbetspartners i Stockholm gör att vi kan erbjuda snabba leveranser och konkurrenskraftiga priser. Vi är stolta över att ha bidragit till att bevara och förbättra många av Stockholms vackra byggnader genom åren.",
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
    description: "Som etablerad glasmästare i Södertälje erbjuder vi professionella glastjänster till hela kommunen och närliggande områden. Vår verkstad i Södertälje är strategiskt placerad för att effektivt kunna serva både centrum och ytterområden.\n\nVi har särskild erfarenhet av att arbeta med de industriella fastigheterna kring Scania och AstraZeneca, såväl som de charmiga äldre byggnaderna i stadskärnan. Södertäljes unika mix av industri och historia ställer särskilda krav på glasmästeritjänster, och vi har utvecklat specialkunskap för att möta dessa behov.\n\nVi förstår vikten av snabb service för industrianläggningar där produktionen är beroende av fungerande faciliteter. Samtidigt har vi stor respekt för de kulturhistoriska värdena i Södertäljes äldre bebyggelse.\n\nVårt team har omfattande erfarenhet av att arbeta med både moderna industrifastigheter och kulturmärkta byggnader. Vi har byggt upp ett starkt nätverk av lokala leverantörer och partners i Södertälje-området, vilket gör att vi kan erbjuda snabba och kostnadseffektiva lösningar.\n\nVår kunskap om lokala förhållanden och byggtraditioner gör oss till ett naturligt val för både företag och privatpersoner i Södertälje med omnejd.",
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
    description: "Som Göteborgs erfarna glasmästare erbjuder vi professionella glastjänster längs hela västkusten. Från vår verkstad i centrala Göteborg servar vi både privatpersoner och företag i hela regionen.\n\nVi har särskild expertis när det gäller de utmaningar som det maritima klimatet innebär för glasinstallationer. Vårt team har omfattande erfarenhet av att arbeta med allt från de klassiska landshövdingehusen i Haga till de moderna kontorskomplexen på Lindholmen.\n\nVi förstår de unika kraven som Göteborgs väder ställer på glaslösningar, med salt havsbris och kraftiga vindar som påverkar materialval och installationsmetoder. Genom åren har vi utvecklat specialanpassade tekniker för att säkerställa hållbara glaslösningar i det krävande västkustklimatet.\n\nVi har också byggt upp ett omfattande nätverk av leverantörer och samarbetspartners i Göteborgsregionen. Detta gör att vi kan erbjuda snabba leveranser och skräddarsydda lösningar för varje projekt.\n\nVår djupa förankring i det lokala näringslivet och vår förståelse för stadens arkitektoniska särart gör oss till en pålitlig partner för alla typer av glasmästeriarbeten i Göteborg.",
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
    description: "Som Malmös pålitliga glasmästare erbjuder vi omfattande glastjänster i hela Öresundsregionen. Från vår verkstad i Malmö når vi snabbt ut till kunder i hela Skåne.\n\nVi har specialiserat oss på de unika utmaningar som det skånska klimatet och den lokala arkitekturen medför. Vårt team har gedigen erfarenhet av att arbeta med allt från de historiska byggnaderna i Gamla Staden till de moderna bostadskomplexen i Västra Hamnen.\n\nVi förstår vikten av att kombinera traditionellt hantverk med moderna tekniker för att möta dagens krav på energieffektivitet och komfort. Genom åren har vi byggt upp omfattande kunskap om lokala byggnadstraditioner och materialval som passar det skånska klimatet.\n\nVi har också utvecklat särskild expertis inom installation av ljudisolerande glas, vilket är särskilt viktigt i en växande storstad som Malmö. Vårt starka nätverk i Öresundsregionen ger oss tillgång till de senaste innovationerna inom glasbranschen.\n\nVi är stolta över att ha bidragit till utvecklingen av många av Malmös mest ikoniska byggnader och fortsätter att vara en viktig partner i stadens fortsatta utveckling.",
    experience: "Med djup förankring i Malmös näringsliv och två decenniers erfarenhet av lokalt glasmästeri har vi byggt upp ett omfattande nätverk i regionen.",
    services: [
      'Akut glasreparation i Malmöområdet',
      'Specialanpassade lösningar för Öresundsregionen',
      'Moderna glaslösningar för nybyggnation',
      'Energieffektiva fönsterlösningar',
    ]
  },
  vallentuna: {
    heroImage: "https://images.unsplash.com/photo-1523217582562-09d0def993a6",
    description: "Som etablerad glasmästare i Vallentuna erbjuder vi skräddarsydda glastjänster för hela kommunen och närliggande områden. Vår lokala närvaro gör att vi snabbt kan vara på plats när du behöver oss.\n\nVallentuna, med sin blandning av villaområden och moderna bostadsområden, ställer särskilda krav på glasmästeritjänster. Vi har specialiserat oss på att möta behoven hos både privatpersoner och företag i området.\n\nVi förstår de lokala förutsättningarna och har gedigen erfarenhet av att arbeta med allt från traditionella villor till moderna kontorsfastigheter. Vårt team är väl förtroget med områdets arkitektoniska stil och byggnadstraditioner.\n\nGenom åren har vi byggt upp ett omfattande nätverk av leverantörer och samarbetspartners i Vallentuna-området. Detta gör att vi kan erbjuda snabba och kostnadseffektiva lösningar för alla typer av glasarbeten.\n\nVår kunskap om lokala förhållanden och vår förståelse för Vallentunas särskilda behov gör oss till ett naturligt val för alla som söker professionell glasmästeriservice i området.",
    experience: "Med över ett decenniums erfarenhet av glasmästeri i Vallentuna har vi byggt upp en djup förståelse för områdets specifika behov och utmaningar.",
    services: [
      'Akut glasreparation i Vallentuna',
      'Villafönster och altandörrar',
      'Energieffektiva fönsterlösningar',
      'Säkerhetsglas för hem och företag',
    ]
  },
  gävle: {
    heroImage: "https://images.unsplash.com/photo-1523217582562-09d0def993a6",
    description: "Som etablerad glasmästare i Gävle erbjuder vi professionella glastjänster till hela Gävleborgs län. Vår verkstad i centrala Gävle är strategiskt placerad för att effektivt kunna serva både stadskärnan och omkringliggande områden.\n\nMed Gävles unika blandning av historisk bebyggelse och moderna kontorsbyggnader har vi utvecklat särskild expertis inom både restaurering av äldre fönster och installation av moderna glaslösningar. Vi har gedigen erfarenhet av att arbeta med allt från de vackra sekelskifteshusen längs Nygatan till de moderna företagslokalerna i Gävle Strand.\n\nVi förstår de särskilda utmaningar som det norrländska klimatet ställer på glasinstallationer och har specialiserat oss på energieffektiva lösningar som är anpassade för regionens väderförhållanden. Vårt team har omfattande erfarenhet av att hantera de påfrestningar som snö och kyla kan ha på olika typer av glasinstallationer.\n\nGenom åren har vi byggt upp ett starkt nätverk av lokala leverantörer och samarbetspartners i Gävleområdet. Detta gör att vi kan erbjuda snabba leveranser och kostnadseffektiva lösningar för alla typer av glasarbeten.\n\nVår djupa förankring i det lokala näringslivet och vår förståelse för Gävles arkitektoniska särart gör oss till en pålitlig partner för både privatpersoner och företag i regionen.",
    experience: "Med över 15 års erfarenhet av glasmästeri i Gävle har vi specialiserat oss på både historiska byggnader och moderna fastigheter i regionen.",
    services: [
      'Akut glasreparation i Gävle',
      'Specialanpassade lösningar för norrländskt klimat',
      'Restaurering av historiska fönster',
      'Energieffektiva glaslösningar',
    ]
  },
  sundsvall: {
    heroImage: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad",
    description: "Som Sundsvalls ledande glasmästare erbjuder vi omfattande glastjänster i hela Medelpad. Från vår centralt belägna verkstad i Sundsvall servar vi både privatpersoner och företag i regionen.\n\nVi har särskild expertis när det gäller de unika utmaningar som Sundsvalls arkitektur presenterar, från de pampiga stenhusen i Stenstan till de moderna kontorskomplexen vid hamnen. Vårt team har gedigen erfarenhet av att arbeta med både historiska byggnader och moderna fastigheter.\n\nMed vår djupa förståelse för det norrländska klimatets påverkan på glasinstallationer har vi utvecklat specialanpassade tekniker och lösningar. Vi använder material och metoder som är särskilt lämpade för regionens väderförhållanden.\n\nGenom åren har vi byggt upp ett omfattande nätverk av leverantörer och samarbetspartners i Sundsvallsregionen. Detta gör att vi kan erbjuda snabba leveranser och skräddarsydda lösningar för varje projekt.\n\nVår långa erfarenhet av att arbeta i Sundsvall har gett oss unik insikt i lokala byggnadstraditioner och regelverk. Vi är stolta över att ha bidragit till att bevara och förbättra många av stadens vackra byggnader.",
    experience: "Med över två decenniers erfarenhet av glasmästeri i Sundsvall har vi byggt upp omfattande kunskap om regionens unika arkitektur och klimatutmaningar.",
    services: [
      'Akut glasreparation i Sundsvallsområdet',
      'Specialanpassade lösningar för norrländskt klimat',
      'Restaurering av historiska fönster i Stenstan',
      'Energieffektiva glaslösningar',
    ]
  }
};

// Default content for cities without specific content
export const defaultCityContent: CityContent = {
  heroImage: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2",
  description: "Som erfaren glasmästare erbjuder vi omfattande glastjänster för både privatpersoner och företag i området. Vi har lång erfarenhet av att arbeta med olika typer av glasinstallationer och reparationer i regionen.\n\nVårt team av kvalificerade glasmästare är väl förtrogna med lokala byggnadstraditioner och moderna tekniker. Vi arbetar med de senaste materialen och metoderna för att säkerställa högsta kvalitet i alla våra installationer.\n\nVår verkstad är utrustad med modern teknik som gör att vi kan hantera alla typer av glasarbeten effektivt och professionellt. Vi lägger stor vikt vid att förstå varje kunds unika behov och anpassar våra lösningar därefter.\n\nSäkerhet och kvalitet är alltid våra främsta prioriteringar, och vi använder endast certifierade produkter och material. Vi har byggt upp ett omfattande nätverk av leverantörer vilket gör att vi kan erbjuda konkurrenskraftiga priser och snabba leveranser.\n\nVårt erfarna team står redo att hjälpa till med allt från akuta reparationer till planerade installationer. Vi är stolta över vårt rykte som en pålitlig och professionell glasmästare i området.",
  experience: "Med över 20 års erfarenhet i branschen kan vi hantera alla typer av glasarbeten, från akuta reparationer till planerade installationer.",
  services: [
    'Akut glasreparation',
    'Fönsterbyte',
    'Glasmontering',
    'Energieffektiva lösningar',
  ]
};