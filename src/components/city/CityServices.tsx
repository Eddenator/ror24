import { CheckCircle } from "lucide-react";

interface CityServicesProps {
  cityName: string;
  services: string[];
}

// Pool of service descriptions
const serviceDescriptions = {
  "Akut VVS-jour": [
    "Snabb utryckning dygnet runt för alla akuta VVS-problem",
    "Omedelbar hjälp vid vattenläckor och andra VVS-kriser",
    "Professionell jourassistans när du behöver det som mest",
    "Alltid redo att rycka ut vid akuta VVS-situationer",
    "Erfarna rörmokare tillgängliga 24/7 för akuta ärenden",
    "Snabb responstid vid alla typer av VVS-nödsituationer",
    "Jour dygnet runt för din trygghet vid VVS-problem",
    "Akut VVS-service med garanterad snabb utryckning",
    "Professionell hjälp vid alla akuta VVS-situationer",
    "Omedelbar assistans vid vattenrelaterade kriser",
    "Experthjälp tillgänglig dygnet runt för akuta behov",
    "Snabb och pålitlig jourtjänst för alla VVS-problem",
    "Akut VVS-service med kort inställelsetid",
    "Jour med erfarna rörmokare dygnet runt",
    "Omedelbar hjälp vid alla typer av VVS-kriser",
    "Professionell akutservice för alla VVS-problem",
    "Snabb utryckning vid vattenrelaterade nödsituationer",
    "24-timmars jourservice för din trygghet",
    "Akut VVS-hjälp när du behöver det som mest",
    "Omedelbar assistans vid alla typer av VVS-problem"
  ],
  "Avloppsrensning": [
    "Effektiv rensning av alla typer av stopp i avlopp",
    "Modern teknik för att åtgärda även svåra blockeringar",
    "Förebyggande underhåll för att undvika framtida stopp",
    "Professionell avloppsrensning med garanterat resultat",
    "Snabb och effektiv lösning på avloppsproblem",
    "Specialiserad utrustning för alla typer av stopp",
    "Miljövänlig rensning av igensatta avlopp",
    "Akut hjälp vid totalstopp i avloppet",
    "Förebyggande rensning för problemfria avlopp",
    "Kamerainspektion och rensning av avloppssystem",
    "Effektiv åtgärd av återkommande avloppsproblem",
    "Professionell hantering av alla avloppsfrågor",
    "Snabb hjälp vid akuta avloppsstopp",
    "Modern spolbilsteknik för effektiv rensning",
    "Grundlig rensning av hela avloppssystemet",
    "Förebyggande underhåll av fastighetsavlopp",
    "Specialisttjänster för svåra avloppsproblem",
    "Miljöanpassad avloppsrensning med toppmodern teknik",
    "Akut och planerad avloppsservice",
    "Komplett avloppsrensning med garanti"
  ],
  "Vattenläckage": [
    "Noggrann läcksökning med modern utrustning",
    "Snabb åtgärd för att minimera vattenskador",
    "Expertis inom alla typer av vattenläckor",
    "Effektiv läckagesökning med värmekamera",
    "Omedelbar hjälp vid akuta vattenläckor",
    "Professionell läcksökning och reparation",
    "Modern teknik för exakt läckagelokalisering",
    "Snabb insats för att förhindra vattenskador",
    "Omfattande erfarenhet av läckagesökning",
    "Förebyggande kontroller av vattenledningar",
    "Akut åtgärd av alla typer av vattenläckor",
    "Specialiserad utrustning för läckagesökning",
    "Effektiv reparation av dolda vattenläckor",
    "Professionell hantering av läckande rör",
    "Snabb identifiering av läckagekällor",
    "Komplett service vid vattenläckage",
    "Förebyggande läckagekontroll av fastigheter",
    "Akut läckagesökning dygnet runt",
    "Modern teknik för minimal åverkan",
    "Garanterad kvalitet vid läckagereparationer"
  ],
  "Installation av blandare": [
    "Fackmannamässig installation av alla typer av blandare",
    "Rådgivning för val av energieffektiva lösningar",
    "Komplett service från val till installation",
    "Professionell montering av kvalitetsblandare",
    "Expert på installation av alla blandartyper",
    "Energioptimerad blandarinstallation",
    "Snabb och säker montering av vattenkranar",
    "Kvalitetssäkrad installation med garanti",
    "Rådgivning och installation av sparblandare",
    "Komplett utbyte av gamla blandare",
    "Modern teknik för optimal vattenförbrukning",
    "Fackmannamässig installation och service",
    "Specialister på köks- och badrumsblandare",
    "Miljövänliga och hållbara blandarval",
    "Professionell rådgivning vid blandarval",
    "Säker installation enligt branschstandard",
    "Komplett service för alla blandartyper",
    "Energieffektiva lösningar för alla behov",
    "Snabb och professionell blandarservice",
    "Certifierad installation med kvalitetsgaranti"
  ],
  "Rörinspektion": [
    "Grundlig inspektion med modern kamerautrustning",
    "Detaljerad diagnostik av rörsystemets skick",
    "Förebyggande kontroller för att undvika problem",
    "Avancerad kamerainspektion av alla rörtyper",
    "Digital dokumentation av rörinspektion",
    "Omfattande kontroll av hela rörsystemet",
    "Modern teknik för exakt felsökning",
    "Professionell bedömning av rörskick",
    "Förebyggande inspektion av äldre rörsystem",
    "Detaljerad rapport med åtgärdsförslag",
    "Noggrann genomgång av fastighetens rör",
    "Specialiserad rörkamerainspektion",
    "Komplett statusbedömning av rörsystem",
    "Effektiv lokalisering av dolda problem",
    "Digital kartläggning av rörsystemet",
    "Förebyggande underhållsinspektion",
    "Avancerad diagnostik av rörskador",
    "Modern rörinspektionsteknik",
    "Professionell röranalys och dokumentation",
    "Omfattande inspektion med kvalitetsgaranti"
  ],
  "Värmesystem": [
    "Optimering och service av alla värmesystem",
    "Energieffektiva lösningar för lägre kostnader",
    "Expert på traditionella och moderna system",
    "Professionell service av värmeanläggningar",
    "Optimering för maximal energibesparing",
    "Omfattande kunskap om alla värmesystem",
    "Modern teknik för effektiv värmedrift",
    "Specialiserad service av värmepumpar",
    "Förebyggande underhåll av värmesystem",
    "Energioptimering av befintliga system",
    "Komplett service av alla värmelösningar",
    "Professionell injustering av värmesystem",
    "Expert på hållbara värmelösningar",
    "Effektiv drift av moderna värmesystem",
    "Specialanpassade värmelösningar",
    "Omfattande service och underhåll",
    "Optimering för bästa driftekonomi",
    "Professionell värmepumpsservice",
    "Modern teknik för optimal värmedrift",
    "Komplett värmeservice med garanti"
  ],
  "Vattenskador": [
    "Professionell sanering och återställning",
    "Omfattande erfarenhet av försäkringsärenden",
    "Snabb insats för minimal skadeomfattning",
    "Akut hjälp vid omfattande vattenskador",
    "Komplett sanering och återställning",
    "Professionell hantering av försäkringsfall",
    "Snabb utryckning vid akuta vattenskador",
    "Modern teknik för effektiv torkning",
    "Omfattande erfarenhet av vattensanering",
    "Komplett service vid alla vattenskador",
    "Professionell skadebedömning och åtgärd",
    "Snabb och effektiv vattensanering",
    "Expert på försäkringsrelaterade skador",
    "Akut hjälp dygnet runt vid vattenskador",
    "Omfattande saneringsservice",
    "Specialister på vattenskadehantering",
    "Effektiv torkning och återställning",
    "Komplett hantering av vattenskador",
    "Professionell dokumentation för försäkring",
    "Snabb och pålitlig saneringstjänst"
  ],
  "Badrumsrenovering": [
    "Totalrenovering med fokus på kvalitet",
    "Certifierade hantverkare för våtrumsarbete",
    "Kompletta lösningar från start till mål",
    "Professionell renovering enligt branschstandard",
    "Modern design och funktionella lösningar",
    "Omfattande erfarenhet av badrumsprojekt",
    "Certifierad våtrumsinstallation",
    "Komplett service vid badrumsrenovering",
    "Specialister på moderna badrumslösningar",
    "Kvalitetssäkrad renovering med garanti",
    "Expert på säkra våtrumslösningar",
    "Professionell projektledning från start",
    "Modern design och hållbara material",
    "Omfattande kunskap om våtrumsarbete",
    "Komplett badrumsrenovering med stil",
    "Certifierad installation i våtrum",
    "Specialanpassade badrumslösningar",
    "Professionell rådgivning och planering",
    "Kvalitetssäkrad totalrenovering",
    "Komplett service med nöjd-kund-garanti"
  ]
};

// Deterministisk hash-funktion baserad på stad + tjänst
const hashServiceDescription = (cityName: string, service: string): number => {
  const str = cityName + service;
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
};

const CityServices = ({ cityName, services }: CityServicesProps) => {
  // Function to get a deterministic description for a service
  const getServiceDescription = (service: string) => {
    const descriptions = serviceDescriptions[service as keyof typeof serviceDescriptions] || [];
    if (descriptions.length === 0) return "Professionell service med garanterad kvalitet";
    
    const hash = hashServiceDescription(cityName, service);
    return descriptions[hash % descriptions.length];
  };

  return (
    <div className="bg-gray-50 rounded-lg p-8 mt-12">
      <h2 className="text-2xl font-semibold mb-6">
        Våra VVS-tjänster i {cityName}
      </h2>
      <p className="text-gray-600 mb-6">
        Som din lokala VVS-partner erbjuder vi ett komplett utbud av tjänster för både akuta och planerade behov.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">{service}</h3>
              <p className="text-sm text-gray-600">
                {getServiceDescription(service)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityServices;