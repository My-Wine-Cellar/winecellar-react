import React from "react";
import {Link} from "react-router-dom";
import EntityList from "./cards/EntityList";
import Typography from "@material-ui/core/Typography";
import {useCountriesGet} from "./hooks/entityHooks";

const Countries = () => {

    const country = useCountriesGet();

    const countrylist = country.map(country => {
        return (
            <Typography variant={"h6"} key={country.country.id}>
                <Link to={`/d/${country.country.key}`}>{country.country.name}</Link>
                <img src={require(`../resources/images/flags/${country.country.flag}.png`)} alt={country.country.name}/>
            </Typography>
        )
    });

    return (
        <>
            <EntityList list={countrylist} listName='Countries'/>
        </>
    )
}
export default Countries;
