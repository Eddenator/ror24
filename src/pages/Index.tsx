import { ArrowRight, Clock, Shield, Map } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import StickyCTA from '@/components/StickyCTA';

const Index = () => {
  return (
    <div className="min-h-screen">
      <StickyCTA />
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://s3.eu-west-1.amazonaws.com/storage.quickbutik.com/stores/28340q/files/glas.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeIn">
            Din Glasmästare i Sverige
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fadeIn opacity-90">
            Professionell glasservice dygnet runt
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 animate-fadeIn">
            <a href="tel:+46XXXXXXXXX" className="glass-button">
              Ring Nu
            </a>
            <Link to="/omraden" className="glass-button bg-white/10 hover:bg-white/20">
              Hitta din stad
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Varför välja oss?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <Clock className="w-12 h-12 mb-4 text-primary mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-center">24/7 Tillgängliga</h3>
              <p className="text-gray-600 text-center">
                Vi finns här för dig dygnet runt, alla dagar om året
              </p>
            </div>
            <div className="card">
              <Map className="w-12 h-12 mb-4 text-primary mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-center">Rikstäckande</h3>
              <p className="text-gray-600 text-center">
                Vi finns i över 750 städer i Sverige
              </p>
            </div>
            <div className="card">
              <Shield className="w-12 h-12 mb-4 text-primary mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-center">Kvalitetsgaranti</h3>
              <p className="text-gray-600 text-center">
                91% kundnöjdhet med över 55 000 utförda jobb
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Våra Tjänster</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold mb-3">Akut Glasservice</h3>
              <p className="text-gray-600">Snabb hjälp vid akuta situationer</p>
            </div>
            <div className="card hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold mb-3">Fönsterbyte</h3>
              <p className="text-gray-600">Professionell installation av alla typer</p>
            </div>
            <div className="card hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold mb-3">Glasreparation</h3>
              <p className="text-gray-600">Reparation av glas i alla former</p>
            </div>
            <div className="card hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold mb-3">Specialbeställningar</h3>
              <p className="text-gray-600">Skräddarsydda glaslösningar</p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-12">Våra Områden</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="stockholm">
                <AccordionTrigger>Stockholm</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <Link to="/stockholm" className="hover:text-primary">Stockholm City</Link>
                    <Link to="/solna" className="hover:text-primary">Solna</Link>
                    <Link to="/sodertalje" className="hover:text-primary">Södertälje</Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="goteborg">
                <AccordionTrigger>Göteborg</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <Link to="/goteborg" className="hover:text-primary">Göteborg City</Link>
                    <Link to="/molndal" className="hover:text-primary">Mölndal</Link>
                    <Link to="/partille" className="hover:text-primary">Partille</Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="malmo">
                <AccordionTrigger>Malmö</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <Link to="/malmo" className="hover:text-primary">Malmö City</Link>
                    <Link to="/lund" className="hover:text-primary">Lund</Link>
                    <Link to="/helsingborg" className="hover:text-primary">Helsingborg</Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="text-center mt-8">
              <Link 
                to="/omraden" 
                className="inline-flex items-center space-x-2 text-primary hover:underline"
              >
                <span>Se alla områden</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;