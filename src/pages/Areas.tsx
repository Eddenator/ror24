import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import SearchBar from '../components/areas/SearchBar';
import CountyAccordion from '../components/areas/CountyAccordion';
import { counties } from '../data/cities/counties';

const Areas = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCounties = Object.entries(counties).map(([county, cities]) => ({
    county,
    cities: cities.filter(city => 
      city.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(({ cities }) => cities.length > 0);

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Våra Områden"
        description="Vi erbjuder service i över 750 städer"
      />

      <div className="container mx-auto px-4 py-12">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="max-w-3xl mx-auto">
          <CountyAccordion counties={filteredCounties} />
        </div>
      </div>
    </div>
  );
};

export default Areas;