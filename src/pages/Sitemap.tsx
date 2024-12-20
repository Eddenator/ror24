import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

const Sitemap = () => {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Sidkarta"
        description="Hitta snabbt vad du letar efter"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xl font-semibold mb-4">Huvudsidor</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-primary hover:underline">Hem</Link>
                </li>
                <li>
                  <Link to="/omraden" className="text-primary hover:underline">Områden</Link>
                </li>
                <li>
                  <Link to="/kontakt" className="text-primary hover:underline">Kontakt</Link>
                </li>
                <li>
                  <Link to="/om-oss" className="text-primary hover:underline">Om Oss</Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Populära Städer</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/stockholm" className="text-primary hover:underline">Stockholm</Link>
                </li>
                <li>
                  <Link to="/goteborg" className="text-primary hover:underline">Göteborg</Link>
                </li>
                <li>
                  <Link to="/malmo" className="text-primary hover:underline">Malmö</Link>
                </li>
                <li>
                  <Link to="/uppsala" className="text-primary hover:underline">Uppsala</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;