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
    description: "Som ledande glasmästare i Stockholm erbjuder vi omfattande glastjänster i hela Stockholmsområdet. Med vår centrala verkstad i Stockholm city kan vi snabbt nå ut till både privatpersoner och företag i hela regionen.",
    experience: "Med över 20 års erfarenhet av glasmästeri i Stockholm har vi byggt upp ett starkt nätverk och gedigen kunskap om lokala fastigheter och byggnader.",
    services: [
      'Akut glasreparation i Stockholmsområdet',
      'Fönsterbyte för äldre fastigheter',
      'Specialanpassade glaslösningar för Stockholms innerstad',
      'Energieffektiva glaslösningar för nordiskt klimat',
    ]
  },
  göteborg: {
    heroImage: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4",
    description: "Som Göteborgs erfarna glasmästare erbjuder vi professionella glastjänster längs hela västkusten. Från vår verkstad i centrala Göteborg servar vi både privatpersoner och företag.",
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
    description: "Som Malmös pålitliga glasmästare erbjuder vi omfattande glastjänster i hela Öresundsregionen. Från vår verkstad i Malmö når vi snabbt ut till kunder i hela Skåne.",
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
  description: "Som erfaren glasmästare erbjuder vi omfattande glastjänster för både privatpersoner och företag i området.",
  experience: "Med över 20 års erfarenhet i branschen kan vi hantera alla typer av glasarbeten, från akuta reparationer till planerade installationer.",
  services: [
    'Akut glasreparation',
    'Fönsterbyte',
    'Glasmontering',
    'Energieffektiva lösningar',
  ]
};