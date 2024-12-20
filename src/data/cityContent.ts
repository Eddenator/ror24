type CityContent = {
  heroImage: string;
  description: string;
  experience: string;
  services: string[];
};

type CityContentMap = {
  [key: string]: CityContent;
};

const createCityDescription = (cityName: string) => `Behöver du en glasmästare i ${cityName}? Du har hittat rätt! Glas24 är en del av ett av Sveriges största nätverk av auktoriserade glasmästare, alltid redo att rycka in när du behöver hjälp. Oavsett om det är en akut jourutryckning mitt i natten eller ett planerat glasbyte, så står vi redo att lösa ditt problem.

Alltid öppet – alltid tillgängliga
Vi vet att olyckor inte har några kontorstider. Därför håller vi öppet 24/7, varje dag året runt. Ett samtal till oss – och vi är på väg för att hjälpa dig.

Glas24 – En del av 24-nätverket
Vi är stolta medlemmar i 24-nätverket, som har:

55 000+ utförda jobb i ryggen
91% nöjda kunder som gärna rekommenderar oss vidare
Med erfarenhet, tillgänglighet och pålitlighet i varje jobb ser vi till att du alltid kan känna dig trygg när du anlitar oss.

Så om du behöver en glasmästare i ${cityName}, tveka inte – ring oss direkt!`;

export const cityContent: CityContentMap = {
  stockholm: {
    heroImage: "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
    description: createCityDescription("Stockholm"),
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
    description: createCityDescription("Södertälje"),
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
    description: createCityDescription("Göteborg"),
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
    description: createCityDescription("Malmö"),
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
    description: createCityDescription("Vallentuna"),
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
    description: createCityDescription("Gävle"),
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
    description: createCityDescription("Sundsvall"),
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
  description: createCityDescription("din stad"),
  experience: "Med över 20 års erfarenhet i branschen kan vi hantera alla typer av glasarbeten, från akuta reparationer till planerade installationer.",
  services: [
    'Akut glasreparation',
    'Fönsterbyte',
    'Glasmontering',
    'Energieffektiva lösningar',
  ]
};