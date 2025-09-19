import React, { useState } from 'react';
import "./Country.css"

const Country = ({country, handleVisitedCountries}) => {

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
        
        if (!visited) {
            handleVisitedCountries(country);
        }
    }

    return (
        <div className=
        {`w-100 border-2 border-amber-500 rounded-xl mx-auto text-center 
        ${visited && 'country-visited'}`}>

            <img className='mt-7 mx-auto max-h-[160px]' src={country.flags.flags.png} alt={country.flags.flags.alt} />

            <h3 className='mt-3 font-bold text-2xl'>Name: {country.name.common}</h3>

            <p className='font-semibold'>Population: {country.population.population}</p>

            <p className='font-medium'>Continent: {country.continents.continents}</p>

            <button onClick={handleVisited} className='btn px-8 py-4 rounded-xl text-2xl font-bold 
            bg-green-600 mb-5 mt-5'>
                {visited ? "Visited" : "Not Visited"}
            </button>

        </div>

    );
};

export default Country;