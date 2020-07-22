import React, {useEffect, useState} from "react";
import Api from "./axios/Api";
import {Link} from "react-router-dom";
import EntityCardList from "./cards/EntityCardList";

const Countries = () => {

    const [country, setCountry] = useState([]);

    useEffect(() => {
        Api.get('/countries')
            .then(response => {
                setCountry(response.data.mywinecellar.countries)
            }).catch(error => console.log("Error: ", error))
    }, [])

    const countrylist = country.map(country => {
        return (
            <h5 className="card-header" key={country.country.id}>
                <Link to={`/d/${country.country.key}`}>{country.country.name}  </Link>
                <img src={require(`../resources/images/flags/${country.country.flag}.png`)} alt={country.country.name}/>
            </h5>
        )
    });

    return (
        <EntityCardList list={countrylist} listName='Countries'/>
    )
}
export default Countries;