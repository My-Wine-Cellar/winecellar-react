import React from "react";
import {useGrapeByAreaGet} from "../hooks/entityHooks";
import {Link} from "react-router-dom";
import EntityList from "./EntityList";

export const AreaGrapeList = (props) => {

    const grape = useGrapeByAreaGet(props)

    const grapeList = grape.map(grape => {
        return (
            <div key={grape.id}>
                <Link to={`/grape/${grape.key}`}>{grape.name}</Link>
            </div>
        )
    })

    return (
        <EntityList list={grapeList} listName={'Grapes'}/>
    )
}
