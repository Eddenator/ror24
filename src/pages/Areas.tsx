import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import SearchBar from '../components/areas/SearchBar';
import CountyAccordion from '../components/areas/CountyAccordion';
import { counties } from '../data/cities/counties';
import DocumentHead from '@/components/DocumentHead';

const Areas = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Convert counties object to array format expected by CountyAccordion
  const countiesArray = Object.entries(counties).map(([county, cities]) => ({
    county,
    cities: cities.filter(city => 
      city.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(({ cities }) => cities.length > 0);

  // Calculate total number of cities
  const totalCities = Object.values(counties).flat().length;

  console.log('Total cities:', totalCities);
  Object.entries(counties).forEach(([county, cities]) => {
    console.log(`${county}: ${cities.length} städer`);
  });

  return (
    <div className="min-h-screen">
      <DocumentHead 
        title="Våra områden | Glasmästare i hela Sverige"
        description="Hitta din lokala glasmästare. Vi erbjuder professionell glasservice i över 750 städer i Sverige med jour dygnet runt."
      />
      <PageHeader
        title="Våra Områden"
        description={`Vi erbjuder service i ${totalCities} städer`}
      />

      <div className="container mx-auto px-4 py-12">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="max-w-3xl mx-auto">
          <CountyAccordion counties={countiesArray} />
        </div>
      </div>
    </div>
  );
};

export default Areas;
