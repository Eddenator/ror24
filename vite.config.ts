import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { generateSitemaps } from "./src/utils/sitemapUtils";
import fs from "fs";
import prerender from "@prerenderer/rollup-plugin";

// All cities for prerendering
const cities = [
  "Alingsås", "Borgholm", "Falkenberg", "Falun", "Kalmar", 
  "Karlskoga", "Karlskrona", "Kristianstad", "Landskrona", "Motala", 
  "Nyköping", "Piteå", "Sandviken", "Skellefteå", "Skövde", 
  "Strömstad", "Trelleborg", "Uddevalla", "Vallentuna", "Varberg", 
  "Ängelholm", "Örnsköldsvik", "Borlänge", "Borås", "Eskilstuna", 
  "Gävle", "Halmstad", "Helsingborg", "Jönköping", "Karlstad", 
  "Linköping", "Luleå", "Lund", "Malmö", "Norrköping", 
  "Stockholm", "Sundsvall", "Södertälje", "Umeå", "Uppsala", 
  "Västerås", "Växjö", "Örebro", "Östersund", "Enköping", 
  "Katrineholm", "Vänersborg", "Kungsbacka", "Lidköping", "Torslanda", 
  "Norrtälje", "Västervik", "Karlshamn", "Ystad", "Kungälv", 
  "Värnamo", "Eslöv", "Hässleholm", "Köping", "Oskarshamn", 
  "Kristinehamn", "Härnösand", "Nässjö", "Falköping", "Kumla", 
  "Boden", "Kiruna", "Mariestad", "Hudiksvall", "Avesta", 
  "Staffanstorp", "Ljungby", "Höganäs", "Ludvika", "Nynäshamn", 
  "Tranås", "Strängnäs", "Arvika", "Bollnäs", "Mjölby", 
  "Stenungsund", "Vetlanda", "Lomma", "Sala", "Nybro", 
  "Finspång", "Ronneby", "Mora", "Höör", "Svedala", 
  "Ekerö", "Söderhamn", "Fagersta", "Skara", "Ulricehamn", 
  "Oxelösund", "Arboga", "Bjuv", "Eksjö", "Lerum", 
  "Lidingö", "Upplands Väsby", "Älmhult", "Gällivare", "Åstorp", 
  "Timrå", "Gislaved", "Anderstorp", "Hallstahammar", "Kävlinge", 
  "Lindesberg", "Sigtuna", "Åmål", "Säffle", "Alvesta", 
  "Klippan", "Sölvesborg", "Sollefteå", "Lycksele", "Tibro",
  "Lycke", "Harestad", "Hålta", "Kareby", "Kode", "Kärna", "Marstrand",
  "Romelanda", "Ytterby", "Agnesberg", "Angered", "Askim", "Asperö",
  "Billdal", "Brännö", "Donsö", "Gunnilse", "Hisings Backa", "Hisings Kärra",
  "Hovås", "Köpstadsö", "Olofstorp", "Styrsö", "Säve", "Vrångö",
  "Västra Frölunda", "Bunkeflostrand", "Klagshamn", "Limhamn", "Oxie",
  "Tygelsjö", "Vintrie", "Adelsö", "Arholma", "Arlandastad", "Bagarmossen",
  "Bandhagen", "Bergshamra", "Björkö", "Blidö", "Brandbergen", "Bro",
  "Bromma", "Brottby", "Dalarö", "Danderyd", "Djurhamn", "Djursholm",
  "Drottningholm", "Edsbro", "Enebyberg", "Enhörna", "Enskede Gård",
  "Enskede", "Enskededalen", "Farsta", "Furusund", "Färentuna", "Grinda",
  "Grisslehamn", "Gräddö", "Gränö", "Grödinge", "Gustavsberg", "Gålö",
  "Gällnöby", "Hallstavik", "Handen", "Haninge", "Harö", "Herräng",
  "Huddinge", "Husarö", "Hårsfjärden", "Hägersten", "Hässelby", "Hölö",
  "Ingarö", "Ingmarsö", "Johanneshov", "Jordbro", "Järfälla", "Järna",
  "Kista", "Kungens Kurva", "Kungsängen", "Ljusterö", "Munsö", "Muskö",
  "Märsta", "Märsta Arlanda", "Möja", "Mölnbo", "Mörkö", "Nacka Strand",
  "Nacka", "Norra Sorunda", "Norrby", "Norsborg", "Nykvarn", "Nämdö",
  "Ornö", "Rimbo", "Rosersberg", "Runmarö", "Rånäs", "Rönninge",
  "Saltsjöbaden", "Saltsjö-Boo", "Saltsjö-Duvnäs", "Sandhamn", "Segeltorp",
  "Segersäng", "Skarpnäck", "Skebobruk", "Skogås", "Skå", "Skälvik",
  "Skärholmen", "Sköndal", "Sollenkroka Ö", "Sollentuna", "Solna",
  "Sorunda", "Spånga", "Stavsnäs", "Stavsudda", "Stenhamra",
  "Steningehöjden", "Stocksund", "Stora Vika", "Svartsjö", "Söderby",
  "Tomteboda", "Trångsund", "Tullinge", "Tumba", "Tungelsta", "Tyresö",
  "Täby", "Uttran", "Utö", "Vaxholm", "Vega", "Vendelsö", "Vårby",
  "Väddö", "Vällingby", "Värmdö", "Västerhaninge", "Vätö", "Yxlan",
  "Åkersberga", "Årsta Havsbad", "Årsta", "Älta", "Älvsjö", "Ösmo",
  "Österhaninge", "Österskär", "Alafors", "Alvhem", "Bohus", "Hålanda",
  "Nol", "Nödinge", "Skepplanda", "Surte", "Älvängen", "Sollebrunn",
  "Berghem", "Björketorp", "Fotskäl", "Fritsla", "Hajom", "Horred",
  "Hyssna", "Istorp", "Kinna", "Kinnahult", "Rydal", "Skene", "Skephult",
  "Sätila", "Torestorp", "Tostared", "Älekulla", "Örby", "Öxabäck",
  "Öxnevalla", "Bohus-Björkö", "Fotö", "Grötö", "Hyppeln", "Hälsö",
  "Hönö", "Kalvsund", "Källö-Knippla", "Rörö", "Öckerö", "Fjärås",
  "Frillesås", "Kullavik", "Onsala", "Särö", "Vallda", "Åsa", "Jörlanda",
  "Spekeröd", "Stora Höga", "Svenshögen", "Ucklum", "Ödsmål", "Hindås",
  "Hällingsjö", "Härryda", "Landvetter", "Mölnlycke", "Pixbo", "Rävlanda",
  "Bleket", "Dyrön", "Fagerfjäll", "Hakenäset", "Hjälteby", "Höviksnäs",
  "Klädesholmen", "Klövedal", "Kyrkesund", "Kållekärr", "Myggenäs",
  "Rönnäng", "Skärhamn", "Tjörnarp", "Vallhamn", "Åstol", "Bullaren",
  "Fjällbacka", "Grebbestad", "Hamburgsund", "Havstenssund", "Lur",
  "Rabbalshede", "Resö", "Tanumshede", "Applared", "Borgstena", "Bredared",
  "Brämhult", "Dalsjöfors", "Dannike", "Fristad", "Frufällan", "Gånghester",
  "Hedared", "Kinnarumma", "Målsryd", "Rydboholm", "Sandared", "Sandhult",
  "Seglora", "Sjömarken", "Sparsör", "Svaneholm", "Viskafors", "Äspered",
  "Ellös", "Gullholmen", "Henån", "Hälleviksstrand", "Kärringön",
  "Mollösund", "Nösund", "Stillingsön", "Svanesund", "Varekil", "Jonsered",
  "Partille", "Sävedalen", "Öjersjö", "Ambjörnarp", "Dalstorp", "Grimsås",
  "Limmared", "Ljungsarp", "Länghem", "Månstad", "Nittorp", "Sjötofta",
  "Tranemo", "Uddebo", "Ölsremma", "Bohus-Malmön", "Bovallstrand",
  "Hunnebostrand", "Kungshamn", "Smögen", "Dals Rostock", "Dalskog",
  "Håverud", "Köpmannebro", "Mellerud", "Åsenbruk", "Axvall", "Varnhem",
  "Bengtsfors", "Billingsfors", "Bäckefors", "Gustavsfors", "Skåpafors",
  "Ödskölt", "Bollebygd", "Hultafors", "Olsfors", "Töllsjö", "Blidsberg",
  "Dalum", "Grönahög", "Gällstad", "Hökerum", "Marbäck", "Timmele",
  "Trädet", "Tvärred", "Vegby", "Älmestad", "Brålanda", "Frändefors",
  "Vargön", "Vänersnäs", "Västra Tunhem", "Brastad", "Grundsund",
  "Lysekil", "Dingle", "Hedekas", "Hällevadsholm", "Munkedal", "Ed",
  "Fagersanna", "Fengersfors", "Tösse", "Ånimskog", "Floda", "Gråbo",
  "Sjövik", "Stenkullen", "Tollered", "Forsvik", "Karlsborg", "Mölltorp",
  "Undenäs", "Färgelanda", "Högsäter", "Stigen", "Ödeborg", "Grästorp",
  "Gullspång", "Gårdsjö", "Hova", "Otterbäcken", "Skagersvik", "Göta",
  "Hjärtum", "Lilla Edet", "Lödöse", "Nygård", "Prässebo", "Västerlanda",
  "Götene", "Hällekis", "Källby", "Lundsbrunn", "Hillared", "Holsjunga",
  "Håcksvik", "Kalv", "Mjöbäck", "Mårdaklev", "Sexdrega", "Svenljunga",
  "Östra Frölunda", "Överlida", "Hjo", "Hjorted", "Hjortkvarn", "Järpås",
  "Såtenäs", "Tun", "Vinninga", "Kvänum", "Larv", "Stora Levene",
  "Tråvad", "Vara", "Vedum", "Kållered", "Lindome", "Mölndal", "Lerdala",
  "Tidan", "Timmersdala", "Väring", "Värsås", "Ljungskile", "Lyrestad",
  "Sjötorp", "Torsö", "Moholm", "Töreboda", "Älgarås", "Nordkoster",
  "Skee", "Sydkoster", "Nossebro", "Sjuntorp", "Upphärad", "Tidaholm",
  "Vårgårda", "Abbekås", "Rydsgård", "Skrivarp", "Skurup", "Allerum",
  "Fleninge", "Gantofta", "Hasslarp", "Kattarp", "Mörarp", "Påarp",
  "Ramlösa", "Rydebäck", "Råå", "Ödåkra", "Ödåkra-Väla", "Sälen",
  "Visby", "Göteborg", "Almunge", "Björklinge", "Bälinge", "Järlåsa",
  "Knutby", "Länna", "Skyttorp", "Storvreta", "Vattholma", "Vränge",
  "Alnarp", "Bjärred", "Anderslöv", "Beddingestrand", "Klagstorp",
  "Smygehamn", "Annelöv", "Asmundstorp", "Glumslöv", "Häljarp",
  "Härslöv", "Sankt Ibb", "Saxtorp", "Arild", "Farhult", "Jonstorp",
  "Lerberget", "Mjöhult", "Mölle", "Nyhamnsläge", "Skäret",
  "Strandbaden", "Viken", "Arkelstorp", "Degeberga", "Everöd",
  "Fjälkinge", "Färlöv", "Gärds Köpinge", "Huaröd", "Linderöd",
  "Rinkaby", "Tollarp", "Villands Vånga", "Vittskövle", "Yngsjö",
  "Åhus", "Önnestad", "Östra Sönnarslöv", "Arlöv", "Åkarp",
  "Ballingslöv", "Bjärnum", "Finja", "Hästveda", "Hörja", "Nävlinge",
  "Röke", "Stoby", "Tormestorp", "Tyringe", "Vankiva", "Vinslöv",
  "Vittsjö", "Västra Torup", "Bara", "Klågerup", "Malmö-Sturup",
  "Barsebäck", "Dösjebro", "Furulund", "Löddeköpinge", "Billeberga",
  "Kågeröd", "Röstånga", "Svalöv", "Teckomatorp", "Tågarp",
  "Billesholm", "Ekeby", "Billinge", "Flyinge", "Harlösa", "Löberöd",
  "Marieholm", "Skummeslövsstrand", "Stehag", "Stockamöllan",
  "Blentarp", "Lövestad", "Sjöbo", "Sövde", "Vollsjö", "Äsperöd",
  "Borrby", "Brantevik", "Gärsnäs", "Hammenhög", "Kivik",
  "Sankt Olof", "Simrishamn", "Skillinge", "Tommarp", "Vitaby",
  "Broby", "Glimåkra", "Hanaskog", "Immeln", "Knislinge", "Sibbhult",
  "Bromölla", "Gualöv", "Nymölla", "Näsum", "Brösarp", "Skåne-Tranås",
  "Smedstorp", "Tomelilla", "Båstad", "Förslöv", "Grevie", "Torekov",
  "Västra Karup", "Östra Karup", "Dalby", "Genarp", "Södra Sandby",
  "Torna-Hällestad", "Veberöd", "Eket", "Skånes Fagerhult",
  "Åsljunga", "Örkelljunga", "Falsterbo", "Höllviken", "Skanör",
  "Vellinge", "Glemmingebro", "Köpingebro", "Löderup", "Nybrostrand",
  "Hallaröd", "Hjärnarp", "Munka-Ljungby", "Strövelstorp",
  "Vejbystrand", "Hjärup", "Hyllinge", "Kvidinge", "Nyvång",
  "Hörby", "Ludvigsborg", "Ljungbyhed", "Östra Ljungby", "Perstorp",
  "Brevens Bruk", "Dyltabruk", "Ervalla", "Garphyttan", "Glanshammar",
  "Kilsmo", "Lillkyrka", "Odensbacken", "Stora Mellösa", "Vintrosa",
  "Öland"
];

