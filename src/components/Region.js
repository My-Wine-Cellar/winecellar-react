import React, {useEffect, useState} from "react";
import Api from "./axios/Api";
import {Link} from "react-router-dom";
import EntityCardHeader from "./cards/EntityCardHeader";
import EntityCardList from "./cards/EntityCardList";

const Region = (props) => {
    const [region, setRegion] = useState([]);
    const [area, setArea] = useState([]);

    useEffect(() => {
        Api.get('/' + props.match.params.countryKey + '/' + props.match.params.regionKey)
            .then(response => {
                setRegion(response.data.mywinecellar.regions)
                setArea(response.data.mywinecellar.areas)
            }).catch(error => console.log("Error: ", error))
    }, [])

    const rgn = region.map(region => {
        return (
            <EntityCardHeader key={region.region.id} name={region.region.name}/>
        )
    })

    const areaList = area.map(areas => {
        return (
            <h5 className="card-header" key={areas.area.id}>
                <Link to={`/d/` + props.match.params.countryKey + "/" +
                props.match.params.regionKey + `/${areas.area.key}`}>{areas.area.name}</Link>
            </h5>
        )
    })

    return (
        <div>
            <div>
                <div className="container">
                    <div className="card p-2 shadow">
                        <div className="container justify-content-center">
                            {rgn}
                        </div>
                    </div>
                </div>
                <EntityCardList list={areaList} listName='Areas'/>
            </div>
        </div>
    );
}

export default Region;