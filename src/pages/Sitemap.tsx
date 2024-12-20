import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { counties } from '../data/cities/counties';

const Sitemap = () => {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Sidkarta"
        description="Hitta snabbt vad du letar efter"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
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
              <h2 className="text-xl font-semibold mb-4">Län och Städer</h2>
              <div className="space-y-6">
                {Object.entries(counties).map(([county, cities]) => (
                  <div key={county}>
                    <h3 className="font-medium mb-2">{county}</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {cities.slice(0, 10).map((city) => (
                        <Link
                          key={city}
                          to={`/${city.toLowerCase()
                            .replace('å', 'a')
                            .replace('ä', 'a')
                            .replace('ö', 'o')
                            .replace(/[^a-z0-9]/g, '')}`}
                          className="text-primary hover:underline text-sm"
                        >
                          {city}
                        </Link>
                      ))}
                      {cities.length > 10 && (
                        <span className="text-sm text-gray-500">
                          +{cities.length - 10} fler städer
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;