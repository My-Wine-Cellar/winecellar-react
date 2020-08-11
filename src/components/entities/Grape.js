import React from "react";
import EntityHeader from "./EntityHeader";
import {useGrapeByKeyGet, useGrapeGet} from "../hooks/entityHooks";

const Grape = (props) => {
    const grape = useGrapeGet(props);
    const data = useGrapeByKeyGet(props);

    const grp = grape.map(grape => {
        return (
            <EntityHeader
                key={grape.grape.id}
                name={grape.grape.name}
                weblink={grape.grape.weblink}
                description={grape.grape.description}
                id={grape.grape.id}
                entity={"grape"}
                data={data}
            />
        )
    })

    return (
        <div className="container">
            <div className="card p-2 shadow">
                <div className="container">
                    <div className="card shadow p-4 m-3">
                        {grp}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Grape;
