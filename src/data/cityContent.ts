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
    description: "Vår affärsidé är enkel: vi vill vara din helhetsleverantör av allt som rör glas. Från minsta reparation till stora specialbeställningar, vi ser till att du alltid kan få hjälp när du behöver det – oavsett plats i Sverige och oavsett tid på dygnet. Som en del av 24-nätverket, med över 55 000 utförda jobb och 91% kundnöjdhet i ryggen, vet vi vad som krävs för att skapa trygghet och förtroende.\n\nGenom att erbjuda ett komplett utbud av tjänster, från fönsterbyte till specialanpassade glaslösningar, strävar vi efter att vara förstahandsvalet för privatpersoner, företag och organisationer över hela landet. Vår styrka ligger i bredden av vår kompetens, vårt rikstäckande nätverk av auktoriserade glasmästare och vår tillgänglighet 24/7. Behöver du hjälp med glas – när som helst, var som helst och oavsett vad det gäller – ring oss nu!",
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
    description: "Vår affärsidé är enkel: vi vill vara din helhetsleverantör av allt som rör glas. Från minsta reparation till stora specialbeställningar, vi ser till att du alltid kan få hjälp när du behöver det – oavsett plats i Sverige och oavsett tid på dygnet. Som en del av 24-nätverket, med över 55 000 utförda jobb och 91% kundnöjdhet i ryggen, vet vi vad som krävs för att skapa trygghet och förtroende.\n\nGenom att erbjuda ett komplett utbud av tjänster, från fönsterbyte till specialanpassade glaslösningar, strävar vi efter att vara förstahandsvalet för privatpersoner, företag och organisationer över hela landet. Vår styrka ligger i bredden av vår kompetens, vårt rikstäckande nätverk av auktoriserade glasmästare och vår tillgänglighet 24/7. Behöver du hjälp med glas – när som helst, var som helst och oavsett vad det gäller – ring oss nu!",
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
    description: "Vår affärsidé är enkel: vi vill vara din helhetsleverantör av allt som rör glas. Från minsta reparation till stora specialbeställningar, vi ser till att du alltid kan få hjälp när du behöver det – oavsett plats i Sverige och oavsett tid på dygnet. Som en del av 24-nätverket, med över 55 000 utförda jobb och 91% kundnöjdhet i ryggen, vet vi vad som krävs för att skapa trygghet och förtroende.\n\nGenom att erbjuda ett komplett utbud av tjänster, från fönsterbyte till specialanpassade glaslösningar, strävar vi efter att vara förstahandsvalet för privatpersoner, företag och organisationer över hela landet. Vår styrka ligger i bredden av vår kompetens, vårt rikstäckande nätverk av auktoriserade glasmästare och vår tillgänglighet 24/7. Behöver du hjälp med glas – när som helst, var som helst och oavsett vad det gäller – ring oss nu!",
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
    description: "Vår affärsidé är enkel: vi vill vara din helhetsleverantör av allt som rör glas. Från minsta reparation till stora specialbeställningar, vi ser till att du alltid kan få hjälp när du behöver det – oavsett plats i Sverige och oavsett tid på dygnet. Som en del av 24-nätverket, med över 55 000 utförda jobb och 91% kundnöjdhet i ryggen, vet vi vad som krävs för att skapa trygghet och förtroende.\n\nGenom att erbjuda ett komplett utbud av tjänster, från fönsterbyte till specialanpassade glaslösningar, strävar vi efter att vara förstahandsvalet för privatpersoner, företag och organisationer över hela landet. Vår styrka ligger i bredden av vår kompetens, vårt rikstäckande nätverk av auktoriserade glasmästare och vår tillgänglighet 24/7. Behöver du hjälp med glas – när som helst, var som helst och oavsett vad det gäller – ring oss nu!",
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
    description: "Vår affärsidé är enkel: vi vill vara din helhetsleverantör av allt som rör glas. Från minsta reparation till stora specialbeställningar, vi ser till att du alltid kan få hjälp när du behöver det – oavsett plats i Sverige och oavsett tid på dygnet. Som en del av 24-nätverket, med över 55 000 utförda jobb och 91% kundnöjdhet i ryggen, vet vi vad som krävs för att skapa trygghet och förtroende.\n\nGenom att erbjuda ett komplett utbud av tjänster, från fönsterbyte till specialanpassade glaslösningar, strävar vi efter att vara förstahandsvalet för privatpersoner, företag och organisationer över hela landet. Vår styrka ligger i bredden av vår kompetens, vårt rikstäckande nätverk av auktoriserade glasmästare och vår tillgänglighet 24/7. Behöver du hjälp med glas – när som helst, var som helst och oavsett vad det gäller – ring oss nu!",
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
    description: "Vår affärsidé är enkel: vi vill vara din helhetsleverantör av allt som rör glas. Från minsta reparation till stora specialbeställningar, vi ser till att du alltid kan få hjälp när du behöver det – oavsett plats i Sverige och oavsett tid på dygnet. Som en del av 24-nätverket, med över 55 000 utförda jobb och 91% kundnöjdhet i ryggen, vet vi vad som krävs för att skapa trygghet och förtroende.\n\nGenom att erbjuda ett komplett utbud av tjänster, från fönsterbyte till specialanpassade glaslösningar, strävar vi efter att vara förstahandsvalet för privatpersoner, företag och organisationer över hela landet. Vår styrka ligger i bredden av vår kompetens, vårt rikstäckande nätverk av auktoriserade glasmästare och vår tillgänglighet 24/7. Behöver du hjälp med glas – när som helst, var som helst och oavsett vad det gäller – ring oss nu!",
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
    description: "Vår affärsidé är enkel: vi vill vara din helhetsleverantör av allt som rör glas. Från minsta reparation till stora specialbeställningar, vi ser till att du alltid kan få hjälp när du behöver det – oavsett plats i Sverige och oavsett tid på dygnet. Som en del av 24-nätverket, med över 55 000 utförda jobb och 91% kundnöjdhet i ryggen, vet vi vad som krävs för att skapa trygghet och förtroende.\n\nGenom att erbjuda ett komplett utbud av tjänster, från fönsterbyte till specialanpassade glaslösningar, strävar vi efter att vara förstahandsvalet för privatpersoner, företag och organisationer över hela landet. Vår styrka ligger i bredden av vår kompetens, vårt rikstäckande nätverk av auktoriserade glasmästare och vår tillgänglighet 24/7. Behöver du hjälp med glas – när som helst, var som helst och oavsett vad det gäller – ring oss nu!",
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