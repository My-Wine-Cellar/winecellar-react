import React from "react";
import {Link} from "react-router-dom";
import EntityList from "./EntityList";
import {useCountriesGet} from "../hooks/entityHooks";

export const CountryList = () => {

    const country = useCountriesGet();

    const countrylist = country.map(country => {
        return (
            <div key={country.id}>
                <Link to={`/d/${country.key}`}>{country.name}</Link>
                <img src={require(`../../resources/images/flags/${country.flag}.png`)} alt={country.name}/>
            </div>
        )
    });

    return (
        <EntityList list={countrylist} listName='Countries'/>
    )
}
