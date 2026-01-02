import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface CityFAQProps {
  cityName: string;
}

export const generateFAQData = (cityName: string) => [
  {
    question: `Vad kostar en rörmokare i ${cityName}?`,
    answer: `Priset varierar beroende på typ av jobb. Vi erbjuder alltid en kostnadsfri offert innan arbetet påbörjas. Ring oss på 010-555 11 94 för en prisuppskattning. Vi tillämpar fasta priser och ROT-avdrag kan sänka din kostnad med upp till 50%.`,
  },
  {
    question: `Hur snabbt kan ni vara på plats i ${cityName}?`,
    answer: `Vi strävar efter att vara på plats inom 2 timmar vid akuta ärenden i ${cityName}. Tack vare vårt lokala nätverk av rörmokare kan vi ofta erbjuda ännu snabbare utryckning.`,
  },
  {
    question: `Har ni jour dygnet runt i ${cityName}?`,
    answer: `Ja, vi har VVS-jour öppen 24 timmar om dygnet, 7 dagar i veckan, 365 dagar om året. Oavsett om det är helg, vardag eller mitt i natten – ring oss så hjälper vi dig.`,
  },
  {
    question: `Är era rörmokare i ${cityName} auktoriserade?`,
    answer: `Ja, alla våra rörmokare är fullt auktoriserade och certifierade. Vi säkerställer att alla tekniker i vårt nätverk uppfyller branschens högsta krav på kompetens och kvalitet.`,
  },
  {
    question: `Kan jag använda ROT-avdrag för VVS-arbete i ${cityName}?`,
    answer: `Ja, du kan använda ROT-avdrag för arbetskostnaden på de flesta VVS-arbeten i din bostad. Det innebär att du kan få upp till 50% avdrag på arbetskostnaden (max 50 000 kr per person och år). Vi hjälper dig gärna med ansökan.`,
  },
  {
    question: `Vilka VVS-tjänster erbjuder ni i ${cityName}?`,
    answer: `Vi erbjuder ett komplett utbud av VVS-tjänster: akut vattenläckage, avloppsrensning, installation av blandare och kranar, rörinspektion med kamera, värmesystem-service, vattenskador och badrumsrenovering.`,
  },
];

const CityFAQ = ({ cityName }: CityFAQProps) => {
  const faqData = generateFAQData(cityName);

  return (
    <section className="mt-12 bg-secondary/50 p-6 md:p-8 rounded-lg">
      <h2 className="text-2xl font-bold mb-6">
        Vanliga frågor om rörmokare i {cityName}
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {faqData.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left font-medium">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default CityFAQ;
