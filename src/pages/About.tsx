import PageHeader from '../components/PageHeader';
import { CheckCircle, Users, Clock, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Om Glas24.se"
        description="Sveriges ledande glasmästare med service dygnet runt"
      />

      <div className="page-container">
        <div className="max-w-3xl mx-auto mb-20">
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Glas24.se är Sveriges mest tillgängliga glasmästarservice. Vi har byggt upp ett 
            omfattande nätverk av erfarna glasmästare över hela landet för att kunna erbjuda 
            snabb och professionell service när du behöver det som mest.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Med över X års erfarenhet i branschen har vi hjälpt tusentals kunder med allt 
            från akuta glasreparationer till planerade glasprojekt. Vår styrka ligger i vår 
            tillgänglighet och vårt engagemang för kvalitet i varje uppdrag.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="card">
            <h3 className="text-2xl font-semibold mb-4">Vår Vision</h3>
            <p className="text-gray-600">
              Att vara Sveriges mest pålitliga och tillgängliga glasmästarservice, 
              där kvalitet och kundnöjdhet står i centrum för allt vi gör.
            </p>
          </div>
          <div className="card">
            <h3 className="text-2xl font-semibold mb-4">Vårt Löfte</h3>
            <p className="text-gray-600">
              Vi lovar att alltid finnas tillgängliga när du behöver oss, med snabb 
              responstid och professionellt utförande av alla uppdrag.
            </p>
          </div>
        </div>

        <div className="bg-secondary rounded-lg p-8 mb-20">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Våra Kärnvärden
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Clock,
                title: "Tillgänglighet",
                description: "Öppet dygnet runt, alla dagar"
              },
              {
                icon: CheckCircle,
                title: "Kvalitet",
                description: "Högsta standard på material och arbete"
              },
              {
                icon: Users,
                title: "Kompetens",
                description: "Erfarna och certifierade glasmästare"
              },
              {
                icon: Award,
                title: "Garanti",
                description: "Trygghetsgaranti på alla arbeten"
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <value.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h4 className="font-semibold mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;