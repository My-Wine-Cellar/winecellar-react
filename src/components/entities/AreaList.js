import React from "react";
import {Link} from "react-router-dom";
import EntityList from "./EntityList";
import {useAreaByRegionGet} from "../hooks/entityHooks";

export const AreaList = (props) => {

    const area = useAreaByRegionGet(props)

    const areaList = area.map(area => {
        return (
            <div key={area.id}>
                <Link to={`/d/` + props.match.params.countryKey + "/" +
                props.match.params.regionKey + `/${area.key}`}>{area.name}</Link>
            </div>
        )
    })

    return (
        <EntityList list={areaList} listName='Areas'/>
    );
}
