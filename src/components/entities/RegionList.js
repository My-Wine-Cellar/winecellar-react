import React from "react";
import {Link} from "react-router-dom";
import EntityList from "./EntityList";
import {useRegionByCountryGet} from "../hooks/entityHooks";

export const RegionList = (props) => {

    const region = useRegionByCountryGet(props)

    let listNameOverride;

    if (props.match.params.countryKey === "united_states") {
        listNameOverride = 'States';
    } else {
        listNameOverride = 'Regions';
    }

    const regionList = region.map(region => {
        return (
            <div key={region.id}>
                <Link
                    to={'/d/' + props.match.params.countryKey + `/${region.key}`}>{region.name}</Link>
            </div>
        )
    })

    return (
        <EntityList list={regionList} listName={listNameOverride}/>
    );
}
