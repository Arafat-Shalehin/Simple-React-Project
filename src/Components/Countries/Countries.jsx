import { use } from "react";
import Country from "../Country/Country";

const Countries = ({countriesPromise}) => {

    const countriesData = use(countriesPromise);

    const countries = countriesData.countries;

    return(
        <div>
            <h1 className="text-5xl text-center my-10">In the Countries: { countries.length}
                <br />How many have you visited?
            </h1>

            <div className="grid grid-cols-3 gap-10">
                {
                    countries.map(country => 
                    <Country
                        key={country.cca3.cca3}
                        country={country}>
                    </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;