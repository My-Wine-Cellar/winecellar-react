import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit} from "@fortawesome/free-solid-svg-icons";
import Api from "./axios/Api";
import EntityCardHeader from "./cards/EntityCardHeader";
import EntityCardList from "./cards/EntityCardList";

const Country = (props) => {
    const [country, setCountry] = useState([]);
    const [region, setRegion] = useState([]);

    useEffect(() => {
        Api.get('/' + props.match.params.countryKey)
            .then(response => {
                setCountry(response.data.mywinecellar.countries)
                setRegion(response.data.mywinecellar.regions)
            }).catch(error => console.log("Error: ", error))
    }, [])

    const cntry = country.map(country => {
        return (
            <>
                <EntityCardHeader key={country.country.id} name={country.country.name}/>
                <Link to={`/country/${country.country.id}/edit`}>
                    <FontAwesomeIcon icon={faEdit}/></Link>
            </>
        )
    })

    const regionList = region.map(regions => {
        return (
            <h5 className="card-header" key={regions.region.id}>
                <Link
                    to={'/d/' + props.match.params.countryKey + `/${regions.region.key}`}>{regions.region.name}</Link>
                <img src="" alt=""/>
            </h5>
        )
    })

    return (
        <div>
            <div className="container">
                <div className="card p-2 shadow">
                    <div className="container justify-content-center">
                        {cntry}
                    </div>
                </div>
            </div>
            <EntityCardList list={regionList} listName='Regions'/>
        </div>
    );
}
export default Country;