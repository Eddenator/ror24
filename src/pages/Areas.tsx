import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { Search } from 'lucide-react';

// This would typically come from an API or database
const cities = [
  'Stockholm', 'Göteborg', 'Malmö', 'Uppsala', 'Västerås',
  // ... Add more cities
];

const Areas = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCities = useMemo(() => {
    return cities.filter(city =>
      city.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Våra Områden"
        description="Vi erbjuder service i över 750 städer"
      />

      <div className="page-container">
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Sök din stad..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-12 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredCities.map((city) => (
            <Link
              key={city}
              to={`/omraden/${city.toLowerCase()}`}
              className="card hover:bg-secondary transition-colors duration-300"
            >
              <h3 className="font-semibold">{city}</h3>
              <p className="text-sm text-gray-600">Snabb utryckning</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Areas;