// Normalize city name to URL slug
const normalizeToSlug = (city: string): string => {
  return city
    .toLowerCase()
    .replace(/å/g, 'a')
    .replace(/ä/g, 'a')
    .replace(/ö/g, 'o')
    .replace(/\s+/g, '-');
};

// Generate all city routes
const cityRoutes = cities.map(city => `/rormokarejour/${normalizeToSlug(city)}`);

// Static routes
const staticRoutes = [
  '/',
  '/om-oss',
  '/kontakt',
  '/omraden',
  '/integritetspolicy'
];

// All routes to prerender
const allRoutes = [...staticRoutes, ...cityRoutes];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    mode === 'production' && prerender({
      routes: allRoutes,
      renderer: '@prerenderer/renderer-puppeteer',
      rendererOptions: {
        maxConcurrentRoutes: 10,
        renderAfterTime: 3000, // Wait 3 seconds for React to render
      },
      postProcess(renderedRoute) {
        // Clean up any localhost references
        renderedRoute.html = renderedRoute.html
          .replace(/http:\/\/localhost:\d+/g, 'https://ror24.se')
          .replace(/http:/g, 'https:');
      },
    }),
    {
      name: 'generate-sitemap',
      enforce: 'post' as const,
      apply: 'build' as const,
      async closeBundle() {
        console.log('Starting sitemap generation...');
        try {
          const { sitemaps, index } = generateSitemaps();
          console.log(`Generated ${sitemaps.length} sitemaps`);
          
          // Ensure dist directory exists
          if (!fs.existsSync('dist')) {
            fs.mkdirSync('dist');
            console.log('Created dist directory');
          }
          
          // Write sitemap index
          fs.writeFileSync('dist/sitemap.xml', index);
          console.log('Written sitemap.xml');
          
          // Write individual sitemaps
          sitemaps.forEach((content, i) => {
            fs.writeFileSync(`dist/sitemap${i + 1}.xml`, content);
            console.log(`Written sitemap${i + 1}.xml`);
          });
          
          // Copy XSL file
          if (fs.existsSync('public/sitemap.xsl')) {
            fs.copyFileSync('public/sitemap.xsl', 'dist/sitemap.xsl');
            console.log('Copied sitemap.xsl');
          }
          
          console.log('Sitemap generation completed successfully');
        } catch (error) {
          console.error('Error generating sitemaps:', error);
          throw error;
        }
      }
    }
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
}));
