import React from 'react';

const Country = ({country}) => {

    console.log(country);

    console.log(country.name.common);

    return (
        <div className='w-100 border-2 border-orange-400 rounded-xl mx-auto text-center'>

            <img className='mt-7 mx-auto' src={country.flags.flags.png} alt={country.flags.flags.alt} />

            <h3 className='mt-3 font-bold text-2xl'>Name: {country.name.common}</h3>

            <p className='font-semibold'>Population: {country.population.population}</p>

            <p className='font-medium'>Continent: {country.continents.continents}</p>

        </div>

    );
};

export default Country;