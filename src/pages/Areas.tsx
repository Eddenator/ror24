import { useState } from 'react';
import DocumentHead from '@/components/DocumentHead';
import PageHeader from '@/components/PageHeader';
import SearchBar from '@/components/areas/SearchBar';
import CountyAccordion from '@/components/areas/CountyAccordion';
import { counties } from '@/data/cities/counties';

const Areas = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Convert counties object to array format expected by CountyAccordion
  const countiesArray = Object.entries(counties).map(([county, cities]) => ({
    county,
    cities: cities.filter(city =>
      city.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  return (
    <div className="min-h-screen">
      <DocumentHead 
        title="Rörmokare i hela Sverige | VVS Service i 750+ städer | Rör24"
        description="Hitta en auktoriserad rörmokare nära dig. Vi erbjuder akut VVS-service i över 750 städer i Sverige. Jour dygnet runt med snabb utryckning."
      />
      <PageHeader
        title="Våra Tjänster i Sverige"
        description="Vi erbjuder VVS-tjänster i hela Sverige, dygnet runt."
      />

      <div className="container mx-auto px-4 py-12">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <CountyAccordion counties={countiesArray} />
      </div>
    </div>
  );
};

export default Areas;