import { use, useState } from "react";
import Country from "../Country/Country";

const Countries = ({countriesPromise}) => {

    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountries = (country) => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const countriesData = use(countriesPromise);

    const countries = countriesData.countries;

    return(
        <div className="w-[1250px] mx-auto">
            <h1 className="text-5xl text-center my-10">In the Countries: { countries.length}
                <br />How many have you visited?
            </h1>

            <h3 className="text-3xl font-bold my-10">
                Total Countries visited: {visitedCountries.length}
            </h3>

            <div>
                <ol className="list-decimal list-inside">
                    {
                        visitedCountries.map(country => 
                        <li className="font-semibold text-xl text-left" key={country.cca3.cca3}>{country.name.common}
                        </li>)
                    }
                </ol>
            </div>

            <div className="grid grid-cols-3 gap-10 mt-5">
                {
                    countries.map(country => 
                    <Country
                        key = {country.cca3.cca3}
                        country = {country}
                        handleVisitedCountries = {handleVisitedCountries}>
                    </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;